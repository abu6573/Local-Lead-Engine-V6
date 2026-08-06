import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import Pricing from '@/components/sections/Pricing';
import LogoMarquee from '@/components/sections/LogoMarquee';
import CtaBanner from '@/components/sections/CtaBanner';
import { Btn, Eyebrow, Icon, ReadMore } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';
import { faqs, processSteps, services } from '@/lib/site-data';

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-12 space-y-4">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <Reveal
            key={f.q}
            delay={80 + i * 70}
            y={20}
            className="overflow-hidden rounded-[1.25rem] border border-black/[0.06] bg-white shadow-soft transition-shadow duration-300 hover:shadow-card"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-7"
            >
              <span className="text-[1.0625rem] font-semibold text-ink">{f.q}</span>
              <span
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-500 ease-smooth ${
                  isOpen ? 'rotate-180 bg-brand text-white' : 'bg-cream text-brand'
                }`}
              >
                <ChevronDown className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
              </span>
            </button>
            <div
              className="grid overflow-hidden transition-all duration-500 ease-smooth"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
            >
              <div className="min-h-0">
                <p className="px-6 pb-6 text-[0.9375rem] leading-relaxed text-warm sm:px-7">
                  {f.a}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
};

const Services: React.FC = () => (
  <div className="min-h-screen bg-cream">
    <SiteHeader />
    <main>
      <PageHero
        crumb="Services"
        eyebrow="Our Services"
        eyebrowIcon="LayoutGrid"
        titleLines={['Google Ads Management for Local Service Contractors']}
        intro="We build and manage Google Ads campaigns that generate more qualified estimate requests, reduce wasted ad spend, and turn more clicks into booked estimates."
      />

      {/* ---- service cards ---- */}
      <section className="py-16 sm:py-20">
        <div className="shell grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={80 + i * 80}
              y={30}
              className="group relative flex flex-col items-center text-center rounded-[1.75rem] border border-black/[0.06] bg-white p-7 transition-all duration-500 ease-smooth hover:-translate-y-2 hover:border-transparent hover:shadow-lift"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand/25 bg-brand-soft text-brand transition-all duration-500 ease-smooth group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <h2 className="mt-6 h-card">{s.title}</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-warm">{s.body}</p>

              <ul className="mt-5 space-y-2 text-left inline-block">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[0.875rem] text-warm">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <ReadMore to="/contact" label="Enquire" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <LogoMarquee />

      {/* ---- process ---- */}
      <section className="bg-cream-deep py-20 sm:py-24">
        <div className="shell">
          <div className="mx-auto max-w-[34rem] text-center">
            <Reveal y={18}>
              <Eyebrow icon="Route">Our Process</Eyebrow>
            </Reveal>
            <MaskHeading
              lines={['From Audit to', 'Ongoing Growth']}
              className="mt-5 h-section"
            />
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

      <Pricing />

      {/* ---- faq ---- */}
      <section className="py-20 sm:py-24">
        <div className="shell max-w-[52rem]">
          <div className="text-center">
            <Reveal y={18}>
              <Eyebrow icon="MessageCircleQuestion">Questions</Eyebrow>
            </Reveal>
            <MaskHeading lines={['Frequently Asked']} className="mt-5 h-section" />
          </div>
          <Faq />
          <Reveal delay={200} y={20} className="mt-12 flex justify-center">
            <Btn to="/contact" size="lg">
              Ask Us Anything
            </Btn>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </main>
    <SiteFooter />
  </div>
);

export default Services;
