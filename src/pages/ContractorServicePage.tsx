import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Btn, Eyebrow, Icon } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';
import { getContractorService, contractorServicePages } from '@/lib/contractor-service-data';

const ContractorServicePage: React.FC = () => {
  const { slug, industry } = useParams<{ slug?: string; industry?: string }>();
  const tradeKey = slug || industry || 'roofing-contractors';
  const data = getContractorService(tradeKey);

  if (!data) {
    return <Navigate to="/contractors/google-ads-for-roofing-contractors/" replace />;
  }

  const allIndustries = Object.values(contractorServicePages);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <main>
        {/* ============================================================
            SECTION 1: HERO SECTION
        ============================================================ */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 bg-cream border-b border-black/[0.06]">
          <div className="shell">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
              {/* Left text column */}
              <div className="lg:col-span-7">
                <Reveal y={14}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-bold text-brand shadow-soft">
                    <Icon name={data.icon} className="h-4 w-4" />
                    <span>{data.badge}</span>
                  </div>
                </Reveal>

                <h1 className="mt-5 text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl leading-[1.08]">
                  {data.hero.h1}
                </h1>

                <p className="mt-5 text-xl font-bold text-brand sm:text-2xl leading-snug">
                  {data.hero.supportingHeadline}
                </p>

                <p className="mt-4 text-base text-warm sm:text-lg leading-relaxed max-w-2xl">
                  {data.hero.supportingParagraph}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Btn to="/strategy-call" size="lg" className="shadow-brand">
                    Get a Free Google Ads Audit
                  </Btn>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-6 py-3.5 text-sm font-bold text-ink hover:bg-cream-deep hover:border-black/30 transition-all shadow-soft"
                  >
                    See How It Works
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-6 text-xs text-warm font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-brand" />
                    No long-term lock-in
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-brand" />
                    Full account ownership
                  </span>
                </div>
              </div>

              {/* Right column: 2D Dashboard Visual */}
              <div className="lg:col-span-5">
                <Reveal y={24} delay={120}>
                  <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
                    <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                      <div>
                        <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-warm">
                          Sample Campaign View
                        </span>
                        <h2 className="text-sm font-bold text-ink">{data.hero.sampleMetrics.campaignName}</h2>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[0.6875rem] font-bold text-emerald-700 border border-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live Data
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3.5">
                      <div className="rounded-xl bg-cream p-3.5 border border-black/[0.04]">
                        <span className="text-xs text-warm font-medium">Qualified Calls</span>
                        <p className="mt-1 text-2xl font-black text-ink">{data.hero.sampleMetrics.qualifiedCalls}</p>
                        <span className="text-[0.6875rem] text-brand font-bold">Inbound verified</span>
                      </div>

                      <div className="rounded-xl bg-cream p-3.5 border border-black/[0.04]">
                        <span className="text-xs text-warm font-medium">Booked Estimates</span>
                        <p className="mt-1 text-2xl font-black text-brand">{data.hero.sampleMetrics.bookedEstimates}</p>
                        <span className="text-[0.6875rem] text-warm font-medium">On-site scheduled</span>
                      </div>

                      <div className="rounded-xl bg-cream p-3.5 border border-black/[0.04]">
                        <span className="text-xs text-warm font-medium">Cost / Opportunity</span>
                        <p className="mt-1 text-xl font-bold text-ink">{data.hero.sampleMetrics.costPerOpportunity}</p>
                        <span className="text-[0.6875rem] text-warm font-medium">Target range</span>
                      </div>

                      <div className="rounded-xl bg-cream p-3.5 border border-black/[0.04]">
                        <span className="text-xs text-warm font-medium">Conv. Rate</span>
                        <p className="mt-1 text-xl font-bold text-brand">{data.hero.sampleMetrics.conversionRate}</p>
                        <span className="text-[0.6875rem] text-warm font-medium">Landing page avg</span>
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl border border-black/[0.06] bg-cream-deep p-3.5 flex items-center justify-between">
                      <div>
                        <span className="text-[0.6875rem] text-warm block font-medium">Monthly Ad Spend</span>
                        <span className="text-sm font-black text-ink">{data.hero.sampleMetrics.adSpend}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[0.6875rem] text-warm block font-medium">Tracking Status</span>
                        <span className="text-xs font-bold text-brand">{data.hero.sampleMetrics.trackingStatus}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2: TRUST / RELEVANCE BAR
        ============================================================ */}
        <section className="py-6 bg-white border-b border-black/[0.06]">
          <div className="shell">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-ink">
                Built for contractors that sell high-value services:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-bold text-warm">
                <span className="rounded-lg bg-cream px-3 py-1.5 border border-black/[0.05] text-ink">Google Ads</span>
                <span className="rounded-lg bg-cream px-3 py-1.5 border border-black/[0.05] text-ink">Call Tracking</span>
                <span className="rounded-lg bg-cream px-3 py-1.5 border border-black/[0.05] text-ink">Conversion Tracking</span>
                <span className="rounded-lg bg-cream px-3 py-1.5 border border-black/[0.05] text-ink">Landing Pages</span>
                <span className="rounded-lg bg-cream px-3 py-1.5 border border-black/[0.05] text-ink">Offline Conversion Tracking</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 3: INDUSTRY-SPECIFIC PROBLEM
        ============================================================ */}
        <section className="py-20 sm:py-24 bg-cream">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal y={14}>
                <Eyebrow icon="AlertTriangle">Industry Realities</Eyebrow>
              </Reveal>
              <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                {data.problems.headline}
              </h2>
              <p className="mt-4 body-lg">
                Common advertising pitfalls that waste ad spend for {data.shortIndustry.toLowerCase()} companies.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.problems.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 50} y={18}>
                  <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-soft h-full flex flex-col justify-between">
                    <div>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-xs font-bold text-brand">
                        0{i + 1}
                      </span>
                      <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm text-warm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 4: CORE POSITIONING
        ============================================================ */}
        <section className="py-20 sm:py-24 bg-white border-y border-black/[0.06]">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal y={14}>
                <Eyebrow icon="Target">Core Positioning</Eyebrow>
              </Reveal>
              <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                A conversion is not the end goal. The job is.
              </h2>
              <p className="mt-4 text-base text-warm sm:text-lg leading-relaxed max-w-2xl mx-auto">
                A phone call or form submission tells you someone took action. It does not tell you whether that person was a good opportunity or whether the job was eventually booked. The advertising setup should make it easier to understand what happens after the initial contact.
              </p>
            </div>

            <div className="mt-14 max-w-5xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { step: '1', title: 'Google Search', desc: 'Homeowner searches service' },
                  { step: '2', title: 'Ad Click', desc: 'Clicks targeted local ad' },
                  { step: '3', title: 'Call / Form', desc: 'Takes initial action' },
                  { step: '4', title: 'Opportunity', desc: 'Verified project scope' },
                  { step: '5', title: 'Booked Estimate', desc: 'Consultation scheduled' },
                  { step: '6', title: 'Signed Job', desc: 'Contract revenue won' },
                ].map((item, idx) => (
                  <div
                    key={item.step}
                    className="relative rounded-2xl border border-black/[0.06] bg-cream p-4 text-center shadow-soft flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white text-xs font-bold mx-auto mb-2">
                        {item.step}
                      </span>
                      <h4 className="text-sm font-bold text-ink">{item.title}</h4>
                      <p className="mt-1 text-[0.75rem] text-warm">{item.desc}</p>
                    </div>
                    {idx < 5 && (
                      <span className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-warm/40 font-bold z-10">
                        &rarr;
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 5: SERVICES WE BUILD CAMPAIGNS AROUND
        ============================================================ */}
        <section className="py-20 sm:py-24 bg-cream">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal y={14}>
                <Eyebrow icon="Layers">{data.industry} Services</Eyebrow>
              </Reveal>
              <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                {data.servicesTargeted.headline}
              </h2>
              <p className="mt-4 body-lg">
                We build dedicated campaigns around high-value jobs rather than broad generic terms.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data.servicesTargeted.services.map((srv, i) => (
                <Reveal key={srv.name} delay={i * 50} y={18}>
                  <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-soft h-full flex flex-col justify-between">
                    <div>
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand font-bold">
                        <Icon name={data.icon} className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-ink">{srv.name}</h3>
                      <p className="mt-2 text-sm text-warm leading-relaxed">{srv.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 6: CAMPAIGN STRUCTURE
        ============================================================ */}
        <section className="py-20 sm:py-24 bg-white border-y border-black/[0.06]">
          <div className="shell">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <Reveal y={14}>
                  <Eyebrow icon="Network">Account Architecture</Eyebrow>
                </Reveal>
                <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                  {data.campaignStructure.headline}
                </h2>
                <p className="mt-4 text-base text-warm leading-relaxed">
                  {data.campaignStructure.explanation}
                </p>

                <div className="mt-6 space-y-2.5">
                  {['Budget allocation per service', 'Accurate keyword bidding', 'Matching ad messaging', 'Custom landing pages', 'Clean search-term data'].map((point) => (
                    <div key={point} className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                      <Icon name="CheckCircle2" className="h-4 w-4 text-brand" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <Reveal y={20} delay={100}>
                  <div className="rounded-2xl border border-black/10 bg-cream p-6 shadow-soft">
                    <span className="text-xs font-bold uppercase tracking-wider text-warm block mb-4">
                      Campaign Structure Overview
                    </span>
                    <div className="space-y-3">
                      {data.campaignStructure.groups.map((group, idx) => (
                        <div
                          key={group}
                          className="flex items-center justify-between rounded-xl border border-black/[0.06] bg-white p-3.5 shadow-sm"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-soft text-brand text-xs font-bold">
                              {idx + 1}
                            </span>
                            <span className="text-sm font-bold text-ink">{group}</span>
                          </div>
                          <span className="text-[0.6875rem] font-bold text-warm bg-cream px-2.5 py-1 rounded-md">
                            Dedicated Budget & Bids
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 7: SEARCH -> AD -> LANDING PAGE
        ============================================================ */}
        <section className="py-20 sm:py-24 bg-cream">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal y={14}>
                <Eyebrow icon="Compass">Intent Matching</Eyebrow>
              </Reveal>
              <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                {data.searchFlow.headline}
              </h2>
              <p className="mt-4 body-lg">
                Search intent &rarr; Ad message &rarr; Landing page &rarr; Call to action
              </p>
            </div>

            <div className="mt-14 max-w-4xl mx-auto">
              <Reveal y={20}>
                <div className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-8 shadow-soft">
                  <div className="grid gap-6 md:grid-cols-4 items-center">
                    {/* Search box */}
                    <div className="rounded-xl bg-cream p-4 border border-black/[0.06]">
                      <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-warm block">
                        Google Search
                      </span>
                      <p className="mt-2 text-sm font-bold text-ink">"{data.searchFlow.searchQuery}"</p>
                    </div>

                    {/* Ad box */}
                    <div className="rounded-xl bg-cream p-4 border border-black/[0.06]">
                      <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-warm block">
                        Relevant Ad
                      </span>
                      <p className="mt-1 text-xs font-bold text-brand">{data.searchFlow.adHeadline}</p>
                      <p className="mt-1 text-[0.6875rem] text-warm line-clamp-2">{data.searchFlow.adDesc}</p>
                    </div>

                    {/* Landing Page */}
                    <div className="rounded-xl bg-cream p-4 border border-black/[0.06]">
                      <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-warm block">
                        Service Page
                      </span>
                      <p className="mt-2 text-xs font-bold text-ink">{data.searchFlow.landingPageTitle}</p>
                    </div>

                    {/* CTA */}
                    <div className="rounded-xl bg-brand text-white p-4 text-center">
                      <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-white/80 block">
                        Direct Action
                      </span>
                      <p className="mt-2 text-xs font-black">{data.searchFlow.ctaButton}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 8: CONVERSION TRACKING
        ============================================================ */}
        <section className="py-20 sm:py-24 bg-white border-y border-black/[0.06]">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal y={14}>
                <Eyebrow icon="LineChart">Measurement</Eyebrow>
              </Reveal>
              <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                Know what happens after the click
              </h2>
              <p className="mt-4 text-base text-warm leading-relaxed">
                A phone call or form submission is only the first measurable action. Where the client's systems support it, we can connect advertising activity with what happens later in the sales process.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Call Tracking', desc: 'Recordings, call duration, caller location, and source keyword attribution via dynamic phone numbers.' },
                { title: 'Form Tracking', desc: 'Direct form submission tracking with time stamps, service selections, and landing page URLs.' },
                { title: 'Google Ads Conversion Tracking', desc: 'Primary and secondary conversion actions configured properly without duplicate counting.' },
                { title: 'GA4 + Google Tag Manager', desc: 'Server-side and web container setup for clean event tracking and engagement data.' },
                { title: 'Offline Conversion Tracking', desc: 'Where the CRM setup permits, upload closed sales and estimate statuses back into Google Ads.' },
                { title: 'CRM Attribution', desc: 'Connect ad clicks to dispatch software such as ServiceTitan, JobNimbus, or AccuLynx.' },
              ].map((trk, i) => (
                <Reveal key={trk.title} delay={i * 40} y={16}>
                  <div className="rounded-2xl border border-black/[0.06] bg-cream p-6 shadow-soft h-full">
                    <h3 className="text-base font-bold text-ink">{trk.title}</h3>
                    <p className="mt-2 text-sm text-warm leading-relaxed">{trk.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 9: FROM INQUIRY TO BUSINESS OUTCOME
        ============================================================ */}
        <section className="py-20 sm:py-24 bg-cream">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal y={14}>
                <Eyebrow icon="Scale">Reporting Perspective</Eyebrow>
              </Reveal>
              <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                Not every inquiry is worth the same
              </h2>
              <p className="mt-4 text-base text-warm leading-relaxed">
                A low cost per inquiry does not automatically mean a campaign is performing well. The quality of the inquiries and what happens after they contact the business matter too.
              </p>
            </div>

            <div className="mt-14 max-w-4xl mx-auto">
              <Reveal y={20}>
                <div className="rounded-2xl border border-black/[0.08] bg-white overflow-hidden shadow-soft">
                  <div className="grid grid-cols-2 divide-x divide-black/[0.08]">
                    <div className="p-6 sm:p-8 bg-cream/40">
                      <h3 className="text-base font-bold text-warm">Basic Agency Reporting</h3>
                      <p className="text-xs text-warm mt-1">Focuses on surface metrics</p>
                      <ul className="mt-6 space-y-3.5 text-sm text-ink font-medium">
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-warm" /> Clicks
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-warm" /> Unverified Inquiries
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-warm" /> Click Conversion Rate
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-warm" /> Cost Per Inquiry
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-warm" /> Total Ad Spend
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 sm:p-8 bg-white">
                      <h3 className="text-base font-bold text-brand">Business-Focused Reporting</h3>
                      <p className="text-xs text-warm mt-1">Focuses on pipeline impact</p>
                      <ul className="mt-6 space-y-3.5 text-sm text-ink font-bold">
                        <li className="flex items-center gap-2 text-brand">
                          <Icon name="Check" className="h-4 w-4" /> Qualified Calls
                        </li>
                        <li className="flex items-center gap-2 text-brand">
                          <Icon name="Check" className="h-4 w-4" /> Verified Opportunities
                        </li>
                        <li className="flex items-center gap-2 text-brand">
                          <Icon name="Check" className="h-4 w-4" /> Booked Estimates
                        </li>
                        <li className="flex items-center gap-2 text-brand">
                          <Icon name="Check" className="h-4 w-4" /> Cost Per Qualified Opportunity
                        </li>
                        <li className="flex items-center gap-2 text-brand">
                          <Icon name="Check" className="h-4 w-4" /> Closed Job Value
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 10: ONGOING OPTIMIZATION
        ============================================================ */}
        <section id="how-it-works" className="py-20 sm:py-24 bg-white border-y border-black/[0.06]">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal y={14}>
                <Eyebrow icon="RefreshCw">Continuous Management</Eyebrow>
              </Reveal>
              <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                The work does not stop when the campaigns launch
              </h2>
              <p className="mt-4 body-lg">
                Ongoing weekly maintenance to keep search terms clean and allocate budget toward top-performing services.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Search Terms', desc: 'Remove irrelevant searches and find useful new opportunities based on real search queries.' },
                { title: 'Keywords', desc: 'Refine keyword match types and bids using actual phone call and estimate data.' },
                { title: 'Ads', desc: 'Improve ad headlines and descriptions around services, local areas, and customer intent.' },
                { title: 'Bidding', desc: 'Adjust bidding strategies based on conversion data and campaign maturity.' },
                { title: 'Geographic Targeting', desc: 'Focus spending on zip codes and counties where the contractor actually wants to work.' },
                { title: 'Budget', desc: 'Move spending toward campaigns and services showing stronger contract results.' },
              ].map((opt, i) => (
                <Reveal key={opt.title} delay={i * 40} y={16}>
                  <div className="rounded-2xl border border-black/[0.06] bg-cream p-6 shadow-soft h-full">
                    <h3 className="text-base font-bold text-ink">{opt.title}</h3>
                    <p className="mt-2 text-sm text-warm leading-relaxed">{opt.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 11: LANDING PAGE ALIGNMENT
        ============================================================ */}
        <section className="py-20 sm:py-24 bg-cream">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal y={14}>
                <Eyebrow icon="Layout">Landing Page Structure</Eyebrow>
              </Reveal>
              <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                Your landing pages should support the campaign
              </h2>
              <p className="mt-4 body-lg">
                Search intent &rarr; Ad message &rarr; Landing page &rarr; Call to action
              </p>
            </div>

            <div className="mt-12 space-y-4 max-w-3xl mx-auto">
              {data.landingExamples.map((ex) => (
                <div
                  key={ex.search}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-soft"
                >
                  <span className="text-sm font-bold text-ink">{ex.search}</span>
                  <span className="hidden sm:block text-brand font-bold">&rarr;</span>
                  <span className="text-sm font-medium text-warm">{ex.page}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 12: INDUSTRY-SPECIFIC PROOF
        ============================================================ */}
        <section className="py-20 sm:py-24 bg-white border-y border-black/[0.06]">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal y={14}>
                <Eyebrow icon="CheckCircle2">Verified Results</Eyebrow>
              </Reveal>
              <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                {data.caseStudy.clientName} Case Study
              </h2>
              <p className="mt-2 text-sm font-bold text-brand">
                {data.caseStudy.location} • {data.caseStudy.timeframe}
              </p>
              <p className="mt-3 body-lg max-w-2xl mx-auto">{data.caseStudy.summary}</p>
            </div>

            {/* Metrics grid */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 max-w-5xl mx-auto">
              {data.caseStudy.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-black/[0.06] bg-cream p-4 text-center shadow-soft"
                >
                  <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-warm block">
                    {m.label}
                  </span>
                  <p className="mt-1.5 text-xl font-black text-ink">{m.value}</p>
                </div>
              ))}
            </div>

            {/* Implementation Breakdown */}
            <div className="mt-14 max-w-4xl mx-auto">
              <h3 className="text-lg font-bold text-ink text-center mb-6">How the Campaign Was Managed</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {data.caseStudy.breakdown.map((b) => (
                  <div key={b.title} className="rounded-xl border border-black/[0.06] bg-cream/60 p-4">
                    <h4 className="text-sm font-bold text-brand">{b.title}</h4>
                    <p className="mt-1 text-xs text-warm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 13: MANAGEMENT PROCESS
        ============================================================ */}
        <section className="py-20 sm:py-24 bg-cream">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal y={14}>
                <Eyebrow icon="GitBranch">Process</Eyebrow>
              </Reveal>
              <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                How we manage your Google Ads
              </h2>
              <p className="mt-4 body-lg">
                A straightforward four-phase approach from audit to ongoing management.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { phase: 'Phase 1', title: 'Audit & Implement', desc: 'Review your account, tracking setup, campaigns, keywords, landing pages, and service areas.' },
                { phase: 'Phase 2', title: 'Launch', desc: 'Build or restructure campaigns, verify call tracking, and begin collecting reliable search data.' },
                { phase: 'Phase 3', title: 'Optimize', desc: 'Review search terms, conversions, ads, bids, budgets, and geographic performance weekly.' },
                { phase: 'Phase 4', title: 'Scale', desc: 'Increase investment where the data supports it and continue improving campaign performance.' },
              ].map((p, i) => (
                <Reveal key={p.phase} delay={i * 50} y={18}>
                  <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-soft h-full flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand">{p.phase}</span>
                      <h3 className="mt-2 text-lg font-bold text-ink">{p.title}</h3>
                      <p className="mt-2 text-xs text-warm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 14: REPORTING
        ============================================================ */}
        <section className="py-20 sm:py-24 bg-white border-y border-black/[0.06]">
          <div className="shell max-w-4xl">
            <div className="text-center">
              <Reveal y={14}>
                <Eyebrow icon="BarChart3">Transparency</Eyebrow>
              </Reveal>
              <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                Clear reporting without the vanity metrics
              </h2>
              <p className="mt-4 body-lg">
                Only show metrics that can actually be tracked and connected to business operations.
              </p>
            </div>

            <div className="mt-12 rounded-2xl border border-black/10 bg-cream p-6 sm:p-8 shadow-soft">
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-ink">
                  Standard Monthly Performance Metrics
                </span>
                <span className="text-[0.6875rem] font-bold text-warm bg-white px-2.5 py-1 rounded border border-black/[0.04]">
                  Sample Dashboard Metrics
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 bg-white rounded-xl border border-black/[0.04]">
                  <span className="text-xs text-warm font-medium block">Ad Spend</span>
                  <span className="text-lg font-bold text-ink mt-1 block">$4,200</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-black/[0.04]">
                  <span className="text-xs text-warm font-medium block">Clicks</span>
                  <span className="text-lg font-bold text-ink mt-1 block">348</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-black/[0.04]">
                  <span className="text-xs text-warm font-medium block">Qualified Calls</span>
                  <span className="text-lg font-bold text-brand mt-1 block">52</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-black/[0.04]">
                  <span className="text-xs text-warm font-medium block">Form Submissions</span>
                  <span className="text-lg font-bold text-ink mt-1 block">18</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-black/[0.04]">
                  <span className="text-xs text-warm font-medium block">Booked Estimates</span>
                  <span className="text-lg font-bold text-brand mt-1 block">34</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-black/[0.04]">
                  <span className="text-xs text-warm font-medium block">Cost / Opportunity</span>
                  <span className="text-lg font-bold text-ink mt-1 block">$78.40</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-black/[0.04]">
                  <span className="text-xs text-warm font-medium block">Conv. Rate</span>
                  <span className="text-lg font-bold text-brand mt-1 block">20.1%</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-black/[0.04]">
                  <span className="text-xs text-warm font-medium block">Avg. Call Duration</span>
                  <span className="text-lg font-bold text-ink mt-1 block">3m 42s</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 15: WHO THIS IS FOR
        ============================================================ */}
        <section className="py-20 sm:py-24 bg-cream">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal y={14}>
                <Eyebrow icon="Users">Fit Assessment</Eyebrow>
              </Reveal>
              <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                Who this is for
              </h2>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-8 shadow-soft">
                <h3 className="text-lg font-bold text-brand flex items-center gap-2">
                  <Icon name="CheckCircle2" className="h-5 w-5" />
                  Built for contractors who:
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-ink">
                  {[
                    'Sell high-value services and major replacements',
                    'Have defined geographic service areas',
                    'Want qualified calls rather than cheap clicks',
                    'Have a functioning sales and estimate booking process',
                    'Answer incoming calls promptly during business hours',
                    'Are willing to invest consistently in Google Ads',
                    'Want better visibility into advertising performance',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-brand font-bold mt-0.5">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-8 shadow-soft">
                <h3 className="text-lg font-bold text-warm flex items-center gap-2">
                  <Icon name="XCircle" className="h-5 w-5 text-warm" />
                  Not the right fit if:
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-warm">
                  {[
                    'You only want the cheapest possible low-ticket inquiries',
                    'You do not answer incoming phone calls regularly',
                    'You do not have a defined local service area',
                    'You do not want conversion tracking implemented',
                    'You expect guaranteed revenue or guaranteed inquiries',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-warm font-bold mt-0.5">&times;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 16: FAQ
        ============================================================ */}
        <section className="py-20 sm:py-24 bg-white border-y border-black/[0.06]">
          <div className="shell max-w-4xl">
            <div className="text-center">
              <Reveal y={14}>
                <Eyebrow icon="HelpCircle">Frequently Asked Questions</Eyebrow>
              </Reveal>
              <h2 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                Questions about Google Ads for {data.industry}
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {data.faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-black/[0.06] bg-cream p-6">
                  <h3 className="text-base font-bold text-ink">{faq.q}</h3>
                  <p className="mt-2 text-sm text-warm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse Other Contractor Industries */}
        <section className="py-16 bg-cream">
          <div className="shell">
            <span className="text-xs font-bold uppercase tracking-wider text-warm block text-center mb-6">
              Contractor Industry Google Ads Pages
            </span>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {allIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  to={ind.urlPath}
                  className={`rounded-full px-4 py-2 text-xs font-bold border transition-all ${
                    ind.slug === data.slug
                      ? 'bg-brand text-white border-brand shadow-sm'
                      : 'bg-white text-ink border-black/10 hover:border-brand hover:text-brand'
                  }`}
                >
                  {ind.industry}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 17: FINAL CTA
        ============================================================ */}
        <section className="py-20 sm:py-24 bg-ink text-white">
          <div className="shell max-w-4xl text-center">
            <Reveal y={14}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold text-brand-soft">
                <Icon name="Search" className="h-3.5 w-3.5" />
                No Obligation Review
              </span>
            </Reveal>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Find out what's holding your Google Ads back
            </h2>

            <p className="mt-4 text-base text-cream/80 sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Get a review of your campaigns, conversion tracking, search terms, targeting, and landing-page setup.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Btn to="/strategy-call" size="lg" className="bg-brand text-white hover:bg-brand-hover">
                Get My Free Google Ads Audit
              </Btn>
              <Btn to="/contact" variant="secondary" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Talk About My Campaign
              </Btn>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default ContractorServicePage;
