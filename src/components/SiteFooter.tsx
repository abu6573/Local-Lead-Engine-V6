import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Instagram, Linkedin, Loader2, Twitter, Check } from 'lucide-react';
import { contactDetails, footerColumns } from '@/lib/site-data';

import { Wordmark } from '@/components/kit';
import { Reveal } from '@/components/motion';
import { db } from '@/lib/db';

const socials = [
  { name: 'Twitter', Icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', Icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Instagram', Icon: Instagram, href: 'https://instagram.com' },
  { name: 'Facebook', Icon: Facebook, href: 'https://facebook.com' },
];

const SiteFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || state === 'loading') return;
    setState('loading');
    setMsg('');

    try {
      const { error } = await db.rpc('crm_submit_contact', {
        p_email: email.trim(),
        p_name: null,
        p_phone: null,
        p_sms_opt_in: false,
        p_source: 'footer-signup',
        p_metadata: { page: window.location.pathname },
      });
      if (error) throw new Error(error.message);

      window.supercool?.track('form_submit', { form: 'footer-signup' });
      setState('done');
      setMsg('You are on the list.');
      setEmail('');
    } catch (err) {
      setState('error');
      setMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <footer className="relative overflow-hidden bg-cream-deep pt-16 sm:pt-20">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2.4fr]">
          <Reveal y={24}>
            <Wordmark tone="dark" />
            <p className="mt-4 max-w-[24rem] text-[0.9375rem] leading-relaxed text-warm">
              Google Ads Management for Local Service Contractors. We turn ready-to-buy homeowners into exclusive phone calls and booked jobs.
            </p>

            <form onSubmit={subscribe} className="mt-6 max-w-[24rem]">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-1.5 pl-5 shadow-soft transition-shadow duration-300 focus-within:shadow-card">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent py-2.5 text-[0.9375rem] text-ink outline-none placeholder:text-warm-light"
                />
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-all duration-300 ease-smooth hover:scale-105 hover:bg-brand-light disabled:opacity-60"
                  aria-label="Subscribe to the newsletter"
                >
                  {state === 'loading' ? (
                    <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.2} />
                  ) : state === 'done' ? (
                    <Check className="h-4 w-4" strokeWidth={2.6} />
                  ) : (
                    <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                  )}
                </button>
              </div>
              {msg && (
                <p
                  role="status"
                  className={`mt-2.5 pl-1 text-[0.8125rem] font-medium ${
                    state === 'error' ? 'text-red-600' : 'text-brand'
                  }`}
                >
                  {msg}
                </p>
              )}
            </form>

            <div className="mt-7 flex items-center gap-2.5">
              {socials.map(({ name, Icon: S, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white"
                >
                  <S className="h-4 w-4" strokeWidth={2} />
                </a>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:pl-8">
            {footerColumns.map((col, i) => (
              <Reveal key={col.title} delay={80 + i * 70} y={24}>
                <h3 className="text-[0.9375rem] font-bold text-ink">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.href}
                        className="group inline-flex text-[0.9375rem] text-warm transition-colors duration-300 hover:text-brand"
                      >
                        <span className="bg-gradient-to-r from-brand to-brand bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                          {l.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            <Reveal delay={290} y={24}>
              <h3 className="text-[0.9375rem] font-bold text-ink">Contact</h3>
              <ul className="mt-4 space-y-2.5 text-[0.9375rem] text-warm">
                <li>
                  {contactDetails.address[0]}
                  <br />
                  {contactDetails.address[1]}
                </li>
                <li>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="transition-colors duration-300 hover:text-brand"
                  >
                    {contactDetails.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactDetails.phone.replace(/[^\d+]/g, '')}`}
                    className="transition-colors duration-300 hover:text-brand"
                  >
                    {contactDetails.phone}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/[0.08] py-7 sm:flex-row">
          <p className="text-[0.875rem] text-warm-light">
            Copyright © 2026 Local Lead Engine. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className="text-[0.875rem] text-warm-light transition-colors hover:text-brand"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-[0.875rem] text-warm-light transition-colors hover:text-brand"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
