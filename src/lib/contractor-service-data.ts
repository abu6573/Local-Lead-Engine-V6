export interface ContractorServiceInfo {
  slug: string;
  urlPath: string;
  industry: string;
  shortIndustry: string;
  icon: string;
  badge: string;
  hero: {
    h1: string;
    supportingHeadline: string;
    supportingParagraph: string;
    sampleMetrics: {
      campaignName: string;
      qualifiedCalls: string;
      bookedEstimates: string;
      costPerOpportunity: string;
      conversionRate: string;
      adSpend: string;
      trackingStatus: string;
    };
  };
  problems: {
    headline: string;
    items: { title: string; desc: string }[];
  };
  servicesTargeted: {
    headline: string;
    services: { name: string; desc: string }[];
  };
  campaignStructure: {
    headline: string;
    groups: string[];
    explanation: string;
  };
  searchFlow: {
    headline: string;
    searchQuery: string;
    adHeadline: string;
    adDesc: string;
    landingPageTitle: string;
    ctaButton: string;
  };
  landingExamples: {
    search: string;
    page: string;
  }[];
  caseStudy: {
    clientName: string;
    location: string;
    timeframe: string;
    headline: string;
    summary: string;
    metrics: { label: string; value: string }[];
    breakdown: { title: string; desc: string }[];
  };
  faqs: { q: string; a: string }[];
}

export const contractorServicePages: Record<string, ContractorServiceInfo> = {
  'roofing-contractors': {
    slug: 'roofing-contractors',
    urlPath: '/contractors/google-ads-for-roofing-contractors/',
    industry: 'Roofing Contractors',
    shortIndustry: 'Roofing',
    icon: 'Hammer',
    badge: 'Roof Replacements & High-Value Repairs',
    hero: {
      h1: 'Google Ads for Roofing Contractors',
      supportingHeadline: 'Turn high-intent roofing searches into qualified calls and booked estimates.',
      supportingParagraph:
        'We build and manage search campaigns for roofing contractors. Our work includes campaign structure, call tracking, conversion tracking, search-term review, geographic targeting, and ongoing optimization.',
      sampleMetrics: {
        campaignName: 'Roof Replacement (Local Search)',
        qualifiedCalls: '48',
        bookedEstimates: '29',
        costPerOpportunity: '$84.20',
        conversionRate: '16.4%',
        adSpend: '$4,040',
        trackingStatus: 'Active (Call Tracking + CRM Sync)',
      },
    },
    problems: {
      headline: 'More roofing inquiries do not automatically mean more roofing jobs.',
      items: [
        {
          title: 'Paying for Searches Not Relevant to Your Services',
          desc: 'Ad spend gets wasted on searches for DIY roofing videos, mobile home repairs, or cheap tarps when your business focuses on full replacements.',
        },
        {
          title: 'Mixing Roof Repair and Replacement Traffic',
          desc: 'A five-hundred-dollar emergency leak patch and a twenty-thousand-dollar architectural shingle replacement need separate budgets, keywords, and landing pages.',
        },
        {
          title: 'Paying for Searches Outside Your Service Area',
          desc: 'Without strict postal-code boundaries and radius exclusions, ad dollars burn on homeowners in counties your crews do not serve.',
        },
        {
          title: 'Calls from People Looking for Jobs or Supplies',
          desc: 'Negative keyword lists must proactively block inquiries from subcontractors seeking labor, supply houses, or roofing material prices.',
        },
        {
          title: 'Sending Every Visitor to the Homepage',
          desc: 'A visitor searching for metal roof replacement who lands on a generic homepage rarely calls. They need a page focused on metal roofing.',
        },
        {
          title: 'Treating Every Phone Call as the Same Opportunity',
          desc: 'A sixty-second call asking about job openings should not count as a successful conversion in your advertising reports.',
        },
        {
          title: 'Not Knowing Which Campaigns Produce Worthwhile Opportunities',
          desc: 'Without connecting calls to sales records, you cannot see which ad groups generate real booked estimates and signed contracts.',
        },
      ],
    },
    servicesTargeted: {
      headline: 'Advertise the services you actually want more of',
      services: [
        {
          name: 'Roof Replacement',
          desc: 'Target homeowners with aging architectural shingle or tile roofs looking for complete teardowns and full re-roofs.',
        },
        {
          name: 'Roof Repair',
          desc: 'Capture urgent leak calls and wind damage repairs that meet your minimum dispatch fee threshold.',
        },
        {
          name: 'Storm Damage Roofing',
          desc: 'Reach property owners with hail or severe wind damage preparing insurance claims in affected neighborhoods.',
        },
        {
          name: 'Metal Roofing',
          desc: 'Connect with homeowners seeking standing seam and premium metal roof installations with higher average contract values.',
        },
        {
          name: 'Commercial Roofing',
          desc: 'Target building owners and property managers searching for TPO, EPDM, and flat roof restoration projects.',
        },
        {
          name: 'Roof Inspection',
          desc: 'Attract real estate buyers and homeowners requesting formal roof condition assessments and certifications.',
        },
      ],
    },
    campaignStructure: {
      headline: 'Your campaigns should reflect how your business makes money',
      groups: [
        'Roof Replacement',
        'Roof Repair',
        'Storm Damage',
        'Metal Roofing',
        'Commercial Roofing',
        'Brand Protection',
      ],
      explanation:
        'Separating your primary services into dedicated campaigns provides clear control over daily budgets, keyword bids, ad messaging, landing pages, search terms, and conversion data.',
    },
    searchFlow: {
      headline: 'The ad should match what the customer is looking for',
      searchQuery: 'roof replacement near me',
      adHeadline: 'Roof Replacement in [Service Area]',
      adDesc: 'Licensed roofing contractor. Free on-site estimates for shingle, tile, and metal roof replacements.',
      landingPageTitle: 'Roof Replacement Services & Free On-Site Estimates',
      ctaButton: 'Schedule a Roof Estimate',
    },
    landingExamples: [
      {
        search: 'Roof Replacement Search',
        page: 'Roof Replacement Landing Page with Shingle Options & Warranties',
      },
      {
        search: 'Metal Roofing Search',
        page: 'Standing Seam Metal Roofing Page with Material Specs & Photos',
      },
      {
        search: 'Commercial Roofing Search',
        page: 'Commercial TPO & Flat Roof Restoration Page for Building Owners',
      },
    ],
    caseStudy: {
      clientName: 'Paragon Roofing',
      location: 'Dallas-Fort Worth, TX',
      timeframe: '120 Days',
      headline: '38 Full Roof Replacements from Local Search',
      summary:
        'A local roofing contractor focused ad spend strictly on full replacements and storm restoration while blocking minor patch inquiries.',
      metrics: [
        { label: 'Ad Spend', value: '$18,240' },
        { label: 'Qualified Calls', value: '142' },
        { label: 'Booked Estimates', value: '71' },
        { label: 'Signed Contracts', value: '38 Jobs' },
        { label: 'Avg. Contract Value', value: '$16,400' },
        { label: 'Cost Per Opportunity', value: '$128.45' },
      ],
      breakdown: [
        {
          title: '1. Campaign Structure',
          desc: 'Separated shingle replacement, metal roofing, and storm repairs into distinct campaigns with allocated budgets.',
        },
        {
          title: '2. Search-Term Management',
          desc: 'Blocked DIY queries, supply houses, and handyman repair phrases to preserve daily budget for full replacements.',
        },
        {
          title: '3. Conversion Tracking',
          desc: 'Configured CallRail with dynamic number insertion to track call duration, caller location, and recording data.',
        },
        {
          title: '4. Landing-Page Alignment',
          desc: 'Directed replacement searches to a dedicated page featuring warranty badges, manufacturer credentials, and estimate scheduling.',
        },
        {
          title: '5. Bid Strategy',
          desc: 'Used value-focused bidding once conversion tracking established a dependable volume of qualified calls.',
        },
        {
          title: '6. Ongoing Optimization',
          desc: 'Regularly shifted budget toward high-performing postal codes with larger single-family roof footprints.',
        },
      ],
    },
    faqs: [
      {
        q: 'How fast do calls start coming in after launch?',
        a: 'Search campaigns typically begin generating incoming calls within the first 48 to 72 hours after account setup and tracking verification.',
      },
      {
        q: 'Can we stop paying for minor roof patch inquiries?',
        a: 'Yes. We apply negative keyword filters and state minimum project scopes on landing pages so budget focuses on full replacements and major repairs.',
      },
      {
        q: 'Do you manage Google Local Services Ads (LSA) alongside Search Ads?',
        a: 'Yes. We coordinate Google Guaranteed LSA management with Google Search campaigns for comprehensive local search coverage.',
      },
      {
        q: 'How do you handle severe storm and hail events?',
        a: 'We adjust campaign budgets and ad copy to respond to storm damage volume in affected postal codes when severe weather occurs.',
      },
      {
        q: 'Can we run separate campaigns for commercial and residential roofing?',
        a: 'Yes. Commercial roofing campaigns target property managers and facility directors with dedicated messaging, separate budgets, and commercial landing pages.',
      },
      {
        q: 'How do we know if calls turn into real estimates?',
        a: 'We set up call tracking with call recordings and status tags. Where your CRM permits, we connect closed job records back to advertising campaigns.',
      },
      {
        q: 'What happens to our existing Google Ads account if we already have one?',
        a: 'We review your existing search history and conversion data during Phase 1. You retain full ownership of your Google Ads account at all times.',
      },
    ],
  },

  'foundation-repair-contractors': {
    slug: 'foundation-repair-contractors',
    urlPath: '/contractors/google-ads-for-foundation-repair-contractors/',
    industry: 'Foundation Repair Contractors',
    shortIndustry: 'Foundation Repair',
    icon: 'BrickWall',
    badge: 'Structural Repair & Waterproofing',
    hero: {
      h1: 'Google Ads for Foundation Repair Contractors',
      supportingHeadline: 'Turn high-intent foundation and crawl space searches into qualified inspection requests.',
      supportingParagraph:
        'We build and manage search campaigns for foundation repair contractors. Our work includes campaign structure, call tracking, conversion tracking, search-term review, geographic targeting, and ongoing optimization.',
      sampleMetrics: {
        campaignName: 'Foundation Piering & Leveling',
        qualifiedCalls: '36',
        bookedEstimates: '24',
        costPerOpportunity: '$92.50',
        conversionRate: '14.2%',
        adSpend: '$3,330',
        trackingStatus: 'Active (Call Tracking + CRM Sync)',
      },
    },
    problems: {
      headline: 'More foundation inquiries do not automatically mean more structural jobs.',
      items: [
        {
          title: 'High Cost per Click on Broad Searches',
          desc: 'Foundation keywords are costly. Broad matching without strict negative terms burns budget on DIY crack repair products.',
        },
        {
          title: 'Inquiries for Non-Structural Cosmetic Flaws',
          desc: 'Minor hairline drywall settling inquiries take up estimator time without producing major piering or wall anchor contracts.',
        },
        {
          title: 'Homeowner Hesitation and Sticker Shock',
          desc: 'Without landing pages that explain engineering assessments and transferable warranties, inspection booking rates remain low.',
        },
        {
          title: 'Paying for Searches Outside Soil Trouble Areas',
          desc: 'Spending money in areas with stable bedrock instead of targeting expansive clay soil zones reduces campaign efficiency.',
        },
        {
          title: 'Sending Searchers to a General Home Page',
          desc: 'A homeowner dealing with bowing basement walls needs a page showing carbon fiber straps and helical tiebacks, not general contracting.',
        },
        {
          title: 'No Connection Between Inquiries and Booked Inspections',
          desc: 'Tracking clicks alone makes it impossible to see which ad groups produce signed foundation stabilization contracts.',
        },
      ],
    },
    servicesTargeted: {
      headline: 'Advertise the services you actually want more of',
      services: [
        {
          name: 'Foundation Repair',
          desc: 'Target homeowners noticing sagging floors, sticking doors, and exterior brick cracks needing piering systems.',
        },
        {
          name: 'Crawl Space Repair',
          desc: 'Capture inquiries for sagging subfloor support jacks, wood rot remediation, and structural joist reinforcement.',
        },
        {
          name: 'Basement Waterproofing',
          desc: 'Reach property owners dealing with wet basements, hydrostatic pressure, sump pump replacements, and interior drain tile.',
        },
        {
          name: 'Foundation Crack Repair',
          desc: 'Attract homeowners needing structural epoxy injection, carbon fiber reinforcement, and wall stabilization.',
        },
        {
          name: 'Structural Repair',
          desc: 'Target residential and commercial clients requiring structural engineering repairs and beam replacements.',
        },
        {
          name: 'Crawl Space Encapsulation',
          desc: 'Connect with homeowners seeking vapor barrier encapsulation, dehumidifier installations, and moisture control.',
        },
      ],
    },
    campaignStructure: {
      headline: 'Your campaigns should reflect how your business makes money',
      groups: [
        'Foundation Piering & Settlement',
        'Crawl Space Encapsulation',
        'Basement Waterproofing',
        'Bowing Basement Walls',
        'Commercial Foundation',
        'Brand Protection',
      ],
      explanation:
        'Separating foundation settlement from waterproofing and crawl space moisture gives you direct control over keyword bids, budgets, and landing-page explanations.',
    },
    searchFlow: {
      headline: 'The ad should match what the customer is looking for',
      searchQuery: 'foundation repair contractor near me',
      adHeadline: 'Foundation Repair in [Service Area]',
      adDesc: 'Licensed structural foundation specialists. Schedule an on-site structural inspection and estimate.',
      landingPageTitle: 'Structural Foundation Repair & Inspection Services',
      ctaButton: 'Schedule Structural Inspection',
    },
    landingExamples: [
      {
        search: 'Foundation Piering Search',
        page: 'Piering & Slab Leveling Page with Engineering Details & Warranty Info',
      },
      {
        search: 'Crawl Space Moisture Search',
        page: 'Crawl Space Encapsulation Page with Moisture Solutions & Dehumidifiers',
      },
      {
        search: 'Basement Waterproofing Search',
        page: 'Interior Drainage & Sump Pump Installation Page',
      },
    ],
    caseStudy: {
      clientName: 'Mid-State Foundation Solutions',
      location: 'Nashville, TN',
      timeframe: '90 Days',
      headline: '24 Structural Foundation Contracts from Targeted Search',
      summary:
        'Restructured Google Search campaigns around expansive soil zones with dedicated landing pages for piering and crawl space encapsulation.',
      metrics: [
        { label: 'Ad Spend', value: '$14,400' },
        { label: 'Qualified Calls', value: '112' },
        { label: 'On-Site Inspections', value: '58' },
        { label: 'Signed Contracts', value: '24 Jobs' },
        { label: 'Avg. Contract Value', value: '$15,800' },
        { label: 'Cost Per Opportunity', value: '$128.57' },
      ],
      breakdown: [
        {
          title: '1. Campaign Structure',
          desc: 'Split foundation settlement and crawl space encapsulation into separate campaigns with dedicated monthly allocations.',
        },
        {
          title: '2. Search-Term Management',
          desc: 'Excluded DIY crack repair kits, concrete masonry repairs, and small driveway mudjacking searches.',
        },
        {
          title: '3. Conversion Tracking',
          desc: 'Implemented dynamic call tracking to measure call duration and inspection request form submissions.',
        },
        {
          title: '4. Landing-Page Alignment',
          desc: 'Created clear inspection scheduling pages featuring transferable warranty details and contractor licenses.',
        },
        {
          title: '5. Bid Strategy',
          desc: 'Applied target CPA bidding on high-intent settlement search queries in clay soil areas.',
        },
        {
          title: '6. Ongoing Optimization',
          desc: 'Refined geographic bids to prioritize neighborhoods with older homes built on sloping terrain.',
        },
      ],
    },
    faqs: [
      {
        q: 'What makes foundation repair Google Ads different from other trades?',
        a: 'Foundation repair searches carry high anxiety and substantial job sizes. Landing pages must clearly present engineering credentials, inspection processes, and warranty protections.',
      },
      {
        q: 'How do you avoid small driveway or cosmetic crack inquiries?',
        a: 'We use negative keywords to block searches for driveway mudjacking, cosmetic plastering, and cheap DIY patch kits.',
      },
      {
        q: 'Can we target crawl space encapsulation separately?',
        a: 'Yes. Encapsulation and moisture control campaigns run with independent keywords, copy, and landing pages.',
      },
      {
        q: 'What is a typical cost per inspection inquiry?',
        a: 'In most markets, qualified foundation inspection inquiries range between $80 and $140 depending on local competition.',
      },
      {
        q: 'How do you track whether inspection inquiries lead to signed jobs?',
        a: 'We track phone numbers and form submissions through call recordings. Where your sales software supports it, we match closed contracts with campaign source data.',
      },
    ],
  },

  'plumbing-contractors': {
    slug: 'plumbing-contractors',
    urlPath: '/contractors/google-ads-for-plumbing-contractors/',
    industry: 'Plumbing Contractors',
    shortIndustry: 'Plumbing',
    icon: 'Wrench',
    badge: 'High-Ticket Sewer, Repiping & Water Heaters',
    hero: {
      h1: 'Google Ads for Plumbing Contractors',
      supportingHeadline: 'Turn high-intent plumbing searches into qualified calls for sewer, repiping, and water heater replacements.',
      supportingParagraph:
        'We build and manage search campaigns for plumbing contractors. Our work includes campaign structure, call tracking, conversion tracking, search-term review, geographic targeting, and ongoing optimization.',
      sampleMetrics: {
        campaignName: 'Sewer & Main Line Replacement',
        qualifiedCalls: '52',
        bookedEstimates: '31',
        costPerOpportunity: '$72.40',
        conversionRate: '19.8%',
        adSpend: '$3,760',
        trackingStatus: 'Active (Call Tracking + CRM Sync)',
      },
    },
    problems: {
      headline: 'More plumbing inquiries do not automatically mean more high-margin plumbing jobs.',
      items: [
        {
          title: 'Wasting Budget on Low-Value Drain Clogs',
          desc: 'Ad spend easily gets consumed by searchers looking for ninety-nine-dollar drain clearings instead of ten-thousand-dollar sewer line replacements.',
        },
        {
          title: 'Competing for Price-Sensitive Fixture Fixes',
          desc: 'Calls for running toilets and kitchen faucet washers take up dispatch time without contributing to major job revenue.',
        },
        {
          title: 'Unfiltered After-Hours Inbound Calls',
          desc: 'Running ads 24/7 without call routing or dispatch coverage burns ad spend on unanswered emergency calls.',
        },
        {
          title: 'Mixing Tankless Swaps with Minor Cartridge Repairs',
          desc: 'High-ticket water heater installations require dedicated ad groups and landing pages separate from basic servicing.',
        },
        {
          title: 'High Click Costs Without Call Verification',
          desc: 'Plumbing keywords are competitive. If calls are not tracked and listened to, you cannot tell good calls from wrong numbers.',
        },
      ],
    },
    servicesTargeted: {
      headline: 'Advertise the services you actually want more of',
      services: [
        {
          name: 'Sewer Line Replacement',
          desc: 'Target homeowners with collapsed, root-damaged, or aging sewer lines needing excavation or pipe bursting.',
        },
        {
          name: 'Trenchless Sewer Repair',
          desc: 'Capture inquiries for epoxy pipe lining, pipe bursting, and non-invasive sewer rehabilitation.',
        },
        {
          name: 'Whole-Home Repiping',
          desc: 'Connect with owners of older homes looking to replace failing galvanized or polybutylene pipes with PEX or copper.',
        },
        {
          name: 'Water Heater Replacement',
          desc: 'Reach homeowners whose storage tank water heaters are leaking, failing, or requiring replacement.',
        },
        {
          name: 'Tankless Water Heater Installation',
          desc: 'Target homeowners interested in high-efficiency on-demand water heating systems with higher ticket sizes.',
        },
        {
          name: 'Main Water Line Replacement',
          desc: 'Attract property owners with underground yard leaks requiring main service line excavation and replacement.',
        },
        {
          name: 'Commercial Plumbing',
          desc: 'Target commercial buildings, restaurants, and retail properties requiring commercial hydro-jetting and plumbing repairs.',
        },
      ],
    },
    campaignStructure: {
      headline: 'Your campaigns should reflect how your business makes money',
      groups: [
        'Sewer Replacement & Lining',
        'Whole-Home Repiping',
        'Water Heater Swaps & Tankless',
        'Main Water Line',
        'Commercial Plumbing',
        'Brand Protection',
      ],
      explanation:
        'Structuring campaigns around high-value plumbing installations allows you to allocate ad dollars where ticket sizes and margins are greatest.',
    },
    searchFlow: {
      headline: 'The ad should match what the customer is looking for',
      searchQuery: 'sewer line replacement near me',
      adHeadline: 'Sewer Line Replacement in [Service Area]',
      adDesc: 'Licensed master plumbers. Trenchless & traditional sewer line replacement. Free on-site estimates.',
      landingPageTitle: 'Sewer Line Replacement & Trenchless Repair Services',
      ctaButton: 'Request Sewer Line Estimate',
    },
    landingExamples: [
      {
        search: 'Sewer Line Search',
        page: 'Trenchless Sewer & Main Line Replacement Page',
      },
      {
        search: 'Tankless Water Heater Search',
        page: 'Tankless Water Heater Installation & Sizing Guide Page',
      },
      {
        search: 'Whole Home Repiping Search',
        page: 'Whole-Home PEX Repiping Page with Clean Wall Guarantee',
      },
    ],
    caseStudy: {
      clientName: 'Apex Plumbing & Sewer',
      location: 'Columbus, OH',
      timeframe: '90 Days',
      headline: '31 Sewer and Repiping Jobs Booked in One Quarter',
      summary:
        'Shifted Google Ads focus away from basic drain snaking toward sewer replacements, main water line repairs, and tankless installations.',
      metrics: [
        { label: 'Ad Spend', value: '$11,200' },
        { label: 'Qualified Calls', value: '155' },
        { label: 'Booked Estimates', value: '64' },
        { label: 'Completed Major Jobs', value: '31' },
        { label: 'Avg. Major Ticket', value: '$7,850' },
        { label: 'Cost Per Opportunity', value: '$72.25' },
      ],
      breakdown: [
        {
          title: '1. Campaign Structure',
          desc: 'Isolated sewer replacement, repiping, and tankless units into separate campaigns with controlled daily budgets.',
        },
        {
          title: '2. Search-Term Management',
          desc: 'Added negative keywords for cheap snaking coupons, DIY plumbing supplies, and small faucet hardware.',
        },
        {
          title: '3. Conversion Tracking',
          desc: 'Set up CallRail with call duration filters to count only legitimate homeowner calls over 60 seconds.',
        },
        {
          title: '4. Landing-Page Alignment',
          desc: 'Built service-specific pages with video camera inspection offers and upfront estimate scheduling.',
        },
        {
          title: '5. Bid Strategy',
          desc: 'Maximized high-intent local search queries during active dispatch hours.',
        },
        {
          title: '6. Ongoing Optimization',
          desc: 'Adjusted geographic bids to target established neighborhoods with aging sewer and water infrastructure.',
        },
      ],
    },
    faqs: [
      {
        q: 'Can we stop Google Ads from sending cheap drain cleaning calls?',
        a: 'Yes. We apply negative keyword exclusions and align ad headlines specifically around major sewer replacements and repiping.',
      },
      {
        q: 'How do you handle emergency plumbing call hours?',
        a: 'We configure ad schedules to match your dispatch availability, lowering bids or pausing ads when after-hours staff cannot take calls.',
      },
      {
        q: 'Do you integrate with ServiceTitan or Housecall Pro?',
        a: 'Where your CRM setup supports it, we connect call tracking records to help match advertising campaigns with booked dispatch tickets.',
      },
    ],
  },

  'hvac-contractors': {
    slug: 'hvac-contractors',
    urlPath: '/contractors/google-ads-for-hvac-contractors/',
    industry: 'HVAC Contractors',
    shortIndustry: 'HVAC',
    icon: 'ThermometerSnowflake',
    badge: 'System Replacements & Emergency Repair',
    hero: {
      h1: 'Google Ads for HVAC Contractors',
      supportingHeadline: 'Turn high-intent heating and cooling searches into qualified calls and booked system replacements.',
      supportingParagraph:
        'We build and manage search campaigns for HVAC contractors. Our work includes campaign structure, call tracking, conversion tracking, search-term review, geographic targeting, and ongoing optimization.',
      sampleMetrics: {
        campaignName: 'AC & Heat Pump Replacement',
        qualifiedCalls: '64',
        bookedEstimates: '42',
        costPerOpportunity: '$68.50',
        conversionRate: '21.4%',
        adSpend: '$4,380',
        trackingStatus: 'Active (Call Tracking + CRM Sync)',
      },
    },
    problems: {
      headline: 'More HVAC inquiries do not automatically mean more system replacements.',
      items: [
        {
          title: 'Spending Ad Dollars on Cheap Filter Changes',
          desc: 'Ad spend gets diluted by searches for twenty-dollar maintenance checks instead of nine-thousand-dollar heat pump replacements.',
        },
        {
          title: 'Seasonal Swings and Weather Delays',
          desc: 'Failing to adjust campaign budgets before heatwaves or cold snaps leaves valuable system replacement searches uncaptured.',
        },
        {
          title: 'Unanswered Calls During Peak Weather',
          desc: 'When call volume surges, missed calls immediately phone the next contractor on Google.',
        },
        {
          title: 'Mixing Ductless and Commercial Searches',
          desc: 'Residential AC replacements and commercial rooftop units require distinct ad budgets and messaging.',
        },
      ],
    },
    servicesTargeted: {
      headline: 'Advertise the services you actually want more of',
      services: [
        {
          name: 'AC Replacement & Installation',
          desc: 'Target homeowners with broken or aging cooling systems looking for complete new unit installations.',
        },
        {
          name: 'Heat Pump Installation',
          desc: 'Reach homeowners upgrading to energy-efficient dual-fuel and inverter heat pump systems.',
        },
        {
          name: 'Emergency Furnace Repair',
          desc: 'Capture high-urgency heating outage calls during winter cold snaps that require immediate service.',
        },
        {
          name: 'Ductless Mini-Split Installation',
          desc: 'Connect with property owners adding heating and cooling to home additions, garages, or sunrooms.',
        },
        {
          name: 'Commercial HVAC Services',
          desc: 'Target commercial facility managers needing package rooftop unit maintenance and replacements.',
        },
      ],
    },
    campaignStructure: {
      headline: 'Your campaigns should reflect how your business makes money',
      groups: [
        'AC System Replacements',
        'Heat Pump Upgrades',
        'Furnace Repair & Installation',
        'Ductless Mini-Splits',
        'Commercial HVAC',
        'Brand Protection',
      ],
      explanation:
        'Keeping replacement campaigns separate from emergency service calls allows you to prioritize high-margin installation sales during peak seasons.',
    },
    searchFlow: {
      headline: 'The ad should match what the customer is looking for',
      searchQuery: 'AC replacement contractor near me',
      adHeadline: 'AC Replacement in [Service Area]',
      adDesc: 'Licensed HVAC contractor. Free in-home estimates on high-efficiency AC and heat pump installations.',
      landingPageTitle: 'Air Conditioning & Heat Pump Replacement Services',
      ctaButton: 'Schedule Free Estimate',
    },
    landingExamples: [
      {
        search: 'AC Replacement Search',
        page: 'AC & Heat Pump Replacement Page with Financing Options',
      },
      {
        search: 'Emergency Furnace Search',
        page: '24/7 Emergency Heating Repair Page with Direct Dispatch Call',
      },
    ],
    caseStudy: {
      clientName: 'NC Heating & Air',
      location: 'Raleigh-Durham, NC',
      timeframe: '90 Days',
      headline: '42 System Replacements Booked During Summer Transition',
      summary:
        'Focused search advertising strictly on full AC and heat pump replacements with mobile-first landing pages.',
      metrics: [
        { label: 'Ad Spend', value: '$13,650' },
        { label: 'Qualified Calls', value: '198' },
        { label: 'In-Home Estimates', value: '88' },
        { label: 'Installed Systems', value: '42 Units' },
        { label: 'Avg. Replacement Size', value: '$9,800' },
        { label: 'Cost Per Opportunity', value: '$68.93' },
      ],
      breakdown: [
        {
          title: '1. Campaign Structure',
          desc: 'Separated AC replacements from routine maintenance to protect installation budgets.',
        },
        {
          title: '2. Search-Term Management',
          desc: 'Blocked DIY thermostat troubleshooting, filter size queries, and low-cost tune-up specials.',
        },
        {
          title: '3. Conversion Tracking',
          desc: 'Implemented dynamic phone tracking to measure call duration and after-hours call handling.',
        },
        {
          title: '4. Landing-Page Alignment',
          desc: 'Highlighted 10-year warranty options, utility rebates, and low monthly financing options.',
        },
        {
          title: '5. Bid Strategy',
          desc: 'Set automated bid increases during severe heatwave forecasts to capture emergency system failures.',
        },
        {
          title: '6. Ongoing Optimization',
          desc: 'Shifted budget into fast-growing suburban subdivisions with 12 to 15 year old builder-grade units.',
        },
      ],
    },
    faqs: [
      {
        q: 'How do you handle weather-dependent call spikes?',
        a: 'We establish automated weather-responsive bid adjustments so your ads gain visibility when extreme temperatures trigger equipment breakdowns.',
      },
      {
        q: 'Can we prioritize system replacements over repairs?',
        a: 'Yes. We allocate the majority of ad budget toward replacement search terms and mention financing on ad copy.',
      },
    ],
  },

  'remodeling-contractors': {
    slug: 'remodeling-contractors',
    urlPath: '/contractors/google-ads-for-remodeling-contractors/',
    industry: 'Remodeling Contractors',
    shortIndustry: 'Home Remodeling',
    icon: 'PaintRoller',
    badge: 'Kitchens, Baths & Full Home Renovations',
    hero: {
      h1: 'Google Ads for Remodeling Contractors',
      supportingHeadline: 'Turn high-intent home remodeling searches into qualified design consultations and booked renovation projects.',
      supportingParagraph:
        'We build and manage search campaigns for home remodeling contractors. Our work includes campaign structure, call tracking, conversion tracking, search-term review, geographic targeting, and ongoing optimization.',
      sampleMetrics: {
        campaignName: 'Kitchen & Bath Design-Build',
        qualifiedCalls: '32',
        bookedEstimates: '21',
        costPerOpportunity: '$94.00',
        conversionRate: '15.8%',
        adSpend: '$3,010',
        trackingStatus: 'Active (Call Tracking + CRM Sync)',
      },
    },
    problems: {
      headline: 'More remodeling inquiries do not automatically mean more design-build contracts.',
      items: [
        {
          title: 'Flooded with Minor Handyman Requests',
          desc: 'Budget gets wasted on inquiries for drywall patching or tile regrouting when you specialize in thirty-thousand-dollar kitchen renovations.',
        },
        {
          title: 'Price Shoppers with Unrealistic Budgets',
          desc: 'Inquiries without budget expectations consume hours of phone qualification time.',
        },
        {
          title: 'Long Consideration Cycles Without Landing Page Proof',
          desc: 'Remodeling clients require visual evidence of craftsmanship before agreeing to on-site consultations.',
        },
        {
          title: 'Targeting Low-Income Postal Codes',
          desc: 'Broad geographic targeting wastes ad spend in neighborhoods where homeowners cannot afford major renovations.',
        },
      ],
    },
    servicesTargeted: {
      headline: 'Advertise the services you actually want more of',
      services: [
        {
          name: 'Kitchen Remodeling',
          desc: 'Target homeowners looking for custom cabinetry, island expansions, quartz countertops, and open-concept layouts.',
        },
        {
          name: 'Bathroom Renovation',
          desc: 'Capture inquiries for master bathroom suites, walk-in tile showers, freestanding tubs, and double vanities.',
        },
        {
          name: 'Whole-Home Remodeling',
          desc: 'Connect with buyers and homeowners undertaking full-house architectural renovations and structural reconfigurations.',
        },
        {
          name: 'Basement Finishing',
          desc: 'Reach homeowners converting unfinished basements into home theaters, guest suites, and entertainment spaces.',
        },
        {
          name: 'Home Additions',
          desc: 'Target expanding families planning second-story additions, primary suite bump-outs, and in-law suites.',
        },
      ],
    },
    campaignStructure: {
      headline: 'Your campaigns should reflect how your business makes money',
      groups: [
        'Kitchen Remodeling',
        'Master Bathroom Renovation',
        'Whole-Home Remodeling',
        'Basement Finishing',
        'Home Additions',
        'Brand Protection',
      ],
      explanation:
        'Grouping kitchen, bathroom, and full-home renovations into distinct campaigns ensures ad copy and project galleries match exact homeowner intentions.',
    },
    searchFlow: {
      headline: 'The ad should match what the customer is looking for',
      searchQuery: 'kitchen remodeling contractor near me',
      adHeadline: 'Kitchen Remodeling in [Service Area]',
      adDesc: 'Licensed design-build contractor. Custom cabinetry, 3D design, and complete kitchen renovations.',
      landingPageTitle: 'Custom Kitchen Remodeling & Design Consultations',
      ctaButton: 'Request Design Consultation',
    },
    landingExamples: [
      {
        search: 'Kitchen Remodel Search',
        page: 'Custom Kitchen Remodeling Page with Photo Gallery & Design Process',
      },
      {
        search: 'Bathroom Renovation Search',
        page: 'Master Bathroom Remodel Page with Material Selections',
      },
    ],
    caseStudy: {
      clientName: 'Home Repair Service',
      location: 'Denver, CO',
      timeframe: '60 Days',
      headline: '18 Signed Remodel Contracts in 60 Days',
      summary:
        'Shifted focus from handyman repairs to exclusive kitchen and bathroom design-build consultations.',
      metrics: [
        { label: 'Ad Spend', value: '$8,400' },
        { label: 'Qualified Consultations', value: '46' },
        { label: 'On-Site Meetings', value: '31' },
        { label: 'Signed Contracts', value: '18 Jobs' },
        { label: 'Avg. Contract Value', value: '$42,500' },
        { label: 'Cost Per Opportunity', value: '$182.60' },
      ],
      breakdown: [
        {
          title: '1. Campaign Structure',
          desc: 'Segmented kitchen and bathroom campaigns with separate budgets for high-income neighborhoods.',
        },
        {
          title: '2. Search-Term Management',
          desc: 'Excluded handyman, cabinet painting, and small tile repair queries.',
        },
        {
          title: '3. Conversion Tracking',
          desc: 'Tracked multi-step consultation form submissions with project budget qualifiers.',
        },
        {
          title: '4. Landing-Page Alignment',
          desc: 'Created project showcase landing pages with 3D design renders and customer reviews.',
        },
        {
          title: '5. Bid Strategy',
          desc: 'Optimized bids toward high-intent design consultation inquiries.',
        },
        {
          title: '6. Ongoing Optimization',
          desc: 'Prioritized zip codes with median home values above local threshold.',
        },
      ],
    },
    faqs: [
      {
        q: 'How do you filter out people with small repair budgets?',
        a: 'We use negative keywords for small handyman repairs and include project scope options on consultation forms.',
      },
      {
        q: 'What is a typical cost per remodeling consultation inquiry?',
        a: 'In most metro areas, qualified design-build consultation inquiries range from $75 to $140.',
      },
    ],
  },

  'window-door-contractors': {
    slug: 'window-door-contractors',
    urlPath: '/contractors/google-ads-for-window-door-contractors/',
    industry: 'Window & Door Contractors',
    shortIndustry: 'Window & Door',
    icon: 'DoorClosed',
    badge: 'Whole-House Replacement & Custom Doors',
    hero: {
      h1: 'Google Ads for Window & Door Contractors',
      supportingHeadline: 'Turn high-intent replacement window and door searches into qualified in-home consultations.',
      supportingParagraph:
        'We build and manage search campaigns for window and door contractors. Our work includes campaign structure, call tracking, conversion tracking, search-term review, geographic targeting, and ongoing optimization.',
      sampleMetrics: {
        campaignName: 'Full-House Window Replacement',
        qualifiedCalls: '44',
        bookedEstimates: '33',
        costPerOpportunity: '$78.20',
        conversionRate: '17.6%',
        adSpend: '$3,440',
        trackingStatus: 'Active (Call Tracking + CRM Sync)',
      },
    },
    problems: {
      headline: 'More window inquiries do not automatically mean more whole-house replacement jobs.',
      items: [
        {
          title: 'Paying for Single Broken Glass Repairs',
          desc: 'Ad spend gets wasted on broken glass replacement queries when your business sells whole-house window packages.',
        },
        {
          title: 'Competing Against Massive National Franchises',
          desc: 'Competing directly with big corporate advertisers requires sharp local keyword targeting and authentic local messaging.',
        },
        {
          title: 'Vague Inquiries with No Project Scope',
          desc: 'Landing pages without window count qualifiers result in estimator trips for single sash cords.',
        },
      ],
    },
    servicesTargeted: {
      headline: 'Advertise the services you actually want more of',
      services: [
        {
          name: 'Whole-House Window Replacement',
          desc: 'Target homeowners looking to replace 8 or more windows with energy-efficient vinyl, wood, or composite units.',
        },
        {
          name: 'Custom Entry Door Installation',
          desc: 'Reach homeowners seeking fiberglass and steel exterior front entry systems with decorative glass.',
        },
        {
          name: 'Sliding Patio & French Doors',
          desc: 'Capture inquiries for multi-slide, bi-fold, and French patio door replacements.',
        },
        {
          name: 'Impact & Hurricane Windows',
          desc: 'Target coastal property owners requiring storm-rated impact glass and heavy-duty frames.',
        },
        {
          name: 'Black Frame & Architectural Windows',
          desc: 'Connect with design-conscious homeowners searching for contemporary black-exterior window profiles.',
        },
      ],
    },
    campaignStructure: {
      headline: 'Your campaigns should reflect how your business makes money',
      groups: [
        'Whole-House Window Replacement',
        'Custom Entry Doors',
        'Sliding Patio & French Doors',
        'Impact Resistant Windows',
        'Brand Protection',
      ],
      explanation:
        'Separating whole-house replacements from custom door projects gives you complete control over keyword bids and seasonal promotions.',
    },
    searchFlow: {
      headline: 'The ad should match what the customer is looking for',
      searchQuery: 'window replacement contractor near me',
      adHeadline: 'Window Replacement in [Service Area]',
      adDesc: 'Licensed window contractor. Free in-home measurements and estimates on whole-house window packages.',
      landingPageTitle: 'Energy-Efficient Window Replacement & In-Home Estimates',
      ctaButton: 'Schedule In-Home Measurement',
    },
    landingExamples: [
      {
        search: 'Window Replacement Search',
        page: 'Whole-House Window Replacement Page with Energy Rebate Details',
      },
      {
        search: 'Custom Entry Door Search',
        page: 'Custom Entry Door Showcase with Security & Style Options',
      },
    ],
    caseStudy: {
      clientName: 'Universal Windows Direct of Charlotte',
      location: 'Charlotte, NC',
      timeframe: '90 Days',
      headline: '48 Whole-House Window Packages Sold in One Quarter',
      summary:
        'Targeted homeowners in mature neighborhoods needing complete window upgrades with focused mobile pages.',
      metrics: [
        { label: 'Ad Spend', value: '$12,480' },
        { label: 'Qualified Inquiries', value: '168' },
        { label: 'In-Home Consultations', value: '92' },
        { label: 'Signed Contracts', value: '48 Jobs' },
        { label: 'Avg. Contract Value', value: '$14,200' },
        { label: 'Cost Per Opportunity', value: '$74.28' },
      ],
      breakdown: [
        {
          title: '1. Campaign Structure',
          desc: 'Grouped replacement window and patio door campaigns with dedicated budgets.',
        },
        {
          title: '2. Search-Term Management',
          desc: 'Filtered out single pane glass repair, foggy glass repair, and DIY hardware searches.',
        },
        {
          title: '3. Conversion Tracking',
          desc: 'Tracked in-home measurement requests across phone calls and consultation forms.',
        },
        {
          title: '4. Landing-Page Alignment',
          desc: 'Built clean pages featuring window manufacturer warranties and energy rebate calculators.',
        },
        {
          title: '5. Bid Strategy',
          desc: 'Allocated budget toward searches with clear multi-window replacement intent.',
        },
        {
          title: '6. Ongoing Optimization',
          desc: 'Targeted neighborhoods built 15 to 30 years ago where original builder windows are failing.',
        },
      ],
    },
    faqs: [
      {
        q: 'How do you block single window repair calls?',
        a: 'We apply negative keywords for single glass repairs and state multi-window package scopes clearly on landing pages.',
      },
    ],
  },

  'solar-contractors': {
    slug: 'solar-contractors',
    urlPath: '/contractors/google-ads-for-solar-contractors/',
    industry: 'Solar Contractors',
    shortIndustry: 'Solar',
    icon: 'Zap',
    badge: 'Residential & Commercial Solar',
    hero: {
      h1: 'Google Ads for Solar Contractors',
      supportingHeadline: 'Turn high-intent solar searches into qualified consultations and signed installation contracts.',
      supportingParagraph:
        'We build and manage search campaigns for solar contractors. Our work includes campaign structure, call tracking, conversion tracking, search-term review, geographic targeting, and ongoing optimization.',
      sampleMetrics: {
        campaignName: 'Residential Rooftop Solar',
        qualifiedCalls: '38',
        bookedEstimates: '22',
        costPerOpportunity: '$110.50',
        conversionRate: '12.8%',
        adSpend: '$4,200',
        trackingStatus: 'Active (Call Tracking + CRM Sync)',
      },
    },
    problems: {
      headline: 'More solar clicks do not automatically mean more solar installations.',
      items: [
        {
          title: 'Inquiries from Renters and Shaded Roofs',
          desc: 'Ad spend gets wasted on callers who do not own their homes or have roofs unsuitable for solar production.',
        },
        {
          title: 'High Clicks from Telemarketing Disillusionment',
          desc: 'Homeowners are fatigued by generic canvassers. Ads must establish your company as a licensed, local installer.',
        },
        {
          title: 'Low Electric Bill Homeowners',
          desc: 'Landing pages need pre-qualifying questions to filter out homes with power bills too low to justify solar.',
        },
      ],
    },
    servicesTargeted: {
      headline: 'Advertise the services you actually want more of',
      services: [
        {
          name: 'Residential Rooftop Solar',
          desc: 'Target single-family homeowners looking to lower high electric bills and own their power generation.',
        },
        {
          name: 'Solar Battery Storage',
          desc: 'Reach homeowners wanting Tesla Powerwall and battery backup for grid outages and time-of-use savings.',
        },
        {
          name: 'Commercial Solar Installation',
          desc: 'Target business owners and agricultural facilities seeking commercial solar tax incentives and depreciation benefits.',
        },
        {
          name: 'Solar Roof Replacements',
          desc: 'Connect with homeowners planning combined roof replacements and solar panel installations.',
        },
      ],
    },
    campaignStructure: {
      headline: 'Your campaigns should reflect how your business makes money',
      groups: [
        'Residential Solar Systems',
        'Solar Battery Storage',
        'Commercial Solar',
        'Solar + Roofing Combos',
        'Brand Protection',
      ],
      explanation:
        'Keeping battery storage and residential solar in dedicated campaign groups allows you to address specific homeowner energy goals.',
    },
    searchFlow: {
      headline: 'The ad should match what the customer is looking for',
      searchQuery: 'solar panel installation near me',
      adHeadline: 'Local Solar Installation in [Service Area]',
      adDesc: 'Licensed local solar installer. Free solar savings assessment and 25-year manufacturer warranty.',
      landingPageTitle: 'Custom Home Solar Installations & Free Savings Analysis',
      ctaButton: 'Request Solar Assessment',
    },
    landingExamples: [
      {
        search: 'Residential Solar Search',
        page: 'Home Solar Savings Page with Power Bill Qualifier',
      },
      {
        search: 'Battery Backup Search',
        page: 'Solar Battery Storage & Powerwall Installation Page',
      },
    ],
    caseStudy: {
      clientName: 'California Solar & Electric Inc.',
      location: 'Fresno, CA',
      timeframe: '90 Days',
      headline: '26 Residential Solar Installations from Local Search',
      summary:
        'Positioned as an established local installer with bill-qualification forms to filter out unqualified homeowners.',
      metrics: [
        { label: 'Ad Spend', value: '$16,800' },
        { label: 'Qualified Inquiries', value: '148' },
        { label: 'Site Surveys Booked', value: '62' },
        { label: 'Signed Installs', value: '26 Systems' },
        { label: 'Avg. Contract Value', value: '$28,400' },
        { label: 'Cost Per Opportunity', value: '$113.51' },
      ],
      breakdown: [
        {
          title: '1. Campaign Structure',
          desc: 'Segmented battery storage and rooftop solar into separate search campaigns.',
        },
        {
          title: '2. Search-Term Management',
          desc: 'Excluded DIY solar panel queries, portable solar kits, and general government grant informational searches.',
        },
        {
          title: '3. Conversion Tracking',
          desc: 'Tracked completed bill qualification forms and phone inquiries with location data.',
        },
        {
          title: '4. Landing-Page Alignment',
          desc: 'Highlighted local utility rate increases, tax credits, and local installation crews.',
        },
        {
          title: '5. Bid Strategy',
          desc: 'Targeted high electricity usage areas and high-income postal codes.',
        },
        {
          title: '6. Ongoing Optimization',
          desc: 'Reallocated budget toward utility districts with high peak-rate electricity charges.',
        },
      ],
    },
    faqs: [
      {
        q: 'How do you filter out renters and shaded roofs?',
        a: 'We use qualification fields on consultation forms that confirm homeownership and average monthly electricity bills.',
      },
    ],
  },

  'pool-contractors': {
    slug: 'pool-contractors',
    urlPath: '/contractors/google-ads-for-pool-contractors/',
    industry: 'Pool Contractors',
    shortIndustry: 'Pool Construction',
    icon: 'Waves',
    badge: 'Custom Inground Pools & Spas',
    hero: {
      h1: 'Google Ads for Pool Contractors',
      supportingHeadline: 'Turn high-intent custom inground pool searches into qualified design consultations.',
      supportingParagraph:
        'We build and manage search campaigns for pool construction contractors. Our work includes campaign structure, call tracking, conversion tracking, search-term review, geographic targeting, and ongoing optimization.',
      sampleMetrics: {
        campaignName: 'Custom Inground Gunite Pools',
        qualifiedCalls: '28',
        bookedEstimates: '18',
        costPerOpportunity: '$124.00',
        conversionRate: '11.4%',
        adSpend: '$3,470',
        trackingStatus: 'Active (Call Tracking + CRM Sync)',
      },
    },
    problems: {
      headline: 'More pool inquiries do not automatically mean more custom pool construction contracts.',
      items: [
        {
          title: 'Inquiries for Above-Ground and Inflatable Pools',
          desc: 'Ad spend gets wasted on above-ground pool searches when your company builds seventy-thousand-dollar custom gunite pools.',
        },
        {
          title: 'Small Pool Cleaning and Maintenance Requests',
          desc: 'Calls for weekly pool chemical service distract staff from high-value backyard construction projects.',
        },
        {
          title: 'Unrealistic Homeowner Budget Expectations',
          desc: 'Landing pages without budget qualifiers lead to design consultations with homeowners lacking necessary project financing.',
        },
      ],
    },
    servicesTargeted: {
      headline: 'Advertise the services you actually want more of',
      services: [
        {
          name: 'Custom Inground Concrete & Gunite Pools',
          desc: 'Target homeowners looking for bespoke backyard pool builds with integrated spas and water features.',
        },
        {
          name: 'Fiberglass Pool Installation',
          desc: 'Capture inquiries for fast-installation premium fiberglass pool shells and patio surrounds.',
        },
        {
          name: 'Plunge Pools & Cocktial Pools',
          desc: 'Reach homeowners with compact urban lots seeking modern plunge pools and heated spas.',
        },
        {
          name: 'Complete Backyard Transformations',
          desc: 'Connect with homeowners seeking pool builds combined with hardscaping, outdoor kitchens, and cabanas.',
        },
      ],
    },
    campaignStructure: {
      headline: 'Your campaigns should reflect how your business makes money',
      groups: [
        'Custom Gunite Pools',
        'Fiberglass Inground Pools',
        'Plunge & Small Backyard Pools',
        'Complete Backyard Transformations',
        'Brand Protection',
      ],
      explanation:
        'Separating gunite, fiberglass, and luxury transformations ensures ad messaging and portfolio galleries directly reflect what the buyer wants.',
    },
    searchFlow: {
      headline: 'The ad should match what the customer is looking for',
      searchQuery: 'inground pool builder near me',
      adHeadline: 'Custom Inground Pools in [Service Area]',
      adDesc: 'Licensed custom pool contractor. 3D backyard design, gunite construction, and integrated spas.',
      landingPageTitle: 'Custom Inground Swimming Pool Design & Construction',
      ctaButton: 'Request 3D Design Consultation',
    },
    landingExamples: [
      {
        search: 'Inground Pool Search',
        page: 'Custom Gunite Pool Design Page with 3D Render Gallery',
      },
      {
        search: 'Fiberglass Pool Search',
        page: 'Fiberglass Pool Installation Page with Model Options',
      },
    ],
    caseStudy: {
      clientName: 'Premier Backyard Living',
      location: 'Austin, TX',
      timeframe: '90 Days',
      headline: '16 Custom Inground Pool Builds Signed',
      summary:
        'Targeted growing luxury subdivisions with 3D design booking forms and clear project starting prices.',
      metrics: [
        { label: 'Ad Spend', value: '$14,200' },
        { label: 'Qualified Inquiries', value: '114' },
        { label: 'Design Consultations', value: '42' },
        { label: 'Signed Builds', value: '16 Pools' },
        { label: 'Avg. Build Value', value: '$88,000' },
        { label: 'Cost Per Opportunity', value: '$124.56' },
      ],
      breakdown: [
        {
          title: '1. Campaign Structure',
          desc: 'Segmented custom gunite and fiberglass pools with dedicated seasonal budgets.',
        },
        {
          title: '2. Search-Term Management',
          desc: 'Blocked above-ground pools, vinyl liner repair, and weekly pool cleaning service queries.',
        },
        {
          title: '3. Conversion Tracking',
          desc: 'Monitored design consultation requests and phone inquiries.',
        },
        {
          title: '4. Landing-Page Alignment',
          desc: 'Displayed 3D video renders, completed project photo galleries, and pool financing partner details.',
        },
        {
          title: '5. Bid Strategy',
          desc: 'Focused bids on high-income zip codes with spacious lot sizes.',
        },
        {
          title: '6. Ongoing Optimization',
          desc: 'Maintained steady ad campaigns in late fall and winter to fill the upcoming summer construction queue.',
        },
      ],
    },
    faqs: [
      {
        q: 'How do you avoid weekly pool cleaning inquiries?',
        a: 'We apply negative keywords for pool cleaning, maintenance, and chemical supply searches.',
      },
    ],
  },

  'deck-outdoor-living-contractors': {
    slug: 'deck-outdoor-living-contractors',
    urlPath: '/contractors/google-ads-for-deck-outdoor-living-contractors/',
    industry: 'Deck & Outdoor Living Contractors',
    shortIndustry: 'Deck & Outdoor Living',
    icon: 'Fence',
    badge: 'Custom Composite Decks & Hardscaping',
    hero: {
      h1: 'Google Ads for Deck & Outdoor Living Contractors',
      supportingHeadline: 'Turn high-intent outdoor living searches into qualified design consultations and booked construction projects.',
      supportingParagraph:
        'We build and manage search campaigns for deck and outdoor living contractors. Our work includes campaign structure, call tracking, conversion tracking, search-term review, geographic targeting, and ongoing optimization.',
      sampleMetrics: {
        campaignName: 'Custom Composite Deck Construction',
        qualifiedCalls: '36',
        bookedEstimates: '26',
        costPerOpportunity: '$64.50',
        conversionRate: '18.2%',
        adSpend: '$2,320',
        trackingStatus: 'Active (Call Tracking + CRM Sync)',
      },
    },
    problems: {
      headline: 'More outdoor living inquiries do not automatically mean more high-ticket deck builds.',
      items: [
        {
          title: 'Paying for Minor Board Repairs and Staining',
          desc: 'Ad spend gets wasted on pressure washing or board patching when you build twenty-thousand-dollar custom composite decks.',
        },
        {
          title: 'Seasonal Gaps in the Construction Schedule',
          desc: 'Without early pre-season campaigns, spring schedules take too long to fill.',
        },
        {
          title: 'Unqualified Inquiries Without Property Details',
          desc: 'Consultation forms must gather basic backyard details to help estimators prepare accurate plans.',
        },
      ],
    },
    servicesTargeted: {
      headline: 'Advertise the services you actually want more of',
      services: [
        {
          name: 'Custom Composite Decking',
          desc: 'Target homeowners looking for low-maintenance Trex, TimberTech, and multi-level deck builds.',
        },
        {
          name: 'Screened Porches & Covered Patios',
          desc: 'Capture inquiries for roof extensions, screened enclosures, and all-weather outdoor seating.',
        },
        {
          name: 'Outdoor Kitchens & Hardscaping',
          desc: 'Reach homeowners seeking paver patios, built-in grills, fire pits, and stone retaining walls.',
        },
        {
          name: 'Pergolas & Custom Shade Structures',
          desc: 'Connect with homeowners adding motorized louvered roofs and custom timber pergolas.',
        },
      ],
    },
    campaignStructure: {
      headline: 'Your campaigns should reflect how your business makes money',
      groups: [
        'Composite Decking',
        'Screened Porches',
        'Outdoor Kitchens & Patios',
        'Pergolas & Shade Structures',
        'Brand Protection',
      ],
      explanation:
        'Keeping composite decks, porches, and hardscaping in separate campaigns allows you to highlight specific material brands and features.',
    },
    searchFlow: {
      headline: 'The ad should match what the customer is looking for',
      searchQuery: 'composite deck builder near me',
      adHeadline: 'Composite Deck Builders in [Service Area]',
      adDesc: 'Licensed outdoor living contractor. Trex & TimberTech certified. Free on-site design consultation.',
      landingPageTitle: 'Custom Composite Deck Construction & 3D Design',
      ctaButton: 'Request On-Site Consultation',
    },
    landingExamples: [
      {
        search: 'Composite Deck Search',
        page: 'Custom Deck Construction Page with Material Comparison',
      },
      {
        search: 'Screened Porch Search',
        page: 'Screened Porch & Covered Patio Construction Page',
      },
    ],
    caseStudy: {
      clientName: 'Hoover Deck & Porch',
      location: 'Birmingham, AL',
      timeframe: '45 Days',
      headline: '28 Custom Deck and Porch Builds Signed in 45 Days',
      summary:
        'Filled entire spring and summer composite deck and porch queue using pre-season Google Search campaigns.',
      metrics: [
        { label: 'Ad Spend', value: '$8,200' },
        { label: 'Qualified Inquiries', value: '124' },
        { label: 'On-Site Estimates', value: '54' },
        { label: 'Signed Contracts', value: '28 Builds' },
        { label: 'Avg. Contract Value', value: '$24,500' },
        { label: 'Cost Per Opportunity', value: '$66.12' },
      ],
      breakdown: [
        {
          title: '1. Campaign Structure',
          desc: 'Grouped composite decking, screened porches, and patio hardscaping with distinct budgets.',
        },
        {
          title: '2. Search-Term Management',
          desc: 'Excluded deck staining, power washing, and small board replacement searches.',
        },
        {
          title: '3. Conversion Tracking',
          desc: 'Monitored calls and form inquiries with photo upload options for current backyards.',
        },
        {
          title: '4. Landing-Page Alignment',
          desc: 'Showcased certified installer badges, 3D renderings, and composite warranty information.',
        },
        {
          title: '5. Bid Strategy',
          desc: 'Launched early February campaigns to lock in spring construction calendars.',
        },
        {
          title: '6. Ongoing Optimization',
          desc: 'Shifted focus into new residential subdivisions with unfinished backyards.',
        },
      ],
    },
    faqs: [
      {
        q: 'How do you prevent inquiries for small deck repairs and staining?',
        a: 'We exclude negative keywords for power washing, board staining, and small deck repairs.',
      },
    ],
  },

  'general-contractors': {
    slug: 'general-contractors',
    urlPath: '/contractors/google-ads-for-general-contractors/',
    industry: 'General Contractors',
    shortIndustry: 'General Contracting',
    icon: 'Building2',
    badge: 'Major Renovations & New Construction',
    hero: {
      h1: 'Google Ads for General Contractors',
      supportingHeadline: 'Turn high-intent construction and renovation searches into qualified project inquiries.',
      supportingParagraph:
        'We build and manage search campaigns for general contractors. Our work includes campaign structure, call tracking, conversion tracking, search-term review, geographic targeting, and ongoing optimization.',
      sampleMetrics: {
        campaignName: 'Major Residential Construction',
        qualifiedCalls: '30',
        bookedEstimates: '19',
        costPerOpportunity: '$96.00',
        conversionRate: '14.5%',
        adSpend: '$2,880',
        trackingStatus: 'Active (Call Tracking + CRM Sync)',
      },
    },
    problems: {
      headline: 'More construction inquiries do not automatically mean more profitable building contracts.',
      items: [
        {
          title: 'Inquiries for Minor Handyman Fixes',
          desc: 'Ad spend gets wasted on small drywall or fixture fixes when your business manages six-figure structural builds.',
        },
        {
          title: 'Unfunded Projects Without Clear Timelines',
          desc: 'Landing pages without qualification steps attract speculative callers who lack construction financing.',
        },
        {
          title: 'Mixing Residential and Commercial Bids',
          desc: 'Commercial tenant improvements and custom home additions need distinct campaigns and landing pages.',
        },
      ],
    },
    servicesTargeted: {
      headline: 'Advertise the services you actually want more of',
      services: [
        {
          name: 'Custom Home Additions',
          desc: 'Target homeowners looking for second-story expansions, in-law suites, and structural extensions.',
        },
        {
          name: 'Whole-Structure Remodeling',
          desc: 'Capture inquiries for complete interior tear-outs, load-bearing wall removals, and structural reconfiguration.',
        },
        {
          name: 'Commercial Tenant Improvements',
          desc: 'Reach business owners and property managers planning retail, office, and medical clinic buildouts.',
        },
        {
          name: 'ADU & Guest House Construction',
          desc: 'Connect with property owners building detached accessory dwelling units and garage conversions.',
        },
      ],
    },
    campaignStructure: {
      headline: 'Your campaigns should reflect how your business makes money',
      groups: [
        'Home Additions & Expansions',
        'Whole-Structure Remodeling',
        'Commercial Buildouts',
        'Accessory Dwelling Units (ADU)',
        'Brand Protection',
      ],
      explanation:
        'Grouping major structural additions, ADUs, and commercial renovations into dedicated campaigns ensures each service receives proper budget control.',
    },
    searchFlow: {
      headline: 'The ad should match what the customer is looking for',
      searchQuery: 'general contractor for home addition',
      adHeadline: 'General Contractor in [Service Area]',
      adDesc: 'Licensed general contractor. Design-build home additions, whole-house remodels, and commercial buildouts.',
      landingPageTitle: 'Licensed General Contracting & Project Consultations',
      ctaButton: 'Request Project Consultation',
    },
    landingExamples: [
      {
        search: 'Home Addition Search',
        page: 'Custom Home Addition Design & Permitting Page',
      },
      {
        search: 'Commercial Buildout Search',
        page: 'Commercial Tenant Improvement & Buildout Page',
      },
    ],
    caseStudy: {
      clientName: 'Summit General Contractors',
      location: 'Seattle, WA',
      timeframe: '90 Days',
      headline: '14 Major Construction Projects Booked',
      summary:
        'Focused search advertising on high-value additions, whole-home renovations, and ADU builds.',
      metrics: [
        { label: 'Ad Spend', value: '$10,800' },
        { label: 'Qualified Inquiries', value: '88' },
        { label: 'On-Site Meetings', value: '38' },
        { label: 'Signed Contracts', value: '14 Projects' },
        { label: 'Avg. Project Size', value: '$95,000' },
        { label: 'Cost Per Opportunity', value: '$122.72' },
      ],
      breakdown: [
        {
          title: '1. Campaign Structure',
          desc: 'Separated major residential additions and commercial buildouts with distinct budgets.',
        },
        {
          title: '2. Search-Term Management',
          desc: 'Excluded handyman searches, subcontracting employment queries, and small paint repairs.',
        },
        {
          title: '3. Conversion Tracking',
          desc: 'Tracked detailed project consultation requests and phone inquiries.',
        },
        {
          title: '4. Landing-Page Alignment',
          desc: 'Featured contractor licensing, architectural design process, and permitting overviews.',
        },
        {
          title: '5. Bid Strategy',
          desc: 'Allocated budget toward searches with clear multi-room and structural addition scope.',
        },
        {
          title: '6. Ongoing Optimization',
          desc: 'Refined geographic targeting to focus on neighborhoods with zoning support for ADUs.',
        },
      ],
    },
    faqs: [
      {
        q: 'How do you qualify callers for large project budgets?',
        a: 'We include project scope and timeline selectors on consultation forms to filter out casual inquiries.',
      },
    ],
  },
};

export const getContractorService = (slug: string): ContractorServiceInfo | undefined => {
  // Direct match
  if (contractorServicePages[slug]) {
    return contractorServicePages[slug];
  }

  // Support full URL variations e.g. "google-ads-for-roofing-contractors" -> "roofing-contractors"
  const normalized = slug
    .replace(/^google-ads-for-/, '')
    .replace(/\/$/, '');

  if (contractorServicePages[normalized]) {
    return contractorServicePages[normalized];
  }

  // Fallback for short slug e.g. "roofing" -> "roofing-contractors"
  const withSuffix = `${normalized}-contractors`;
  if (contractorServicePages[withSuffix]) {
    return contractorServicePages[withSuffix];
  }

  return undefined;
};
