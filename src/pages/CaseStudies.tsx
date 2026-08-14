import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import Testimonials from '@/components/sections/Testimonials';
import CtaBanner from '@/components/sections/CtaBanner';
import StatsRow from '@/components/sections/StatsRow';
import RoiCalculator from '@/components/sections/RoiCalculator';
import { Btn, Eyebrow, Icon } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';
import { projectFilters, projects, Project } from '@/lib/site-data';

const CaseStudies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Show All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'Show All'
      ? projects
      : projects.filter(
          (p) =>
            p.category === activeCategory ||
            p.tags.includes(activeCategory) ||
            (activeCategory === 'Pool & Outdoor' && p.category === 'Pool & Outdoor') ||
            (activeCategory === 'Foundation & Crawl' && p.category === 'Foundation & Crawl')
        );

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <PageHero
          crumb="Case Studies"
          eyebrow="Verified Growth Results"
          eyebrowIcon="FolderOpen"
          titleLines={['Contractor Growth', 'Case Studies']}
          intro="Explore real performance data from HVAC, Roofing, Home Remodeling, Pool, Foundation, Solar, and Window contractors scaling exclusive phone calls with Local Lead Engine."
        />

        <StatsRow />

        {/* Category Filter Tabs */}
        <section className="py-12 bg-white border-b border-black/[0.06]">
          <div className="shell">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {projectFilters.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-[0.875rem] font-bold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-brand text-white shadow-soft scale-105'
                      : 'bg-cream text-warm hover:text-ink hover:bg-black/[0.04]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Detailed Grid */}
        <section className="py-16 sm:py-24">
          <div className="shell space-y-16">
            {filteredProjects.map((p) => (
              <Reveal
                key={p.id}
                id={p.id}
                y={32}
                className="group scroll-mt-28 overflow-hidden rounded-[2.25rem] border border-black/[0.06] bg-white p-6 shadow-soft transition-all duration-500 hover:shadow-card sm:p-8 lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
                  {/* Left Column: Image with Lightbox Trigger & Overlays */}
                  <div className="lg:col-span-5 space-y-6">
                    <div
                      onClick={() => setActiveModalProject(p)}
                      className="relative overflow-hidden rounded-[1.75rem] shadow-soft cursor-pointer group/img"
                    >
                      <img
                        src={p.image}
                        alt={p.title}
                        width={1100}
                        height={737}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover/img:scale-[1.06]"
                        loading="lazy"
                      />
                      
                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="rounded-full bg-white/95 backdrop-blur px-3.5 py-1.5 text-[0.75rem] font-bold uppercase tracking-wider text-brand shadow-sm">
                          {p.category}
                        </span>
                        <span className="rounded-full bg-emerald-600/90 backdrop-blur text-white px-3 py-1 text-[0.7rem] font-extrabold flex items-center gap-1 shadow-sm">
                          <Icon name="CheckCircle2" className="h-3.5 w-3.5" />
                          <span>Verified Client Results</span>
                        </span>
                      </div>

                      {/* Bottom Overlay Info */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white flex items-end justify-between transition-opacity duration-300">
                        <div className="space-y-0.5">
                          <p className="text-xs font-bold flex items-center gap-1.5 text-white/90">
                            <Icon name="MapPin" className="h-3.5 w-3.5 text-brand-light" />
                            <span>{p.location || 'United States'}</span>
                          </p>
                          <p className="text-[0.75rem] text-white/70 font-medium">Job Site & Campaign Portfolio</p>
                        </div>

                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-semibold text-white group-hover/img:bg-brand group-hover/img:text-white transition-colors">
                          <Icon name="Maximize2" className="h-3.5 w-3.5" />
                          <span>Zoom Photo</span>
                        </span>
                      </div>
                    </div>

                    {/* Metric Card */}
                    <div className="rounded-2xl bg-brand-soft/60 border border-brand/20 p-6 flex items-center justify-between">
                      <div>
                        <p className="text-[0.75rem] font-extrabold uppercase tracking-widest text-brand/80">
                          Primary Outcome
                        </p>
                        <p className="text-3xl font-black text-brand mt-1">{p.metric}</p>
                        <p className="text-xs font-semibold text-warm mt-0.5">{p.metricLabel}</p>
                      </div>
                      {p.timeframe && (
                        <div className="text-right border-l border-brand/20 pl-6">
                          <p className="text-[0.75rem] font-extrabold uppercase tracking-widest text-warm">
                            Timeframe
                          </p>
                          <p className="text-lg font-bold text-ink mt-1">{p.timeframe}</p>
                          {p.location && <p className="text-xs text-warm">{p.location}</p>}
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-cream px-3 py-1.5 text-[0.75rem] font-bold text-warm border border-black/[0.04]"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Title, Challenge, Solution, Results & Quote */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-warm">
                        <Icon name="MapPin" className="h-4 w-4 text-brand" />
                        <span>{p.location || 'United States'}</span>
                        <span>•</span>
                        <Icon name="Calendar" className="h-4 w-4 text-brand" />
                        <span>{p.timeframe || 'Verified Case Study'}</span>
                      </div>

                      <h2 className="mt-3 text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold leading-tight tracking-tight text-ink">
                        {p.title}
                      </h2>
                      <p className="mt-3 text-[1rem] leading-[1.7] text-warm font-medium">
                        {p.summary}
                      </p>
                    </div>

                    {/* Challenge & Solution */}
                    {p.challenge && (
                      <div className="rounded-2xl bg-cream p-5 border border-black/[0.04] space-y-3">
                        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-rose-600">
                          <Icon name="AlertTriangle" className="h-4 w-4" />
                          <span>The Challenge Before Local Lead Engine</span>
                        </div>
                        <p className="text-[0.9375rem] text-warm leading-relaxed">{p.challenge}</p>
                      </div>
                    )}

                    {p.solution && p.solution.length > 0 && (
                      <div className="space-y-3">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-brand flex items-center gap-2">
                          <Icon name="CheckCircle2" className="h-4 w-4" />
                          <span>Implemented Growth Strategy</span>
                        </p>
                        <ul className="grid gap-2.5 sm:grid-cols-2">
                          {p.solution.map((sol, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-[0.875rem] text-ink font-medium leading-normal bg-white p-2.5 rounded-xl border border-black/[0.04]"
                            >
                              <span className="mt-1 h-2 w-2 rounded-full bg-brand shrink-0" />
                              <span>{sol}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Measured Results Row */}
                    {p.resultsList && p.resultsList.length > 0 && (
                      <div className="grid gap-3 sm:grid-cols-3 pt-2">
                        {p.resultsList.map((res) => (
                          <div
                            key={res.label}
                            className="rounded-xl border border-black/[0.06] bg-cream p-3.5 text-center"
                          >
                            <p className="text-[0.75rem] font-bold text-warm uppercase tracking-wider">
                              {res.label}
                            </p>
                            <p className="mt-1 text-lg font-black text-ink">{res.value}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Owner Quote */}
                    {p.clientQuote && (
                      <div className="rounded-2xl bg-brand/5 border-l-4 border-brand p-4 italic text-[0.9375rem] text-ink">
                        "{p.clientQuote.quote}"
                        <div className="mt-2 text-xs not-italic font-bold text-brand">
                          — {p.clientQuote.author}, <span className="text-warm font-normal">{p.clientQuote.title}</span>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-black/[0.06]">
                      <Btn to="/strategy-call" size="md">
                        Get Similar Results For Your Business
                      </Btn>
                      {p.tradeSlug && (
                        <Link
                          to={`/trades/${p.tradeSlug}`}
                          className="inline-flex items-center gap-2 text-[0.875rem] font-bold text-brand hover:text-ink transition-colors px-4 py-2.5 rounded-full border border-brand/20 hover:border-ink"
                        >
                          <span>View {p.category} Campaign Strategy</span>
                          <span>&rarr;</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <RoiCalculator />

        <section className="bg-cream-deep py-20 sm:py-24">
          <div className="shell mx-auto max-w-[36rem] text-center">
            <Reveal y={18}>
              <Eyebrow icon="LineChart">What Comes Next</Eyebrow>
            </Reveal>
            <MaskHeading lines={['Your Contractor Campaign', 'Could Be Next']} className="mt-5 h-section" />
            <Reveal delay={140} y={20}>
              <p className="mx-auto mt-5 max-w-[30rem] body-lg">
                Send us your domain and service area. We will deliver a custom 1-on-1 audit showing
                exact competitor keyword volume and 3 instant lead growth opportunities — 100% free with no obligation.
              </p>
            </Reveal>
            <Reveal delay={220} y={20} className="mt-9 flex justify-center">
              <Btn to="/strategy-call" size="lg">
                Book Free Contractor Strategy Call
              </Btn>
            </Reveal>
          </div>
        </section>

        <Testimonials />
        <CtaBanner />
      </main>

      {/* Lightbox Modal for Case Study Image & Strategy */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-brand transition-colors"
            >
              <Icon name="X" className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image Column */}
              <div className="relative bg-black flex items-center justify-center min-h-[300px] md:min-h-full">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover max-h-[500px] md:max-h-none"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/70 backdrop-blur p-3 text-white text-xs">
                  <p className="font-bold text-brand-light uppercase tracking-wider">{activeModalProject.category} Case Study Portfolio</p>
                  <p className="text-white/80">{activeModalProject.location || 'United States'} • Verified Campaign Results</p>
                </div>
              </div>

              {/* Content Column */}
              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[80vh] overflow-y-auto">
                <div>
                  <span className="inline-block rounded-full bg-brand-soft text-brand font-bold text-xs px-3 py-1">
                    {activeModalProject.category}
                  </span>
                  <h3 className="text-2xl font-black text-ink mt-2">{activeModalProject.title}</h3>
                  <p className="text-sm text-warm mt-2 leading-relaxed">{activeModalProject.summary}</p>

                  <div className="mt-4 rounded-2xl bg-cream border border-black/[0.06] p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase font-extrabold text-warm">Outcome</p>
                      <p className="text-2xl font-black text-brand">{activeModalProject.metric}</p>
                      <p className="text-xs text-warm">{activeModalProject.metricLabel}</p>
                    </div>
                    {activeModalProject.timeframe && (
                      <div className="text-right border-l border-black/10 pl-4">
                        <p className="text-xs uppercase font-extrabold text-warm">Timeframe</p>
                        <p className="text-base font-bold text-ink">{activeModalProject.timeframe}</p>
                      </div>
                    )}
                  </div>

                  {activeModalProject.challenge && (
                    <div className="mt-4 text-xs text-warm bg-cream p-3.5 rounded-xl border border-black/[0.04]">
                      <span className="font-bold text-rose-600 block mb-1">Challenge Solved:</span>
                      {activeModalProject.challenge}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-black/[0.06] flex flex-col sm:flex-row gap-3">
                  <Btn to="/strategy-call" size="md" className="w-full text-center">
                    Book Strategy Call
                  </Btn>
                  {activeModalProject.tradeSlug && (
                    <Link
                      to={`/trades/${activeModalProject.tradeSlug}`}
                      onClick={() => setActiveModalProject(null)}
                      className="w-full text-center px-4 py-2.5 rounded-full border border-brand text-brand font-bold text-xs hover:bg-brand hover:text-white transition-colors"
                    >
                      View Campaign Strategy
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
};

export default CaseStudies;

