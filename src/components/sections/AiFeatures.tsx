import React from 'react';
import { aiFeatures } from '@/lib/site-data';
import { Eyebrow, Icon, ReadMore } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';

const AiFeatures: React.FC = () => (
  <section id="services" className="relative bg-cream">
    <div className="shell">
      <Reveal
        y={40}
        className="-mt-20 rounded-[2rem] bg-white px-6 py-12 shadow-card sm:-mt-28 sm:px-10 sm:py-14 lg:-mt-36 lg:px-14 lg:py-16"
      >
        <div className="mx-auto max-w-[38rem] text-center">
          <Reveal y={18}>
            <Eyebrow icon="Sparkles">AI Powered Google Ads</Eyebrow>
          </Reveal>
          <MaskHeading
            lines={['High-Intent Google Ads', 'Built for Contractors']}
            className="mt-5 h-section"
            delay={80}
          />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {aiFeatures.map((f, i) => (
            <Reveal
              key={f.title}
              delay={120 + i * 90}
              y={28}
              className="group relative flex flex-col items-center text-center rounded-3xl border border-black/[0.06] bg-white p-7 transition-all duration-500 ease-smooth hover:-translate-y-2 hover:border-transparent hover:shadow-lift"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand/25 bg-brand-soft text-brand transition-all duration-500 ease-smooth group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                <Icon name={f.icon} className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <h3 className="mt-6 h-card">{f.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-warm">{f.body}</p>
              <div className="mt-6">
                <ReadMore to="/google-ads-for-local-service-contractors" />
              </div>
              <span className="pointer-events-none absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand to-transparent transition-transform duration-500 ease-smooth group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default AiFeatures;
