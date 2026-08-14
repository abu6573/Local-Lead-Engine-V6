import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles } from 'lucide-react';
import { Eyebrow } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';

const getTrackStyle = (val: number, min: number, max: number) => {
  const pct = Math.min(Math.max(((val - min) / (max - min)) * 100, 0), 100);
  return {
    background: `linear-gradient(to right, #0052FF 0%, #0052FF ${pct}%, #E2DDD3 ${pct}%, #E2DDD3 100%)`,
  };
};

const RoiCalculator: React.FC = () => {
  const [adSpend, setAdSpend] = useState<number>(3000);
  const [avgJobValue, setAvgJobValue] = useState<number>(4500);
  const [cpc, setCpc] = useState<number>(5);
  const [convRate, setConvRate] = useState<number>(10);
  const [closeRate, setCloseRate] = useState<number>(20);

  // Calculations derived from live results formula (Gross Profit = 39% of Revenue, POAS = Gross Profit / Ad Spend)
  const results = useMemo(() => {
    const safeCpc = Math.max(cpc, 1);
    const estimatedClicks = adSpend / safeCpc;
    const estimatedLeads = estimatedClicks * (convRate / 100);
    const closedJobs = estimatedLeads * (closeRate / 100);
    const grossRevenue = closedJobs * avgJobValue;
    const grossProfit = grossRevenue * 0.39;
    const roas = adSpend > 0 ? grossRevenue / adSpend : 0;
    const poas = adSpend > 0 ? grossProfit / adSpend : 0;
    const costPerLead = estimatedLeads > 0 ? adSpend / estimatedLeads : 0;
    const costPerAcquisition = closedJobs > 0 ? adSpend / closedJobs : 0;

    return {
      clicks: Math.round(estimatedClicks),
      leads: Math.round(estimatedLeads),
      closedJobs: Math.round(closedJobs * 10) / 10,
      grossRevenue: Math.round(grossRevenue),
      grossProfit: Math.round(grossProfit),
      roas: Math.round(roas * 10) / 10,
      poas: Math.round(poas * 10) / 10,
      costPerLead: Math.round(costPerLead),
      costPerAcquisition: Math.round(costPerAcquisition),
    };
  }, [adSpend, avgJobValue, cpc, convRate, closeRate]);

  return (
    <section id="calculator" className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
      <div className="shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal y={16}>
            <Eyebrow icon="Calculator">ROI Calculator</Eyebrow>
          </Reveal>
          <MaskHeading
            lines={['Calculate Your Google Ads Revenue Potential']}
            className="mt-4 h-section"
          />
          <Reveal delay={120} y={20}>
            <p className="mt-4 body-lg text-warm">
              Adjust your monthly ad budget and business metrics to project your estimated exclusive leads, booked jobs, and return on ad spend.
            </p>
          </Reveal>
        </div>

        {/* Calculator Body */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-center">
          {/* Controls Column (7 cols) */}
          <Reveal y={30} className="lg:col-span-7 rounded-[2rem] bg-white p-6 sm:p-8 md:p-10 shadow-card border border-black/[0.06]">
            <h3 className="text-xl font-bold text-ink flex items-center gap-2">
              <Calculator className="h-5 w-5 text-brand" />
              Campaign Parameters
            </h3>
            <p className="mt-1 text-sm text-warm">Customize your budget and business metrics</p>

            <div className="mt-8 space-y-6">
              {/* Monthly Ad Spend */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="adSpend" className="text-sm font-bold text-ink flex items-center gap-1.5">
                    Monthly Ad Budget
                  </label>
                  <span className="text-lg font-extrabold text-brand bg-brand/10 px-3.5 py-1 rounded-full">
                    ${adSpend.toLocaleString()}
                  </span>
                </div>
                <input
                  id="adSpend"
                  type="range"
                  min={1000}
                  max={25000}
                  step={500}
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  style={getTrackStyle(adSpend, 1000, 25000)}
                  className="calc-slider mt-3"
                />
                <div className="flex justify-between text-xs text-warm-light mt-1.5 font-medium">
                  <span>$1,000/mo</span>
                  <span>$10,000/mo</span>
                  <span>$25,000/mo</span>
                </div>
              </div>

              {/* Avg Job Value */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="avgJobValue" className="text-sm font-bold text-ink">
                    Average Job / Ticket Value
                  </label>
                  <span className="text-base font-bold text-ink bg-cream-soft px-3 py-1 rounded-lg">
                    ${avgJobValue.toLocaleString()}
                  </span>
                </div>
                <input
                  id="avgJobValue"
                  type="range"
                  min={1000}
                  max={40000}
                  step={500}
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  style={getTrackStyle(avgJobValue, 1000, 40000)}
                  className="calc-slider mt-3"
                />
              </div>

              {/* Estimated CPC & Conversion Rates Grid */}
              <div className="grid gap-6 sm:grid-cols-2 pt-2">
                {/* Cost Per Click */}
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="cpc" className="text-sm font-bold text-ink">
                      Est. Cost Per Click (CPC)
                    </label>
                    <span className="text-sm font-bold text-ink bg-cream-soft px-2.5 py-1 rounded-lg">
                      ${cpc}
                    </span>
                  </div>
                  <input
                    id="cpc"
                    type="range"
                    min={4}
                    max={40}
                    step={1}
                    value={cpc}
                    onChange={(e) => setCpc(Number(e.target.value))}
                    style={getTrackStyle(cpc, 4, 40)}
                    className="calc-slider mt-3"
                  />
                </div>

                {/* Lead Conversion Rate */}
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="convRate" className="text-sm font-bold text-ink">
                      Landing Page Conv. Rate
                    </label>
                    <span className="text-sm font-bold text-ink bg-cream-soft px-2.5 py-1 rounded-lg">
                      {convRate}%
                    </span>
                  </div>
                  <input
                    id="convRate"
                    type="range"
                    min={5}
                    max={35}
                    step={1}
                    value={convRate}
                    onChange={(e) => setConvRate(Number(e.target.value))}
                    style={getTrackStyle(convRate, 5, 35)}
                    className="calc-slider mt-3"
                  />
                </div>
              </div>

              {/* Close Rate */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="closeRate" className="text-sm font-bold text-ink">
                    Estimate Close Rate (% of leads turned into jobs)
                  </label>
                  <span className="text-sm font-bold text-ink bg-cream-soft px-2.5 py-1 rounded-lg">
                    {closeRate}%
                  </span>
                </div>
                <input
                  id="closeRate"
                  type="range"
                  min={10}
                  max={60}
                  step={1}
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  style={getTrackStyle(closeRate, 10, 60)}
                  className="calc-slider mt-3"
                />
              </div>
            </div>
          </Reveal>

          {/* Results Column (5 cols) */}
          <Reveal y={30} delay={100} className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-[2rem] bg-gradient-to-br from-ink to-navy p-6 sm:p-8 md:p-10 text-white shadow-card relative overflow-hidden">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/20 blur-2xl" />

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-brand" />
                  Estimated Monthly Impact
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand">
                    {results.roas}x ROAS
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md">
                    {results.poas}x POAS
                  </span>
                </div>
              </div>

              {/* Main Revenue Headline */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Projected Monthly Gross Revenue
                </p>
                <p className="mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                  ${results.grossRevenue.toLocaleString()}
                </p>
              </div>

              {/* Net Profit & ROAS */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs text-white/70 font-medium">Est. Gross Profit</p>
                  <p className="mt-1 text-xl font-bold text-emerald-400">
                    +${results.grossProfit.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/70 font-medium">Est. Cost Per Lead</p>
                  <p className="mt-1 text-xl font-bold text-white">
                    ${results.costPerLead}
                  </p>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="mt-8 grid grid-cols-3 gap-3 rounded-xl bg-white/5 p-4 backdrop-blur-sm border border-white/10 text-center">
                <div>
                  <p className="text-[0.6875rem] font-medium text-white/70 uppercase">Est. Clicks</p>
                  <p className="mt-1 text-lg font-bold text-white">{results.clicks}</p>
                </div>
                <div>
                  <p className="text-[0.6875rem] font-medium text-white/70 uppercase">Exclusive Leads</p>
                  <p className="mt-1 text-lg font-bold text-brand">{results.leads}</p>
                </div>
                <div>
                  <p className="text-[0.6875rem] font-medium text-white/70 uppercase">Closed Jobs</p>
                  <p className="mt-1 text-lg font-bold text-white">{results.closedJobs}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;

