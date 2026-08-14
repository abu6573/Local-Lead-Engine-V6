export interface TradeDetail {
  slug: string;
  title: string;
  tradeName: string;
  icon: string;
  badge: string;
  heroTitle: [string, string];
  heroIntro: string;
  stats: {
    avgJobValue: string;
    avgCpc: string;
    convRate: string;
    avgCpl: string;
  };
  keywords: string[];
  painPoints: { title: string; desc: string }[];
  strategies: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const tradeDetailsData: Record<string, TradeDetail> = {
  roofing: {
    slug: 'roofing',
    title: 'Roofing Google Ads & Lead Generation',
    tradeName: 'Roofing Contractors',
    icon: 'Hammer',
    badge: 'Full Replacements & Repair',
    heroTitle: ['Google Ads Built For', 'Roofing Contractors'],
    heroIntro:
      'Scale your roofing business with high-intent Google Search & LSA campaigns targeting homeowners actively looking for roof replacements, storm damage restoration, and commercial re-roofing.',
    stats: {
      avgJobValue: '$12,500 - $28,000',
      avgCpc: '$12.50 - $24.00',
      convRate: '14.8%',
      avgCpl: '$65 - $110',
    },
    keywords: [
      'roof replacement contractor near me',
      'emergency roof leak repair',
      'metal roofing installers',
      'commercial roof restoration',
      'storm damage roof inspection',
      'architectural shingle installation',
    ],
    painPoints: [
      {
        title: 'Shared Leads & Tire Kickers',
        desc: 'Angi and HomeAdvisor send the same lead to 5 contractors simultaneously. Our Google Ads campaigns deliver 100% exclusive inbound phone calls.',
      },
      {
        title: 'Wasted Budget on Cheap Repairs',
        desc: 'We negate low-margin search terms like "$50 roof patch" so your ad spend stays laser-focused on $15k+ full replacement jobs.',
      },
      {
        title: 'Unqualified Homeowners',
        desc: 'Custom landing pages filter out renters and non-decision makers before you spend money on ad clicks.',
      },
    ],
    strategies: [
      {
        title: 'Storm Response & Surge Pacing',
        desc: 'Instantly ramp up campaign budgets during hail and wind storms to capture peak emergency inspection demand in your service area.',
      },
      {
        title: 'AccuLynx & JobNimbus Sync',
        desc: 'Seamlessly track every lead from initial click to closed contract inside your roofing CRM.',
      },
      {
        title: 'High-Converting Roofing Landing Page',
        desc: 'Mobile-first design showcasing before/after drone photos, manufacturer certifications (GAF, Owens Corning), and instant inspection booking.',
      },
    ],
    faqs: [
      {
        q: 'How quickly will roofing leads start coming in?',
        a: 'Google Ads Search and LSA campaigns go live within 5 to 7 business days following onboarding. Inbound calls start within hours of campaign launch.',
      },
      {
        q: 'Can you target commercial roofing separately from residential?',
        a: 'Yes! We create dedicated campaign structures and landing pages targeting facility managers and commercial building owners.',
      },
      {
        q: 'Do you track booked roofing jobs or just clicks?',
        a: 'We track phone calls, form completions, and integrate with CRM software to measure cost-per-booked-job and true ROAS.',
      },
    ],
  },

  remodeling: {
    slug: 'remodeling',
    title: 'Home Remodeling Google Ads',
    tradeName: 'Home Remodeling Contractors',
    icon: 'PaintRoller',
    badge: 'Kitchens, Baths & Full Homes',
    heroTitle: ['Google Ads Built For', 'Home Remodeling Contractors'],
    heroIntro:
      'Fill your pipeline with high-ticket kitchen remodels, master bathroom renovations, and full home additions through hyper-targeted Google Search advertising.',
    stats: {
      avgJobValue: '$25,000 - $85,000',
      avgCpc: '$9.80 - $18.50',
      convRate: '12.4%',
      avgCpl: '$75 - $130',
    },
    keywords: [
      'kitchen remodeling contractor near me',
      'master bath renovation company',
      'custom home remodeling builders',
      'basement finishing contractor',
      'luxury bathroom remodel cost',
      'open concept kitchen remodel',
    ],
    painPoints: [
      {
        title: 'Low Budget Inquiry Clutter',
        desc: 'Homeowners wanting a $2,000 quick refresh waste your time. We filter for major $20k+ structural and design-build projects.',
      },
      {
        title: 'Long Sales Cycles',
        desc: 'Remodeling requires trust. Our landing pages include interactive photo galleries and design consultation booking to warm up leads.',
      },
      {
        title: 'Poor Local Visibility',
        desc: 'We place your brand at the top of Google Search when local homeowners search for high-end remodelers in wealthy zip codes.',
      },
    ],
    strategies: [
      {
        title: 'Zip-Code Affluence Targeting',
        desc: 'Target high-median income neighborhoods actively investing in luxury home improvements.',
      },
      {
        title: 'Interactive Design Showcase',
        desc: 'High-speed landing pages highlighting custom cabinetry, tile work, 3D renderings, and customer video testimonials.',
      },
      {
        title: 'Qualified Consultation Forms',
        desc: 'Multi-step intake forms that pre-qualify budget ranges and project timelines before booking calls.',
      },
    ],
    faqs: [
      {
        q: 'How do you prevent leads with low budgets?',
        a: 'We use explicit qualifying copy and minimum budget selection dropdowns directly on the custom landing page.',
      },
      {
        q: 'What is the average cost per remodeling lead?',
        a: 'Qualified consultation leads for kitchen and bath remodels typically range between $75 and $130 depending on your metro market.',
      },
    ],
  },

  hvac: {
    slug: 'hvac',
    title: 'HVAC & Air Conditioning Google Ads',
    tradeName: 'HVAC Contractors',
    icon: 'ThermometerSnowflake',
    badge: 'System Swaps & Emergency Repair',
    heroTitle: ['Google Ads Built For', 'HVAC Contractors'],
    heroIntro:
      'Dominate local search during heatwaves and freezes. Generate high-margin full system replacements and urgent emergency repair phone calls.',
    stats: {
      avgJobValue: '$8,500 - $18,000',
      avgCpc: '$14.00 - $28.00',
      convRate: '18.2%',
      avgCpl: '$55 - $95',
    },
    keywords: [
      'AC replacement contractor near me',
      '24/7 emergency furnace repair',
      'heat pump installation company',
      'ductless mini split installer',
      'new HVAC system cost',
      'commercial refrigeration repair',
    ],
    painPoints: [
      {
        title: 'Seasonal Demand Spikes',
        desc: 'When weather hits, demand skyrockets. We configure smart automated bidding to capture max volume when temps surge.',
      },
      {
        title: 'Low-Margin Tune-Up Traps',
        desc: 'Tired of paying big CPC for $59 tune-ups? We prioritize full AC/heat pump system swaps and high-margin replacements.',
      },
      {
        title: 'Missed After-Hours Calls',
        desc: 'Emergency leads call the next company if you do not answer. We set up dynamic call tracking with instant SMS notifications.',
      },
    ],
    strategies: [
      {
        title: 'ServiceTitan & Housecall Pro Setup',
        desc: 'Connect Google Ads call extension conversions directly to your dispatch platform to track booked technicians.',
      },
      {
        title: 'Weather-Triggered Bidding',
        desc: 'Automated rules increase bids automatically when local weather forecasts predict extreme heat or cold.',
      },
      {
        title: 'Financing Offer Highlights',
        desc: 'Promote 0% APR financing options on ad copy and landing pages to convert hesitant replacement leads.',
      },
    ],
    faqs: [
      {
        q: 'Can you run Google Ads for both residential and commercial HVAC?',
        a: 'Yes, we create dedicated campaigns separating commercial HVAC contracts from residential emergency repairs.',
      },
      {
        q: 'How do you handle Google Local Services Ads (LSA)?',
        a: 'We set up and manage your Google Guaranteed LSA profile alongside Search Ads for maximum page coverage.',
      },
    ],
  },

  'foundation-crawl-space': {
    slug: 'foundation-crawl-space',
    title: 'Foundation & Crawl Space Google Ads',
    tradeName: 'Foundation & Crawl Space Contractors',
    icon: 'BrickWall',
    badge: 'Structural Repair & Waterproofing',
    heroTitle: ['Google Ads Built For', 'Foundation Repair Contractors'],
    heroIntro:
      'Capture high-ticket structural repair, piering, crawl space encapsulation, and basement waterproofing jobs with targeted search campaigns.',
    stats: {
      avgJobValue: '$14,000 - $35,000',
      avgCpc: '$15.00 - $30.00',
      convRate: '13.5%',
      avgCpl: '$80 - $140',
    },
    keywords: [
      'foundation repair company near me',
      'crawl space encapsulation contractor',
      'basement waterproofing specialists',
      'house piering cost',
      'foundation crack repair',
      'sump pump installation',
    ],
    painPoints: [
      {
        title: 'High Competition & Pricey Clicks',
        desc: 'Foundation keywords are expensive. We eliminate negative match terms to ensure every dollar goes to serious homeowners.',
      },
      {
        title: 'Homeowner Fear & Hesitation',
        desc: 'Foundation issues stress homeowners out. Our landing pages emphasize engineering reports, transferable warranties, and financing.',
      },
      {
        title: 'Inaccurate Lead Attribution',
        desc: 'We track exactly which structural keywords generate paid on-site inspection appointments.',
      },
    ],
    strategies: [
      {
        title: 'Inspection Request Optimization',
        desc: 'Engineered lead forms that capture foundation symptoms (cracks, bowed walls, standing water) for fast estimation.',
      },
      {
        title: 'Geo-Targeted Soil Hazard Areas',
        desc: 'Focus ad delivery on regions and neighborhoods with known clay soil and water table foundation issues.',
      },
      {
        title: 'Lifetime Warranty Trust Badges',
        desc: 'Highlight transferable structural warranties and licensed engineering credentials prominently.',
      },
    ],
    faqs: [
      {
        q: 'What is the conversion rate for foundation repair landing pages?',
        a: 'Our custom foundation landing pages average 12% to 16% conversion rates from search click to inspection request.',
      },
    ],
  },

  'pool-construction': {
    slug: 'pool-construction',
    title: 'Pool Construction Google Ads',
    tradeName: 'Pool Builders & Contractors',
    icon: 'Waves',
    badge: 'Custom Inground Pools',
    heroTitle: ['Google Ads Built For', 'Custom Pool Builders'],
    heroIntro:
      'Drive qualified leads for $60k+ inground concrete, gunite, and fiberglass pool builds with high-converting search and display remarketing.',
    stats: {
      avgJobValue: '$65,000 - $150,000+',
      avgCpc: '$8.50 - $16.00',
      convRate: '11.2%',
      avgCpl: '$90 - $160',
    },
    keywords: [
      'inground pool builder near me',
      'custom concrete pool contractor',
      'fiberglass pool installation',
      'backyard pool design and build',
      'luxury pool builder cost',
      'plunge pool installer',
    ],
    painPoints: [
      {
        title: 'Dreamers Without Budget',
        desc: 'Everyone wants a pool, but few can afford a $70k build. We pre-qualify leads before they schedule design consultations.',
      },
      {
        title: 'Seasonal Off-Months',
        desc: 'We keep your sales queue full year-round by positioning winter/spring pre-construction scheduling.',
      },
      {
        title: 'Long Build Considerations',
        desc: 'Retargeting campaigns keep your luxury pool portfolio top-of-mind during homeowner decision-making.',
      },
    ],
    strategies: [
      {
        title: '3D Renderings & Portfolio Showcase',
        desc: 'Showcase stunning outdoor living environments with custom spa, lighting, and water feature options.',
      },
      {
        title: 'Financing Partner Highlights',
        desc: 'Integrate pool financing options (Lyon Financial, HFS) directly into the intake process to overcome cost hesitation.',
      },
    ],
    faqs: [
      {
        q: 'When is the best time to start Google Ads for pool builders?',
        a: 'Late fall through early spring is ideal for booking summer builds, though high-intent searches run year-round.',
      },
    ],
  },

  solar: {
    slug: 'solar',
    title: 'Solar Installation Google Ads',
    tradeName: 'Solar & Clean Energy Contractors',
    icon: 'Zap',
    badge: 'Residential & Commercial Solar',
    heroTitle: ['Google Ads Built For', 'Solar Contractors'],
    heroIntro:
      'Generate exclusive residential and commercial solar leads looking for rooftop solar panels, battery storage, and energy independence.',
    stats: {
      avgJobValue: '$22,000 - $55,000',
      avgCpc: '$16.00 - $32.00',
      convRate: '10.5%',
      avgCpl: '$85 - $150',
    },
    keywords: [
      'solar panel installer near me',
      'residential solar system cost',
      'Tesla Powerwall installer',
      'commercial solar contractor',
      'solar battery storage installation',
      'roof solar installation company',
    ],
    painPoints: [
      {
        title: 'Spammy National Lead Brokers',
        desc: 'Homeowners are sick of spam calls. Our campaigns position you as the trusted, local solar installation expert.',
      },
      {
        title: 'Electric Bill Qualification',
        desc: 'We filter out homes with low electric bills or shaded roofs using interactive bill assessment forms.',
      },
    ],
    strategies: [
      {
        title: 'Electric Bill Calculator Lead Magnet',
        desc: 'Landing pages featuring an instant savings estimator based on current monthly power bills.',
      },
      {
        title: 'Tax Credit & Rebate Promotion',
        desc: 'Highlight federal tax credits (30% ITC) and local utility rebates directly in ad extensions and headlines.',
      },
    ],
    faqs: [
      {
        q: 'Do you generate commercial solar leads as well?',
        a: 'Yes, we create specialized B2B campaigns targeting property managers, agricultural facilities, and warehouse owners.',
      },
    ],
  },

  'windows-doors': {
    slug: 'windows-doors',
    title: 'Window & Door Replacement Google Ads',
    tradeName: 'Window & Door Contractors',
    icon: 'DoorClosed',
    badge: 'Full House Replacement',
    heroTitle: ['Google Ads Built For', 'Window & Door Contractors'],
    heroIntro:
      'Fill your appointment calendar with homeowners seeking full-house window replacements, custom entry doors, and hurricane impact upgrades.',
    stats: {
      avgJobValue: '$10,000 - $26,000',
      avgCpc: '$11.00 - $21.00',
      convRate: '15.5%',
      avgCpl: '$60 - $105',
    },
    keywords: [
      'window replacement contractor near me',
      'impact window installation company',
      'custom front door replacement',
      'black frame window installers',
      'energy efficient window replacement cost',
      'sliding glass door installation',
    ],
    painPoints: [
      {
        title: 'Single Window Repair Calls',
        desc: 'We eliminate glass repair keywords to focus strictly on 5+ window replacements and full-home upgrades.',
      },
      {
        title: 'Aggressive National Competition',
        desc: 'Outsmart big brands like Renewal by Andersen with localized, fast-loading, highly relevant search campaigns.',
      },
    ],
    strategies: [
      {
        title: 'In-Home Measurement Booking',
        desc: 'Streamlined online scheduling for free in-home consultation and window measurement appointments.',
      },
      {
        title: 'Brand & Material Specific Targeting',
        desc: 'Target homeowners looking specifically for vinyl, composite, wood, or aluminum impact-rated windows.',
      },
    ],
    faqs: [
      {
        q: 'Can you target coastal areas for impact window replacements?',
        a: 'Yes, we set up tight radius geo-fencing around coastal storm zones to capture impact window demand.',
      },
    ],
  },

  'home-additions': {
    slug: 'home-additions',
    title: 'Home Additions & Extensions Google Ads',
    tradeName: 'Home Addition Contractors',
    icon: 'PlusSquare',
    badge: 'Major Structural Extensions',
    heroTitle: ['Google Ads Built For', 'Home Addition Contractors'],
    heroIntro:
      'Attract homeowners looking to expand their living space with second-story additions, in-law suites, sunrooms, and major structural expansions.',
    stats: {
      avgJobValue: '$45,000 - $180,000+',
      avgCpc: '$10.50 - $22.00',
      convRate: '11.8%',
      avgCpl: '$85 - $145',
    },
    keywords: [
      'home addition contractor near me',
      'second story addition builders',
      'in-law suite addition cost',
      'room expansion company',
      'master suite addition builder',
      'garage expansion contractor',
    ],
    painPoints: [
      {
        title: 'High Capital Barrier',
        desc: 'Additions are major structural investments. We pre-qualify budget expectation before dispatching designers.',
      },
      {
        title: 'Permit & Architectural Questions',
        desc: 'Our landing pages highlight your design-build process, permitting handle, and architectural plans.',
      },
    ],
    strategies: [
      {
        title: 'Design-Build Process Highlighting',
        desc: 'Educate homeowners on how you manage everything from architectural engineering to final walkthrough.',
      },
    ],
    faqs: [
      {
        q: 'What type of home addition leads convert best?',
        a: 'Second-story pop-tops, master suite expansions, and accessory dwelling units (ADUs) show the highest search conversion rates.',
      },
    ],
  },

  'deck-patio-outdoor-living': {
    slug: 'deck-patio-outdoor-living',
    title: 'Outdoor Living & Deck Contractor Google Ads',
    tradeName: 'Outdoor Living Contractors',
    icon: 'Fence',
    badge: 'Decks, Patios & Hardscaping',
    heroTitle: ['Google Ads Built For', 'Outdoor Living Contractors'],
    heroIntro:
      'Drive high-margin custom composite deck, hardscape patio, outdoor kitchen, and covered pergola leads with high-converting Google Search campaigns.',
    stats: {
      avgJobValue: '$18,000 - $65,000',
      avgCpc: '$8.00 - $17.50',
      convRate: '14.2%',
      avgCpl: '$65 - $115',
    },
    keywords: [
      'composite deck builder near me',
      'Trex deck installer company',
      'custom hardscape patio contractor',
      'outdoor kitchen builder near me',
      'covered patio contractor',
      'pergola installation company',
    ],
    painPoints: [
      {
        title: 'Simple Wood Patch Repairs',
        desc: 'We exclude terms for small board replacements so your budget targets premium Trex, TimberTech, and custom hardscapes.',
      },
      {
        title: 'Spring / Summer Booking Rush',
        desc: 'Fill your build queue early in the season and maintain steady consultation volume throughout summer and fall.',
      },
    ],
    strategies: [
      {
        title: 'Composite Brand Partner Messaging',
        desc: 'Leverage official Trex, TimberTech, or Azek contractor badge trust to boost conversion rate.',
      },
      {
        title: 'Outdoor Kitchen & Fire Feature Add-ons',
        desc: 'Cross-promote full outdoor living packages to maximize average job size.',
      },
    ],
    faqs: [
      {
        q: 'Can we advertise specific deck brands like Trex or TimberTech?',
        a: 'Yes, brand-name queries often yield the highest intent homeowners who have already selected their material.',
      },
    ],
  },
};
