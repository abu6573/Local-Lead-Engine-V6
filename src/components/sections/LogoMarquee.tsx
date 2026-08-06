import React from 'react';
import { marqueeLogos } from '@/lib/site-data';
import { Reveal } from '@/components/motion';

const LogoRow = ({ ariaHidden }: { ariaHidden?: boolean }) => (
  <div
    className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
    aria-hidden={ariaHidden}
  >
    {marqueeLogos.map((logo) => (
      <div
        key={logo.name}
        className="group flex shrink-0 items-center justify-center transition-all duration-300"
      >
        <img
          src={logo.logo}
          alt={logo.name}
          title={logo.name}
          referrerPolicy="no-referrer"
          className="h-8 sm:h-10 w-auto max-w-[150px] sm:max-w-[180px] object-contain opacity-75 grayscale transition-all duration-300 ease-smooth group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
    ))}
  </div>
);

const LogoMarquee: React.FC = () => (
  <section className="bg-cream py-14 sm:py-18">
    <Reveal y={20} className="shell">
      <p className="text-center text-[0.875rem] font-semibold uppercase tracking-[0.14em] text-warm-light">
        Seamlessly Integrated With
      </p>
    </Reveal>

    <div className="marquee-mask group mt-8 flex overflow-hidden">
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        <LogoRow />
        <LogoRow ariaHidden />
      </div>
    </div>
  </section>
);

export default LogoMarquee;
