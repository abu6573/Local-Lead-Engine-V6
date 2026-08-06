import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Btn, ChevronField, Eyebrow } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const NotFound: React.FC = () => (
  <div className="min-h-screen bg-cream">
    <SiteHeader />
    <main>
      <section className="relative overflow-hidden py-32 sm:py-40">
        <ChevronField className="pointer-events-none absolute -right-16 top-20 h-[380px] w-[380px] text-brand/30 opacity-40" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-brand/[0.06] blur-3xl" />

        <div className="shell relative mx-auto max-w-[40rem] text-center">
          <Reveal y={18}>
            <Eyebrow icon="Compass">Page Not Found</Eyebrow>
          </Reveal>

          <Reveal delay={80} y={24}>
            <p className="mt-6 text-[clamp(4.5rem,14vw,9rem)] font-extrabold leading-none tracking-tighter text-brand/20">
              404
            </p>
          </Reveal>

          <MaskHeading
            lines={['This Page Slipped', 'Out of the Index']}
            as="h1"
            className="mt-2 h-section"
          />

          <Reveal delay={200} y={22}>
            <p className="mx-auto mt-5 max-w-[30rem] body-lg">
              The link may be broken or the page moved. Try one of the destinations below, or head
              back to the homepage.
            </p>
          </Reveal>

          <Reveal delay={280} y={20} className="mt-9 flex flex-wrap justify-center gap-3.5">
            <Btn to="/" size="lg">
              Back to Home
            </Btn>
            <Btn to="/contact" variant="outline" size="lg">
              Contact Us
            </Btn>
          </Reveal>

          <Reveal delay={360} y={20} className="mt-12">
            <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-warm-light">
              Popular pages
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2.5">
              {quickLinks.map((l) => (
                <Btn key={l.label} to={l.href} variant="outline" size="sm" arrow={false}>
                  {l.label}
                </Btn>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
);

export default NotFound;
