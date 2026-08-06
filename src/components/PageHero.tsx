import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ChevronField, Eyebrow } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';

const PageHero = ({
  eyebrow,
  eyebrowIcon = 'Sparkles',
  titleLines,
  intro,
  crumb,
}: {
  eyebrow: string;
  eyebrowIcon?: string;
  titleLines: string[];
  intro: string;
  crumb: string;
}) => (
  <section className="relative overflow-hidden bg-cream pb-14 pt-32 sm:pb-20 sm:pt-40">
    <ChevronField className="pointer-events-none absolute -right-20 top-16 h-[360px] w-[360px] text-brand/30 opacity-40" />
    <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand/[0.06] blur-3xl" />

    <div className="shell relative">
      <Reveal y={16} className="flex items-center gap-1.5 text-[0.8125rem] font-medium">
        <Link to="/" className="text-warm-light transition-colors hover:text-brand">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-warm-light" strokeWidth={2.2} aria-hidden="true" />
        <span className="text-ink">{crumb}</span>
      </Reveal>

      <div className="mt-7 max-w-5xl">
        <Reveal y={18}>
          <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>
        </Reveal>
        <MaskHeading lines={titleLines} as="h1" className="mt-5 h-display" />
        <Reveal delay={200} y={22}>
          <p className="mt-6 max-w-[38rem] body-lg">{intro}</p>
        </Reveal>
      </div>
    </div>
  </section>
);

export default PageHero;
