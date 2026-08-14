import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { contactDetails, footerColumns } from '@/lib/site-data';

import { Wordmark } from '@/components/kit';
import { Reveal } from '@/components/motion';

const socials = [
  { name: 'Twitter', Icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', Icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Instagram', Icon: Instagram, href: 'https://instagram.com' },
  { name: 'Facebook', Icon: Facebook, href: 'https://facebook.com' },
];

const aiPrompt = encodeURIComponent('What is https://localleadengine.io/, and how can it help me?');

const aiOptions = [
  {
    name: 'Google AI Search',
    href: 'https://www.google.com/search?q=What+is+LocalLeadEngine.io%2C+and+how+can+it+help+me%3F&sca_esv=c22c990d6aa7f981&sxsrf=APpeQns_xdHpSVp-fY_eaYo5sM-GqTs8mQ%3A1786377289194&udm=50&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8cqu7ocb7U6ah0xpkIrGMK4CuEddQ3ZmQozcvkgnTNQKj906-ORFIK2UR8msyEJBwjHvmTN5b2gK7JkDyhtCEwf9HK1p4EJJWJ_IQyJOqgdeYqD8C2sazprCr-A6NFDdLydJK8kMO7PsZeOi0TL4b1zwdluuxeClYZ3BDcUt44vDAMjEuIhAY6qud8iC2YH90KPY1sxA&aep=1&ntc=1&cs=0&sa=X&ved=2ahUKEwivhIf-tZaWAxWmi-EIHYw7KWwQ2J8OegQIERAD&biw=2133&bih=1032&dpr=0.9&atvm=2&mstk=AUtExfATX-VuV1280dl4LX3PaoUz8zDvojKVLAmoyaOLxrv-mzBXykMmPat9N7PyedJRFk-Df3geFXZqPyurCNvspIHh0qL0Vk-nZwofJoosKkGABqIyiyaQ-NjsZLRjf_I9ZzlSnD7RPvZsiF21NOCduxPgzUkHSdO-J8tf6VRgtI7HLS1s4sCVjWRXeC3TYOdwqvzFozfaUmO0HJndmqlYJN2kNH2_0XH5O0GKozhQEEM6_3cDyouiL-BzbB64pBBTG90I-QAlgiJDJSUSeaukYD2inILZfCGB5I4VbncnItHpYiweYh-jI-8KaFZ0n4BfnSDucD2BrKW2uLR4uAc1RzSct4F_hbx_cWixYT55y_wfuddvZikEtM8&csuir=1&mtid=TvR5apneDrignesP58eIqQU',
    icon: (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: 'Perplexity',
    href: `https://www.perplexity.ai/search?q=${aiPrompt}`,
    icon: (
      <img
        src="https://ik.imagekit.io/Localleadengine/Perplexity.png"
        alt="Perplexity"
        className="h-4 w-4 shrink-0 object-contain"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    name: 'Claude',
    href: `https://claude.ai/new?q=${aiPrompt}`,
    icon: (
      <img
        src="https://ik.imagekit.io/Localleadengine/Claude.png"
        alt="Claude"
        className="h-4 w-4 shrink-0 object-contain"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    name: 'ChatGPT',
    href: `https://chatgpt.com/?q=${aiPrompt}`,
    icon: (
      <img
        src="https://ik.imagekit.io/Localleadengine/ChatGPT.png"
        alt="ChatGPT"
        className="h-4 w-4 shrink-0 object-contain"
        referrerPolicy="no-referrer"
      />
    ),
  },
];

const SiteFooter: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-cream-deep pt-16 sm:pt-20">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2.4fr]">
          <Reveal y={24}>
            <Wordmark tone="dark" />
            <p className="mt-4 max-w-[24rem] text-[0.9375rem] leading-relaxed text-warm">
              Google Ads Management for Local Service Contractors. We turn ready-to-buy homeowners into exclusive phone calls and booked jobs.
            </p>

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

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:pl-8">
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
                {contactDetails.address.length > 0 && (
                  <li>
                    {contactDetails.address[0]}
                    {contactDetails.address[1] && (
                      <>
                        <br />
                        {contactDetails.address[1]}
                      </>
                    )}
                  </li>
                )}
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
                    className="transition-colors duration-300 hover:text-brand text-nowrap"
                  >
                    {contactDetails.phone}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Ask AI Section */}
        <Reveal delay={320} y={20}>
          <div className="mt-12 border-t border-black/[0.08] pt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h4 className="text-[1rem] font-extrabold text-ink tracking-tight">Ask AI About Us</h4>
            <div className="flex flex-wrap items-center gap-2.5">
              {aiOptions.map((opt) => (
                <a
                  key={opt.name}
                  href={opt.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-[0.875rem] font-bold text-ink shadow-soft transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white hover:shadow-card"
                >
                  {opt.icon}
                  <span>{opt.name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-black/[0.08] py-7 text-center">
          <p className="text-[0.875rem] text-warm-light">
            Copyright © 2026 Local Lead Engine. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
