import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { images } from '@/lib/site-data';
import { Btn, ChevronField, Eyebrow, GoogleG } from '@/components/kit';

const headlineLines = ['More Booked Estimates.', 'Less Guesswork.'];

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setLoaded(true), 90);
    return () => window.clearTimeout(t);
  }, []);

  const rise = (delay: number) => ({
    transition:
      'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)',
    transitionDelay: `${delay}ms`,
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(28px)',
  });

  return (
    <section className="relative overflow-hidden bg-cream pb-28 pt-32 sm:pb-36 sm:pt-40 lg:pb-48">
      {/* decorative chevrons */}
      <ChevronField className="pointer-events-none absolute -left-24 top-24 h-[420px] w-[420px] text-brand/30 opacity-40" />
      <div className="pointer-events-none absolute -right-32 -top-20 h-[520px] w-[520px] rounded-full bg-brand/[0.07] blur-3xl" />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* ---- copy ---- */}
          <div>
            <div style={rise(0)}>
              <Eyebrow icon="Sparkles">We are Local Lead Engine</Eyebrow>
            </div>

            <h1 className="mt-6 h-display">
              {headlineLines.map((line, i) => (
                <span className="mask-line" key={line}>
                  <span
                    style={{
                      display: 'block',
                      transform: loaded ? 'translateY(0)' : 'translateY(115%)',
                      transition: 'transform 1s cubic-bezier(0.22,1,0.36,1)',
                      transitionDelay: `${140 + i * 110}ms`,
                    }}
                  >
                    {i === 0 ? (
                      <>
                        More Booked <span className="text-brand">Estimates.</span>
                      </>
                    ) : (
                      line
                    )}
                  </span>
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-[34rem] body-lg" style={rise(520)}>
              We build and manage Google Ads campaigns for local service contractors that generate more qualified estimate requests, reduce wasted ad spend, and turn more clicks into booked estimates.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5" style={rise(620)}>
              <Btn
                to="/contact"
                size="lg"
                onClick={() => window.supercool?.track('cta_click', { cta: 'hero-book-call' })}
              >
                Book Strategy Call
              </Btn>
              <Btn to="/services" variant="outline" size="lg">
                Explore Services
              </Btn>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-black/[0.07] pt-7"
              style={rise(720)}
            >
              <div>
                <p className="text-2xl font-extrabold text-ink">8x</p>
                <p className="text-[0.8125rem] text-warm-light">Average ROAS</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-ink">2.5x</p>
                <p className="text-[0.8125rem] text-warm-light">Average POAS</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-ink">98%</p>
                <p className="text-[0.8125rem] text-warm-light">Contractor retention</p>
              </div>
            </div>
          </div>

          {/* ---- portrait ---- */}
          <div
            className="relative mx-auto w-full max-w-[30rem] lg:max-w-none"
            style={{
              transition:
                'opacity 1.1s cubic-bezier(0.22,1,0.36,1), transform 1.2s cubic-bezier(0.22,1,0.36,1)',
              transitionDelay: '260ms',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'scale(1)' : 'scale(0.96)',
            }}
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-cream-dark">
              <ChevronField className="absolute inset-0 h-full w-full text-brand/50 opacity-50" />
              <img
                src={images.heroPortrait}
                alt="Contractor project manager on site discussing Google Ads growth strategy"
                width={1100}
                height={1473}
                className="relative w-full object-cover"
                loading="eager"
              />
            </div>

            {/* floating: growth pill */}
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

            {/* floating: google reviews card */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
