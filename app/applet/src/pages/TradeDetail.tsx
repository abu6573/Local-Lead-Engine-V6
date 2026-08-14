import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import RoiCalculator from '@/components/sections/RoiCalculator';
import CtaBanner from '@/components/sections/CtaBanner';
import { Btn, Eyebrow, Icon } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';
import { tradeDetailsData } from '@/lib/trade-data';
import { contractorTrades } from '@/components/sections/ContractorsServed';
import { projects } from '@/lib/site-data';

const TradeDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const trade = slug ? tradeDetailsData[slug] : undefined;

  if (!trade) {
    return <Navigate to="/services" replace />;
  }

  const otherTrades = contractorTrades.filter((t) => t.slug !== trade.slug);
  
  // Find matching case study for this trade
  const matchingCaseStudy = projects.find(
    (p) => p.tradeSlug === trade.slug || p.category.toLowerCase().includes(trade.slug.split('-')[0])
  ) || projects[0];

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        {/* Hero */}
        <PageHero
          crumb={`Trades / ${trade.tradeName}`}
          eyebrow={trade.badge}
          eyebrowIcon={trade.icon}
          titleLines={trade.heroTitle}
          intro={trade.heroIntro}
        />

        {/* Key Metrics Banner */}
        <section className="py-12 border-y border-black/[0.06] bg-white">
          <div className="shell">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal delay={0} y={16} className="rounded-2xl bg-cream p-6 border border-black/[0.04]">
                <p className="text-[0.8125rem] font-bold uppercase tracking-wider text-warm">Avg. Ticket Size</p>
                <p className="mt-2 text-2xl font-black text-brand">{trade.stats.avgJobValue}</p>
                <p className="mt-1 text-[0.8125rem] text-warm">High-margin job focus</p>
              </Reveal>

              <Reveal delay={60} y={16} className="rounded-2xl bg-cream p-6 border border-black/[0.04]">
                <p className="text-[0.8125rem] font-bold uppercase tracking-wider text-warm">Target Avg. CPC</p>
                <p className="mt-2 text-2xl font-black text-ink">{trade.stats.avgCpc}</p>
                <p className="mt-1 text-[0.8125rem] text-warm">Optimized search bids</p>
              </Reveal>

              <Reveal delay={120} y={16} className="rounded-2xl bg-cream p-6 border border-black/[0.04]">
                <p className="text-[0.8125rem] font-bold uppercase tracking-wider text-warm">Landing Page Conv. Rate</p>
                <p className="mt-2 text-2xl font-black text-brand">{trade.stats.convRate}</p>
                <p className="mt-1 text-[0.8125rem] text-warm">Click-to-inquiry benchmark</p>
              </Reveal>

              <Reveal delay={180} y={16} className="rounded-2xl bg-cream p-6 border border-black/[0.04]">
                <p className="text-[0.8125rem] font-bold uppercase tracking-wider text-warm">Target Cost Per Lead</p>
                <p className="mt-2 text-2xl font-black text-ink">{trade.stats.avgCpl}</p>
                <p className="mt-1 text-[0.8125rem] text-warm">Direct inbound phone calls</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* High-Intent Keywords Section */}
        <section className="py-20 sm:py-24">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal y={18}>
                <Eyebrow icon="Search">Precision Keyword Targeting</Eyebrow>
              </Reveal>
              <MaskHeading
                lines={[`High-Intent ${trade.tradeName}`, 'Search Queries We Capture']}
                className="mt-5 h-section"
                delay={80}
              />
              <Reveal delay={160} y={16}>
                <p className="mt-5 body-lg">
                  We focus on commercial and residential search terms with clear intent. No informational queries, no low-budget repair clutter.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {trade.keywords.map((kw, i) => (
                <Reveal key={kw} delay={i * 40} y={12}>
                  <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-[0.9375rem] font-semibold text-ink shadow-soft hover:border-brand hover:text-brand transition-all">
                    <span className="h-2 w-2 rounded-full bg-brand" />
                    <span>"{kw}"</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points & Local Lead Engine Solutions */}
        <section className="py-20 bg-white border-y border-black/[0.06]">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal y={18}>
                <Eyebrow icon="ShieldAlert">Common Advertising Challenges</Eyebrow>
              </Reveal>
              <MaskHeading
                lines={['Addressing Common Advertising', 'Issues in Your Industry']}
                className="mt-5 h-section"
                delay={80}
              />
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {trade.painPoints.map((pt, i) => (
                <Reveal
                  key={pt.title}
                  delay={i * 80}
                  y={24}
                  className="rounded-[1.75rem] border border-black/[0.06] bg-cream p-8 shadow-soft"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand font-bold text-lg">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{pt.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-warm">{pt.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Trade Campaign Strategies */}
        <section className="py-20 sm:py-24">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal y={18}>
                <Eyebrow icon="CheckCircle2">Campaign Setup</Eyebrow>
              </Reveal>
              <MaskHeading
                lines={['Tested Strategies For', trade.tradeName]}
                className="mt-5 h-section"
                delay={80}
              />
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {trade.strategies.map((st, i) => (
                <Reveal
                  key={st.title}
                  delay={i * 80}
                  y={24}
                  className="rounded-[1.75rem] border border-black/[0.06] bg-white p-8 shadow-soft hover:shadow-lift transition-all"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white font-bold">
                    <Icon name={trade.icon} className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink">{st.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-warm">{st.desc}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Reveal delay={160} y={16}>
                <Btn to="/strategy-call" size="lg">
                  Book {trade.tradeName} Strategy Call
                </Btn>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Featured Case Study for this Trade */}
        {matchingCaseStudy && (
          <section className="py-20 bg-cream-deep border-y border-black/[0.06]">
            <div className="shell">
              <div className="mx-auto max-w-3xl text-center">
                <Reveal y={18}>
                  <Eyebrow icon="FolderOpen">Featured {trade.tradeName} Case Study</Eyebrow>
                </Reveal>
                <MaskHeading
                  lines={['Client Results', matchingCaseStudy.title]}
                  className="mt-5 h-section"
                  delay={80}
                />
              </div>

              <Reveal y={24} className="mt-12 overflow-hidden rounded-[2.25rem] border border-black/[0.06] bg-white p-6 shadow-soft sm:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-center">
                  <div className="lg:col-span-5 relative overflow-hidden rounded-2xl shadow-soft">
                    <img
                      src={matchingCaseStudy.image}
                      alt={matchingCaseStudy.title}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3.5 py-1.5 text-[0.75rem] font-bold text-brand shadow-sm">
                      {matchingCaseStudy.location}
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand">
                        {matchingCaseStudy.category} • Campaign Result
                      </span>
                      <h3 className="text-2xl font-extrabold text-ink mt-1">
                        {matchingCaseStudy.title}
                      </h3>
                      <p className="text-sm text-warm mt-2 leading-relaxed">
                        {matchingCaseStudy.summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 rounded-2xl bg-cream p-4 border border-black/[0.04]">
                      <div>
                        <p className="text-xs font-bold text-warm uppercase">Primary Result</p>
                        <p className="text-2xl font-black text-brand">{matchingCaseStudy.metric}</p>
                        <p className="text-xs text-warm">{matchingCaseStudy.metricLabel}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-warm uppercase">Timeframe</p>
                        <p className="text-2xl font-black text-ink">{matchingCaseStudy.timeframe}</p>
                        <p className="text-xs text-warm">{matchingCaseStudy.location}</p>
                      </div>
                    </div>

                    {matchingCaseStudy.clientQuote && (
                      <blockquote className="rounded-xl bg-brand/5 border-l-4 border-brand p-3.5 italic text-xs text-ink">
                        "{matchingCaseStudy.clientQuote.quote}"
                        <span className="block not-italic font-bold text-brand mt-1">
                          , {matchingCaseStudy.clientQuote.author}, {matchingCaseStudy.clientQuote.title}
                        </span>
                      </blockquote>
                    )}

                    <div className="pt-2">
                      <Link
                        to={`/case-studies#${matchingCaseStudy.id}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-ink transition-colors"
                      >
                        <span>Read Full {matchingCaseStudy.category} Case Study</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* ROI Calculator */}
        <RoiCalculator />

        {/* FAQs for this trade */}
        {trade.faqs.length > 0 && (
          <section className="py-20 bg-white border-y border-black/[0.06]">
            <div className="shell max-w-4xl">
              <div className="text-center">
                <Reveal y={18}>
                  <Eyebrow icon="HelpCircle">Trade FAQs</Eyebrow>
                </Reveal>
                <MaskHeading
                  lines={['Frequently Asked Questions', `About ${trade.tradeName} Ads`]}
                  className="mt-5 h-section"
                  delay={80}
                />
              </div>

              <div className="mt-12 space-y-6">
                {trade.faqs.map((faq, i) => (
                  <Reveal key={faq.q} delay={i * 60} y={16}>
                    <div className="rounded-2xl border border-black/[0.06] bg-cream p-6 sm:p-8">
                      <h3 className="text-lg font-bold text-ink">{faq.q}</h3>
                      <p className="mt-3 text-[0.9375rem] leading-relaxed text-warm">{faq.a}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Explore Other Contractor Trades */}
        <section className="py-20 bg-cream">
          <div className="shell">
            <div className="text-center">
              <Reveal y={18}>
                <Eyebrow icon="Building2">Explore Other Trades</Eyebrow>
              </Reveal>
              <MaskHeading
                lines={['Google Ads Management', 'For Other Contractor Trades']}
                className="mt-5 h-section"
                delay={80}
              />
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {otherTrades.slice(0, 4).map((other, i) => (
                <Reveal key={other.slug} delay={i * 60} y={20}>
                  <Link
                    to={`/trades/${other.slug}`}
                    className="group rounded-2xl border border-black/[0.06] bg-white p-6 shadow-soft hover:shadow-lift hover:border-brand/30 transition-all flex flex-col justify-between h-full"
                  >
                    <div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand group-hover:bg-brand group-hover:text-white transition-all">
                        <Icon name={other.icon} className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <h4 className="mt-4 text-lg font-bold text-ink group-hover:text-brand transition-colors">
                        {other.title}
                      </h4>
                      <p className="mt-2 text-xs text-warm line-clamp-2">{other.description}</p>
                    </div>
                    <span className="mt-4 text-xs font-bold text-brand flex items-center gap-1">
                      View Campaign Strategy &rarr;
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
};

export default TradeDetail;
