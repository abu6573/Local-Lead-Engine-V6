import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check, Loader2, Sparkles, Clock, Globe, CheckCircle2 } from 'lucide-react';

import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import Faq from '@/components/Faq';
import { Btn, Eyebrow, Icon } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';
import { contactDetails } from '@/lib/site-data';
import { db } from '@/lib/db';
import { getStoredAttribution, detectAttribution } from '@/lib/attribution';

type Status = 'idle' | 'loading' | 'sent' | 'error';

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSdyeb0yQ04Z5QLgkE0WKfdLUqiKpNPxTPtSR0VZPz5pnc-uig/formResponse';

const detailCards = [
  ...(contactDetails.address.length > 0
    ? [
        {
          icon: 'MapPin',
          title: 'Our Office',
          lines: contactDetails.address,
        },
      ]
    : []),
  {
    icon: 'Mail',
    title: 'Email Us',
    lines: [contactDetails.email],
    href: `mailto:${contactDetails.email}`,
  },
  {
    icon: 'Phone',
    title: 'Call Us',
    lines: [contactDetails.phone],
    href: `tel:${contactDetails.phone.replace(/[^\d+]/g, '')}`,
  },
  {
    icon: 'Clock',
    title: 'Office Hours',
    lines: [contactDetails.hours],
  },
];

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const planFromQuery = searchParams.get('plan') || searchParams.get('package') || '';
  const utmSourceQuery = searchParams.get('utm_source') || searchParams.get('source') || '';
  const utmMediumQuery = searchParams.get('utm_medium') || searchParams.get('medium') || '';
  const utmCampaignQuery = searchParams.get('utm_campaign') || searchParams.get('campaign') || '';

  const initialAttribution = getStoredAttribution() || detectAttribution();

  const [form, setForm] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
    selectedPlan: planFromQuery,
    utmSource: utmSourceQuery || initialAttribution.utm_source || 'direct',
    utmMedium: utmMediumQuery || initialAttribution.utm_medium || 'none',
    utmCampaign: utmCampaignQuery || initialAttribution.utm_campaign || 'direct',
  });

  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  // Sync parameters if query changes
  useEffect(() => {
    const attr = getStoredAttribution() || detectAttribution();
    setForm((prev) => ({
      ...prev,
      selectedPlan: planFromQuery || prev.selectedPlan,
      utmSource: utmSourceQuery || attr.utm_source || prev.utmSource || 'direct',
      utmMedium: utmMediumQuery || attr.utm_medium || prev.utmMedium || 'none',
      utmCampaign: utmCampaignQuery || attr.utm_campaign || prev.utmCampaign || 'direct',
    }));
  }, [planFromQuery, utmSourceQuery, utmMediumQuery, utmCampaignQuery]);

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    // 1. Build Google Form POST payload
    const formData = new URLSearchParams();
    formData.append('entry.1629739375', form.name.trim());
    formData.append('entry.1070076411', form.email.trim());
    formData.append('entry.987347085', form.website.trim());
    formData.append('entry.1999994714', form.message.trim());
    formData.append('entry.1675449722', form.selectedPlan.trim() || 'General Consultation');
    formData.append('entry.2070136147', form.utmSource.trim());
    formData.append('entry.1808792628', form.utmMedium.trim());
    formData.append('entry.1249788727', form.utmCampaign.trim());

    // Fire fetch to Google Forms endpoint
    try {
      fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      }).catch((err) => console.warn('Fetch submission note:', err));
    } catch (err) {
      console.warn('Google form fetch dispatch error:', err);
    }

    // 2. Also send beacon as backup
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      try {
        const beaconData = new FormData();
        beaconData.append('entry.1629739375', form.name.trim());
        beaconData.append('entry.1070076411', form.email.trim());
        beaconData.append('entry.987347085', form.website.trim());
        beaconData.append('entry.1999994714', form.message.trim());
        beaconData.append('entry.1675449722', form.selectedPlan.trim() || 'General Consultation');
        beaconData.append('entry.2070136147', form.utmSource.trim());
        beaconData.append('entry.1808792628', form.utmMedium.trim());
        beaconData.append('entry.1249788727', form.utmCampaign.trim());
        navigator.sendBeacon(GOOGLE_FORM_ACTION, beaconData);
      } catch {
        // Ignore beacon fallback error
      }
    }

    // 3. Gracefully log to database / CRM (non-blocking)
    try {
      db.from('contact_submissions').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.website.trim() || null,
        message: `${form.selectedPlan ? `[Plan: ${form.selectedPlan}] ` : ''}${form.message.trim()}`,
        source: 'contact-page',
      });
    } catch (dbErr) {
      console.warn('Database save non-blocking warning:', dbErr);
    }

    window.supercool?.track?.('form_submit', {
      form: 'contact-page',
      plan: form.selectedPlan,
    });

    // Switch UI to confirmation & calendar
    setStatus('sent');

    // Scroll smoothly to calendar section
    setTimeout(() => {
      const calElement = document.getElementById('booking-calendar-section');
      if (calElement) {
        calElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const field =
    'w-full rounded-2xl border border-black/[0.09] bg-white px-4 py-3.5 text-[0.9375rem] text-ink outline-none transition-all duration-300 placeholder:text-warm-light focus:border-brand focus:ring-4 focus:ring-brand/10';

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <PageHero
          crumb="Contact Us"
          eyebrow="Get In Touch"
          eyebrowIcon="Mail"
          titleLines={['Get In Touch With', 'Our Google Ads Team']}
          intro="Have questions about our Google Ads management or want to discuss your contracting goals? Fill out the form below or schedule a strategy session."
        />

        <section className="pb-20 sm:pb-24">
          <div className="shell grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            {/* ---- details ---- */}
            <div>
              <Reveal y={20}>
                <h2 className="text-[clamp(1.4rem,2.2vw,1.85rem)] font-bold tracking-tight text-ink">
                  Contact details
                </h2>
                <p className="mt-3 max-w-[26rem] text-[0.9375rem] leading-relaxed text-warm">
                  Prefer to reach out directly? Every channel below connects with our contractor marketing team.
                </p>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {detailCards.map((c, i) => (
                  <Reveal
                    key={c.title}
                    delay={80 + i * 80}
                    y={24}
                    className="group rounded-[1.5rem] border border-black/[0.06] bg-white p-6 transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-card min-w-0"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand transition-all duration-500 ease-smooth group-hover:bg-brand group-hover:text-white">
                      <Icon name={c.icon} className="h-5 w-5" strokeWidth={1.9} />
                    </span>
                    <h3 className="mt-5 text-[1rem] font-bold text-ink">{c.title}</h3>
                    <div className="mt-2 space-y-0.5 min-w-0">
                      {c.lines.map((l) =>
                        c.href ? (
                          <a
                            key={l}
                            href={c.href}
                            className="block break-all text-[0.875rem] font-medium leading-relaxed text-warm transition-colors hover:text-brand"
                            title={l}
                          >
                            {l}
                          </a>
                        ) : (
                          <p key={l} className="text-[0.875rem] leading-relaxed text-warm">
                            {l}
                          </p>
                        ),
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={340} y={24} className="mt-8">
                <div className="rounded-[1.5rem] bg-navy p-7 text-white">
                  <div className="flex items-center gap-2 text-brand font-semibold text-sm">
                    <Sparkles className="h-4 w-4" /> Free Opportunity Audit
                  </div>
                  <p className="mt-2 text-[1.0625rem] font-bold">
                    Include your website domain
                  </p>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/70">
                    We will analyze your local market, negative keyword waste, and competitor Google Ads positioning before our initial conversation.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* ---- form & calendar response ---- */}
            <div id="booking-calendar-section">
              {/* Hidden target iframe for seamless background Google Form submission */}
              <iframe
                name="google_form_hidden_iframe"
                id="google_form_hidden_iframe"
                style={{ display: 'none', width: 0, height: 0, border: 0 }}
                tabIndex={-1}
                aria-hidden="true"
                title="Google Form Target Frame"
              />
              <Reveal
                y={30}
                className="rounded-[2rem] border border-black/[0.06] bg-white p-6 shadow-card sm:p-9"
              >
                {status === 'sent' ? (
                  <div>
                    {/* Confirmation Header */}
                    <div className="rounded-2xl bg-brand/5 border border-brand/20 p-6 sm:p-7 text-center">
                      <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-soft">
                        <Check className="h-7 w-7" strokeWidth={2.8} aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-2xl font-extrabold text-ink">
                        Information Received!
                      </h3>
                      <p className="mx-auto mt-2 max-w-[28rem] text-[0.9375rem] leading-relaxed text-warm">
                        Thank you{form.name ? `, ${form.name}` : ''}. Your inquiry and project details have been recorded.
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 text-xs font-semibold">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        Step 1 Complete: Form details saved
                      </div>
                    </div>

                    {/* Step 2: Live Calendar Iframe */}
                    <div className="mt-8 border-t border-black/[0.06] pt-6">
                      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-wider">
                            <Sparkles className="h-3.5 w-3.5" /> Step 2 of 2
                          </div>
                          <h4 className="mt-1 text-lg sm:text-xl font-bold text-ink">
                            Schedule Your Free Strategy Call
                          </h4>
                          <p className="text-xs sm:text-sm text-warm mt-0.5">
                            Pick a convenient time on the live calendar below to discuss your campaigns.
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-warm bg-cream px-3 py-1.5 rounded-full w-fit">
                          <Clock className="h-3.5 w-3.5 text-brand" /> 30-min Video / Phone
                        </div>
                      </div>

                      <div className="relative w-full overflow-hidden rounded-2xl border border-black/[0.08] bg-white min-h-[640px] shadow-soft">
                        <iframe
                          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ15fsswPr1PZYePgzM50hX7AsXtKYtaIy5vNUw1fKvT5TTCRiMqqUcBUV5pNVI6M7pA4jBaUYsE?gv=true"
                          style={{ border: 0, width: '100%', height: '680px', minHeight: '600px' }}
                          frameBorder="0"
                          title="Schedule a Free Strategy Call"
                          className="w-full"
                        />
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-cream p-4 text-xs text-warm">
                        <p>
                          Need to submit another inquiry or modify details?
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setStatus('idle');
                            setForm({
                              name: '',
                              email: '',
                              website: '',
                              message: '',
                              selectedPlan: '',
                              utmSource: '',
                              utmMedium: '',
                              utmCampaign: '',
                            });
                          }}
                          className="font-bold text-brand hover:underline cursor-pointer"
                        >
                          Submit Another Message
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Eyebrow icon="Send">Send a Message</Eyebrow>
                    <h2 className="mt-4 text-[clamp(1.5rem,2.4vw,2rem)] font-bold tracking-tight text-ink">
                      Tell us about your project
                    </h2>
                    <p className="mt-2 text-[0.875rem] text-warm">
                      Fill in your details below. After submitting, you can immediately lock in a live strategy call on our calendar.
                    </p>

                    <form
                      action={GOOGLE_FORM_ACTION}
                      method="POST"
                      target="google_form_hidden_iframe"
                      onSubmit={submit}
                      className="mt-6 space-y-4"
                      noValidate={false}
                    >
                      {/* Hidden Fields for UTMs and Selected Plan */}
                      <input
                        type="hidden"
                        name="entry.1675449722"
                        value={form.selectedPlan || 'General Consultation'}
                      />
                      <input
                        type="hidden"
                        name="entry.2070136147"
                        value={form.utmSource}
                      />
                      <input
                        type="hidden"
                        name="entry.1808792628"
                        value={form.utmMedium}
                      />
                      <input
                        type="hidden"
                        name="entry.1249788727"
                        value={form.utmCampaign}
                      />

                      {/* Full Name & Email Address */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="c-name"
                            className="mb-1.5 block text-[0.875rem] font-semibold text-ink"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="c-name"
                            name="entry.1629739375"
                            type="text"
                            required
                            value={form.name}
                            onChange={set('name')}
                            placeholder="Jane Halliwell"
                            className={field}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="c-email"
                            className="mb-1.5 block text-[0.875rem] font-semibold text-ink"
                          >
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="c-email"
                            name="entry.1070076411"
                            type="email"
                            required
                            value={form.email}
                            onChange={set('email')}
                            placeholder="jane@company.com"
                            className={field}
                          />
                        </div>
                      </div>

                      {/* Website Link */}
                      <div>
                        <label
                          htmlFor="c-website"
                          className="mb-1.5 block text-[0.875rem] font-semibold text-ink"
                        >
                          Website Link
                        </label>
                        <div className="relative">
                          <input
                            id="c-website"
                            name="entry.987347085"
                            type="text"
                            value={form.website}
                            onChange={set('website')}
                            placeholder="https://yourcontractingbusiness.com"
                            className={`${field} pl-10`}
                          />
                          <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-warm-light" />
                        </div>
                      </div>

                      {/* How can we help? */}
                      <div>
                        <label
                          htmlFor="c-message"
                          className="mb-1.5 block text-[0.875rem] font-semibold text-ink"
                        >
                          How can we help? <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="c-message"
                          name="entry.1999994714"
                          required
                          rows={4}
                          value={form.message}
                          onChange={set('message')}
                          placeholder="Tell us about your services, target cities, and campaign goals."
                          className={`${field} resize-y`}
                        />
                      </div>

                      {status === 'error' && (
                        <p role="alert" className="text-[0.875rem] font-medium text-red-600">
                          {error}
                        </p>
                      )}

                      <div className="pt-2">
                        <Btn type="submit" size="lg" disabled={status === 'loading'} className="w-full sm:w-auto">
                          {status === 'loading' ? (
                            <span className="flex items-center gap-2">
                              <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                            </span>
                          ) : (
                            'Get Free Audit'
                          )}
                        </Btn>
                      </div>
                    </form>
                  </div>
                )}
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---- faq ---- */}
        <section className="bg-cream-deep py-20 sm:py-24">
          <div className="shell mx-auto max-w-[46rem]">
            <div className="text-center">
              <Reveal y={18}>
                <Eyebrow icon="MessageCircleQuestion">Before You Ask</Eyebrow>
              </Reveal>
              <MaskHeading lines={['Common Questions']} className="mt-5 h-section" />
            </div>

            <Faq />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Contact;
