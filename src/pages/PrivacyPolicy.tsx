import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/sections/CtaBanner';
import { Eyebrow } from '@/components/kit';
import { Reveal } from '@/components/motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />
      <main>
        <PageHero
          crumb="Privacy Policy"
          eyebrow="Legal & Data Protection"
          eyebrowIcon="ShieldCheck"
          titleLines={['Privacy Policy &', 'Data Protection']}
          intro="Local Lead Engine is committed to respecting your privacy and protecting the information of our contractor clients and site visitors. Last updated: August 10, 2026."
        />

        <section className="py-16 sm:py-20">
          <div className="shell max-w-4xl mx-auto space-y-12">
            
            <Reveal y={20}>
              <div className="rounded-[2rem] bg-white p-8 sm:p-12 border border-black/[0.06] shadow-soft space-y-10">
                

                {/* Section 1 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-ink flex items-center gap-2">
                    <span className="text-brand font-black">1.</span> Information We Collect
                  </h2>
                  <p className="text-sm text-warm leading-relaxed">
                    We collect several types of information to provide, maintain, and improve our contractor advertising services:
                  </p>
                  <ul className="space-y-3 text-sm text-warm pl-4 border-l-2 border-brand/20">
                    <li>
                      <strong className="text-ink font-bold">Personal & Business Information:</strong> When you request a strategy call, campaign audit, or contact us, we collect your full name, business email address, phone number, company name, trade specialty (e.g., HVAC, Plumbing, Roofing), service area zip codes, and estimated monthly ad budget.
                    </li>
                    <li>
                      <strong className="text-ink font-bold">Advertising & Campaign Data:</strong> To manage your Google Ads and Local Services Ads (LSA) accounts, we access campaign configurations, conversion logs, call recording metadata (via CallRail), and dispatch CRM metrics (e.g., ServiceTitan, Jobber).
                    </li>
                    <li>
                      <strong className="text-ink font-bold">Automated Technical Data:</strong> Like most websites, our server logs automatically record information sent by your browser, including IP address, browser type, operating system, referring URL, pages viewed, and timestamps.
                    </li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-ink flex items-center gap-2">
                    <span className="text-brand font-black">2.</span> How We Use Your Information
                  </h2>
                  <p className="text-sm text-warm leading-relaxed">
                    Local Lead Engine uses collected data exclusively for business and campaign management purposes:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-cream border border-black/[0.04] space-y-1">
                      <p className="text-xs font-extrabold text-brand uppercase">Service Delivery</p>
                      <p className="text-xs text-warm">Setting up, optimizing, and monitoring Google Search, LSA, and landing page campaigns for your contractor business.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-cream border border-black/[0.04] space-y-1">
                      <p className="text-xs font-extrabold text-brand uppercase">Attribution & Reporting</p>
                      <p className="text-xs text-warm">Linking ad clicks to phone calls and booked appointments inside your dispatch software to calculate ROAS.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-cream border border-black/[0.04] space-y-1">
                      <p className="text-xs font-extrabold text-brand uppercase">Communication</p>
                      <p className="text-xs text-warm">Sending campaign status updates, monthly performance reviews, strategy recommendations, and invoice statements.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-cream border border-black/[0.04] space-y-1">
                      <p className="text-xs font-extrabold text-brand uppercase">Security & Compliance</p>
                      <p className="text-xs text-warm">Protecting against click fraud, fraudulent lead disputes, and ensuring compliance with Google Ads policies.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-ink flex items-center gap-2">
                    <span className="text-brand font-black">3.</span> Information Sharing & Third-Party Integrations
                  </h2>
                  <p className="text-sm text-warm leading-relaxed">
                    <strong className="text-ink">We do not sell, rent, or trade your personal or business data to third-party advertisers or data brokers.</strong>
                  </p>
                  <p className="text-sm text-warm leading-relaxed">
                    We only share necessary data with trusted third-party service providers required to perform advertising operations on your behalf, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-warm">
                    <li><strong className="text-ink">Google LLC:</strong> For managing Google Search Ads, Google Local Services Ads, and Google Analytics.</li>
                    <li><strong className="text-ink">Call Tracking Providers:</strong> CallRail or similar platforms to enable dynamic number insertion (DNI) and lead call recording.</li>
                    <li><strong className="text-ink">CRM & Dispatch Systems:</strong> ServiceTitan, Jobber, or Housecall Pro for matching conversion identifiers with completed revenue.</li>
                    <li><strong className="text-ink">Legal Compliance:</strong> When required by court order, law, or to protect the rights and safety of our company and clients.</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-ink flex items-center gap-2">
                    <span className="text-brand font-black">4.</span> SMS & Mobile Communications Opt-In
                  </h2>
                  <p className="text-sm text-warm leading-relaxed">
                    If you opt-in to receiving SMS notifications or text messaging updates from Local Lead Engine during form submission:
                  </p>
                  <div className="p-5 rounded-2xl bg-brand/5 border border-brand/20 space-y-2 text-xs text-ink">
                    <p className="font-bold text-brand">Mobile Opt-In Principles:</p>
                    <p>• Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes.</p>
                    <p>• Message frequency varies based on active campaign alerts and scheduled strategy consultations.</p>
                    <p>• Message and data rates may apply depending on your cellular provider.</p>
                    <p>• You may reply <strong className="font-extrabold">STOP</strong> at any time to unsubscribe from SMS messaging, or reply <strong className="font-extrabold">HELP</strong> for support.</p>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-ink flex items-center gap-2">
                    <span className="text-brand font-black">5.</span> Data Security & Storage
                  </h2>
                  <p className="text-sm text-warm leading-relaxed">
                    We employ industry-standard security precautions to protect your data against unauthorized access, loss, or alteration. All web communications are transmitted via TLS/SSL encryption. Account credentials for Google Ads and integrated call tools are restricted strictly to authorized campaign managers bound by non-disclosure agreements.
                  </p>
                </div>

                {/* Section 6 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-ink flex items-center gap-2">
                    <span className="text-brand font-black">6.</span> Your Privacy Rights & Choices
                  </h2>
                  <p className="text-sm text-warm leading-relaxed">
                    Depending on your location, you have the right to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-warm">
                    <li>Request access to the personal data we hold about your business.</li>
                    <li>Request corrections or updates to inaccurate information.</li>
                    <li>Request the deletion of your contact records from our database.</li>
                    <li>Opt out of marketing emails by clicking the &quot;unsubscribe&quot; link in any email footer.</li>
                  </ul>
                </div>

              </div>
            </Reveal>

          </div>
        </section>

        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
};

export default PrivacyPolicy;
