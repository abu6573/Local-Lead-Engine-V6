import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Sparkles, TrendingUp, DollarSign, Users, Target } from 'lucide-react';
import { Eyebrow, Btn } from '@/components/kit';
import { MaskHeading, Reveal } from '@/components/motion';

interface TradePreset {
  id: string;
  name: string;
  avgJobValue: number;
  avgCpc: number;
  convRate: number;
  closeRate: number;
}

const TRADE_PRESETS: TradePreset[] = [
  { id: 'roofing', name: 'Roofing', avgJobValue: 12000, avgCpc: 18, convRate: 15, closeRate: 25 },
  { id: 'hvac', name: 'HVAC', avgJobValue: 4500, avgCpc: 14, convRate: 18, closeRate: 30 },
  { id: 'plumbing', name: 'Plumbing', avgJobValue: 2200, avgCpc: 12, convRate: 20, closeRate: 35 },
  { id: 'electrical', name: 'Electrical', avgJobValue: 1800, avgCpc: 10, convRate: 20, closeRate: 35 },
  { id: 'solar', name: 'Solar', avgJobValue: 20000, avgCpc: 22, convRate: 12, closeRate: 20 },
  { id: 'remodeling', name: 'Remodeling', avgJobValue: 25000, avgCpc: 16, convRate: 14, closeRate: 22 },
  { id: 'custom', name: 'Custom Trade', avgJobValue: 5000, avgCpc: 12, convRate: 15, closeRate: 25 },
];

const RoiCalculator: React.FC = () => {
  const [selectedTrade, setSelectedTrade] = useState<string>('roofing');
  const [adSpend, setAdSpend] = useState<number>(3500);
  const [avgJobValue, setAvgJobValue] = useState<number>(12000);
  const [cpc, setCpc] = useState<number>(18);
  const [convRate, setConvRate] = useState<number>(15);
  const [closeRate, setCloseRate] = useState<number>(25);

  // Form submission state
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  // Handle trade selection
  const handleSelectTrade = (tradeId: string) => {
    setSelectedTrade(tradeId);
    const preset = TRADE_PRESETS.find((t) => t.id === tradeId);
    if (preset && tradeId !== 'custom') {
      setAvgJobValue(preset.avgJobValue);
      setCpc(preset.avgCpc);
      setConvRate(preset.convRate);
      setCloseRate(preset.closeRate);
    }
  };

  // Calculations
  const results = useMemo(() => {
    const safeCpc = Math.max(cpc, 1);
    const estimatedClicks = adSpend / safeCpc;
    const estimatedLeads = estimatedClicks * (convRate / 100);
    const closedJobs = estimatedLeads * (closeRate / 100);
    const grossRevenue = closedJobs * avgJobValue;
    const netProfit = grossRevenue - adSpend;
    const roas = adSpend > 0 ? grossRevenue / adSpend : 0;
    const costPerLead = estimatedLeads > 0 ? adSpend / estimatedLeads : 0;
    const costPerAcquisition = closedJobs > 0 ? adSpend / closedJobs : 0;

    return {
      clicks: Math.round(estimatedClicks),
      leads: Math.round(estimatedLeads),
      closedJobs: Math.round(closedJobs * 10) / 10,
      grossRevenue: Math.round(grossRevenue),
      netProfit: Math.round(netProfit),
      roas: Math.round(roas * 10) / 10,
      costPerLead: Math.round(costPerLead),
      costPerAcquisition: Math.round(costPerAcquisition),
    };
  }, [adSpend, avgJobValue, cpc, convRate, closeRate]);

  const handleSubmitStrategy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;
    setSubmitted(true);
    if (window.supercool) {
      window.supercool.track('roi_calculator_submit', {
        trade: selectedTrade,
        adSpend,
        projectedRevenue: results.grossRevenue,
      });
    }
  };

  return (
    <section id="calculator" className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="shell">
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
              Select your industry trade and adjust your monthly ad budget to project your estimated exclusive leads, booked jobs, and return on ad spend.
            </p>
          </Reveal>
        </div>

        {/* Trade Selector Tabs */}
        <Reveal delay={180} y={20} className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {TRADE_PRESETS.map((trade) => {
            const isActive = selectedTrade === trade.id;
            return (
              <button
                key={trade.id}
                type="button"
                onClick={() => handleSelectTrade(trade.id)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-brand text-white shadow-chip scale-105'
                    : 'bg-white text-ink hover:bg-white/80 border border-black/5 shadow-soft'
                }`}
              >
                {trade.name}
              </button>
            );
          })}
        </Reveal>

        {/* Calculator Body */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-start">
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
                  <span className="text-lg font-extrabold text-brand bg-brand/10 px-3 py-1 rounded-full">
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
                  className="mt-3 w-full h-2 bg-cream-soft rounded-lg appearance-none cursor-pointer accent-brand"
                />
                <div className="flex justify-between text-xs text-warm-light mt-1 font-medium">
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
                  onChange={(e) => {
                    setAvgJobValue(Number(e.target.value));
                    setSelectedTrade('custom');
                  }}
                  className="mt-3 w-full h-2 bg-cream-soft rounded-lg appearance-none cursor-pointer accent-brand"
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
                    min={5}
                    max={40}
                    step={1}
                    value={cpc}
                    onChange={(e) => {
                      setCpc(Number(e.target.value));
                      setSelectedTrade('custom');
                    }}
                    className="mt-3 w-full h-2 bg-cream-soft rounded-lg appearance-none cursor-pointer accent-brand"
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
                    onChange={(e) => {
                      setConvRate(Number(e.target.value));
                      setSelectedTrade('custom');
                    }}
                    className="mt-3 w-full h-2 bg-cream-soft rounded-lg appearance-none cursor-pointer accent-brand"
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
                  onChange={(e) => {
                    setCloseRate(Number(e.target.value));
                    setSelectedTrade('custom');
                  }}
                  className="mt-3 w-full h-2 bg-cream-soft rounded-lg appearance-none cursor-pointer accent-brand"
                />
              </div>
            </div>
          </Reveal>

          {/* Results & Action Column (5 cols) */}
          <Reveal y={30} delay={100} className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-[2rem] bg-gradient-to-br from-ink to-navy p-6 sm:p-8 text-white shadow-card relative overflow-hidden">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/20 blur-2xl" />

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-brand" />
                  Estimated Monthly Impact
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand">
                  {results.roas}x ROAS
                </span>
              </div>

              {/* Main Revenue Headline */}
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Projected Monthly Gross Revenue
                </p>
                <p className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  ${results.grossRevenue.toLocaleString()}
                </p>
              </div>

              {/* Net Profit & ROAS */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                <div>
                  <p className="text-xs text-white/70 font-medium">Est. Net Profit</p>
                  <p className="mt-1 text-lg font-bold text-emerald-400">
                    +${results.netProfit.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/70 font-medium">Est. Cost Per Lead</p>
                  <p className="mt-1 text-lg font-bold text-white">
                    ${results.costPerLead}
                  </p>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl bg-white/5 p-3.5 backdrop-blur-sm border border-white/10 text-center">
                <div>
                  <p className="text-[0.6875rem] font-medium text-white/70 uppercase">Est. Clicks</p>
                  <p className="mt-0.5 text-base font-bold text-white">{results.clicks}</p>
                </div>
                <div>
                  <p className="text-[0.6875rem] font-medium text-white/70 uppercase">Exclusive Leads</p>
                  <p className="mt-0.5 text-base font-bold text-brand">{results.leads}</p>
                </div>
                <div>
                  <p className="text-[0.6875rem] font-medium text-white/70 uppercase">Closed Jobs</p>
                  <p className="mt-0.5 text-base font-bold text-white">{results.closedJobs}</p>
                </div>
              </div>
            </div>

            {/* Form Card to Lock in Plan */}
            <div className="rounded-[2rem] bg-white p-6 sm:p-7 shadow-soft border border-black/[0.06]">
              {submitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-ink">Strategy Proposal Requested!</h4>
                  <p className="text-xs text-warm leading-relaxed">
                    Thank you, <span className="font-semibold text-ink">{contactName}</span>. We've prepared your custom campaign forecast for ${adSpend.toLocaleString()}/mo ad spend. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitStrategy} className="space-y-3">
                  <h4 className="text-base font-bold text-ink flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-brand" />
                    Get Your Custom Google Ads Blueprint
                  </h4>
                  <p className="text-xs text-warm">
                    We'll build a tailored campaign strategy for your target service radius.
                  </p>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full rounded-xl border border-black/10 bg-cream-soft/50 px-3.5 py-2.5 text-xs text-ink placeholder-warm-light focus:border-brand focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full rounded-xl border border-black/10 bg-cream-soft/50 px-3.5 py-2.5 text-xs text-ink placeholder-warm-light focus:border-brand focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                    <input
                      type="email"
                      placeholder="Work Email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full rounded-xl border border-black/10 bg-cream-soft/50 px-3.5 py-2.5 text-xs text-ink placeholder-warm-light focus:border-brand focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>

                  <Btn type="submit" size="md" className="w-full mt-2 text-xs py-3">
                    Claim This ROI Blueprint
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Btn>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
