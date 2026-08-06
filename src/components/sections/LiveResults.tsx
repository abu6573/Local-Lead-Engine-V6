import React, { useCallback, useRef, useState } from 'react';
import { resultsTabs } from '@/lib/site-data';
import { Btn, Eyebrow, Icon } from '@/components/kit';
import { MaskHeading, Reveal, useInView } from '@/components/motion';
import { AnimatedBarChart, AnimatedLineChart } from '@/components/charts/AnimatedChart';

const track = (name: string, props: Record<string, unknown>) => {
  const w = window as unknown as {
    supercool?: { track?: (n: string, p?: Record<string, unknown>) => void };
  };
  try {
    w.supercool?.track?.(name, props);
  } catch {
    /* analytics must never break the page */
  }
};

const LiveResults: React.FC = () => {
  const [activeId, setActiveId] = useState(resultsTabs[0].id);
  /** Bumped on every tab change so the chart remounts and re-draws itself. */
  const [run, setRun] = useState(0);
  const { ref: panelRef, inView } = useInView<HTMLDivElement>(0.22);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = resultsTabs.findIndex((t) => t.id === activeId);
  const tab = resultsTabs[activeIndex] ?? resultsTabs[0];

  const select = useCallback((id: string, label: string) => {
    setActiveId(id);
    setRun((n) => n + 1);
    track('results_tab_view', { tab: id, label });
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (activeIndex + dir + resultsTabs.length) % resultsTabs.length;
    select(resultsTabs[next].id, resultsTabs[next].label);
    tabRefs.current[next]?.focus();
  };

  const Chart = tab.kind === 'bar' ? AnimatedBarChart : AnimatedLineChart;

  return (
    <section id="live-results" className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="shell">
        {/* ---- heading ---- */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal y={18}>
            <Eyebrow icon="Activity">Live Results</Eyebrow>
          </Reveal>

          <MaskHeading
            lines={['The numbers behind', 'contractor campaigns']}
            className="mt-5 h-section"
          />

          <Reveal delay={140} y={22}>
            <p className="mt-5 body-lg">
              A rolling, anonymized view of our contractor portfolio — tracking booked calls, cost-per-lead, and return on ad spend (ROAS).
            </p>
          </Reveal>
        </div>

        {/* ---- tabs ---- */}
        <Reveal delay={180} y={20} className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Live results views"
            className="no-scrollbar flex max-w-full gap-1.5 overflow-x-auto rounded-full border border-black/[0.06] bg-white p-1.5 shadow-soft"
          >
            {resultsTabs.map((t, i) => {
              const on = t.id === activeId;
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`results-tab-${t.id}`}
                  aria-selected={on}
                  aria-controls={`results-panel-${t.id}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => select(t.id, t.label)}
                  onKeyDown={onKeyDown}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-[0.875rem] font-semibold transition-all duration-300 ease-smooth sm:px-5 ${
                    on
                      ? 'bg-brand text-white shadow-chip'
                      : 'text-warm hover:bg-cream-deep hover:text-ink'
                  }`}
                >
                  <Icon name={t.icon} className="h-4 w-4" strokeWidth={2.1} />
                  <span className="whitespace-nowrap">{t.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ---- panel ---- */}
        <Reveal
          delay={220}
          y={30}
          className="mt-8 overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white shadow-card"
        >
          <div
            ref={panelRef}
            role="tabpanel"
            id={`results-panel-${tab.id}`}
            aria-labelledby={`results-tab-${tab.id}`}
            className="grid gap-0 lg:grid-cols-[19.5rem_1fr]"
          >
            {/* summary rail */}
            <div className="border-b border-black/[0.06] bg-cream-deep/60 p-7 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
                </span>
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-warm-light">
                  Portfolio average
                </p>
              </div>

              <p
                key={`headline-${tab.id}`}
                className="mt-5 animate-fade-in text-[3rem] font-extrabold leading-none tracking-tight text-ink"
              >
                {tab.headline}
              </p>
              <p className="mt-3 text-[0.9375rem] font-semibold text-ink">{tab.headlineLabel}</p>

              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-chip px-3 py-1.5 text-[0.8125rem] font-bold text-brand">
                <Icon name="ArrowUpRight" className="h-3.5 w-3.5" strokeWidth={2.4} />
                {tab.delta}
              </p>

              <p className="mt-5 text-[0.9375rem] leading-relaxed text-warm">{tab.note}</p>

              <dl className="mt-7 space-y-4 border-t border-black/[0.07] pt-6">
                {tab.kpis.map((k, i) => (
                  <div
                    key={k.label}
                    className="animate-slide-in"
                    style={{ animationDelay: `${120 + i * 90}ms` }}
                  >
                    <dt className="text-[0.8125rem] font-medium text-warm-light">{k.label}</dt>
                    <dd className="mt-0.5 flex flex-wrap items-baseline gap-x-2">
                      <span className="text-[1.375rem] font-extrabold tracking-tight text-ink">
                        {k.value}
                      </span>
                      <span className="text-[0.75rem] text-warm-light">{k.hint}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* chart */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-[1.0625rem] font-bold text-ink">{tab.title}</h3>
                  <p className="mt-1 text-[0.8125rem] text-warm-light">
                    {tab.kind === 'bar'
                      ? 'Hover a quarter for the exact keyword counts.'
                      : 'Hover the plot for month-by-month detail.'}
                  </p>
                </div>
                <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  {tab.series.map((s) => (
                    <li key={s.name} className="flex items-center gap-2 text-[0.8125rem] font-semibold text-warm">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          background: s.color,
                          opacity: s.dashed ? 0.55 : 1,
                        }}
                      />
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Chart
                  key={`${tab.id}-${run}`}
                  labels={tab.labels}
                  series={tab.series}
                  format={tab.format}
                  active={inView}
                  caption={tab.title}
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.07] pt-5">
                <p className="flex items-center gap-2 text-[0.8125rem] text-warm-light">
                  <Icon name="ShieldCheck" className="h-4 w-4 text-brand" strokeWidth={2} />
                  Aggregated from active contractor campaigns, updated at each monthly review.
                </p>
                <Btn to="/case-studies" variant="outline" size="sm">
                  See the case studies
                </Btn>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LiveResults;
