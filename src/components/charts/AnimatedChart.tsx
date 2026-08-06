import React, { useEffect, useMemo, useRef, useState } from 'react';
import { prefersReducedMotion } from '@/components/motion';

/* ------------------------------------------------------------------ */
/* Shared helpers                                                      */
/* ------------------------------------------------------------------ */

export type ChartFormat = 'k' | 'pct' | 'int' | 'decimal';

export type ChartSeries = {
  name: string;
  color: string;
  values: number[];
  dashed?: boolean;
};

export const formatChartValue = (v: number, format: ChartFormat = 'int') => {
  switch (format) {
    case 'k':
      return `${v >= 100 ? Math.round(v) : v.toFixed(1)}k`;
    case 'pct':
      return `${v.toFixed(1)}%`;
    case 'decimal':
      return v.toFixed(1);
    default:
      return Math.round(v).toLocaleString('en-US');
  }
};

/** Axis labels: trim trailing zeros so ticks read "20k" / "2.5%" not "20.0k". */
const trim = (v: number) => v.toFixed(2).replace(/\.?0+$/, '') || '0';

export const formatTick = (v: number, format: ChartFormat = 'int') => {
  if (format === 'k') return `${trim(v)}k`;
  if (format === 'pct') return `${trim(v)}%`;
  if (format === 'decimal') return trim(v);
  return Math.round(v).toLocaleString('en-US');
};

/** Keeps a tooltip from being clipped at the edges of the plot. */
const clampPct = (pct: number) => Math.min(86, Math.max(14, pct));


const niceMax = (max: number) => {
  const raw = max * 1.08;
  if (raw <= 0) return 1;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const steps = [1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
  for (const s of steps) if (raw <= s * mag) return s * mag;
  return 10 * mag;
};

const r2 = (n: number) => Math.round(n * 100) / 100;

/** Plays once `active` flips true; replays on remount (key change). */
const usePlay = (active: boolean) => {
  const [play, setPlay] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = prefersReducedMotion();
  }, []);

  useEffect(() => {
    if (!active || play) return;
    if (reduced.current) {
      setPlay(true);
      return;
    }
    const raf = requestAnimationFrame(() => setPlay(true));
    return () => cancelAnimationFrame(raf);
  }, [active, play]);

  return { play, reduced: reduced.current } as const;
};

const Tooltip = ({
  left,
  top,
  label,
  rows,
}: {
  left: number;
  top: number;
  label: string;
  rows: { name: string; color: string; text: string }[];
}) => (
  <div
    className="pointer-events-none absolute z-20 w-max -translate-x-1/2 -translate-y-full rounded-xl border border-black/[0.06] bg-white px-3 py-2 shadow-lift transition-[left,top] duration-150 ease-out"
    style={{ left: `${left}%`, top: `calc(${top}% - 14px)` }}
  >
    <p className="text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-warm-light">{label}</p>
    {rows.map((row) => (
      <p key={row.name} className="mt-1 flex items-center gap-2 whitespace-nowrap text-[0.8125rem] font-semibold text-ink">
        <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: row.color }} />
        {row.name}
        <span className="ml-auto pl-3 font-extrabold">{row.text}</span>
      </p>
    ))}
  </div>
);

const SrTable = ({
  caption,
  labels,
  series,
  format,
}: {
  caption: string;
  labels: string[];
  series: ChartSeries[];
  format: ChartFormat;
}) => (
  <table className="sr-only">
    <caption>{caption}</caption>
    <thead>
      <tr>
        <th scope="col">Period</th>
        {series.map((s) => (
          <th key={s.name} scope="col">
            {s.name}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {labels.map((l, i) => (
        <tr key={l}>
          <th scope="row">{l}</th>
          {series.map((s) => (
            <td key={s.name}>{formatChartValue(s.values[i], format)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

/* ------------------------------------------------------------------ */
/* Line chart — strokes draw themselves in                             */
/* ------------------------------------------------------------------ */

const W = 760;
const H = 300;

export const AnimatedLineChart = ({
  labels,
  series,
  format = 'int',
  active,
  caption,
}: {
  labels: string[];
  series: ChartSeries[];
  format?: ChartFormat;
  active: boolean;
  caption: string;
}) => {
  const { play, reduced } = usePlay(active);
  const [hover, setHover] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const pad = { l: 46, r: 18, t: 20, b: 36 };
  const innerW = W - pad.l - pad.r;
  const innerH = H - pad.t - pad.b;

  const { max, ticks, geometry, step } = useMemo(() => {
    const dataMax = Math.max(...series.flatMap((s) => s.values));
    const top = niceMax(dataMax);
    const stepX = labels.length > 1 ? innerW / (labels.length - 1) : 0;
    const x = (i: number) => pad.l + i * stepX;
    const y = (v: number) => pad.t + innerH - (v / top) * innerH;

    const geo = series.map((s) => {
      const pts = s.values.map((v, i) => ({ x: r2(x(i)), y: r2(y(v)) }));
      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i - 1] ?? pts[i];
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const p3 = pts[i + 2] ?? p2;
        const t = 0.16;
        d += ` C ${r2(p1.x + (p2.x - p0.x) * t)} ${r2(p1.y + (p2.y - p0.y) * t)}, ${r2(
          p2.x - (p3.x - p1.x) * t,
        )} ${r2(p2.y - (p3.y - p1.y) * t)}, ${p2.x} ${p2.y}`;
      }
      const area = `${d} L ${pts[pts.length - 1].x} ${pad.t + innerH} L ${pts[0].x} ${pad.t + innerH} Z`;
      return { ...s, pts, d, area };
    });

    return {
      max: top,
      ticks: [0, 0.25, 0.5, 0.75, 1].map((f) => ({ v: top * f, y: r2(y(top * f)) })),
      geometry: geo,
      step: stepX,
    };
  }, [labels, series, innerH, innerW, pad.l, pad.t]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const box = wrapRef.current?.getBoundingClientRect();
    if (!box || step === 0) return;
    const localX = ((e.clientX - box.left) / box.width) * W;
    const idx = Math.round((localX - pad.l) / step);
    setHover(Math.min(labels.length - 1, Math.max(0, idx)));
  };

  const hoverX = hover === null ? 0 : geometry[0].pts[hover].x;
  const hoverY = hover === null ? 0 : Math.min(...geometry.map((g) => g.pts[hover!].y));

  return (
    <div
      ref={wrapRef}
      className="relative touch-pan-y select-none"
      onPointerMove={onMove}
      onPointerLeave={() => setHover(null)}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block w-full overflow-visible"
        role="img"
        aria-label={caption}
      >
        <defs>
          <linearGradient id="lr-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={series[0].color} stopOpacity="0.26" />
            <stop offset="100%" stopColor={series[0].color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* grid + y labels */}
        {ticks.map((t, i) => (
          <g key={t.v}>
            <line
              x1={pad.l}
              x2={W - pad.r}
              y1={t.y}
              y2={t.y}
              stroke="#181310"
              strokeOpacity={i === 0 ? 0.16 : 0.07}
              strokeWidth="1"
              strokeDasharray={i === 0 ? undefined : '4 6'}
            />
            <text
              x={pad.l - 12}
              y={t.y + 4}
              textAnchor="end"
              className="fill-[#8A847C] font-sans text-[11px] font-semibold"
            >
              {formatTick(t.v, format)}

            </text>
          </g>
        ))}

        {/* x labels */}
        {labels.map((l, i) => (
          <text
            key={l}
            x={r2(pad.l + i * step)}
            y={H - 10}
            textAnchor="middle"
            className={`font-sans text-[11px] font-semibold transition-colors duration-200 ${
              hover === i ? 'fill-[#181310]' : 'fill-[#8A847C]'
            }`}
          >
            {l}
          </text>
        ))}

        {/* hover crosshair */}
        {hover !== null && (
          <line
            x1={hoverX}
            x2={hoverX}
            y1={pad.t}
            y2={pad.t + innerH}
            stroke="#181310"
            strokeOpacity="0.18"
            strokeWidth="1.5"
            strokeDasharray="3 4"
          />
        )}

        {/* area under the primary series */}
        <path
          d={geometry[0].area}
          fill="url(#lr-area)"
          style={{
            opacity: play ? 1 : 0,
            transition: reduced ? 'none' : 'opacity 900ms ease-out 620ms',
          }}
        />

        {/* lines */}
        {geometry.map((g, si) => (
          <path
            key={g.name}
            d={g.d}
            fill="none"
            stroke={g.color}
            strokeWidth={si === 0 ? 3.2 : 2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={si === 0 ? 1 : 0.55}
            pathLength={1}
            strokeDasharray={g.dashed ? '0.012 0.014' : 1}
            style={{
              strokeDashoffset: play || g.dashed ? 0 : 1,
              opacity: g.dashed ? (play ? 1 : 0) : 1,
              transition: reduced
                ? 'none'
                : `stroke-dashoffset 1700ms cubic-bezier(0.22,1,0.36,1) ${si * 220}ms, opacity 800ms ease-out ${
                    400 + si * 220
                  }ms`,
            }}
          />
        ))}

        {/* points */}
        {geometry.map((g, si) =>
          g.pts.map((p, i) => (
            <circle
              key={`${g.name}-${i}`}
              cx={p.x}
              cy={p.y}
              r={hover === i ? 6 : si === 0 ? 4 : 3}
              fill="#fff"
              stroke={g.color}
              strokeWidth={si === 0 ? 3 : 2}
              style={{
                transformBox: 'fill-box',
                transformOrigin: 'center',
                transform: play ? 'scale(1)' : 'scale(0)',
                opacity: si === 0 || hover === i ? 1 : 0.5,
                transition: reduced
                  ? 'none'
                  : `transform 520ms cubic-bezier(0.34,1.56,0.64,1) ${520 + i * 62}ms, r 180ms ease-out, opacity 200ms ease-out`,
              }}
            />
          )),
        )}
      </svg>

      {hover !== null && (
        <Tooltip
          left={clampPct((hoverX / W) * 100)}

          top={(hoverY / H) * 100}
          label={labels[hover]}
          rows={geometry.map((g) => ({
            name: g.name,
            color: g.color,
            text: formatChartValue(g.values[hover!], format),
          }))}
        />
      )}

      <SrTable caption={caption} labels={labels} series={series} format={format} />
      <span className="sr-only">{`Peak value ${formatChartValue(max, format)}.`}</span>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Bar chart — columns grow up from the baseline                       */
/* ------------------------------------------------------------------ */

export const AnimatedBarChart = ({
  labels,
  series,
  format = 'int',
  active,
  caption,
}: {
  labels: string[];
  series: ChartSeries[];
  format?: ChartFormat;
  active: boolean;
  caption: string;
}) => {
  const { play, reduced } = usePlay(active);
  const [hover, setHover] = useState<number | null>(null);

  const pad = { l: 46, r: 18, t: 20, b: 36 };
  const innerW = W - pad.l - pad.r;
  const innerH = H - pad.t - pad.b;
  const baseline = pad.t + innerH;

  const groupW = innerW / labels.length;
  const gap = 6;
  const barW = Math.min(22, (groupW - gap * (series.length + 1)) / series.length);

  const { top, ticks } = useMemo(() => {
    const dataMax = Math.max(...series.flatMap((s) => s.values));
    const t = niceMax(dataMax);
    return {
      top: t,
      ticks: [0, 0.25, 0.5, 0.75, 1].map((f) => ({
        v: t * f,
        y: r2(baseline - f * innerH),
      })),
    };
  }, [series, baseline, innerH]);

  const groupCenter = (i: number) => pad.l + groupW * i + groupW / 2;

  return (
    <div className="relative select-none">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block w-full overflow-visible"
        role="img"
        aria-label={caption}
      >
        {ticks.map((t, i) => (
          <g key={t.v}>
            <line
              x1={pad.l}
              x2={W - pad.r}
              y1={t.y}
              y2={t.y}
              stroke="#181310"
              strokeOpacity={i === 0 ? 0.16 : 0.07}
              strokeWidth="1"
              strokeDasharray={i === 0 ? undefined : '4 6'}
            />
            <text
              x={pad.l - 12}
              y={t.y + 4}
              textAnchor="end"
              className="fill-[#8A847C] font-sans text-[11px] font-semibold"
            >
              {formatTick(t.v, format)}

            </text>
          </g>
        ))}

        {labels.map((l, gi) => {
          const totalW = series.length * barW + (series.length - 1) * gap;
          const startX = groupCenter(gi) - totalW / 2;

          return (
            <g
              key={l}
              onPointerEnter={() => setHover(gi)}
              onPointerLeave={() => setHover(null)}
            >
              <rect
                x={r2(groupCenter(gi) - groupW / 2)}
                y={pad.t}
                width={r2(groupW)}
                height={innerH}
                rx="10"
                fill="#181310"
                fillOpacity={hover === gi ? 0.035 : 0}
                className="transition-[fill-opacity] duration-200"
              />
              {series.map((s, si) => {
                const h = Math.max(2, (s.values[gi] / top) * innerH);
                return (
                  <rect
                    key={s.name}
                    x={r2(startX + si * (barW + gap))}
                    y={r2(baseline - h)}
                    width={r2(barW)}
                    height={r2(h)}
                    rx={Math.min(6, barW / 2)}
                    fill={s.color}
                    fillOpacity={hover === null || hover === gi ? 1 : 0.35}
                    style={{
                      transformBox: 'fill-box',
                      transformOrigin: 'bottom',
                      transform: play ? 'scaleY(1)' : 'scaleY(0)',
                      transition: reduced
                        ? 'none'
                        : `transform 900ms cubic-bezier(0.22,1,0.36,1) ${gi * 90 + si * 120}ms, fill-opacity 200ms ease-out`,
                    }}
                  />
                );
              })}
              <text
                x={r2(groupCenter(gi))}
                y={H - 10}
                textAnchor="middle"
                className={`font-sans text-[11px] font-semibold transition-colors duration-200 ${
                  hover === gi ? 'fill-[#181310]' : 'fill-[#8A847C]'
                }`}
              >
                {l}
              </text>
            </g>
          );
        })}
      </svg>

      {hover !== null && (
        <Tooltip
          left={clampPct((groupCenter(hover) / W) * 100)}

          top={
            ((baseline - (Math.max(...series.map((s) => s.values[hover!])) / top) * innerH) / H) * 100
          }
          label={labels[hover]}
          rows={series.map((s) => ({
            name: s.name,
            color: s.color,
            text: formatChartValue(s.values[hover!], format),
          }))}
        />
      )}

      <SrTable caption={caption} labels={labels} series={series} format={format} />
    </div>
  );
};
