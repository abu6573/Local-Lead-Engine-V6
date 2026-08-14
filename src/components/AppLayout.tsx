import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Hero from '@/components/sections/Hero';
import AiFeatures from '@/components/sections/AiFeatures';
import LogoMarquee from '@/components/sections/LogoMarquee';
import GrowBusiness from '@/components/sections/GrowBusiness';
import StatsRow from '@/components/sections/StatsRow';
import ContractorsServed from '@/components/sections/ContractorsServed';
import RoiCalculator from '@/components/sections/RoiCalculator';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import CtaBanner from '@/components/sections/CtaBanner';
import Faq from '@/components/Faq';
import { Btn, Eyebrow } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';
import { faqs } from '@/lib/site-data';

const AppLayout: React.FC = () => (
  <div className="min-h-screen bg-cream">
    <SiteHeader />
    <main>
      <Hero />
      <AiFeatures />
      <LogoMarquee />
      <GrowBusiness />
      <StatsRow />
      <ContractorsServed />
      <RoiCalculator />
      <Projects />
      <Testimonials />
      <Pricing />

      {/* ---- faq ---- */}
      <section className="py-20 sm:py-24 border-t border-black/[0.06] bg-cream-deep">
        <div className="shell max-w-[52rem]">
          <div className="text-center">
            <Reveal y={18}>
              <Eyebrow icon="MessageCircleQuestion">Questions & Answers</Eyebrow>
            </Reveal>
            <MaskHeading lines={['Frequently Asked Questions']} className="mt-5 h-section" />
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBanner />
    </main>
    <SiteFooter />
  </div>
);

export default AppLayout;
