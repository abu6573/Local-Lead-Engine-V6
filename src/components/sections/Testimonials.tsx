import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/site-data';
import { Avatar, Stars } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';

const Testimonials: React.FC = () => {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  const go = (dir: number) =>
    setI((prev) => (prev + dir + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <Reveal
          y={40}
          className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-ink to-navy px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 shadow-card"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/20 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            {/* ---- quote side ---- */}
            <div>
              <MaskHeading
                lines={['What Customer', 'Say About Us']}
                className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold leading-[1.1] tracking-tight text-white"
              />

              <div key={i} className="mt-9 animate-fade-in">
                <div className="flex items-center gap-3.5">
                  <Avatar name={t.name} size={48} index={i} />
                  <div>
                    <p className="text-[1.0625rem] font-bold text-white">
                      {t.name} <span className="font-normal text-white/40">\</span>{' '}
                      <span className="text-white/60">{t.role}</span>
                    </p>
                  </div>
                </div>

                <Quote
                  className="mt-7 h-8 w-8 text-brand"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <blockquote className="mt-3 max-w-[34rem] text-[1.0625rem] leading-[1.8] text-white/75 sm:text-[1.125rem]">
                  {t.quote}
                </blockquote>

                <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <Stars className="h-[1.05rem] w-[1.05rem]" />
                  <span className="text-[0.9375rem] font-bold text-white">
                    {t.rating}{' '}
                    <span className="font-medium text-white/55">{t.platform}</span>
                  </span>
                </div>
              </div>

              <div className="mt-9 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-brand hover:bg-brand"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-brand hover:bg-brand"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </button>
                <div className="ml-2 flex items-center gap-1.5" aria-hidden="true">
                  {testimonials.map((_, d) => (
                    <span
                      key={d}
                      className={`h-1.5 rounded-full transition-all duration-500 ease-smooth ${
                        d === i ? 'w-6 bg-brand' : 'w-1.5 bg-white/25'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ---- image side ---- */}
            <div className="relative mx-auto w-full max-w-[24rem] lg:max-w-none">
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-dark/40">
                <img
                  src="https://ik.imagekit.io/Localleadengine/Google%20Ads%20Dashboard.png"
                  alt="Google Ads Dashboard performance analytics"
                  className="w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              <span className="absolute left-4 top-4 rounded-full bg-brand px-3.5 py-1.5 text-[0.75rem] font-bold text-white shadow-chip">
                Recommendations
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
