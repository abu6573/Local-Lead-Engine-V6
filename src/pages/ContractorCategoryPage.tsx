import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Phone,
  ShieldCheck,
  Target,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  MapPin,
  Layers,
  FileText,
  Clock,
  Sparkles,
  HelpCircle,
  Building2,
  DollarSign,
  ChevronDown,
  Activity,
  Sliders,
  CalendarCheck,
  Search,
  Check,
  XCircle,
  PhoneCall,
  CheckCircle,
} from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Faq from '@/components/Faq';
import RoiCalculator from '@/components/sections/RoiCalculator';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import { images, projects, Testimonial, testimonials as defaultTestimonials } from '@/lib/site-data';
import { contractorCategoryPages } from '../lib/contractor-category-data';
import { MaskHeading, Reveal, Stagger, StaggerItem } from '../components/motion';
import { Btn, Eyebrow, ChevronField, Icon, GoogleG } from '../components/kit';

const categoryTestimonialsMap: Record<string, Testimonial[]> = {
  'roofing-contractors': [
    {
      name: 'Marcus Vance',
      role: 'Owner, Apex Roofing Solutions',
      quote: 'Local Lead Engine shifted our entire acquisition model from chasing shared leads to dominating local Google search. Closing rates jumped over 40% on high-margin retail roof replacements.',
      rating: '4.9/5',
      platform: 'Verified Contractor Review',
      score: 99,
    },
    {
      name: 'Jose P.',
      role: 'Owner, Pinnacle Roofing & Exteriors',
      quote: 'Working with Local Lead Engine was super helpful. He did an amazing job reviewing our campaigns, creating high-converting landing pages, and cutting our cost per qualified roofing lead.',
      rating: '4.9/5',
      platform: 'Verified Client Review',
      score: 98,
    },
    {
      name: 'Timothy B.',
      role: 'President, Tri-County Commercial & Shingle Roofing',
      quote: 'Local Lead Engine completely turned our campaigns around. Rebuilt our campaigns from the ground up, and our inbound phone calls for full replacements skyrocketed.',
      rating: '4.9/5',
      platform: 'Verified Contractor Review',
      score: 99,
    },
  ],
  'hvac-contractors': [
    {
      name: 'David Miller',
      role: 'VP of Operations, Element Heating & Air',
      quote: 'Our dispatch board stayed booked during shoulder months for the first time in 8 years. The focus on full system replacements over low-intent repair shoppers transformed our profitability.',
      rating: '4.9/5',
      platform: 'Verified Contractor Review',
      score: 99,
    },
    {
      name: 'Amanda S.',
      role: 'CEO, Precision Air & Heat Pump Solutions',
      quote: "They don't just set up advertisements and disappear, they constantly check on call recording quality and technician dispatch volume. Proactive partners in our HVAC business.",
      rating: '4.9/5',
      platform: 'Verified Contractor Review',
      score: 98,
    },
    {
      name: 'Marcus J.',
      role: 'Owner, Comfort Flow HVAC Systems',
      quote: 'Finally, a marketing team that understands seasonal demand swings and high-efficiency replacement changeouts. The cost per booked consultation dropped significantly.',
      rating: '4.9/5',
      platform: 'Verified Client Review',
      score: 99,
    },
  ],
  'remodeling-contractors': [
    {
      name: 'Elena Rostova',
      role: 'Principal Designer & Founder, Prestige Home Renovations',
      quote: 'We stopped wasting hours on unqualified inquiries with unrealistic expectations. Every lead coming through our Google Ads campaigns is vetted for full kitchen, luxury bath, and whole-home renovations.',
      rating: '4.9/5',
      platform: 'Verified Contractor Review',
      score: 99,
    },
    {
      name: 'Steven H.',
      role: 'Owner, Heritage Design-Build Remodeling',
      quote: 'He is an asset that any remodeling contractor should seriously use. His insight into visual portfolio landing pages and budget-filtering intake forms blew us away.',
      rating: '4.9/5',
      platform: 'Verified Client Review',
      score: 99,
    },
    {
      name: 'Kristin P.',
      role: 'CEO, Premier Home Renovations',
      quote: "I highly recommend this team. They've helped us scale our whole-home renovation backlog through Google Ads precision targeting in high-equity subdivisions.",
      rating: '4.9/5',
      platform: 'Verified Contractor Review',
      score: 97,
    },
  ],
  'window-door-contractors': [
    {
      name: 'Greg Thornton',
      role: 'General Manager, ClearView Window & Door Co.',
      quote: 'The lead-to-sat-appointment rate increased from 34% to 68%. The hyper-local campaign structure and financing-focused landing pages completely outclassed our competitors.',
      rating: '4.9/5',
      platform: 'Verified Contractor Review',
      score: 99,
    },
    {
      name: 'Robert M.',
      role: 'CEO, Apex Architectural Windows & Doors',
      quote: 'A pleasure to work with. They set up dedicated landing pages for whole-house window packages and custom sliding patio doors that consistently fill our sales reps’ calendars.',
      rating: '4.9/5',
      platform: 'Verified Contractor Review',
      score: 96,
    },
    {
      name: 'Charles G.',
      role: 'Owner, Coastal Window & Door Replacements',
      quote: 'He really goes the extra mile and understands energy-efficiency incentives and in-home sales cycles. Outstanding ROI on our monthly Google Ads investment.',
      rating: '4.9/5',
      platform: 'Verified Client Review',
      score: 98,
    },
  ],
  'deck-outdoor-living-contractors': [
    {
      name: 'Braden Hayes',
      role: 'Lead Contractor & Co-Owner, Timber & Stone Outdoor Spaces',
      quote: 'Our average contract value nearly doubled because the ads attract homeowners looking for comprehensive composite decks, paver patios, and outdoor living environments rather than simple repairs.',
      rating: '4.9/5',
      platform: 'Verified Contractor Review',
      score: 99,
    },
    {
      name: 'Naoki F.',
      role: 'CEO, Horizon Custom Decks & Pergolas',
      quote: 'They are highly recommended. Their expertise in targeting homeowners in high-equity subdivisions helped us lock in our entire summer construction calendar by April.',
      rating: '4.9/5',
      platform: 'Verified Contractor Review',
      score: 97,
    },
    {
      name: 'Jose P.',
      role: 'Owner, Artisan Hardscapes & Living Spaces',
      quote: 'Local Lead Engine helped us showcase our 3D render designs and certified installer credentials to win top-tier outdoor living contracts.',
      rating: '4.9/5',
      platform: 'Verified Client Review',
      score: 98,
    },
  ],
  'solar-contractors': [
    {
      name: 'Samantha Lee',
      role: 'Sales Director, Solstice Power Solutions',
      quote: 'Having 100% exclusive homeowner leads changes everything. Our closing rate jumped dramatically because we are the only solar company calling the prospect.',
      rating: '4.9/5',
      platform: 'Verified Contractor Review',
      score: 99,
    },
    {
      name: 'Timothy B.',
      role: 'President, SunPeak Solar & Storage',
      quote: 'They built custom utility rebate and solar battery backup landing pages that filter out low electric bill inquiries and deliver high-intent homeowners ready for site evaluations.',
      rating: '4.9/5',
      platform: 'Verified Contractor Review',
      score: 99,
    },
    {
      name: 'Amanda S.',
      role: 'CEO, BrightGrid Clean Energy',
      quote: 'Zero shared leads, zero broker fees. Every phone call and consultation booked goes directly to our in-house solar consultants. Exceptional performance.',
      rating: '4.9/5',
      platform: 'Verified Contractor Review',
      score: 98,
    },
  ],
};

const ContractorCategoryPage: React.FC = () => {
  const { slug, industry } = useParams<{ slug?: string; industry?: string }>();

  // Normalize slug matching
  let activeSlug = 'roofing-contractors';
  if (slug) {
    activeSlug = slug.replace(/^google-ads-for-/, '').replace(/\/$/, '');
  } else if (industry) {
    activeSlug = industry.replace(/\/$/, '');
  }

  // Fallback lookup
  const categoryData =
    contractorCategoryPages[activeSlug] ||
    contractorCategoryPages[`${activeSlug}-contractors`] ||
    contractorCategoryPages['roofing-contractors'];

  const isConsideredPurchase = categoryData.salesMotion === 'considered-purchase';

  const contractorTestimonials =
    categoryTestimonialsMap[activeSlug] ||
    categoryTestimonialsMap[`${activeSlug}-contractors`] ||
    defaultTestimonials;

  // Find related case study from Case Studies page
  const relatedCaseStudy = projects.find((p) => {
    const normActive = activeSlug.toLowerCase();
    const normTrade = (p.tradeSlug || '').toLowerCase();
    const normCat = p.category.toLowerCase();
    const normTitle = p.title.toLowerCase();

    if (normTrade && (normActive.includes(normTrade) || normTrade.includes(normActive.replace(/-contractors$/, '')))) return true;
    if (normActive.includes('roof') && (normCat.includes('roof') || normTitle.includes('roof'))) return true;
    if (normActive.includes('hvac') && (normCat.includes('hvac') || normTitle.includes('heating') || normTitle.includes('air'))) return true;
    if (normActive.includes('remodel') && (normCat.includes('remodel') || normCat.includes('home'))) return true;
    if ((normActive.includes('deck') || normActive.includes('outdoor')) && (normCat.includes('deck') || normCat.includes('outdoor'))) return true;
    if ((normActive.includes('window') || normActive.includes('door')) && (normCat.includes('window') || normCat.includes('door'))) return true;
    if (normActive.includes('solar') && normCat.includes('solar')) return true;
    return false;
  });

  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <main className="overflow-hidden">
        {/* ------------------------------------------------------------- */}
        {/* 1. HERO SECTION                                               */}
        {/* ------------------------------------------------------------- */}
        <section className="relative overflow-hidden bg-cream pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pb-24">
          {/* decorative chevrons and gradient blur matching home page hero */}
          <ChevronField className="pointer-events-none absolute -left-24 top-24 h-[420px] w-[420px] text-brand/30 opacity-40" />
          <div className="pointer-events-none absolute -right-32 -top-20 h-[520px] w-[520px] rounded-full bg-brand/[0.07] blur-3xl" />

          <div className="shell relative">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
              {/* ---- copy (left) ---- */}
              <div>
                <Reveal y={16}>
                  <Eyebrow icon="Building2">Specialized Google Ads Management</Eyebrow>
                </Reveal>

                <MaskHeading
                  lines={[categoryData.heroH1]}
                  className="mt-6 h-display"
                  delay={80}
                />

                <Reveal y={20} delay={180}>
                  <p className="mt-6 max-w-[34rem] body-lg">
                    {categoryData.heroSupportingCopy}
                  </p>
                </Reveal>

                {/* CTAs */}
                <Reveal y={20} delay={240}>
                  <div className="mt-9 flex flex-wrap items-center gap-3.5">
                    <Btn
                      to="/strategy-call"
                      size="lg"
                      className="shadow-lift"
                      onClick={() => window.supercool?.track('cta_click', { cta: 'contractor-hero-book-call', category: categoryData.categoryTitle })}
                    >
                      Book Strategy Call
                    </Btn>

                    <Btn
                      to="/contact"
                      variant="outline"
                      size="lg"
                    >
                      Get Free Audit
                    </Btn>
                  </div>
                </Reveal>
              </div>

              {/* ---- portrait image (right) matching home page hero ---- */}
              <Reveal y={28} delay={200} className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
                <div className="relative overflow-hidden rounded-[2rem] bg-cream-dark">
                  <ChevronField className="absolute inset-0 h-full w-full text-brand/50 opacity-50" />
                  <img
                    src={images.heroPortrait}
                    alt={`${categoryData.categoryTitle} Google Ads campaign specialist on site`}
                    width={1100}
                    height={1473}
                    className="relative w-full object-cover"
                    loading="eager"
                  />
                </div>

                {/* floating: AI-powered badge */}
                <div className="absolute left-3 top-6 animate-floaty sm:left-5 sm:top-8">
                  <div className="flex items-center gap-2.5 rounded-full bg-white px-3.5 py-2.5 shadow-lift">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <span className="whitespace-nowrap text-[0.8125rem] font-bold text-ink">
                      AI Powered Google Ads Solutions
                    </span>
                  </div>
                </div>

                {/* floating: google partner badge */}
                <div
                  className="absolute -bottom-6 left-1/2 w-[15rem] -translate-x-1/2 animate-floaty sm:left-auto sm:right-2 sm:translate-x-0"
                  style={{ animationDelay: '1.4s' }}
                >
                  <div className="rounded-2xl bg-white p-4 shadow-lift">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream-deep">
                        <GoogleG className="h-[1.15rem] w-[1.15rem]" />
                      </span>
                      <div>
                        <p className="text-[0.8125rem] font-bold text-ink">Google Partner</p>
                        <p className="text-[0.6875rem] text-warm-light">LSA & Ads Certified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 2. TRUST / RELEVANCE BAR                                      */}
        {/* ------------------------------------------------------------- */}
        <section className="py-12 bg-white border-y border-black/[0.06]">
          <div className="shell">
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-warm">
                Infrastructure Built for {categoryData.categoryTitle}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {categoryData.trustItems.map((item, idx) => (
                <Reveal key={idx} delay={idx * 50} y={12}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-cream px-5 py-2.5 text-xs sm:text-sm font-semibold text-ink shadow-soft hover:border-brand/40 hover:shadow-card transition-all">
                    <CheckCircle2 className="h-4 w-4 text-brand" />
                    <span>{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 3. COMMON ADVERTISING PROBLEMS                                */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 sm:py-24 bg-cream">
          <div className="shell">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal y={16}>
                <Eyebrow icon="AlertTriangle">Common Advertising Problems</Eyebrow>
              </Reveal>
              <MaskHeading
                lines={[`Common Advertising Problems for`, categoryData.categoryTitle]}
                className="mt-5 h-section"
                delay={80}
              />
              <Reveal y={20} delay={180}>
                <p className="mt-5 body-lg max-w-2xl mx-auto">
                  These are the specific failure points we audit and fix in active accounts.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-7">
              {categoryData.problems.map((prob, idx) => (
                <Reveal
                  key={idx}
                  y={28}
                  delay={100 + idx * 80}
                  className="rounded-[1.75rem] border border-black/[0.06] bg-white p-7 sm:p-8 shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-lift hover:border-brand/30 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="h-9 w-9 rounded-full bg-brand-soft text-brand flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        <AlertTriangle className="h-4 w-4 stroke-[2.25]" />
                      </div>
                      <h3 className="h-card text-ink">{prob.title}</h3>
                    </div>
                    <p className="mt-4 text-[0.9375rem] text-warm leading-relaxed pl-13">{prob.description}</p>
                  </div>
                  <div className="mt-6 pt-5 border-t border-black/[0.06] pl-13">
                    <span className="text-xs font-bold text-ink uppercase tracking-wider">Root Cause: </span>
                    <span className="text-xs text-warm font-medium">{prob.whyItHappens}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 5. SEARCH INTENT                                              */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 sm:py-24 bg-white border-y border-black/[0.06]">
          <div className="shell">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal y={16}>
                <Eyebrow icon="Search">Search Intent</Eyebrow>
              </Reveal>
              <MaskHeading
                lines={['Matching Search Terms to', 'High-Margin Jobs']}
                className="mt-5 h-section"
                delay={80}
              />
              <Reveal y={20} delay={180}>
                <p className="mt-5 body-lg max-w-2xl mx-auto">
                  Not all search queries are equal. We segment queries by ticket size and purchase intent.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 space-y-6">
              {categoryData.searchIntents.map((intent, idx) => (
                <Reveal
                  key={idx}
                  y={24}
                  delay={100 + idx * 80}
                  className="rounded-[1.75rem] border border-black/[0.06] bg-cream p-7 sm:p-8 shadow-soft transition-all duration-500 ease-smooth hover:shadow-card hover:border-brand/30"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
                    <div className="lg:col-span-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand px-3 py-1 rounded-full bg-brand-chip border border-brand/10">
                        Intent Category
                      </span>
                      <h3 className="mt-3 text-xl font-bold text-ink">{intent.intentType}</h3>
                      <p className="mt-2 text-sm text-warm leading-relaxed">{intent.contractorImpact}</p>
                    </div>

                    <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-black/[0.06] shadow-xs">
                      <div className="text-xs font-bold text-warm uppercase tracking-wider mb-2.5">
                        Target Search Queries
                      </div>
                      <div className="space-y-2">
                        {intent.queryExamples.map((q, qIdx) => (
                          <div key={qIdx} className="text-xs font-mono text-ink font-medium flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                            <span>"{q}"</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-4">
                      <div className="text-xs font-bold text-warm uppercase tracking-wider mb-2">
                        Campaign Response
                      </div>
                      <p className="text-sm text-ink leading-relaxed font-medium">{intent.howWeHandleIt}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 6. CAMPAIGN STRUCTURE                                         */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 sm:py-24 bg-cream">
          <div className="shell">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal y={16}>
                <Eyebrow icon="Layers">Budget Control</Eyebrow>
              </Reveal>
              <MaskHeading
                lines={['Campaign Structure Built', 'for Profitability']}
                className="mt-5 h-section"
                delay={80}
              />
              <Reveal y={20} delay={180}>
                <p className="mt-5 body-lg max-w-2xl mx-auto">
                  Dividing services into isolated campaigns allows direct control over bids, budgets, and lead flow.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-7">
              {categoryData.campaignStructure.map((camp, idx) => (
                <Reveal
                  key={idx}
                  y={28}
                  delay={100 + idx * 80}
                  className="rounded-[1.75rem] border border-black/[0.06] bg-white p-7 sm:p-8 shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-lift flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="h-card text-ink">{camp.campaignName}</h3>
                      <span className="text-xs font-bold text-brand px-3 py-1 rounded-full bg-brand-chip border border-brand/10">
                        {camp.budgetShare}
                      </span>
                    </div>
                    <p className="mt-3.5 text-[0.9375rem] text-warm leading-relaxed">{camp.focus}</p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-black/[0.06]">
                    <div className="text-xs font-bold text-warm uppercase tracking-wider mb-2.5">
                      Key Keyword Themes:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {camp.keyTargets.map((kw, kIdx) => (
                        <span
                          key={kIdx}
                          className="text-xs font-semibold bg-cream px-3 py-1 rounded-lg border border-black/[0.05] text-ink"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 7. LANDING PAGE STRATEGY                                      */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 sm:py-24 bg-cream-deep border-y border-black/[0.06]">
          <div className="shell">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal y={16}>
                <Eyebrow icon="FileText">Landing Page Design</Eyebrow>
              </Reveal>
              <MaskHeading
                lines={['Landing Pages That Convert', 'Homeowner Search Clicks']}
                className="mt-5 h-section"
                delay={80}
              />
              <Reveal y={20} delay={180}>
                <p className="mt-5 body-lg max-w-2xl mx-auto">
                  Sending paid traffic to a generic homepage loses up to 90% of prospective calls. We deploy dedicated pages.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-7">
              {categoryData.landingPageStrategies.map((rule, idx) => (
                <Reveal
                  key={idx}
                  y={24}
                  delay={100 + idx * 80}
                  className="rounded-[1.75rem] border border-black/[0.06] bg-white p-7 shadow-soft transition-all duration-500 ease-smooth hover:shadow-card hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/25 bg-brand-soft text-brand font-bold text-sm">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-ink">{rule.rule}</h3>
                      <p className="mt-2 text-sm text-warm leading-relaxed">{rule.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 8. CONVERSION TRACKING SECTION                                */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="shell">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal y={16}>
                <Eyebrow icon="BarChart3">Full-Funnel Attribution</Eyebrow>
              </Reveal>
              <MaskHeading
                lines={['End-to-End Tracking From', 'Search Query to Closed Invoice']}
                className="mt-5 h-section"
                delay={80}
              />
              <Reveal y={20} delay={180}>
                <p className="mt-5 body-lg max-w-2xl mx-auto">
                  Connecting phone calls, form submissions, and CRM records to eliminate guesswork.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7">
              {categoryData.conversionTracking.map((track, idx) => (
                <Reveal
                  key={idx}
                  y={28}
                  delay={100 + idx * 90}
                  className="rounded-[1.75rem] border border-black/[0.06] bg-cream p-7 shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-lift flex flex-col justify-between h-full"
                >
                  <div>
                    <span className="text-xs font-bold text-brand px-3 py-1 rounded-full bg-brand-chip border border-brand/10">
                      {track.tool}
                    </span>
                    <h3 className="mt-4 h-card text-ink">{track.method}</h3>
                    <p className="mt-2.5 text-[0.9375rem] text-warm leading-relaxed">{track.purpose}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 9. LEAD QUALITY / BOOKED JOB SECTION                          */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 sm:py-24 bg-cream border-y border-black/[0.06]">
          <div className="shell">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal y={16}>
                <Eyebrow icon="CalendarCheck">
                  {isConsideredPurchase ? 'Appointment Quality Focus' : 'Booked Job Focus'}
                </Eyebrow>
              </Reveal>
              <MaskHeading
                lines={[categoryData.leadQualitySection.headline]}
                className="mt-5 h-section"
                delay={80}
              />
              <Reveal y={20} delay={180}>
                <p className="mt-5 body-lg max-w-2xl mx-auto">
                  {categoryData.leadQualitySection.subheadline}
                </p>
              </Reveal>
            </div>

            <div className="mt-14 overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-2 bg-cream border-b border-black/[0.08] p-5 text-xs font-bold uppercase tracking-wider text-warm">
                <div className="hidden md:block">Traditional Agency Approach</div>
                <div>Our Performance Standard</div>
              </div>

              <div className="divide-y divide-black/[0.06]">
                {categoryData.leadQualitySection.comparisonRows.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-2 p-6 sm:p-7 gap-5 items-center">
                    <div className="flex items-start gap-3.5 text-sm text-warm">
                      <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{row.standardAgency}</span>
                    </div>
                    <div className="flex items-start gap-3.5 text-sm font-semibold text-ink bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/50">
                      <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span className="leading-relaxed">{row.ourApproach}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 10. OPTIMIZATION SECTION                                      */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="shell">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal y={16}>
                <Eyebrow icon="Sliders">Continuous Account Management</Eyebrow>
              </Reveal>
              <MaskHeading
                lines={['Active Weekly Optimization Tasks']}
                className="mt-5 h-section"
                delay={80}
              />
              <Reveal y={20} delay={180}>
                <p className="mt-5 body-lg max-w-2xl mx-auto">
                  We do not set campaigns on automated pilot. We actively refine search terms, bids, and ad copy every week.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {categoryData.optimizationTasks.map((task, idx) => (
                <Reveal
                  key={idx}
                  y={28}
                  delay={100 + idx * 80}
                  className="rounded-[1.75rem] border border-black/[0.06] bg-cream p-7 shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-lift flex flex-col justify-between h-full"
                >
                  <div>
                    <span className="text-xs font-bold text-brand px-3 py-1 rounded-full bg-brand-chip border border-brand/10">
                      {task.frequency}
                    </span>
                    <h3 className="mt-4 text-base font-bold text-ink">{task.task}</h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-warm leading-relaxed">{task.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 11. CONTRACTORS CATEGORY SPECIFIC NEGATIVE KEYWORDS           */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 sm:py-24 bg-cream-deep border-y border-black/[0.06]">
          <div className="shell">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <Reveal y={16}>
                  <Eyebrow icon="ShieldCheck">Budget Protection</Eyebrow>
                </Reveal>
                <MaskHeading
                  lines={['Contractor-Specific Negative', 'Keyword Exclusions']}
                  className="mt-5 h-section"
                  delay={80}
                />
                <Reveal y={20} delay={180}>
                  <p className="mt-5 body-lg">
                    {categoryData.negativeKeywords.reason}
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal y={28} delay={150}>
                  <div className="rounded-[2rem] border border-black/[0.08] bg-white p-7 sm:p-8 shadow-card">
                    <div className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-5 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                      Excluded Search Terms (Sample)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {categoryData.negativeKeywords.examples.map((neg, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-cream border border-black/[0.04] text-xs font-mono text-ink font-semibold"
                        >
                          <span className="text-rose-500 font-bold text-sm">&times;</span>
                          <span>"{neg}"</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 12. GEOGRAPHIC TARGETING                                      */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="shell">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal y={16}>
                <Eyebrow icon="MapPin">Service Territory</Eyebrow>
              </Reveal>
              <MaskHeading
                lines={['Geographic Targeting That', 'Protects Crew Efficiency']}
                className="mt-5 h-section"
                delay={80}
              />
              <Reveal y={20} delay={180}>
                <p className="mt-5 body-lg max-w-2xl mx-auto">
                  We concentrate ad spend where your team can deliver profitable projects without excessive travel.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7">
              {categoryData.geographicTargeting.map((geo, idx) => (
                <Reveal
                  key={idx}
                  y={28}
                  delay={100 + idx * 90}
                  className="rounded-[1.75rem] border border-black/[0.06] bg-cream p-7 shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-lift flex flex-col justify-between h-full"
                >
                  <div>
                    <h3 className="h-card text-ink">{geo.strategy}</h3>
                    <p className="mt-3 text-sm text-warm leading-relaxed">{geo.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 13. CASE STUDY (RELATED FROM CASE STUDIES PAGE)               */}
        {/* ------------------------------------------------------------- */}
        {relatedCaseStudy && (
          <section className="py-20 sm:py-24 bg-cream border-y border-black/[0.06]">
            <div className="shell">
              <div className="max-w-3xl mx-auto text-center">
                <Reveal y={16}>
                  <Eyebrow icon="TrendingUp">Verified Performance Proof</Eyebrow>
                </Reveal>
                <MaskHeading
                  lines={[`Verified Case Study: ${relatedCaseStudy.title}`]}
                  className="mt-5 h-section"
                  delay={80}
                />
                <Reveal y={20} delay={180}>
                  <p className="mt-5 body-lg max-w-2xl mx-auto">
                    Real campaign results, verified lead quality metrics, and closed job performance from our active portfolio.
                  </p>
                </Reveal>
              </div>

              <Reveal y={28} delay={120}>
                <div className="mt-12 rounded-[2.25rem] border border-black/[0.08] bg-white p-6 sm:p-10 shadow-card">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Image & Primary Metric */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="relative overflow-hidden rounded-[1.75rem] shadow-soft">
                        <img
                          src={relatedCaseStudy.image}
                          alt={relatedCaseStudy.title}
                          width={1100}
                          height={737}
                          className="aspect-[4/3] w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                          <span className="rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[0.75rem] font-bold uppercase tracking-wider text-brand shadow-sm">
                            {relatedCaseStudy.category}
                          </span>
                          <span className="rounded-full bg-emerald-600/90 backdrop-blur text-white px-2.5 py-1 text-[0.7rem] font-extrabold flex items-center gap-1 shadow-sm">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            <span>Verified Client Results</span>
                          </span>
                        </div>
                      </div>

                      {/* Primary Outcome Metric Box */}
                      <div className="rounded-2xl bg-brand-soft/60 border border-brand/20 p-5 flex items-center justify-between">
                        <div>
                          <p className="text-[0.75rem] font-extrabold uppercase tracking-widest text-brand/80">
                            Primary Outcome
                          </p>
                          <p className="text-3xl font-black text-brand mt-1">{relatedCaseStudy.metric}</p>
                          <p className="text-xs font-semibold text-warm mt-0.5">{relatedCaseStudy.metricLabel}</p>
                        </div>
                        {relatedCaseStudy.timeframe && (
                          <div className="text-right border-l border-brand/20 pl-5">
                            <p className="text-[0.75rem] font-extrabold uppercase tracking-widest text-warm">
                              Timeframe
                            </p>
                            <p className="text-base font-bold text-ink mt-1">{relatedCaseStudy.timeframe}</p>
                            {relatedCaseStudy.location && <p className="text-xs text-warm">{relatedCaseStudy.location}</p>}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Case Details & Metrics */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-warm">
                          <MapPin className="h-4 w-4 text-brand" />
                          <span>{relatedCaseStudy.location || 'United States'}</span>
                          <span>•</span>
                          <Clock className="h-4 w-4 text-brand" />
                          <span>{relatedCaseStudy.timeframe || 'Verified Case Study'}</span>
                        </div>

                        <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-ink">
                          {relatedCaseStudy.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-warm">
                          {relatedCaseStudy.summary}
                        </p>
                      </div>

                      {/* Results Grid */}
                      {relatedCaseStudy.resultsList && relatedCaseStudy.resultsList.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                          {relatedCaseStudy.resultsList.map((res, rIdx) => (
                            <div key={rIdx} className="p-4 rounded-xl bg-cream border border-black/[0.04]">
                              <div className="text-xs font-semibold text-warm">{res.label}</div>
                              <div className="text-lg font-black text-ink mt-1">{res.value}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Client Quote */}
                      {relatedCaseStudy.clientQuote && (
                        <div className="rounded-2xl bg-cream p-5 border border-black/[0.05]">
                          <p className="text-sm italic text-warm leading-relaxed">
                            "{relatedCaseStudy.clientQuote.quote}"
                          </p>
                          <div className="mt-3 text-xs font-bold text-ink">
                            {relatedCaseStudy.clientQuote.author} — <span className="text-warm font-normal">{relatedCaseStudy.clientQuote.title}</span>
                          </div>
                        </div>
                      )}

                      <div className="pt-2 flex items-center justify-between">
                        <Link
                          to="/case-studies"
                          className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark transition-colors"
                        >
                          <span>View All Contractor Case Studies</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 14. ROI CALCULATOR                                            */}
        {/* ------------------------------------------------------------- */}
        <RoiCalculator />

        {/* ------------------------------------------------------------- */}
        {/* 15. RELATED CONTRACTOR TESTIMONIALS                           */}
        {/* ------------------------------------------------------------- */}
        <Testimonials
          items={contractorTestimonials}
          titleLines={[`What ${categoryData.categoryTitle}`, 'Say About Us']}
          eyebrow={`${categoryData.categoryTitle} Reviews`}
        />

        {/* ------------------------------------------------------------- */}
        {/* 16. SERVICE PLANS & PRICING                                   */}
        {/* ------------------------------------------------------------- */}
        <Pricing />

        {/* ------------------------------------------------------------- */}
        {/* 17. PROCESS                                                   */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="shell">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal y={16}>
                <Eyebrow icon="Clock">Process</Eyebrow>
              </Reveal>
              <MaskHeading
                lines={['Our 4-Phase Management Process']}
                className="mt-5 h-section"
                delay={80}
              />
              <Reveal y={20} delay={180}>
                <p className="mt-5 body-lg max-w-2xl mx-auto">
                  Clear milestones from initial account audit to monthly revenue scaling.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {categoryData.processSteps.map((phase, idx) => (
                <Reveal
                  key={idx}
                  y={28}
                  delay={100 + idx * 90}
                  className="rounded-[1.75rem] border border-black/[0.06] bg-cream p-7 shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-lift flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-brand px-3 py-1 rounded-full bg-brand-chip border border-brand/10">
                        {phase.phase}
                      </span>
                      <span className="text-xs font-semibold text-warm">{phase.timeline}</span>
                    </div>
                    <h3 className="mt-4 h-card text-ink">{phase.title}</h3>
                    <ul className="mt-5 space-y-2.5">
                      {phase.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="text-xs text-warm flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-brand shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="leading-relaxed">{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 15. FAQS                                                      */}
        {/* ------------------------------------------------------------- */}
        <section className="py-20 sm:py-24 bg-cream border-y border-black/[0.06]">
          <div className="shell max-w-[52rem]">
            <div className="text-center">
              <Reveal y={18}>
                <Eyebrow icon="MessageCircleQuestion">Questions</Eyebrow>
              </Reveal>
              <MaskHeading
                lines={['Frequently Asked Questions', `About ${categoryData.categoryTitle} Ads`]}
                className="mt-5 h-section"
                delay={80}
              />
            </div>

            <Faq items={categoryData.faqs} />
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 16. FINAL CTA BANNER CARD (Home Page Style)                   */}
        {/* ------------------------------------------------------------- */}
        <section className="bg-cream pb-20 pt-8 sm:pb-24 lg:pb-28">
          <div className="shell">
            <Reveal
              y={36}
              className="relative overflow-hidden rounded-[2.25rem] bg-white px-6 py-12 shadow-card sm:px-12 sm:py-16 lg:px-16"
            >
              <ChevronField className="pointer-events-none absolute -right-10 top-0 h-full w-[45%] text-brand/30 opacity-25" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand/[0.06] blur-3xl" />

              <div className="relative w-full">
                <Reveal y={16}>
                  <Eyebrow icon="PhoneCall">Free Strategy Call</Eyebrow>
                </Reveal>

                <MaskHeading
                  lines={[categoryData.finalCta.headline]}
                  className="mt-5 h-section"
                  delay={80}
                />

                <Reveal delay={140} y={20}>
                  <p className="mt-5 w-full body-lg">
                    {categoryData.finalCta.subheadline}
                  </p>
                </Reveal>

                <Reveal delay={220} y={20} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <Btn
                    to="/strategy-call"
                    size="lg"
                    className="shadow-lift"
                  >
                    Book Strategy Call
                  </Btn>
                  <Btn
                    to="/contact"
                    variant="outline"
                    size="lg"
                  >
                    Get Free Audit
                  </Btn>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-ink">
                    <span className="inline-flex items-center gap-2">
                      <Check className="h-4 w-4 text-brand stroke-[2.5]" aria-hidden="true" />
                      100% Account Ownership
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Check className="h-4 w-4 text-brand stroke-[2.5]" aria-hidden="true" />
                      No Long-Term Contracts
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Check className="h-4 w-4 text-brand stroke-[2.5]" aria-hidden="true" />
                      Direct Google Certified Specialist
                    </span>
                  </div>
                </Reveal>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default ContractorCategoryPage;
