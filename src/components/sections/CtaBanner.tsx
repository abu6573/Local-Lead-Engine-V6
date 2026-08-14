import React from 'react';
import { Check } from 'lucide-react';
import { Btn, ChevronField, Eyebrow } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';

const CtaBanner: React.FC = () => (
  <section className="bg-cream pb-20 pt-4 sm:pb-24 lg:pb-28">
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
            lines={['Ready to Generate More Booked Estimates?']}
            className="mt-5 h-section"
          />

          <Reveal delay={140} y={20}>
            <p className="mt-5 w-full body-lg">
              We'll review your current Google Ads strategy, identify opportunities to improve performance, and recommend the next steps to help you generate more qualified estimate requests.
            </p>
          </Reveal>

          <Reveal delay={220} y={20} className="mt-9 flex flex-wrap items-center gap-4">
            <Btn
              to="/strategy-call"
              size="lg"
              onClick={() => window.supercool?.track('cta_click', { cta: 'cta-banner-book-strategy' })}
            >
              Book Strategy Call
            </Btn>
            <Btn
              to="/contact"
              variant="outline"
              size="lg"
              onClick={() => window.supercool?.track('cta_click', { cta: 'cta-banner-free-audit' })}
            >
              Get Free Audit
            </Btn>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-ink sm:ml-2">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-brand stroke-[2.5]" aria-hidden="true" />
                Free Strategy Call
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-brand stroke-[2.5]" aria-hidden="true" />
                Google Ads Review
              </span>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CtaBanner;
