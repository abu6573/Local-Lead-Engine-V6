import React from 'react';
import { Check, Minus } from 'lucide-react';
import { planFeatureRows, plans } from '@/lib/site-data';
import { Btn, Eyebrow } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
      <div className="shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal y={18}>
            <Eyebrow icon="Layers">Plan Comparison</Eyebrow>
          </Reveal>
          <MaskHeading
            lines={['Compare Our Service Plans', 'For Local Contractors']}
            className="mt-5 h-section"
          />
        </div>

        {/* Feature Comparison Table Container */}
        <Reveal delay={120} y={24} className="mt-14">
          <div className="overflow-x-auto rounded-3xl border border-black/[0.08] bg-white shadow-lift">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-b border-black/[0.08] bg-slate-50/70">
                  <th className="w-2/5 p-6 text-base font-bold text-ink align-bottom">
                    Plan Overview
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.id}
                      className={`w-1/5 p-6 text-center align-top ${
                        plan.featured ? 'bg-brand/5' : ''
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        {plan.featured && (
                          <span className="mb-2 inline-block rounded-full bg-brand px-3 py-0.5 text-[0.75rem] font-bold text-white shadow-sm">
                            Most Popular
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
                        <p className="mt-1 text-[0.8125rem] text-warm-light leading-snug">
                          {plan.blurb}
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06]">
                {planFeatureRows.map((row, index) => (
                  <tr
                    key={row.name}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}
                  >
                    <td className="p-4 sm:px-6 text-sm font-medium text-ink">
                      {row.name}
                    </td>
                    <td className="p-4 text-center">
                      {row.starter ? (
                        <Check className="mx-auto h-5 w-5 text-brand stroke-[2.5]" aria-label="Included" />
                      ) : (
                        <Minus className="mx-auto h-5 w-5 text-slate-300 stroke-[2]" aria-label="Not included" />
                      )}
                    </td>
                    <td className={`p-4 text-center ${plans[1]?.featured ? 'bg-brand/[0.02]' : ''}`}>
                      {row.growth ? (
                        <Check className="mx-auto h-5 w-5 text-brand stroke-[2.5]" aria-label="Included" />
                      ) : (
                        <Minus className="mx-auto h-5 w-5 text-slate-300 stroke-[2]" aria-label="Not included" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.scale ? (
                        <Check className="mx-auto h-5 w-5 text-brand stroke-[2.5]" aria-label="Included" />
                      ) : (
                        <Minus className="mx-auto h-5 w-5 text-slate-300 stroke-[2]" aria-label="Not included" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-black/[0.08] bg-slate-50/70">
                  <td className="p-6 font-semibold text-ink">
                    Ready to get started?
                  </td>
                  {plans.map((plan) => (
                    <td
                      key={`cta-${plan.id}`}
                      className={`p-6 text-center ${
                        plan.featured ? 'bg-brand/5' : ''
                      }`}
                    >
                      <Btn
                        to="/strategy-call"
                        variant={plan.featured ? 'primary' : 'outline'}
                        size="sm"
                        className="mx-auto whitespace-nowrap px-5 py-2.5"
                      >
                        Choose Package
                      </Btn>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
