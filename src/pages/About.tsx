import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import ContractorsServed from '@/components/sections/ContractorsServed';
import CtaBanner from '@/components/sections/CtaBanner';
import { Btn, Eyebrow } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';
import { images, processSteps, socialLinks } from '@/lib/site-data';
import { Check, Linkedin } from 'lucide-react';

const experienceHighlights = [
  {
    number: '6+',
    label: 'Contractor categories served with dedicated search frameworks',
  },
  {
    number: '100%',
    label: 'Focus on local service contractors and home services',
  },
  {
    number: 'Daily',
    label: 'Search term reviews and negative keyword management',
  },
  {
    number: 'Direct',
    label: 'Call tracking integration with your dispatch phone lines',
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        {/* 1. Hero */}
        <PageHero
          crumb="About Us"
          eyebrow="About Local Lead Engine"
          eyebrowIcon="Users"
          titleLines={['Google Ads Management', 'For Local Contractors']}
          intro="We help local contractors run Google Ads that turn searchers into scheduled estimates and actual booked jobs."
        />

        {/* 2. Who We Are */}
        <section className="py-20 sm:py-24 border-t border-black/[0.06] bg-white">
          <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal y={18}>
                <Eyebrow icon="Compass">Who We Are</Eyebrow>
              </Reveal>
              <MaskHeading
                lines={['A Dedicated Google Ads Team', 'For Local Service Contractors']}
                className="mt-5 h-section"
              />
              <Reveal delay={140} y={22}>
                <p className="mt-5 body-lg text-warm">
                  Local Lead Engine is a specialized Google Ads management team working exclusively with local service contractors.
                </p>
              </Reveal>
              <Reveal delay={220} y={22}>
                <p className="mt-4 text-[1rem] leading-relaxed text-warm">
                  We do not try to be a general marketing agency that does everything from social media graphics to print flyers. We focus on one core job: building and managing Google Ads campaigns that generate real phone calls and quote requests for local contractors.
                </p>
              </Reveal>
              <Reveal delay={300} y={20} className="mt-8">
                <Btn to="/google-ads-for-local-service-contractors" variant="outline" size="md">
                  Explore Our Services
                </Btn>
              </Reveal>
            </div>

            <Reveal y={30} scale={0.98}>
              <div className="overflow-hidden rounded-[2rem] border border-black/[0.08] bg-cream p-8 shadow-card">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                      <Check className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-ink">Contractor-Focused Campaigns</h3>
                      <p className="mt-1 text-sm text-warm">
                        Built around high-margin installation and replacement jobs that keep your crews busy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                      <Check className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-ink">Verified Local Search Intent</h3>
                      <p className="mt-1 text-sm text-warm">
                        Targeting people who need immediate quotes, not DIY tips or cheap repair guides.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                      <Check className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-ink">Transparent Reporting</h3>
                      <p className="mt-1 text-sm text-warm">
                        Direct access to your ad accounts with clear data on lead volume and cost per call.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3. How We Work (from Services Page Our Process) */}
        <section className="bg-cream-deep py-20 sm:py-24 border-y border-black/[0.06]">
          <div className="shell">
            <div className="mx-auto max-w-[34rem] text-center">
              <Reveal y={18}>
                <Eyebrow icon="Route">How We Work</Eyebrow>
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
                  className="group relative rounded-[1.75rem] bg-white p-7 shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-card"
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

        {/* 4. Our Experience */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="shell">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <div>
                <Reveal y={18}>
                  <Eyebrow icon="Sparkles">Our Experience</Eyebrow>
                </Reveal>
                <MaskHeading
                  lines={['Years of Managing Search Ads', 'For Local Service Contractors']}
                  className="mt-5 h-section"
                />
                <Reveal delay={140} y={22}>
                  <p className="mt-5 body-lg text-warm">
                    We understand how local customers search when they need a roof replaced after a storm, an air conditioner fixed during hot weather, or a kitchen remodeled before the holidays.
                  </p>
                </Reveal>
                <Reveal delay={220} y={22}>
                  <p className="mt-4 text-[1rem] leading-relaxed text-warm">
                    That practical understanding allows us to set accurate match types, build effective negative keyword lists, and write straightforward ad copy that attracts serious property owners rather than bargain hunters.
                  </p>
                </Reveal>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {experienceHighlights.map((item, idx) => (
                  <Reveal
                    key={item.number}
                    delay={100 + idx * 80}
                    y={20}
                    className="rounded-2xl border border-black/[0.06] bg-cream p-6 shadow-soft"
                  >
                    <p className="text-2xl sm:text-3xl font-extrabold text-brand">{item.number}</p>
                    <p className="mt-2 text-xs sm:text-sm font-medium text-warm leading-snug">
                      {item.label}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Who We Work With (Serving Local Service Category from Home Page) */}
        <ContractorsServed />

        {/* 6. Founder */}
        <section className="py-20 sm:py-24 bg-white border-t border-black/[0.06]">
          <div className="shell">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <Reveal y={30} scale={0.97} className="mx-auto w-full max-w-sm lg:max-w-none">
                <div className="relative overflow-hidden rounded-[2rem] border border-black/[0.08] bg-cream-dark shadow-card">
                  <img
                    src={images.heroPortrait}
                    alt="Abu Salah, Founder of Local Lead Engine"
                    width={900}
                    height={1100}
                    className="w-full object-cover aspect-[4/5]"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                    <p className="text-xl font-bold text-white">Abu Salah</p>
                    <p className="text-sm text-white/80">Founder, Local Lead Engine</p>
                  </div>
                </div>
              </Reveal>

              <div>
                <Reveal y={18}>
                  <Eyebrow icon="User">Founder</Eyebrow>
                </Reveal>
                <MaskHeading lines={['Meet The Founder']} className="mt-5 h-section" />
                
                <Reveal delay={140} y={22}>
                  <div className="mt-6 rounded-2xl border border-brand/20 bg-cream p-6 shadow-soft">
                    <p className="text-base sm:text-lg font-medium text-ink leading-relaxed">
                      "I'm Abu Salah, and I work with local service contractors who already run Google Ads but struggle to turn clicks into actual jobs. They keep spending money on clicks that never turn into real work."
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={220} y={22}>
                  <p className="mt-5 text-[1rem] leading-relaxed text-warm">
                    I focus on the practical details that make campaigns succeed in competitive local markets: setting up strict negative keywords, building fast-loading pages that answer customer questions, and reviewing call recordings to make sure you get quality inquiries.
                  </p>
                </Reveal>

                <Reveal delay={300} y={22}>
                  <p className="mt-4 text-[1rem] leading-relaxed text-warm">
                    When you work with Local Lead Engine, you work directly with someone who understands local contractor marketing and is committed to making your advertising budget work for your business.
                  </p>
                </Reveal>

                <Reveal delay={360} y={20} className="mt-8 flex flex-wrap items-center gap-3">
                  <Btn to="/strategy-call" size="md">
                    Book Strategy Call
                  </Btn>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand"
                  >
                    <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                    Connect on LinkedIn
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CTA Card (from Home Page) */}
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
};

export default About;
