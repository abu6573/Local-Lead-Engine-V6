import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '@/components/motion';
import { faqs } from '@/lib/site-data';

interface FaqProps {
  items?: readonly { readonly q: string; readonly a: string }[] | { q: string; a: string }[];
  className?: string;
}

export const Faq: React.FC<FaqProps> = ({ items = faqs, className = '' }) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={`mt-10 space-y-4 ${className}`}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <Reveal
            key={f.q}
            delay={60 + i * 60}
            y={20}
            className="overflow-hidden rounded-[1.25rem] border border-black/[0.06] bg-white shadow-soft transition-shadow duration-300 hover:shadow-card"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-7 cursor-pointer"
            >
              <span className="text-[1.0625rem] font-semibold text-ink">{f.q}</span>
              <span
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-500 ease-smooth ${
                  isOpen ? 'rotate-180 bg-brand text-white' : 'bg-cream text-brand'
                }`}
              >
                <ChevronDown className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
              </span>
            </button>
            <div
              className="grid overflow-hidden transition-all duration-500 ease-smooth"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
            >
              <div className="min-h-0">
                <p className="px-6 pb-6 text-[0.9375rem] leading-relaxed text-warm sm:px-7">
                  {f.a}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
};

export default Faq;
