import React, { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';

import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import { Btn, Eyebrow, Icon } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';
import { contactDetails, faqs } from '@/lib/site-data';
import { db } from '@/lib/db';

type Status = 'idle' | 'loading' | 'sent' | 'error';

const detailCards = [
  {
    icon: 'MapPin',
    title: 'Our Office',
    lines: contactDetails.address,
  },
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
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setError('');

    try {
      // 1. Save the enquiry.
      const { data: rows, error: insertError } = await db
        .from('contact_submissions')
        .insert({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim() || null,
          message: form.message.trim(),
          source: 'contact-page',
        })
        .select('id');

      if (insertError) throw new Error(insertError.message);

      const submissionId = rows?.[0]?.id ?? Date.now();

      // 2. Register the person in the CRM (never blocks the success state).
      try {
        await db.rpc('crm_submit_contact', {
          p_email: form.email.trim(),
          p_name: form.name.trim() || null,
          p_phone: null,
          p_sms_opt_in: false,
          p_source: 'contact-page',
          p_metadata: {
            company: form.company.trim(),
            message: form.message.trim().slice(0, 500),
          },
        });
      } catch (crmErr) {
        console.warn('CRM capture skipped', crmErr);
      }

      // 3. Fire the owner notification email. A refusal must not fail the form.
      Promise.resolve(
        db.functions.invoke('notify-enquiry', {
          body: { ...form, submissionId, notifyTo: contactDetails.email },
        }),
      ).catch((err) => console.warn('notification skipped', err));


      window.supercool?.track('form_submit', { form: 'contact-page' });

      setStatus('sent');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError(
        err instanceof Error
          ? err.message
          : 'We could not send that just now. Please email us directly.',
      );
    }
  };

  const field =
    'w-full rounded-2xl border border-black/[0.09] bg-white px-4 py-3.5 text-[0.9375rem] text-ink outline-none transition-all duration-300 placeholder:text-warm-light focus:border-brand focus:ring-4 focus:ring-brand/10';

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main>
        <PageHero
          crumb="Contact Us"
          eyebrow="Book Strategy Call"
          eyebrowIcon="PhoneCall"
          titleLines={['Book Your Free', 'Google Ads Strategy Call']}
          intro="Tell us about your contracting business. We will analyze your service area, audit your Google Ads setup, and show you how to generate exclusive booked jobs."
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
                  Prefer to skip the form? Every channel below reaches the same team.
                </p>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {detailCards.map((c, i) => (
                  <Reveal
                    key={c.title}
                    delay={80 + i * 80}
                    y={24}
                    className="group rounded-[1.5rem] border border-black/[0.06] bg-white p-6 transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-card"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand transition-all duration-500 ease-smooth group-hover:bg-brand group-hover:text-white">
                      <Icon name={c.icon} className="h-5 w-5" strokeWidth={1.9} />
                    </span>
                    <h3 className="mt-5 text-[1rem] font-bold text-ink">{c.title}</h3>
                    <div className="mt-2 space-y-0.5">
                      {c.lines.map((l) =>
                        c.href ? (
                          <a
                            key={l}
                            href={c.href}
                            className="block text-[0.9375rem] text-warm transition-colors hover:text-brand"
                          >
                            {l}
                          </a>
                        ) : (
                          <p key={l} className="text-[0.9375rem] text-warm">
                            {l}
                          </p>
                        ),
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={340} y={24} className="mt-8">
                <div className="rounded-[1.5rem] bg-navy p-7">
                  <p className="text-[1.0625rem] font-bold text-white">
                    Want the free opportunity audit?
                  </p>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/65">
                    Mention your domain in the message and we will include three specific
                    opportunities we can see from the outside.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* ---- form ---- */}
            <Reveal
              y={30}
              className="rounded-[2rem] border border-black/[0.06] bg-white p-7 shadow-card sm:p-9"
            >
              <Eyebrow icon="Send">Send a Message</Eyebrow>
              <h2 className="mt-4 text-[clamp(1.5rem,2.4vw,2rem)] font-bold tracking-tight text-ink">
                Tell us about your project
              </h2>

              {status === 'sent' ? (
                <div className="mt-8 rounded-[1.5rem] bg-cream p-8 text-center">
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="h-6 w-6" strokeWidth={2.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">Message received</h3>
                  <p className="mx-auto mt-2.5 max-w-[24rem] text-[0.9375rem] leading-relaxed text-warm">
                    Thanks for reaching out. Your enquiry is saved and a strategist will reply within
                    one business day.
                  </p>
                  <div className="mt-7 flex justify-center">
                    <Btn onClick={() => setStatus('idle')} variant="outline" size="md" arrow={false}>
                      Send another message
                    </Btn>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-7 space-y-5" noValidate={false}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="c-name"
                        className="mb-2 block text-[0.875rem] font-semibold text-ink"
                      >
                        Full name
                      </label>
                      <input
                        id="c-name"
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
                        className="mb-2 block text-[0.875rem] font-semibold text-ink"
                      >
                        Email address
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={set('email')}
                        placeholder="jane@company.com"
                        className={field}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="c-company"
                      className="mb-2 block text-[0.875rem] font-semibold text-ink"
                    >
                      Company{' '}
                      <span className="font-normal text-warm-light">(optional)</span>
                    </label>
                    <input
                      id="c-company"
                      type="text"
                      value={form.company}
                      onChange={set('company')}
                      placeholder="Company or domain name"
                      className={field}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="c-message"
                      className="mb-2 block text-[0.875rem] font-semibold text-ink"
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="c-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Tell us about your goals, current traffic and timeline."
                      className={`${field} resize-y`}
                    />
                  </div>

                  {status === 'error' && (
                    <p role="alert" className="text-[0.875rem] font-medium text-red-600">
                      {error}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-4 pt-1">
                    <Btn type="submit" size="lg" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Scheduling…' : 'Book Strategy Call'}
                    </Btn>
                    {status === 'loading' && (
                      <Loader2
                        className="h-5 w-5 animate-spin text-brand"
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                    )}
                    <p className="text-[0.8125rem] text-warm-light">
                      We reply within one business day.
                    </p>
                  </div>
                </form>
              )}
            </Reveal>
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

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {faqs.map((f, i) => (
                <Reveal
                  key={f.q}
                  delay={80 + i * 80}
                  y={24}
                  className="rounded-[1.5rem] border border-black/[0.06] bg-white p-6 transition-shadow duration-500 hover:shadow-card"
                >
                  <h3 className="text-[1rem] font-bold text-ink">{f.q}</h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-warm">{f.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Contact;
