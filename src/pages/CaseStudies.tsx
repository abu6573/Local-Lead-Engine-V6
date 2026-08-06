import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import Testimonials from '@/components/sections/Testimonials';
import CtaBanner from '@/components/sections/CtaBanner';
import StatsRow from '@/components/sections/StatsRow';
import { Btn, Eyebrow } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';
import { projects } from '@/lib/site-data';

const CaseStudies: React.FC = () => (
  <div className="min-h-screen bg-cream">
    <SiteHeader />
    <main>
      <PageHero
        crumb="Case Studies"
        eyebrow="Case Studies"
        eyebrowIcon="FolderOpen"
        titleLines={['Contractor Growth', 'Case Studies']}
        intro="Real performance data from HVAC, Roofing, Plumbing, and Electrical contractors scaling exclusive phone leads with Local Lead Engine."
      />

      <StatsRow />

      <section className="py-16 sm:py-20">
        <div className="shell space-y-10 sm:space-y-14">
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              id={p.id}
              y={36}
              className="group scroll-mt-28 overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white p-4 shadow-soft transition-shadow duration-500 hover:shadow-card sm:p-5"
            >
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-10 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1100}
                    height={737}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                </div>

                <div className="px-2 pb-4 lg:px-6">
                  <Eyebrow icon="Tag">{p.category}</Eyebrow>
                  <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold leading-tight tracking-tight text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-[1rem] leading-[1.75] text-warm">{p.summary}</p>

                  <div className="mt-7 flex flex-wrap items-center gap-8 border-t border-black/[0.07] pt-6">
                    <div>
                      <p className="text-[2rem] font-extrabold leading-none text-brand">
                        {p.metric}
                      </p>
                      <p className="mt-1.5 text-[0.8125rem] text-warm-light">{p.metricLabel}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-cream px-3 py-1.5 text-[0.75rem] font-semibold text-warm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7">
                    <Btn to="/contact" variant="outline" size="md">
                      Discuss a Similar Project
                    </Btn>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-deep py-20 sm:py-24">
        <div className="shell mx-auto max-w-[36rem] text-center">
          <Reveal y={18}>
            <Eyebrow icon="LineChart">What Comes Next</Eyebrow>
          </Reveal>
          <MaskHeading lines={['Your Campaign', 'Could Be Next']} className="mt-5 h-section" />
          <Reveal delay={140} y={20}>
            <p className="mx-auto mt-5 max-w-[30rem] body-lg">
              Send us your domain and we will come back with three specific opportunities we can see
              from the outside — no charge, no obligation.
            </p>
          </Reveal>
          <Reveal delay={220} y={20} className="mt-9 flex justify-center">
            <Btn to="/contact" size="lg">
              Request a Free Audit
            </Btn>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <CtaBanner />
    </main>
    <SiteFooter />
  </div>
);

export default CaseStudies;
