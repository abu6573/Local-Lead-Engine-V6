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
    title: 'Roofing Google Ads & Local Search',
    tradeName: 'Roofing Contractors',
    icon: 'Hammer',
    badge: 'Full Replacements & Repair',
    heroTitle: ['Google Ads Built For', 'Roofing Contractors'],
    heroIntro:
      'Simple, focused search campaigns for roofing contractors. Reach local homeowners who need full roof replacements, storm damage repairs, and commercial re-roofing.',
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
        title: 'Shared Leads and Tire Kickers',
        desc: 'Shared lead platforms send the same inquiry to several contractors at once. Our Google Ads setups bring calls directly to your phone line.',
      },
      {
        title: 'Wasted Ad Dollars on Small Fixes',
        desc: 'We block search terms for minor repair jobs so your budget goes toward full roof replacements.',
      },
      {
        title: 'Unfiltered Visitors',
        desc: 'Clear landing pages explain your service areas and minimum job scopes so renters and price shoppers do not waste your time.',
      },
    ],
    strategies: [
      {
        title: 'Storm Season Adjustments',
        desc: 'Adjust campaign budgets quickly during severe weather to handle higher call volume in affected neighborhoods.',
      },
      {
        title: 'CRM and Call Sync',
        desc: 'Connect phone call tracking with AccuLynx or JobNimbus to see which search campaigns generate real jobs.',
      },
      {
        title: 'Clear Mobile Landing Page',
        desc: 'A simple page showing real job photos, licensing, warranty details, and an easy phone button.',
      },
    ],
    faqs: [
      {
        q: 'How fast do calls start coming in?',
        a: 'Search and Local Services Ads usually go live in 5 to 7 days. Inbound calls begin as soon as campaigns start running.',
      },
      {
        q: 'Can you target commercial roofing separately?',
        a: 'Yes. We run separate campaigns focused on property managers, building owners, and commercial facilities.',
      },
      {
        q: 'How do you measure job results?',
        a: 'We track phone calls, form fills, and match them with your CRM records to show cost per booked job.',
      },
    ],
  },

  remodeling: {
    slug: 'remodeling',
    title: 'Kitchen & Bath Remodeling Google Ads',
    tradeName: 'Remodeling Contractors',
    icon: 'PaintRoller',
    badge: 'Kitchens, Baths & Additions',
    heroTitle: ['Google Ads Built For', 'Remodeling Contractors'],
    heroIntro:
      'Reach homeowners planning kitchen remodels, bathroom renovations, and major home improvements with targeted Google Search campaigns.',
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
        title: 'Inquiries with Small Budgets',
        desc: 'People looking for minor cosmetic fixes can take up hours. We structure pages to attract homeowners with full renovation budgets.',
      },
      {
        title: 'Hesitation During Planning',
        desc: 'Remodeling requires careful planning. Clear photo galleries and simple consultation forms help homeowners take the next step.',
      },
      {
        title: 'Low Online Visibility',
        desc: 'We put your business at the top of local search results when homeowners search for residential remodelers nearby.',
      },
    ],
    strategies: [
      {
        title: 'Neighborhood Location Targeting',
        desc: 'Focus ad delivery on specific postal codes where homeowners regularly invest in major home upgrades.',
      },
      {
        title: 'Project Gallery Showcase',
        desc: 'Fast pages displaying completed kitchens, bathrooms, 3D plans, and real client reviews.',
      },
      {
        title: 'Simple Qualification Questions',
        desc: 'Short forms that ask about project timeline and scope before scheduling a meeting.',
      },
    ],
    faqs: [
      {
        q: 'How do you filter out low budget inquiries?',
        a: 'We state project minimums clearly on the page and ask simple questions on the contact form.',
      },
      {
        q: 'What is the average cost for a consultation inquiry?',
        a: 'Inquiries for kitchen and bath renovations generally range from $75 to $130 depending on your area.',
      },
    ],
  },

  hvac: {
    slug: 'hvac',
    title: 'HVAC & Heating Google Ads',
    tradeName: 'HVAC Contractors',
    icon: 'ThermometerSnowflake',
    badge: 'System Swaps & Service',
    heroTitle: ['Google Ads Built For', 'HVAC Contractors'],
    heroIntro:
      'Generate phone calls for full system replacements and emergency repair service when weather changes in your area.',
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
        title: 'Weather Changes',
        desc: 'Demand shifts quickly with heatwaves and cold snaps. Automated settings help capture calls when temperatures drop or rise.',
      },
      {
        title: 'Spending Money on Small Maintenance Calls',
        desc: 'Ad spend should go toward full unit replacements and major system repairs, not low-margin tune-ups.',
      },
      {
        title: 'Unanswered Calls After Hours',
        desc: 'Homeowners call someone else if no one answers. Dynamic call routing notifies dispatchers right away.',
      },
    ],
    strategies: [
      {
        title: 'ServiceTitan and Dispatch Sync',
        desc: 'Connect Google call tracking to ServiceTitan or Housecall Pro to keep track of dispatched jobs.',
      },
      {
        title: 'Weather Adjustment Rules',
        desc: 'Campaigns automatically increase activity when extreme weather is forecasted in your service towns.',
      },
      {
        title: 'Clear Financing Information',
        desc: 'Display monthly payment options clearly on ad copy and landing pages for homeowners buying new systems.',
      },
    ],
    faqs: [
      {
        q: 'Can you handle residential and commercial HVAC at the same time?',
        a: 'Yes. We run separate campaign groups for commercial maintenance contracts and residential replacements.',
      },
      {
        q: 'Do you set up Local Services Ads?',
        a: 'We manage your Google Guaranteed LSA account alongside standard Search Ads for full coverage.',
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
      'Connect with homeowners who need structural repair, piering, crawl space encapsulation, and basement waterproofing.',
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
        title: 'High Cost per Click',
        desc: 'Foundation search terms can be expensive. Negative keyword lists prevent clicks from people looking for DIY fixes.',
      },
      {
        title: 'Homeowner Concern and Uncertainty',
        desc: 'Foundation problems cause worry. Clear explanations, warranties, and inspection details build trust quickly.',
      },
      {
        title: 'Unclear Marketing Data',
        desc: 'We show you exactly which search phrases turn into booked home inspections.',
      },
    ],
    strategies: [
      {
        title: 'Straightforward Inspection Forms',
        desc: 'Forms that gather simple details like wall cracks or water issues so engineers arrive prepared.',
      },
      {
        title: 'Soil and Region Targeting',
        desc: 'Target neighborhoods built on heavy clay soil or areas prone to water accumulation.',
      },
      {
        title: 'Warranty and Licensing Info',
        desc: 'Show engineering credentials, licenses, and transferable warranty terms right on the front page.',
      },
    ],
    faqs: [
      {
        q: 'What conversion rate can we expect?',
        a: 'Foundation repair landing pages typically convert 12% to 16% of clicks into inspection requests.',
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
      'Reach local homeowners looking to build custom inground concrete, gunite, or fiberglass swimming pools.',
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
        title: 'Unrealistic Expectations',
        desc: 'Not every caller has a pool budget. We ask basic project questions before scheduling on-site meetings.',
      },
      {
        title: 'Slower Months',
        desc: 'Keep your build calendar steady throughout the year by promoting winter and early spring planning.',
      },
      {
        title: 'Longer Decision Periods',
        desc: 'Simple follow-up ads keep your past pool projects in front of homeowners as they compare options.',
      },
    ],
    strategies: [
      {
        title: 'Photo Gallery and Project Examples',
        desc: 'Show completed backyard builds with spas, patios, lighting, and water features.',
      },
      {
        title: 'Pool Financing Information',
        desc: 'Include clear details on pool financing partners to help homeowners understand monthly options.',
      },
    ],
    faqs: [
      {
        q: 'When should pool builders run ads?',
        a: 'Late fall through early spring works well for booking summer builds, but homeowners search year-round.',
      },
    ],
  },

  solar: {
    slug: 'solar',
    title: 'Solar Installation Google Ads',
    tradeName: 'Solar Contractors',
    icon: 'Zap',
    badge: 'Residential & Commercial Solar',
    heroTitle: ['Google Ads Built For', 'Solar Contractors'],
    heroIntro:
      'Reach homeowners and business owners looking for rooftop solar panels, battery storage, and lower energy bills.',
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
        title: 'Aggressive Telemarketing Companies',
        desc: 'Homeowners want direct, local service. We present your business as an established local installer.',
      },
      {
        title: 'Low Utility Bills or Shaded Roofs',
        desc: 'Simple bill questions filter out homes that are not suitable for solar power.',
      },
    ],
    strategies: [
      {
        title: 'Savings Estimator Page',
        desc: 'Landing pages with simple questions about current monthly power bills.',
      },
      {
        title: 'Clear Tax Credit Details',
        desc: 'Explain Federal Tax Credit terms and local utility incentive programs in plain language.',
      },
    ],
    faqs: [
      {
        q: 'Do you also handle commercial solar campaigns?',
        a: 'Yes. We run separate campaigns for commercial buildings, agricultural properties, and warehouses.',
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
      'Generate appointments with homeowners looking for whole-house window replacements, custom entry doors, and energy upgrades.',
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
        title: 'Calls for Single Glass Repairs',
        desc: 'We exclude search terms for small repairs so budget stays focused on multi-window installations.',
      },
      {
        title: 'Competition from Large Chains',
        desc: 'Local search campaigns help you stand out against national companies with direct, straightforward service.',
      },
    ],
    strategies: [
      {
        title: 'Home Consultation Scheduling',
        desc: 'Easy online scheduling for in-home measurements and product estimates.',
      },
      {
        title: 'Material Specific Search Groups',
        desc: 'Separate search terms for vinyl, composite, wood, and impact-resistant glass.',
      },
    ],
    faqs: [
      {
        q: 'Can you target specific areas for impact windows?',
        a: 'Yes. We set target boundaries around coastal areas that require storm-rated windows.',
      },
    ],
  },

  'home-additions': {
    slug: 'home-additions',
    title: 'Home Additions Google Ads',
    tradeName: 'Home Addition Contractors',
    icon: 'PlusSquare',
    badge: 'Major Extensions',
    heroTitle: ['Google Ads Built For', 'Home Addition Contractors'],
    heroIntro:
      'Connect with homeowners planning second-story expansions, in-law suites, sunrooms, and structural home additions.',
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
        title: 'Planning and Budgeting Questions',
        desc: 'Major additions require significant planning. We answer common questions about scope and timeline upfront.',
      },
      {
        title: 'Permit Concerns',
        desc: 'Our landing pages explain how you manage plans, permits, and construction from start to finish.',
      },
    ],
    strategies: [
      {
        title: 'Complete Process Overview',
        desc: 'Show homeowners how your team handles design, engineering, permits, and building.',
      },
    ],
    faqs: [
      {
        q: 'Which addition project searches convert best?',
        a: 'Second-story additions, master suite expansions, and accessory dwelling units show high search intent.',
      },
    ],
  },

  'deck-patio-outdoor-living': {
    slug: 'deck-patio-outdoor-living',
    title: 'Outdoor Living & Deck Google Ads',
    tradeName: 'Outdoor Living Contractors',
    icon: 'Fence',
    badge: 'Decks, Patios & Hardscaping',
    heroTitle: ['Google Ads Built For', 'Outdoor Living Contractors'],
    heroIntro:
      'Reach homeowners who want custom composite decks, stone patios, outdoor kitchens, and covered porches.',
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
        title: 'Small Repair Requests',
        desc: 'We block searches for minor wood patching so your budget goes toward complete deck and patio builds.',
      },
      {
        title: 'Seasonal Calendar Planning',
        desc: 'Fill your build schedule early in spring and keep consultations steady through fall.',
      },
    ],
    strategies: [
      {
        title: 'Material Brand Recognition',
        desc: 'Mention Trex, TimberTech, or hardscape stone options for homeowners who already know what material they want.',
      },
      {
        title: 'Complete Outdoor Upgrades',
        desc: 'Feature package builds that combine decking, seating, lighting, and outdoor kitchens.',
      },
    ],
    faqs: [
      {
        q: 'Can we focus on specific decking brands like Trex?',
        a: 'Yes. Homeowners searching for specific composite brands are usually ready to start a project.',
      },
    ],
  },
};
