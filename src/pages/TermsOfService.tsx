import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import CtaBanner from '@/components/sections/CtaBanner';
import { Eyebrow } from '@/components/kit';
import { Reveal } from '@/components/motion';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />
      <main>
        <PageHero
          crumb="Terms of Service"
          eyebrow="Legal Agreement"
          eyebrowIcon="FileText"
          titleLines={['Terms of Service &', 'Client Agreement']}
          intro="Please review these terms governing your use of the Local Lead Engine website and our Google Ads management services for contractors. Effective Date: August 10, 2026."
        />

        <section className="py-16 sm:py-20">
          <div className="shell max-w-4xl mx-auto space-y-12">
            
            <Reveal y={20}>
              <div className="rounded-[2rem] bg-white p-8 sm:p-12 border border-black/[0.06] shadow-soft space-y-10">
                

                {/* Section 1 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-ink flex items-center gap-2">
                    <span className="text-brand font-black">1.</span> Scope of Services
                  </h2>
                  <p className="text-sm text-warm leading-relaxed">
                    Local Lead Engine provides specialized digital search marketing and lead generation management for home service contractors. Our services include:
                  </p>
                  <ul className="space-y-2 text-sm text-warm list-disc pl-5">
                    <li>Google Search Ads campaign architecture, keyword bidding, and negative keyword filtering.</li>
                    <li>Google Local Services Ads (LSA) setup, profile optimization, and lead dispute logging.</li>
                    <li>Call tracking and dynamic number insertion (CallRail) setup and CRM attribution integration.</li>
                    <li>Contractor landing page design, host deployment, and conversion rate optimization (CRO).</li>
                    <li>Monthly strategy consultations, campaign auditing, and revenue attribution reporting.</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-ink flex items-center gap-2">
                    <span className="text-brand font-black">2.</span> Media Spend & Billing Structure
                  </h2>
                  <div className="space-y-3 text-sm text-warm">
                    <p>
                      <strong className="text-ink font-bold">Direct Ad Spend:</strong> All media spend (ad budget paid to Google LLC) is the sole responsibility of the Client. Client maintains direct payment methods on file inside their own Google Ads billing profile.
                    </p>
                    <p>
                      <strong className="text-ink font-bold">Management Retainer:</strong> Local Lead Engine charges a fixed monthly management fee for campaign management, optimization, and reporting. Management fees are billed automatically on a recurring 30-day cycle using the payment method provided at onboarding.
                    </p>
                    <p>
                      <strong className="text-ink font-bold">Month-to-Month Term:</strong> Unless specified otherwise in a custom enterprise statement of work, management agreements operate on a flexible month-to-month basis without long-term lock-in.
                    </p>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-ink flex items-center gap-2">
                    <span className="text-brand font-black">3.</span> Client Responsibilities & Licensing
                  </h2>
                  <p className="text-sm text-warm leading-relaxed">
                    To ensure campaign compliance and optimal lead generation, Client agrees to:
                  </p>
                  <ul className="space-y-2.5 text-sm text-warm pl-4 border-l-2 border-brand/20">
                    <li>
                      <strong className="text-ink font-bold">Verification Credentials:</strong> Provide valid state contractor licenses, liability insurance certificates, and background verification documentation required for Google Guaranteed & LSA approval.
                    </li>
                    <li>
                      <strong className="text-ink font-bold">Responsive Lead Handling:</strong> Maintain adequate phone dispatch coverage to answer incoming call leads during campaign operational hours.
                    </li>
                    <li>
                      <strong className="text-ink font-bold">Accurate Information:</strong> Ensure all service offerings, pricing claims, and geographical boundaries provided to Local Lead Engine are truthful and accurate.
                    </li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-ink flex items-center gap-2">
                    <span className="text-brand font-black">4.</span> Performance Disclaimers & Advertising Algorithms
                  </h2>
                  <div className="p-5 rounded-2xl bg-cream border border-black/[0.06] space-y-2 text-xs text-warm leading-relaxed">
                    <p className="font-bold text-ink text-sm">Real Market Dynamics Disclaimer:</p>
                    <p>
                      While Local Lead Engine utilizes field-tested contractor advertising methodologies, search engine algorithms, competitor bidding shifts, seasonal weather patterns, and local economic conditions directly influence ad impression volumes and cost-per-click.
                    </p>
                    <p>
                      Local Lead Engine does not guarantee specific revenue figures, exact call counts, or guaranteed top-position placements on third-party ad networks. All campaign estimations provided during strategy calls represent historical client benchmarks rather than guaranteed future outcomes.
                    </p>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-ink flex items-center gap-2">
                    <span className="text-brand font-black">5.</span> Intellectual Property & Campaign Assets
                  </h2>
                  <p className="text-sm text-warm leading-relaxed">
                    Client retains ownership of their Google Ads account and underlying business branding assets. Local Lead Engine retains ownership of proprietary campaign templates, custom negative keyword databases, and internal optimization frameworks developed prior to or during the engagement, unless explicitly transferred under a custom agreement.
                  </p>
                </div>

                {/* Section 6 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-ink flex items-center gap-2">
                    <span className="text-brand font-black">6.</span> Cancellation & Termination
                  </h2>
                  <p className="text-sm text-warm leading-relaxed">
                    Either party may terminate the management agreement by providing <strong className="text-ink">30 days written notice</strong> prior to the next scheduled billing cycle. Upon termination, Local Lead Engine will complete active optimizations through the end of the paid period and remove our access from Client&apos;s Google Ads account.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-ink flex items-center gap-2">
                    <span className="text-brand font-black">7.</span> Limitation of Liability
                  </h2>
                  <p className="text-sm text-warm leading-relaxed">
                    To the maximum extent permitted by applicable law, Local Lead Engine shall not be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, lost revenue, or operational disruptions arising out of or in connection with campaign performance or third-party ad network outages. Local Lead Engine&apos;s total aggregate liability shall not exceed the management fees actually paid by Client to Local Lead Engine in the three (3) months preceding the claim.
                  </p>
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

export default TermsOfService;
