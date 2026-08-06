import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import StatsRow from '@/components/sections/StatsRow';
import Testimonials from '@/components/sections/Testimonials';
import CtaBanner from '@/components/sections/CtaBanner';
import { Avatar, Btn, Eyebrow, Icon } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';
import { images, openRoles, processSteps, team } from '@/lib/site-data';

const values = [
  {
    icon: 'Compass',
    title: 'Evidence over opinion',
    body: 'Every recommendation traces back to crawl data, query data or revenue data. If we cannot measure it, we do not bill for it.',
  },
  {
    icon: 'Handshake',
    title: 'Partnership, not vendor',
    body: 'We sit in your planning meetings, learn your margins, and prioritise the keywords that move your business — not the ones easiest to rank.',
  },
  {
    icon: 'Gauge',
    title: 'Speed with rigour',
    body: 'Weekly shipping cadence, quarterly strategy reviews. Momentum is a competitive advantage in search.',
  },
];

const About: React.FC = () => (
  <div className="min-h-screen bg-cream">
    <SiteHeader />
    <main>
      <PageHero
        crumb="About Us"
        eyebrow="About Local Lead Engine"
        eyebrowIcon="Users"
        titleLines={['Google Ads Strategy', 'Built for Local', 'Contractors']}
        intro="Local Lead Engine is a specialized Google Ads management agency built exclusively for local service contractors. We connect your dispatch team with high-intent homeowners, tracking actual booked jobs in ServiceTitan, Housecall Pro, and Jobber."
      />

      <StatsRow />

      {/* ---- story ---- */}
      <section className="py-20 sm:py-24">
        <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal y={36} scale={0.97}>
            <div className="group overflow-hidden rounded-[2rem] shadow-card">
              <img
                src={images.teamDesk}
                alt="The Digiket strategy team reviewing campaign results together"
                width={1100}
                height={737}
                className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.05]"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div>
            <Reveal y={18}>
              <Eyebrow icon="BookOpen">Our Story</Eyebrow>
            </Reveal>
            <MaskHeading
              lines={['Founded by Strategists', 'Tired of Vanity Metrics']}
              className="mt-5 h-section"
            />
            <Reveal delay={140} y={22}>
              <p className="mt-5 body-lg">
                We started Local Lead Engine after watching trade contractors burn thousands on generic marketing agencies celebrating vanity clicks that never generated real phone calls or booked jobs.
              </p>
            </Reveal>
            <Reveal delay={220} y={22}>
              <p className="mt-4 body-lg">
                Today we manage Google Search Ads, Local Services Ads (LSA), and custom high-converting landing pages for HVAC, Plumbing, Roofing, and Electrical contractors across the country.
              </p>
            </Reveal>
            <Reveal delay={300} y={20} className="mt-9">
              <Btn to="/contact" size="lg">
                Work With Us
              </Btn>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- values ---- */}
      <section className="bg-cream-deep py-20 sm:py-24">
        <div className="shell">
          <div className="mx-auto max-w-[34rem] text-center">
            <Reveal y={18}>
              <Eyebrow icon="Heart">What We Believe</Eyebrow>
            </Reveal>
            <MaskHeading lines={['Principles Behind', 'Every Engagement']} className="mt-5 h-section" />
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={100 + i * 90}
                y={28}
                className="group rounded-[1.75rem] border border-black/[0.06] bg-white p-7 transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-lift"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand/25 bg-brand-soft text-brand transition-all duration-500 ease-smooth group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                  <Icon name={v.icon} className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-6 h-card">{v.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-warm">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- process ---- */}
      <section className="py-20 sm:py-24">
        <div className="shell">
          <div className="max-w-[34rem]">
            <Reveal y={18}>
              <Eyebrow icon="Route">How We Work</Eyebrow>
            </Reveal>
            <MaskHeading lines={['A Four-Stage', 'Growth Engine']} className="mt-5 h-section" />
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <Reveal
                key={s.step}
                delay={100 + i * 90}
                y={28}
                className="group relative rounded-[1.75rem] bg-white p-7 shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-lift"
              >
                <span className="text-[2.75rem] font-extrabold leading-none tracking-tight text-brand/25 transition-colors duration-500 group-hover:text-brand">
                  {s.step}
                </span>
                <h3 className="mt-4 h-card">{s.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-warm">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- team ---- */}
      <section id="team" className="bg-cream-deep py-20 sm:py-24">
        <div className="shell">
          <div className="mx-auto max-w-[34rem] text-center">
            <Reveal y={18}>
              <Eyebrow icon="Users">The People</Eyebrow>
            </Reveal>
            <MaskHeading lines={['Meet The Team Member']} className="mt-5 h-section" />
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal
                key={m.name}
                delay={80 + i * 70}
                y={26}
                className="group flex items-center gap-4 rounded-[1.5rem] border border-black/[0.06] bg-white p-5 transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-card"
              >
                <Avatar name={m.name} size={56} index={i} />
                <div>
                  <h3 className="text-[1.0625rem] font-bold text-ink">{m.name}</h3>
                  <p className="mt-0.5 text-[0.875rem] text-warm">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- careers ---- */}
      <section id="careers" className="py-20 sm:py-24">
        <div className="shell">
          <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal y={18}>
                <Eyebrow icon="Briefcase">Careers</Eyebrow>
              </Reveal>
              <MaskHeading lines={['Open Roles at', 'Local Lead Engine']} className="mt-5 h-section" />
            </div>
            <Reveal delay={140} y={20}>
              <p className="body-lg lg:text-right">
                Four-day fortnights, a real training budget, and no timesheets. We hire for curiosity
                first.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-white shadow-soft">
            {openRoles.map((r, i) => (
              <Reveal
                key={r.title}
                delay={80 + i * 70}
                y={18}
                className={`group flex flex-wrap items-center justify-between gap-4 px-6 py-6 transition-colors duration-300 hover:bg-cream sm:px-8 ${
                  i > 0 ? 'border-t border-black/[0.06]' : ''
                }`}
              >
                <div>
                  <h3 className="text-[1.0625rem] font-bold text-ink transition-colors duration-300 group-hover:text-brand">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-[0.875rem] text-warm-light">
                    {r.type} &middot; {r.place}
                  </p>
                </div>
                <Btn to="/contact" variant="outline" size="sm">
                  Apply Now
                </Btn>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBanner />
    </main>
    <SiteFooter />
  </div>
);

export default About;
