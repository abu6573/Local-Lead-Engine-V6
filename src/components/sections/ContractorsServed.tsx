import React from 'react';
import { Link } from 'react-router-dom';
import { Eyebrow, Icon } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';

export interface ContractorTrade {
  title: string;
  companyName: string;
  slug: string;
  serviceUrl: string;
  icon: string;
  description: string;
  badge: string;
}

export const contractorTrades: ContractorTrade[] = [
  {
    title: 'Roofing',
    companyName: 'Paragon Roofing',
    slug: 'roofing',
    serviceUrl: '/contractors/google-ads-for-roofing-contractors/',
    icon: 'Hammer',
    description: 'High-ticket roof replacements, storm damage repairs, and commercial re-roofing leads.',
    badge: 'Full Replacements & Repair',
  },
  {
    title: 'Foundation Repair',
    companyName: 'Carolina Foundation Pros',
    slug: 'foundation-repair',
    serviceUrl: '/contractors/google-ads-for-foundation-repair-contractors/',
    icon: 'ShieldCheck',
    description: 'Piering, underpinning, crawl space encapsulation, and structural waterproofing.',
    badge: 'Structural Piering & Basements',
  },
  {
    title: 'HVAC',
    companyName: 'NC Heating & Air',
    slug: 'hvac',
    serviceUrl: '/contractors/google-ads-for-hvac-contractors/',
    icon: 'ThermometerSnowflake',
    description: 'AC replacements, furnace installs, emergency repairs, and high-margin system swaps.',
    badge: 'System Swaps & Service',
  },
  {
    title: 'Plumbing',
    companyName: 'Pro Flow Plumbing & Drain',
    slug: 'plumbing',
    serviceUrl: '/contractors/google-ads-for-plumbing-contractors/',
    icon: 'Wrench',
    description: 'Emergency repipes, sewer line replacements, water heaters, and hydro jetting.',
    badge: 'Emergency & Repipes',
  },
  {
    title: 'Home Remodeling',
    companyName: 'Home Repair Service',
    slug: 'remodeling',
    serviceUrl: '/contractors/google-ads-for-remodeling-contractors/',
    icon: 'PaintRoller',
    description: 'Kitchen remodels, bathroom renovations, and whole-home custom remodeling projects.',
    badge: 'Kitchens & Baths',
  },
  {
    title: 'Window & Door',
    companyName: 'Universal Windows Direct of Charlotte',
    slug: 'windows-doors',
    serviceUrl: '/contractors/google-ads-for-window-door-contractors/',
    icon: 'DoorClosed',
    description: 'Whole-house window replacements, custom entry doors, and energy-efficient upgrades.',
    badge: 'Full House Replacement',
  },
];

const ContractorsServed: React.FC = () => {
  return (
    <section id="trades" className="relative bg-cream py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal y={18}>
            <Eyebrow icon="Building2">Serving Local Service Contractors</Eyebrow>
          </Reveal>
          <MaskHeading
            lines={['Local Service Contractors', 'We Drive High-Ticket Leads For']}
            className="mt-5 h-section"
            delay={80}
          />
          <Reveal delay={160} y={16}>
            <p className="mt-5 body-lg max-w-2xl mx-auto">
              We specialize strictly in local service contractors. Our battle-tested Google Ads campaigns are custom-built for high-ticket home services.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contractorTrades.map((trade, i) => (
            <Reveal key={trade.slug} delay={80 + (i % 3) * 80} y={24}>
              <Link
                to={trade.serviceUrl}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-white p-7 shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lift h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-all duration-500 ease-smooth group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                      <Icon name={trade.icon} className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span className="rounded-full bg-cream px-3 py-1 text-[0.75rem] font-bold text-ink/70 border border-black/[0.04]">
                      {trade.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[1.25rem] font-black text-ink group-hover:text-brand transition-colors duration-300">
                    {trade.title}
                  </h3>
                  <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-md bg-brand-soft/60 px-2.5 py-1 text-[0.8125rem] font-bold text-brand">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{trade.companyName}</span>
                  </div>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-warm">
                    {trade.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.04] flex items-center justify-between text-[0.8125rem] font-bold text-brand">
                  <span>View Google Ads Strategy</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContractorsServed;
