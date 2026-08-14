import React from 'react';
import { Calendar, CheckCircle2, Clock, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import { Eyebrow, Btn, Icon } from '@/components/kit';
import { Reveal } from '@/components/motion';
import { contactDetails } from '@/lib/site-data';

const benefits = [
  {
    icon: CheckCircle2,
    title: 'Custom Local Market Audit',
    description: 'We review your service area ZIP codes and competitor ad visibility before the call.',
  },
  {
    icon: UserCheck,
    title: 'Direct Specialist Access',
    description: 'You speak directly with a dedicated contractor marketing strategist, not a sales representative.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero High-Pressure Sales',
    description: 'Get actionable insights and revenue projections you can use immediately, guaranteed.',
  },
];

const StrategyCall: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <PageHero
          crumb="Strategy Call"
          eyebrow="Free 1-on-1 Session"
          eyebrowIcon="Calendar"
          titleLines={['Schedule Your Free', 'Google Ads Strategy Call']}
          intro="Pick a date and time that works best for your team. We will analyze your local contracting market, review your Google Ads setup, and map out a step-by-step plan to generate exclusive booked jobs."
        />

        {/* ---- Calendar & Intro Section ---- */}
        <section className="pb-20 sm:pb-24">
          <div className="shell">
            {/* Highlights Grid */}
            <div className="mb-12 grid gap-6 sm:grid-cols-3">
              {benefits.map((b, i) => (
                <Reveal
                  key={b.title}
                  delay={i * 80}
                  y={20}
                  className="rounded-[1.5rem] border border-black/[0.06] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-[1.0625rem] font-bold text-ink">{b.title}</h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-warm">{b.description}</p>
                </Reveal>
              ))}
            </div>

            {/* Calendar Embed Wrapper */}
            <Reveal
              y={28}
              className="overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white p-4 sm:p-8 shadow-card"
            >
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-black/[0.06] pb-6">
                <div>
                  <div className="flex items-center gap-2 text-brand font-semibold text-sm">
                    <Sparkles className="h-4 w-4" /> Live Booking Calendar
                  </div>
                  <h2 className="mt-1 text-xl sm:text-2xl font-extrabold text-ink">
                    Select a Date & Time for Your Call
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-xs text-warm font-medium bg-cream-deep px-4 py-2 rounded-full w-fit">
                  <Clock className="h-4 w-4 text-brand" /> 30 Minutes • Video / Phone Call
                </div>
              </div>

              {/* Google Calendar Iframe */}
              <div className="relative w-full overflow-hidden rounded-xl bg-white min-h-[600px]">
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ15fsswPr1PZYePgzM50hX7AsXtKYtaIy5vNUw1fKvT5TTCRiMqqUcBUV5pNVI6M7pA4jBaUYsE?gv=true"
                  style={{ border: 0, width: '100%', height: '700px', minHeight: '600px' }}
                  frameBorder="0"
                  title="Schedule a Free Strategy Call"
                  className="w-full"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-cream p-4 text-xs text-warm">
                <p>
                  Having trouble finding a suitable time? Email us directly at{' '}
                  <a href={`mailto:${contactDetails.email}`} className="font-bold text-brand hover:underline">
                    {contactDetails.email}
                  </a>{' '}
                  or call{' '}
                  <a href={`tel:${contactDetails.phone.replace(/[^\d+]/g, '')}`} className="font-bold text-ink hover:underline">
                    {contactDetails.phone}
                  </a>.
                </p>
                <Btn to="/contact" variant="outline" size="sm" arrow={true}>
                  Send a Message Instead
                </Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default StrategyCall;
