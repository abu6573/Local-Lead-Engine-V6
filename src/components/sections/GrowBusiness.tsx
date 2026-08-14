import React from 'react';
import { Eyebrow, Icon } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';

const GrowBusiness: React.FC = () => (
  <section id="features" className="bg-cream py-20 sm:py-24 lg:py-28">
    <div className="shell">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* ---- Image Column ---- */}
        <Reveal y={36} scale={0.97} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] shadow-card">
            <img
              src="https://ik.imagekit.io/Localleadengine/Exclusive%20Features?updatedAt=1786669658192"
              alt="Exclusive Features for Google Ads Management"
              width={1200}
              height={1500}
              className="aspect-[4/4.5] w-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </Reveal>

        {/* ---- Copy Column ---- */}
        <div className="mt-6 lg:mt-0">
          <Reveal y={20}>
            <Eyebrow icon="Sparkles">Exclusive Features</Eyebrow>
          </Reveal>

          <MaskHeading
            lines={['Grow Your Business with Google Ads Management']}
            className="mt-4 h-section"
          />

          <Reveal delay={140} y={22}>
            <p className="mt-4 text-[1rem] sm:text-[1.0625rem] leading-relaxed text-warm">
              Data-driven Google Ads solutions are transforming how local service contractors target high-intent homeowners, generate exclusive calls, and scale revenue.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <Reveal delay={220} y={26} className="group">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand/30 bg-brand/5 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon name="Sparkles" className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-[1.0625rem] font-bold text-ink">AI Powered Google Ads Solutions</h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-warm">
                Targeted Search & LSA campaigns built to drive high-intent search engine performance and instant estimate requests.
              </p>
            </Reveal>

            <Reveal delay={320} y={26} className="group">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand/30 bg-brand/5 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon name="TrendingUp" className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-[1.0625rem] font-bold text-ink">Search Engine Marketing Strategy</h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-warm">
                We specialize in crafting data-driven strategies to maximize website visibility, conversion rate, and return on ad spend.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GrowBusiness;
