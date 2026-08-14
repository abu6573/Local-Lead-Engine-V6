import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectFilters, projects } from '@/lib/site-data';
import { Btn, Eyebrow } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';

const INITIAL = 3;

const Projects: React.FC = () => {
  const [active, setActive] = useState<string>('Show All');
  const [visible, setVisible] = useState(INITIAL);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });

  useLayoutEffect(() => {
    const container = tabsRef.current;
    if (!container) return;

    const move = () => {
      const el = container.querySelector<HTMLButtonElement>(`[data-tab="${active}"]`);
      if (!el) return;
      setPill({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
    };

    move();
    window.addEventListener('resize', move);
    return () => window.removeEventListener('resize', move);
  }, [active]);

  const filtered =
    active === 'Show All'
      ? projects
      : projects.filter(
          (p) =>
            p.category === active ||
            p.tags.includes(active) ||
            (active === 'Pool & Outdoor' && p.category === 'Pool & Outdoor') ||
            (active === 'Foundation & Crawl' && p.category === 'Foundation & Crawl')
        );

  const shown = filtered.slice(0, visible);
  const hasMore = filtered.length > shown.length;

  const pick = (tab: string) => {
    setActive(tab);
    setVisible(INITIAL);
  };

  return (
    <section id="projects" className="bg-cream-deep py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <div className="mx-auto max-w-[36rem] text-center">
          <Reveal y={18}>
            <Eyebrow icon="FolderOpen">Case Studies</Eyebrow>
          </Reveal>
          <MaskHeading lines={['Contractor Growth', 'Case Studies']} className="mt-5 h-section" />
        </div>

        {/* ---- filter tabs ---- */}
        <Reveal delay={120} y={20} className="mt-10 flex justify-center">
          <div
            ref={tabsRef}
            className="no-scrollbar relative flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-black/[0.06] bg-white p-1.5 shadow-soft"
            role="tablist"
            aria-label="Filter projects by category"
          >
            <span
              className="absolute top-1.5 h-[calc(100%-0.75rem)] rounded-full bg-brand transition-all duration-500 ease-smooth"
              style={{
                left: pill.left,
                width: pill.width,
                opacity: pill.ready ? 1 : 0,
              }}
              aria-hidden="true"
            />
            {projectFilters.map((tab) => (
              <button
                key={tab}
                data-tab={tab}
                type="button"
                role="tab"
                aria-selected={active === tab}
                onClick={() => pick(tab)}
                className={`relative z-10 whitespace-nowrap rounded-full px-4 py-2.5 text-[0.875rem] font-semibold transition-colors duration-300 sm:px-5 ${
                  active === tab ? 'text-white' : 'text-warm hover:text-ink'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        {/* ---- grid ---- */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Link
              key={p.id}
              to={`/case-studies#${p.id}`}
              className="group block"
              style={{
                animation: `fade-in 0.55s cubic-bezier(0.22,1,0.36,1) both`,
                animationDelay: `${i * 80}ms`,
              }}
            >
              <article className="h-full overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-soft transition-all duration-500 ease-smooth group-hover:-translate-y-2 group-hover:shadow-lift">
                <div className="relative overflow-hidden rounded-[1.35rem]">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1100}
                    height={737}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  {p.location && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[0.7rem] font-bold text-white shadow-soft">
                      <span>{p.location}</span>
                    </span>
                  )}
                  <span className="absolute right-3 top-3 inline-flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-brand opacity-0 shadow-soft transition-all duration-500 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </div>

                <div className="px-3 pb-4 pt-5">
                  <p className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-brand">
                    {p.category}
                  </p>
                  <h3 className="mt-2 h-card transition-colors duration-300 group-hover:text-brand">
                    {p.title}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1.5 border-t border-black/[0.06] pt-4">
                    <span className="text-lg font-extrabold text-ink">{p.metric}</span>
                    <span className="text-[0.8125rem] text-warm-light">{p.metricLabel}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-14 text-center text-warm">
            No projects in this category yet — try another filter.
          </p>
        )}

        <div className="mt-12 flex justify-center">
          {hasMore ? (
            <Btn onClick={() => setVisible((v) => v + 3)} size="lg" arrow={false}>
              Load More
            </Btn>
          ) : (
            <Btn to="/case-studies" size="lg">
              View All Case Studies
            </Btn>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
