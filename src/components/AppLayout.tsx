import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Hero from '@/components/sections/Hero';
import AiFeatures from '@/components/sections/AiFeatures';
import LogoMarquee from '@/components/sections/LogoMarquee';
import GrowBusiness from '@/components/sections/GrowBusiness';
import StatsRow from '@/components/sections/StatsRow';
import LiveResults from '@/components/sections/LiveResults';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import BlogGrid from '@/components/sections/BlogGrid';
import CtaBanner from '@/components/sections/CtaBanner';

const AppLayout: React.FC = () => (
  <div className="min-h-screen bg-cream">
    <SiteHeader />
    <main>
      <Hero />
      <AiFeatures />
      <LogoMarquee />
      <GrowBusiness />
      <StatsRow />
      <LiveResults />
      <Projects />

      <Testimonials />
      <Pricing />
      <BlogGrid />
      <CtaBanner />
    </main>
    <SiteFooter />
  </div>
);

export default AppLayout;
