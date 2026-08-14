import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, ChevronDown } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/sections/CtaBanner';
import { Reveal, MaskHeading } from '@/components/motion';
import { faqs as generalFaqs, servicePageFaqs } from '@/lib/site-data';
import { contractorCategoryPages } from '@/lib/contractor-category-data';

interface CategoryFaqGroup {
  id: string;
  name: string;
  shortName: string;
  description: string;
  linkHref?: string;
  linkText?: string;
  items: Array<{ question: string; answer: string }>;
}

export const FaqsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const faqGroups: CategoryFaqGroup[] = useMemo(() => {
    return [
      {
        id: 'general',
        name: 'Google Ads Management',
        shortName: 'Management',
        description: 'General questions regarding how we build, optimize, and manage Google Ads accounts for local service businesses.',
        linkHref: '/google-ads-for-local-service-contractors',
        linkText: 'Explore Management Services',
        items: generalFaqs.map((f) => ({ question: f.q, answer: f.a })),
      },
      {
        id: 'services',
        name: 'Google Ads for Local Service Contractors',
        shortName: 'Contractors Overview',
        description: 'Questions about Google Ads and Local Services Ads strategies tailored specifically for local service businesses.',
        linkHref: '/google-ads-for-local-service-contractors',
        linkText: 'View Service Overview',
        items: servicePageFaqs.map((f) => ({ question: f.q, answer: f.a })),
      },
      {
        id: 'roofing',
        name: 'Roofing Contractors',
        shortName: 'Roofing',
        description: 'Targeted Google Ads and Local Services Ads questions for residential and commercial roofing companies.',
        linkHref: '/contractors/google-ads-for-roofing-contractors',
        linkText: 'Explore Roofing Google Ads',
        items:
          contractorCategoryPages['roofing-contractors']?.faqs.map((f) => ({
            question: f.question,
            answer: f.answer,
          })) || [],
      },
      {
        id: 'hvac',
        name: 'HVAC Contractors',
        shortName: 'HVAC',
        description: 'Campaign setup, emergency demand capture, and seasonal replacement strategies for heating and cooling contractors.',
        linkHref: '/contractors/google-ads-for-hvac-contractors',
        linkText: 'Explore HVAC Google Ads',
        items:
          contractorCategoryPages['hvac-contractors']?.faqs.map((f) => ({
            question: f.question,
            answer: f.answer,
          })) || [],
      },
      {
        id: 'remodeling',
        name: 'Home Remodeling Contractors',
        shortName: 'Home Remodeling',
        description: 'Qualifying high-value kitchen, bathroom, basement, and full-home renovation inquiries via Google Ads.',
        linkHref: '/contractors/google-ads-for-remodeling-contractors',
        linkText: 'Explore Home Remodeling Google Ads',
        items:
          contractorCategoryPages['remodeling-contractors']?.faqs.map((f) => ({
            question: f.question,
            answer: f.answer,
          })) || [],
      },
      {
        id: 'window-door',
        name: 'Window & Door Contractors',
        shortName: 'Window & Door',
        description: 'Attracting whole-home replacement window and entry door buyers while filtering low-margin repairs.',
        linkHref: '/contractors/google-ads-for-window-door-contractors',
        linkText: 'Explore Window & Door Google Ads',
        items:
          contractorCategoryPages['window-door-contractors']?.faqs.map((f) => ({
            question: f.question,
            answer: f.answer,
          })) || [],
      },
      {
        id: 'deck-outdoor',
        name: 'Deck & Outdoor Living Contractors',
        shortName: 'Deck & Outdoor Living',
        description: 'Generating custom composite deck, patio, and outdoor living project inquiries before peak build season.',
        linkHref: '/contractors/google-ads-for-deck-outdoor-living-contractors',
        linkText: 'Explore Deck & Outdoor Google Ads',
        items:
          contractorCategoryPages['deck-outdoor-living-contractors']?.faqs.map((f) => ({
            question: f.question,
            answer: f.answer,
          })) || [],
      },
      {
        id: 'solar',
        name: 'Solar Contractors',
        shortName: 'Solar',
        description: 'Targeting homeowners searching for solar panels, battery backup, and commercial solar installations.',
        linkHref: '/contractors/google-ads-for-solar-contractors',
        linkText: 'Explore Solar Google Ads',
        items:
          contractorCategoryPages['solar-contractors']?.faqs.map((f) => ({
            question: f.question,
            answer: f.answer,
          })) || [],
      },
    ];
  }, []);

  const totalFaqCount = useMemo(() => {
    return faqGroups.reduce((acc, group) => acc + group.items.length, 0);
  }, [faqGroups]);

  // Filter items based on active tab and search query
  const filteredGroups = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return faqGroups
      .filter((group) => {
        if (activeTab === 'all') return true;
        return group.id === activeTab;
      })
      .map((group) => {
        if (!query) return group;

        const matchingItems = group.items.filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        );

        return {
          ...group,
          items: matchingItems,
        };
      })
      .filter((group) => group.items.length > 0);
  }, [faqGroups, activeTab, searchQuery]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <PageHero
          crumb="FAQs"
          eyebrow="Questions & Answers"
          eyebrowIcon="MessageCircleQuestion"
          titleLines={['Frequently Asked', 'Questions']}
          intro="Find clear answers to frequently asked questions about Google Ads management, Local Services Ads, conversion tracking, campaign structure, and contractor growth."
        />

        {/* ---- Search & Filter Navigation ---- */}
        <section className="relative z-10 -mt-6 pb-12 sm:pb-16">
          <div className="shell">
            <Reveal y={18} delay={80}>
              <div className="rounded-[1.75rem] border border-black/[0.08] bg-white p-6 shadow-card transition-all duration-300 sm:p-8">
                {/* Search Bar */}
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-warm-light" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search questions by keyword (e.g. tracking, budget, reviews, roofing, HVAC, remodeling)..."
                    className="w-full rounded-xl border border-black/10 bg-cream/40 py-3.5 pl-12 pr-4 text-[0.9375rem] text-ink placeholder:text-warm-light focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all duration-200"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-warm hover:text-ink transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Category Filter Buttons (Smooth interactive pill buttons) */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('all')}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                      activeTab === 'all'
                        ? 'bg-brand text-white shadow-sm scale-[1.02]'
                        : 'bg-cream-deep text-ink hover:bg-black/5'
                    }`}
                  >
                    All Questions ({totalFaqCount})
                  </button>
                  {faqGroups.map((group) => {
                    const isActive = activeTab === group.id;
                    return (
                      <button
                        key={group.id}
                        type="button"
                        onClick={() => setActiveTab(group.id)}
                        className={`rounded-full px-3.5 py-2 text-xs font-semibold transition-all duration-300 ${
                          isActive
                            ? 'bg-brand text-white shadow-sm scale-[1.02]'
                            : 'bg-cream-deep text-warm-dark hover:bg-black/5 hover:text-ink'
                        }`}
                      >
                        {group.shortName} ({group.items.length})
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---- FAQ Content Sections ---- */}
        <section className="pb-20 sm:pb-24">
          <div className="shell max-w-[56rem]">
            {filteredGroups.length === 0 ? (
              <Reveal y={16}>
                <div className="rounded-[1.5rem] border border-black/[0.06] bg-white p-12 text-center shadow-soft">
                  <h3 className="text-lg font-bold text-ink">No questions matched your search</h3>
                  <p className="mt-2 text-sm text-warm">
                    Try searching for another keyword or clear the search to view all categories.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setActiveTab('all');
                    }}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-bold text-white hover:bg-brand-dark transition-colors"
                  >
                    Reset Filter
                  </button>
                </div>
              </Reveal>
            ) : (
              <div className="space-y-16">
                {filteredGroups.map((group, groupIndex) => {
                  return (
                    <div key={group.id} id={group.id} className="scroll-mt-28">
                      <div className="flex flex-col gap-2 border-b border-black/[0.08] pb-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <MaskHeading
                            lines={[group.name]}
                            as="h2"
                            className="text-xl font-bold tracking-tight text-ink sm:text-2xl"
                          />
                          <Reveal y={12} delay={100}>
                            <p className="mt-1 text-xs text-warm sm:text-sm">{group.description}</p>
                          </Reveal>
                        </div>

                        {group.linkHref && (
                          <Reveal y={12} delay={120}>
                            <Link
                              to={group.linkHref}
                              className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-brand transition-all duration-200 hover:text-brand-dark hover:underline"
                            >
                              {group.linkText || 'Learn more'}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </Reveal>
                        )}
                      </div>

                      <div className="mt-6 space-y-4">
                        {group.items.map((item, itemIdx) => {
                          const itemKey = `${group.id}-${itemIdx}`;
                          const isOpen = Boolean(openItems[itemKey]);

                          return (
                            <Reveal
                              key={item.question}
                              delay={60 + (itemIdx % 8) * 45}
                              y={18}
                              className="overflow-hidden rounded-[1.25rem] border border-black/[0.06] bg-white shadow-soft transition-all duration-400 hover:border-black/10 hover:shadow-card"
                            >
                              <button
                                type="button"
                                onClick={() => toggleItem(itemKey)}
                                aria-expanded={isOpen}
                                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors duration-200 cursor-pointer sm:px-7"
                              >
                                <span className="text-[1.03125rem] font-semibold leading-snug text-ink sm:text-[1.0625rem]">
                                  {item.question}
                                </span>
                                <span
                                  className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-500 ease-smooth ${
                                    isOpen
                                      ? 'rotate-180 bg-brand text-white shadow-sm'
                                      : 'bg-cream text-brand'
                                  }`}
                                >
                                  <ChevronDown className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
                                </span>
                              </button>

                              <div
                                className="grid overflow-hidden transition-all duration-500 ease-smooth"
                                style={{
                                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                                  opacity: isOpen ? 1 : 0,
                                }}
                              >
                                <div className="min-h-0">
                                  <div className="border-t border-black/[0.04] px-6 pb-6 pt-4 text-[0.9375rem] leading-relaxed text-warm sm:px-7">
                                    {item.answer}
                                  </div>
                                </div>
                              </div>
                            </Reveal>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
};

export default FaqsPage;
