export interface CategoryPageData {
  slug: string;
  industry: string;
  categoryTitle: string;
  heroH1: string;
  heroSupportingCopy: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  salesMotion: 'demand-capture' | 'considered-purchase';
  heroStats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  heroDashboard: {
    monthlySpend: string;
    leadsCount: number;
    primaryMetricLabel: string;
    primaryMetricValue: string;
    avgTicket: string;
    closedRevenue: string;
    roas: string;
  };
  trustItems: string[];
  howItWorksSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  problems: {
    title: string;
    description: string;
    whyItHappens: string;
  }[];
  searchIntents: {
    intentType: string;
    queryExamples: string[];
    contractorImpact: string;
    howWeHandleIt: string;
  }[];
  campaignStructure: {
    campaignName: string;
    focus: string;
    budgetShare: string;
    keyTargets: string[];
  }[];
  landingPageStrategies: {
    rule: string;
    detail: string;
  }[];
  conversionTracking: {
    method: string;
    tool: string;
    purpose: string;
  }[];
  leadQualitySection: {
    headline: string;
    subheadline: string;
    comparisonRows: {
      standardAgency: string;
      ourApproach: string;
    }[];
  };
  optimizationTasks: {
    task: string;
    frequency: string;
    description: string;
  }[];
  negativeKeywords: {
    group: string;
    examples: string[];
    reason: string;
  }[];
  geographicTargeting: {
    strategy: string;
    description: string;
  }[];
  caseStudy: {
    contractorName: string;
    location: string;
    marketSize: string;
    monthlySpend: string;
    leadsGenerated: number;
    primaryOutcomeMetric: string;
    primaryOutcomeValue: string;
    closedRevenue: string;
    roas: string;
    summary: string;
  };
  processSteps: {
    phase: string;
    title: string;
    timeline: string;
    deliverables: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  finalCta: {
    headline: string;
    subheadline: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

export const contractorCategoryPages: Record<string, CategoryPageData> = {
  'roofing-contractors': {
    slug: 'roofing-contractors',
    industry: 'Roofing',
    categoryTitle: 'Roofing Contractors',
    heroH1: 'Google Ads for Roofing Contractors',
    heroSupportingCopy:
      'We run Google Ads campaigns built specifically for roofing companies. Our setup focuses on high-ticket roof replacements, insurance claims, and storm restoration work while filtering out low-margin repairs and DIY clicks.',
    primaryCtaText: 'Request an Account Audit',
    secondaryCtaText: 'See Campaign Structure',
    salesMotion: 'demand-capture',
    heroStats: [
      { label: 'ROAS Range', value: '5x - 17x', sublabel: 'Closed contract performance' },
      { label: 'Primary KPI', value: 'Cost Per Booked Job', sublabel: 'Not raw form submission volume' },
      { label: 'Channel Priority', value: 'Search + LSA', sublabel: 'Fast response for active homeowner intent' },
    ],
    heroDashboard: {
      monthlySpend: '$12,400',
      leadsCount: 58,
      primaryMetricLabel: 'Booked Estimates',
      primaryMetricValue: '39 Booked',
      avgTicket: '$16,500',
      closedRevenue: '$198,000',
      roas: '15.9x',
    },
    trustItems: [
      'Google Search Campaigns',
      'Local Services Ads (LSA)',
      'CallRail Dynamic Number Insertion',
      'Roof Replacement Landing Pages',
      'AccuLynx and JobNimbus Sync',
    ],
    howItWorksSteps: [
      {
        step: '01',
        title: 'Homeowner Searches for Replacement',
        description: 'A homeowner searches for a roof replacement, leak inspection, or storm restoration estimate in your service territory.',
      },
      {
        step: '02',
        title: 'High-Intent Ad Displays With Local Proof',
        description: 'Our ad displays your business rating, warranty terms, and local address, directing them to a dedicated page for that specific service.',
      },
      {
        step: '03',
        title: 'Homeowner Calls or Requests an Estimate',
        description: 'The visitor calls your dedicated tracking line or submits their property address, roof age, and project timeline.',
      },
      {
        step: '04',
        title: 'Estimate Is Dispatched and Tracked to Revenue',
        description: 'Your team conducts the inspection and provides the quote. We track which keyword generated the signed contract.',
      },
    ],
    problems: [
      {
        title: 'High CPL with money wasted on small repairs',
        description: 'Clicks in roofing often cost $25 to $60. When broad match keywords bring in searches for single shingle patches, ad budgets burn quickly.',
        whyItHappens: 'Generalist agencies bundle patch jobs, tar repairs, and full replacements into one single broad ad group.',
      },
      {
        title: 'Broad metro radius wasting budget outside core areas',
        description: 'Roofing crews work best within 25 to 45 miles of the shop. Running ads across an entire media market wastes clicks on neighborhoods you cannot service.',
        whyItHappens: 'Location targeting is left on broad default settings rather than specific hail corridors and target zip codes.',
      },
      {
        title: 'Unsegmented insurance and retail traffic',
        description: 'A homeowner dealing with hail damage needs an insurance specialist. A homeowner with an aging roof needs financing options. Sending both to the same generic page reduces conversions.',
        whyItHappens: 'Lack of dedicated landing pages for storm damage versus retail replacement.',
      },
      {
        title: 'No call tracking for phone leads',
        description: 'Over 75% of high-value roofing leads come through phone calls. Without dynamic number tracking, you cannot tell which ads produce revenue.',
        whyItHappens: 'Ad reporting stops at Google Ads dashboard metrics rather than connecting calls to booked inspections in your CRM.',
      },
    ],
    searchIntents: [
      {
        intentType: 'Retail Roof Replacement',
        queryExamples: ['roof replacement cost near me', 'shingle roof replacement contractor', 'new roof estimate [city]'],
        contractorImpact: 'Core replacement demand, planned homeowner purchase with financing interest.',
        howWeHandleIt: 'Dedicated replacement landing page highlighting local warranties, financing plans, and shingle options.',
      },
      {
        intentType: 'Storm and Hail Damage',
        queryExamples: ['hail damage roof inspection', 'emergency roof tarping after storm', 'wind damage roof insurance claim'],
        contractorImpact: 'Time-sensitive demand funded by insurance payouts following storm events.',
        howWeHandleIt: 'Geo-targeted campaigns focused on specific zip codes affected by recent storm paths.',
      },
      {
        intentType: 'Flat & Specialized Roofing',
        queryExamples: ['flat roof repair contractor', 'tpo roof installation company', 'metal roof restoration contractor'],
        contractorImpact: 'Large commercial and specialized contract values requiring separate B2B messaging.',
        howWeHandleIt: 'Isolated specialized campaigns targeting building owners and property managers during business hours.',
      },
    ],
    campaignStructure: [
      {
        campaignName: 'Search: Full Replacement',
        focus: 'High-intent homeowners seeking full architectural shingle or tile replacements.',
        budgetShare: '50% of monthly spend',
        keyTargets: ['roof replacement contractor', 'new roof installation', 'reroof cost estimate'],
      },
      {
        campaignName: 'Search: Storm and Insurance Claims',
        focus: 'Homeowners in storm corridors requiring claim assistance and inspections.',
        budgetShare: '25% of monthly spend',
        keyTargets: ['hail damage roof inspection', 'insurance claim roof repair', 'wind damage roof repair'],
      },
      {
        campaignName: 'Local Services Ads (LSA)',
        focus: 'Google Screened direct calls capturing immediate local searchers.',
        budgetShare: '15% of monthly spend',
        keyTargets: ['Google Screened roofing contractors', 'top rated roofers near me'],
      },
      {
        campaignName: 'Search: Metal & Specialized Roofing',
        focus: 'Property managers and high-end metal roof prospects.',
        budgetShare: '10% of monthly spend',
        keyTargets: ['flat roofing contractors', 'standing seam metal roof installers'],
      },
    ],
    landingPageStrategies: [
      {
        rule: 'Service-Specific Match',
        detail: 'Visitors searching for hail damage see storm inspection details. Visitors searching for metal roofing see metal profiles and photos.',
      },
      {
        rule: 'Click-to-Call Above the Fold',
        detail: 'Phone numbers remain prominent and clickable at the top of the mobile screen on every landing page.',
      },
      {
        rule: 'Qualification Form Fields',
        detail: 'Forms ask for property address, approximate roof age, and homeowner status to screen out renters and non-owners.',
      },
      {
        rule: 'Local Proof and Credentials',
        detail: 'Real job photos, manufacturer certifications (GAF, Owens Corning), and local reviews placed directly beside the quote form.',
      },
    ],
    conversionTracking: [
      {
        method: 'Dynamic Call Tracking',
        tool: 'CallRail / WhatConverts',
        purpose: 'Records the exact keyword, ad, and campaign for every incoming phone call lasting over 60 seconds.',
      },
      {
        method: 'Form Submission Tracking',
        tool: 'Google Tag Manager + GA4',
        purpose: 'Captures full estimate request submissions with address and contact details.',
      },
      {
        method: 'CRM Revenue Attribution',
        tool: 'AccuLynx / JobNimbus / ServiceTitan',
        purpose: 'Matches closed roof replacement dollars back to the specific Google Ads campaign that originated the lead.',
      },
    ],
    leadQualitySection: {
      headline: 'Focusing on Booked Jobs Instead of Raw Clicks',
      subheadline: 'A typical agency reports impressions and cheap clicks. We measure the cost to put an estimator in a driveway for a full replacement.',
      comparisonRows: [
        {
          standardAgency: 'Counts every 5-second phone inquiry and spam form fill as a conversion',
          ourApproach: 'Tracks only qualified calls over 60 seconds and verified homeowner estimate requests',
        },
        {
          standardAgency: 'Bids on broad keywords that attract DIYers and single-tile repair shoppers',
          ourApproach: 'Separates replacement keywords from repair terms with separate budgets and strict negative lists',
        },
        {
          standardAgency: 'Sends all ad traffic to your generic website homepage',
          ourApproach: 'Builds dedicated, fast-loading landing pages for each roofing service category',
        },
        {
          standardAgency: 'Reports clicks and average cost per click at the end of the month',
          ourApproach: 'Reports cost per booked estimate and closed revenue matched with your CRM',
        },
      ],
    },
    optimizationTasks: [
      {
        task: 'Search Term Filtering',
        frequency: '2 to 3 times per week',
        description: 'Reviewing actual search queries to add negative keywords for DIY topics, job seekers, and irrelevant materials.',
      },
      {
        task: 'Bid and Device Adjustments',
        frequency: 'Weekly',
        description: 'Adjusting device and location bid multipliers based on call volume and estimate booking rates.',
      },
      {
        task: 'Ad Copy Testing',
        frequency: 'Bi-weekly',
        description: 'Testing headlines focused on warranties, financing terms, and emergency availability.',
      },
      {
        task: 'Geographic Radius Pruning',
        frequency: 'Monthly',
        description: 'Shifting budget toward high-margin neighborhoods and removing underperforming zip codes.',
      },
    ],
    negativeKeywords: {
      group: 'Roofing Negative Keyword Exclusions',
      examples: [
        'diy roof repair',
        'roofing jobs hiring',
        'roofing supply store',
        'cheap roof patch',
        'how to replace shingles yourself',
        'roofing license test',
        'free roof scrap metal',
        'roofing calculator app',
        'home depot roof shingles',
      ],
      reason: 'These search queries indicate students, job seekers, DIY homeowners, or material buyers who will never hire a full replacement contractor.',
    },
    geographicTargeting: [
      {
        strategy: 'Targeted Zip Code Selection',
        description: 'We focus ad spend on specific zip codes with older housing stock and higher home valuations where full replacements are common.',
      },
      {
        strategy: 'Exclusion of Unserviceable Areas',
        description: 'Surrounding rural counties or distant metro areas where travel time reduces crew profitability are explicitly blocked.',
      },
      {
        strategy: 'Storm Path Geofencing',
        description: 'Following major hail or wind events, campaigns can be rapidly directed to affected neighborhoods.',
      },
    ],
    caseStudy: {
      contractorName: 'Paragon Roofing Solutions',
      location: 'Dallas-Fort Worth Metro, TX',
      marketSize: 'Multi-crew roofing contractor',
      monthlySpend: '$14,200 / month',
      leadsGenerated: 64,
      primaryOutcomeMetric: 'Cost Per Booked Estimate',
      primaryOutcomeValue: '$315 / Booked Inspection',
      closedRevenue: '$246,000 in closed contracts',
      roas: '17.3x ROAS',
      summary:
        'By separating retail replacements from storm repair traffic and adding over 350 negative keywords, Paragon Roofing reduced wasted spend by 41% and increased their booked full-roof replacements within 60 days.',
    },
    processSteps: [
      {
        phase: 'Phase 01',
        title: 'Account Audit and Tracking Setup',
        timeline: 'Days 1 - 7',
        deliverables: [
          'Audit existing Google Ads account and search query history',
          'Install CallRail dynamic number insertion for call tracking',
          'Deploy dedicated landing pages for replacements and storm repairs',
          'Build negative keyword lists to prevent wasted spend',
        ],
      },
      {
        phase: 'Phase 02',
        title: 'Campaign Launch and LSA Integration',
        timeline: 'Days 8 - 14',
        deliverables: [
          'Launch structured Search campaigns segmented by roofing service',
          'Verify and connect Local Services Ads (Google Screened)',
          'Establish target zip code radius and bid constraints',
          'Verify call recording and form conversion tracking in GA4',
        ],
      },
      {
        phase: 'Phase 03',
        title: 'Optimization and Search Term Pruning',
        timeline: 'Days 15 - 45',
        deliverables: [
          'Review search terms weekly to eliminate non-buyer clicks',
          'Test responsive ad variations for click-through rate gains',
          'Adjust bids toward high-converting days and hours',
          'Review call quality recordings with your intake team',
        ],
      },
      {
        phase: 'Phase 04',
        title: 'Budget Scaling and Margin Expansion',
        timeline: 'Days 45+',
        deliverables: [
          'Reallocate budget to the highest-margin service categories',
          'Expand geographic radius into adjacent high-value neighborhoods',
          'Sync closed job data from your CRM to improve bidding signals',
          'Maintain monthly performance reviews focused on closed revenue',
        ],
      },
    ],
    faqs: [
      {
        question: 'How can Google Ads for Roofing help my roofing business?',
        answer:
          'Google Ads for Roofing can put your company in front of homeowners and property owners searching for roof repair, roof replacement, inspections, and other roofing services.',
      },
      {
        question: 'What roofing services can I advertise with Google Ads?',
        answer:
          'You can advertise roof repair, roof replacement, storm damage roofing, roof inspections, commercial roofing, emergency roofing, and other roofing services your company provides.',
      },
      {
        question: 'How do Google Local Services Ads work for roofing contractors?',
        answer:
          'Local Services Ads can help eligible roofing contractors appear for local roofing searches. Your profile can show services, service areas, hours, reviews, and ways for customers to contact your company.',
      },
      {
        question: 'Can I run Local Services Ads and Google Ads for Roofing at the same time?',
        answer:
          'Yes. They are separate advertising options, so a roofing company can use both when eligible and when both fit the company’s advertising plan.',
      },
      {
        question: 'How much do Local Services Ads cost for roofing contractors?',
        answer:
          'Local Services Ads charge for valid leads rather than clicks. The amount you pay for a lead can vary based on factors such as location, job type, lead type, and bidding.',
      },
      {
        question: 'Do reviews matter for Roofing Local Services Ads?',
        answer:
          'Yes. Reviews and your star rating can affect how your roofing business ranks in Local Services Ads.',
      },
      {
        question: 'Do I still need Google Ads management if I already run roofing ads?',
        answer:
          'If you already run Google Ads for Roofing, we can review your keywords, search terms, ads, locations, conversion tracking, bidding, and budget to see what needs attention.',
      },
      {
        question: 'Can Google Ads for Roofing improve the quality of inquiries I get?',
        answer:
          'Yes. Campaigns can focus on roofing searches that match the services and locations your company actually wants to serve.',
      },
      {
        question: 'Can you track roofing calls and estimate requests from Google Ads?',
        answer:
          'Yes. Phone calls and roofing estimate forms can be tracked as conversions so you can see which campaigns are producing inquiries.',
      },
      {
        question: 'How do I get started with Google Ads for Roofing?',
        answer:
          'We review your roofing services, service area, website, current Google Ads account, Local Services Ads setup if applicable, tracking, and budget before recommending the next step.',
      },
    ],
    finalCta: {
      headline: 'Ready to Stop Wasting Budget on Unqualified Roofing Clicks?',
      subheadline:
        'Schedule a straightforward review of your current Google Ads setup. We will examine your search terms, identify wasted spend, and show you how to target high-ticket replacements.',
      primaryButton: 'Schedule an Account Review',
      secondaryButton: 'Call (980) 448-2627',
    },
  },

  'hvac-contractors': {
    slug: 'hvac-contractors',
    industry: 'HVAC',
    categoryTitle: 'HVAC Contractors',
    heroH1: 'Google Ads for HVAC Contractors',
    heroSupportingCopy:
      'We build Google Ads campaigns for HVAC companies focused on high-margin system replacements, heat pump changeouts, and urgent emergency repairs without burning budget on low-value filter queries.',
    primaryCtaText: 'Request an HVAC Account Audit',
    secondaryCtaText: 'View HVAC Campaign Structure',
    salesMotion: 'demand-capture',
    heroStats: [
      { label: 'ROAS Range', value: '5x - 17x', sublabel: 'Closed contract performance' },
      { label: 'Buying Cycle', value: 'Hours to Days', sublabel: 'Urgent demand when systems fail' },
      { label: 'Key Strategy', value: 'Search + LSA', sublabel: 'Capture immediate phone inquiries' },
    ],
    heroDashboard: {
      monthlySpend: '$9,800',
      leadsCount: 72,
      primaryMetricLabel: 'Booked Service Calls',
      primaryMetricValue: '54 Booked',
      avgTicket: '$9,200',
      closedRevenue: '$148,000',
      roas: '15.1x',
    },
    trustItems: [
      'AC & Heat Pump Replacement Ads',
      'Local Services Ads (LSA) Management',
      'CallRail Call Tracking & Recording',
      'ServiceTitan & Housecall Pro Sync',
      'Emergency Same-Day Landing Pages',
    ],
    howItWorksSteps: [
      {
        step: '01',
        title: 'Homeowner Needs AC or Heating Service',
        description: 'When a home AC unit breaks in July or a furnace stops in January, the homeowner searches for an immediate local contractor.',
      },
      {
        step: '02',
        title: 'Ad Shows Same-Day Availability & Warranties',
        description: 'Our ad highlights your local rating, emergency dispatch capability, and replacement financing options.',
      },
      {
        step: '03',
        title: 'Homeowner Calls Your Dispatch Line',
        description: 'The call is routed directly to your CSR team with full keyword and campaign attribution recorded in real time.',
      },
      {
        step: '04',
        title: 'Tech Is Dispatched for Repair or Changeout',
        description: 'The tech inspects the unit and offers repair versus full system replacement options. The outcome is tracked in your system.',
      },
    ],
    problems: [
      {
        title: 'Optimizing for cheap tune-ups instead of replacements',
        description: 'Many HVAC ad accounts generate plenty of $89 tune-up calls while missing the $10,000 complete system replacement opportunities.',
        whyItHappens: 'Keywords focus on generic furnace cleaning and filter maintenance without isolating replacement intent.',
      },
      {
        title: 'Budget exhaustion during extreme weather peaks',
        description: 'When a heat wave hits, daily budgets run out by 10 AM, leaving your business invisible during afternoon peak demand.',
        whyItHappens: 'Bidding strategies lack dayparting controls and automated weather-triggered budget adjustments.',
      },
      {
        title: 'Unanswered calls during peak dispatch hours',
        description: 'Contractors spend hundreds of dollars on clicks only to have incoming calls go to voicemail during busy hours.',
        whyItHappens: 'No call tracking visibility to show owners when calls are being missed by CSR staff.',
      },
      {
        title: 'Leads from renters who cannot approve system swaps',
        description: 'Clicks from apartment renters looking for landlord maintenance eat up ad spend with zero chance of closing a new installation.',
        whyItHappens: 'Missing negative keyword lists for landlord, apartment complex, and rental maintenance terms.',
      },
    ],
    searchIntents: [
      {
        intentType: 'System Replacement & Changeouts',
        queryExamples: ['ac unit replacement cost', 'new heat pump installation contractor', 'furnace and ac combo estimate'],
        contractorImpact: 'Top margin service where homeowners consider brand warranties and efficiency ratings.',
        howWeHandleIt: 'Dedicated installation landing pages showing SEER ratings, utility rebates, and monthly financing plans.',
      },
      {
        intentType: 'Emergency Repair & Diagnostics',
        queryExamples: ['emergency ac repair near me', 'furnace blowing cold air [city]', '24 hour heating technician'],
        contractorImpact: 'Immediate conversion with fast decision window and opportunity for future system conversion.',
        howWeHandleIt: 'Mobile-first click-to-call ads focused on fast response times and transparent diagnostic pricing.',
      },
      {
        intentType: 'Seasonal Maintenance',
        queryExamples: ['ac tune up special', 'furnace safety inspection [city]', 'hvac annual maintenance plan'],
        contractorImpact: 'Low ticket entry point designed to build membership rosters and identify aging equipment.',
        howWeHandleIt: 'Controlled budget allocation to fill shoulder season schedules without crowding out replacement budgets.',
      },
    ],
    campaignStructure: [
      {
        campaignName: 'Search: AC & Heating Replacements',
        focus: 'Homeowners searching for new systems, heat pump conversions, and full replacements.',
        budgetShare: '45% of monthly spend',
        keyTargets: ['ac replacement cost', 'heat pump installation', 'new furnace estimate'],
      },
      {
        campaignName: 'Search: Emergency Repair & Service',
        focus: 'Immediate repair demand during peak winter and summer operating conditions.',
        budgetShare: '30% of monthly spend',
        keyTargets: ['ac repair near me', 'furnace repair technician', 'emergency hvac service'],
      },
      {
        campaignName: 'Local Services Ads (LSA)',
        focus: 'Top-of-page Google Guaranteed direct phone calls.',
        budgetShare: '20% of monthly spend',
        keyTargets: ['Google Guaranteed HVAC contractors', 'best heating and cooling company'],
      },
      {
        campaignName: 'Search: Brand & Retargeting',
        focus: 'Protecting your brand name and recapturing prior estimate requests.',
        budgetShare: '5% of monthly spend',
        keyTargets: ['[Company Name] phone number', '[Company Name] reviews'],
      },
    ],
    landingPageStrategies: [
      {
        rule: 'Direct Click-to-Call Primary Action',
        detail: 'Phone numbers are click-enabled with direct CSR routing, because urgent HVAC issues convert primarily on voice calls.',
      },
      {
        rule: 'Rebate and Financing Clarification',
        detail: 'Clear explanations of federal heat pump incentives, local utility rebates, and low monthly payment options.',
      },
      {
        rule: 'Technician Badges and Trust Signals',
        detail: 'Displaying background-checked technicians, NATE certifications, and BBB ratings prominently.',
      },
      {
        rule: 'Fast Form for Non-Urgent Inquiries',
        detail: 'Simple 3-field online booking form for homeowners who prefer scheduling inspections after business hours.',
      },
    ],
    conversionTracking: [
      {
        method: 'CallRail Dynamic Number Insertion',
        tool: 'CallRail',
        purpose: 'Tracks every phone lead down to the exact keyword and records call audio for CSR coaching.',
      },
      {
        method: 'Form Submission Tracking',
        tool: 'Google Tag Manager',
        purpose: 'Measures scheduled maintenance and estimate requests with full referral path attribution.',
      },
      {
        method: 'FSM Revenue Sync',
        tool: 'ServiceTitan / Housecall Pro',
        purpose: 'Connects completed invoices back to Google Ads to feed offline conversion value into smart bidding.',
      },
    ],
    leadQualitySection: {
      headline: 'Targeting High-Margin System Swaps Over Cheap Service Calls',
      subheadline: 'A service call keeps a truck rolling, but system replacements pay for the business. We balance your ad spend to feed both without sacrificing margin.',
      comparisonRows: [
        {
          standardAgency: 'Dumps all HVAC keywords into one campaign and cheers for $45 tune-up leads',
          ourApproach: 'Separates replacement campaigns from repair campaigns with isolated budgets and bid goals',
        },
        {
          standardAgency: 'Allows broad search terms to bid on DIY troubleshooting and appliance repair',
          ourApproach: 'Maintains an HVAC negative keyword library of over 400 excluded terms',
        },
        {
          standardAgency: 'Lets campaigns run 24/7 without checking when your dispatch office is open',
          ourApproach: 'Configures ad scheduling and bidding to align with your active CSR and technician hours',
        },
        {
          standardAgency: 'Measures clicks and impressions on monthly summary slide decks',
          ourApproach: 'Reviews cost per booked call, replacement conversion rate, and closed revenue with leadership',
        },
      ],
    },
    optimizationTasks: [
      {
        task: 'Search Query Audit',
        frequency: '3 times per week',
        description: 'Excluding DIY, industrial refrigeration, and apartment maintenance searches.',
      },
      {
        task: 'Weather Triggered Bidding',
        frequency: 'Seasonal / As Needed',
        description: 'Ramping budgets before predicted heat waves and sub-freezing cold snaps.',
      },
      {
        task: 'CSR Call Quality Spot Checks',
        frequency: 'Weekly',
        description: 'Listening to recorded calls to verify that CSRs are booking qualified replacement appointments.',
      },
      {
        task: 'LSA Dispute Management',
        frequency: 'Weekly',
        description: 'Disputing spam, wrong numbers, and out-of-territory calls inside the LSA portal to recover budget.',
      },
    ],
    negativeKeywords: {
      group: 'HVAC Negative Keyword Exclusions',
      examples: [
        'how to recharge ac yourself',
        'hvac tech salary',
        'apartment air conditioning maintenance',
        'window ac unit repair',
        'refrigeration compressor parts',
        'hvac wholesale supply house',
        'furnace thermocouple replacement video',
        'freon r22 buy online',
      ],
      reason: 'These terms represent technicians seeking supplies, job applicants, or homeowners trying DIY fixes.',
    },
    geographicTargeting: [
      {
        strategy: 'Service Area Radius Tightening',
        description: 'Targeting homeowners within 20 to 35 minutes of your shop to minimize technician windshield time.',
      },
      {
        strategy: 'Excluding High-Density Rental Neighborhoods',
        description: 'Pruning zip codes dominated by apartment complexes where residents cannot approve equipment replacements.',
      },
      {
        strategy: 'Targeting Older Subdivisions',
        description: 'Focusing replacement campaigns on 12 to 25 year old housing developments where original builder units are failing.',
      },
    ],
    caseStudy: {
      contractorName: 'Carolina Climate Masters',
      location: 'Raleigh-Durham, NC',
      marketSize: '14-truck HVAC team',
      monthlySpend: '$11,500 / month',
      leadsGenerated: 86,
      primaryOutcomeMetric: 'Cost Per Booked Job',
      primaryOutcomeValue: '$185 / Booked Job',
      closedRevenue: '$178,000 in replacements & repairs',
      roas: '15.4x ROAS',
      summary:
        'Carolina Climate Masters shifted 60% of their ad budget from generic repair terms into dedicated heat pump and AC replacement campaigns, increasing their average ticket by $3,200.',
    },
    processSteps: [
      {
        phase: 'Phase 01',
        title: 'Account Audit & Call Setup',
        timeline: 'Days 1 - 7',
        deliverables: [
          'Review historic search terms and eliminate wasteful keywords',
          'Deploy CallRail numbers and call recording',
          'Build replacement and repair landing pages',
          'Connect Google Tag Manager to ServiceTitan or CRM',
        ],
      },
      {
        phase: 'Phase 02',
        title: 'Campaign Architecture Launch',
        timeline: 'Days 8 - 14',
        deliverables: [
          'Launch separated replacement and repair search campaigns',
          'Set up LSA profile with Google Screened badge verification',
          'Establish negative keyword rules and schedule bids',
          'Test all click-to-call and form tracking pathways',
        ],
      },
      {
        phase: 'Phase 03',
        title: 'Seasonal Bid Calibration',
        timeline: 'Days 15 - 45',
        deliverables: [
          'Prune non-converting search terms daily during peak periods',
          'Test ad headlines highlighting same-day dispatch and financing',
          'Adjust bids based on technician capacity and weather forecasts',
          'Dispute invalid LSA calls to recover ad credit',
        ],
      },
      {
        phase: 'Phase 04',
        title: 'Capacity & Margin Scaling',
        timeline: 'Days 45+',
        deliverables: [
          'Scale budget in high-performing replacement zip codes',
          'Introduce shoulder season maintenance campaigns',
          'Sync offline revenue data to train Google smart bidding algorithms',
          'Conduct monthly ROI reviews with ownership',
        ],
      },
    ],
    faqs: [
      {
        question: 'How can Google Ads for HVAC help my HVAC business?',
        answer:
          'Google Ads for HVAC can put your company in front of people searching for AC repair, heating repair, HVAC installation, replacement, maintenance, and other HVAC services.',
      },
      {
        question: 'What HVAC services can I advertise with Google Ads?',
        answer:
          'You can advertise AC repair, AC replacement, furnace repair, furnace replacement, HVAC installation, maintenance, heating services, cooling services, and other HVAC services you provide.',
      },
      {
        question: 'How do Google Local Services Ads work for HVAC contractors?',
        answer:
          'Local Services Ads can help eligible HVAC contractors appear when people search for HVAC services in their area. Customers can contact the business through available lead options.',
      },
      {
        question: 'Can I run Local Services Ads and Google Ads for HVAC at the same time?',
        answer:
          'Yes. Local Services Ads and standard Google Ads are separate advertising options and can be used together when both are available and make sense for the business.',
      },
      {
        question: 'How much do Local Services Ads cost for HVAC contractors?',
        answer:
          'You pay for valid leads rather than clicks. Lead prices can vary based on location, service, lead type, and bidding settings.',
      },
      {
        question: 'Do reviews matter for HVAC Local Services Ads?',
        answer:
          'Yes. Your rating and number of reviews can affect how your HVAC business ranks in Local Services Ads.',
      },
      {
        question: 'Do I still need Google Ads management if I already run HVAC ads?',
        answer:
          'If you already run Google Ads for HVAC, we can review your campaigns, search terms, keywords, locations, ads, tracking, bidding, and budget.',
      },
      {
        question: 'Can Google Ads for HVAC improve the quality of inquiries I get?',
        answer:
          'Yes. HVAC campaigns can focus on relevant services, locations, and searches that match the type of work your company wants.',
      },
      {
        question: 'Can you track HVAC calls and service requests from Google Ads?',
        answer:
          'Yes. Phone calls and website forms can be tracked as conversions so you can see which campaigns are generating inquiries.',
      },
      {
        question: 'Can you manage Google Ads and Local Services Ads for HVAC?',
        answer:
          'Yes. We can review and manage both platforms together, including campaign settings, service areas, leads, budget, reviews, conversion tracking, and performance.',
      },
    ],
    finalCta: {
      headline: 'Ready to Fill Your HVAC Dispatch Board with Higher-Margin Jobs?',
      subheadline:
        'Let us audit your current Google Ads account. We will show you where budget is leaking on cheap service calls and how to capture more system changeouts.',
      primaryButton: 'Request Your HVAC Audit',
      secondaryButton: 'Call (980) 448-2627',
    },
  },

  'remodeling-contractors': {
    slug: 'remodeling-contractors',
    industry: 'Home Remodeling',
    categoryTitle: 'Home Remodeling Contractors',
    heroH1: 'Google Ads for Home Remodeling Contractors',
    heroSupportingCopy:
      'We run Google Ads campaigns for home remodeling contractors specializing in kitchen renovations, master bathroom transformations, and whole-home design-build remodeling projects.',
    primaryCtaText: 'Request a Remodeling Account Audit',
    secondaryCtaText: 'See In-Home Estimate Strategy',
    salesMotion: 'considered-purchase',
    heroStats: [
      { label: 'ROAS Range', value: '5x - 17x', sublabel: 'Closed contract performance' },
      { label: 'Core Sales Metric', value: 'Cost Per Sat Appointment', sublabel: 'Filtering out unbudgeted tire-kickers' },
      { label: 'Decision Timeline', value: '4 to 12 Weeks', sublabel: 'Considered homeowner investment' },
    ],
    heroDashboard: {
      monthlySpend: '$8,500',
      leadsCount: 38,
      primaryMetricLabel: 'Sat In-Home Consultations',
      primaryMetricValue: '22 Consults',
      avgTicket: '$54,000',
      closedRevenue: '$216,000',
      roas: '25.4x',
    },
    trustItems: [
      'Kitchen & Bath Project Ads',
      'Budget-Gated Landing Pages',
      'CallRail Tracking & Lead Scoring',
      'Buildertrend & JobTread Integration',
      'In-Home Consultation Booking Systems',
    ],
    howItWorksSteps: [
      {
        step: '01',
        title: 'Homeowner Plans Major Renovation',
        description: 'A homeowner searches for a custom kitchen remodel, bathroom expansion, or whole-home general contractor in your local area.',
      },
      {
        step: '02',
        title: 'Ad Showcases Design Portfolio & Financing',
        description: 'Our ad highlights your portfolio photos, local design-build process, and realistic project investment ranges.',
      },
      {
        step: '03',
        title: 'Homeowner Fills Out Budget-Gated Form',
        description: 'The homeowner specifies their project scope, home address, anticipated timeline, and realistic budget range.',
      },
      {
        step: '04',
        title: 'Your Design Consultant Sits the In-Home Estimate',
        description: 'Because expectations are set upfront, your sales team sits down with a qualified homeowner ready to discuss plans.',
      },
    ],
    problems: [
      {
        title: 'Sales reps driving to appointments that never sit',
        description: 'Remodeling estimators lose hours of drive time on homeowners who cancel at the door or have zero realistic budget for a full remodel.',
        whyItHappens: 'Website forms only ask for name and phone number with no budget qualifiers or timeline questions.',
      },
      {
        title: 'Spending ad dollars on handyman and minor repair queries',
        description: 'Homeowners searching for small tile fixes or drywall patching click on high-cost remodeling ads.',
        whyItHappens: 'Using broad match keywords without separating custom design-build queries from handyman searches.',
      },
      {
        title: 'Heavy dependence on shared marketplace leads',
        description: 'Buying leads from shared platforms where 4 other contractors are racing to the lowest bid burns margin.',
        whyItHappens: 'No dedicated Google Search campaign creating exclusive inbound inquiries for your company.',
      },
      {
        title: 'Slow lead follow-up losing warm homeowners',
        description: 'High-ticket homeowners researching remodels move on if they do not receive a consultation confirmation within hours.',
        whyItHappens: 'Form submissions land in unmonitored inboxes without instant SMS notifications or calendar booking links.',
      },
    ],
    searchIntents: [
      {
        intentType: 'Kitchen Remodeling',
        queryExamples: ['custom kitchen remodelers near me', 'kitchen renovation contractor cost', 'luxury kitchen design build [city]'],
        contractorImpact: 'High-value, visual and lifestyle-focused homeowner looking for custom cabinetry and layout redesigns.',
        howWeHandleIt: 'Dedicated kitchen landing page with photo galleries, island layouts, and finish options.',
      },
      {
        intentType: 'Bathroom Renovation',
        queryExamples: ['master bathroom remodeling contractor', 'walk in shower remodel cost', 'luxury bath renovation company'],
        contractorImpact: 'High-margin project requiring custom tile, plumbing, and luxury vanity work.',
        howWeHandleIt: 'Landing page showcasing master bath transformations, freestanding tubs, and clear timeline expectations.',
      },
      {
        intentType: 'Whole-Home & Additions',
        queryExamples: ['whole house remodeling contractor', 'home addition design build company', 'second story addition contractors'],
        contractorImpact: 'Major design-build contract with longer sales cycles requiring consultative positioning.',
        howWeHandleIt: 'Portfolio-driven pages emphasizing architectural design, permitting handling, and project management.',
      },
    ],
    campaignStructure: [
      {
        campaignName: 'Search: Custom Kitchen Remodeling',
        focus: 'Homeowners planning complete kitchen redesigns, cabinet replacements, and layout changes.',
        budgetShare: '40% of monthly spend',
        keyTargets: ['kitchen remodeling company', 'custom kitchen renovation', 'kitchen contractor near me'],
      },
      {
        campaignName: 'Search: Master Bathroom Renovations',
        focus: 'Homeowners investing in master bath remodels, walk-in tile showers, and luxury fixtures.',
        budgetShare: '35% of monthly spend',
        keyTargets: ['bathroom remodeling contractor', 'master bath renovation', 'walk in shower remodel'],
      },
      {
        campaignName: 'Search: Whole-Home & Additions',
        focus: 'Major structural renovations, room additions, and whole-house transformations.',
        budgetShare: '20% of monthly spend',
        keyTargets: ['home addition contractors', 'whole house remodel', 'design build general contractor'],
      },
      {
        campaignName: 'Search: Brand & Retargeting',
        focus: 'Reconnecting with previous site visitors as they deliberate on project timing.',
        budgetShare: '5% of monthly spend',
        keyTargets: ['[Company Name] remodeling', '[Company Name] reviews'],
      },
    ],
    landingPageStrategies: [
      {
        rule: 'Project Scope & Budget Selection',
        detail: 'Forms include project scope and realistic investment tiers to filter out small handyman tasks and tire-kickers.',
      },
      {
        rule: 'High-Resolution Local Project Photos',
        detail: 'Real photos of completed local kitchens and bathrooms organized by neighborhood rather than generic stock imagery.',
      },
      {
        rule: 'Clear 3-Step Consultation Process',
        detail: 'Explaining the initial call, in-home design consultation, and 3D rendering stage to build buyer confidence.',
      },
      {
        rule: 'Financing & Payment Schedule Info',
        detail: 'Highlighting monthly financing partnerships (GreenSky, Wisetack) to make larger projects accessible.',
      },
    ],
    conversionTracking: [
      {
        method: 'Form Qualification Tracking',
        tool: 'Google Tag Manager + GA4',
        purpose: 'Measures when a homeowner submits a project inquiry with a qualified budget tier.',
      },
      {
        method: 'Call Tracking with Lead Scoring',
        tool: 'CallRail',
        purpose: 'Tracks and transcribes calls to verify whether callers meet your service radius and project scope.',
      },
      {
        method: 'CRM Deal Stage Sync',
        tool: 'Buildertrend / JobTread',
        purpose: 'Tracks consultations sat, proposals delivered, and contracts signed back to the origin campaign.',
      },
    ],
    leadQualitySection: {
      headline: 'Measuring Cost Per Sat Appointment, Not Vanity Inquiries',
      subheadline: 'For high-ticket remodeling, a lead that does not sit for an in-home estimate is a wasted hour for your sales team. We build campaigns that protect your estimators.',
      comparisonRows: [
        {
          standardAgency: 'Counts $500 handyman inquiries as successful conversions on monthly reports',
          ourApproach: 'Front-loads project scope and budget questions to screen out non-viable projects',
        },
        {
          standardAgency: 'Sends remodeling prospects to an unorganized company homepage with no gallery',
          ourApproach: 'Builds dedicated kitchen and bath landing pages with before-and-after galleries',
        },
        {
          standardAgency: 'Ignores the 4 to 8 week sales cycle and only tracks immediate form fills',
          ourApproach: 'Tracks leads through estimate scheduling, in-home consultation, and signed contract',
        },
        {
          standardAgency: 'Bids on generic terms like "cheap kitchen cabinets" and "diy tile repair"',
          ourApproach: 'Maintains an active negative list excluding DIY queries, materials, and handyman terms',
        },
      ],
    },
    optimizationTasks: [
      {
        task: 'Search Term Review',
        frequency: '2 times per week',
        description: 'Excluding searches for cheap parts, DIY tutorials, and small handyman jobs.',
      },
      {
        task: 'Form Drop-Off Analysis',
        frequency: 'Bi-weekly',
        description: 'Refining qualification questions to balance lead volume with qualified inquiry rates.',
      },
      {
        task: 'Geo-Targeting Refinement',
        frequency: 'Monthly',
        description: 'Focusing ad spend on zip codes with high median home values and equity accumulation.',
      },
      {
        task: 'Consultation Sit Rate Audit',
        frequency: 'Monthly',
        description: 'Reviewing the ratio of booked consultations to sat consultations with your sales team.',
      },
    ],
    negativeKeywords: {
      group: 'Remodeling Negative Keyword Exclusions',
      examples: [
        'diy kitchen cabinets',
        'cheap bathroom tile repair',
        'handyman hourly rate',
        'ikea kitchen cabinet installation',
        'how to remodel bathroom yourself',
        'low income home repair grants',
        'kitchen backsplash peel and stick',
        'used kitchen cabinets craigslist',
      ],
      reason: 'These search queries represent low-budget DIYers or homeowners looking for minor handyman fixes.',
    },
    geographicTargeting: [
      {
        strategy: 'High-Value Zip Code Focusing',
        description: 'Targeting neighborhoods where property values support comprehensive interior and structural renovations.',
      },
      {
        strategy: 'Mature Subdivision Targeting',
        description: 'Prioritizing homes built between 1980 and 2010 that are ready for modern kitchen and bathroom overhauls.',
      },
      {
        strategy: 'Strict Drive Time Boundaries',
        description: 'Limiting radius to 30 to 45 minutes from your showroom or office to keep project managers efficient.',
      },
    ],
    caseStudy: {
      contractorName: 'Prestige Design & Remodel',
      location: 'Columbus, OH',
      marketSize: 'Full-service design-build remodeling team',
      monthlySpend: '$7,800 / month',
      leadsGenerated: 34,
      primaryOutcomeMetric: 'Cost Per Sat Consultation',
      primaryOutcomeValue: '$390 / Sat Estimate',
      closedRevenue: '$285,000 in signed remodeling contracts',
      roas: '36.5x ROAS',
      summary:
        'By implementing budget-gated forms and separating kitchen campaigns from bathroom campaigns, Prestige Design increased their in-home consultation sit rate from 48% to 74% within 90 days.',
    },
    processSteps: [
      {
        phase: 'Phase 01',
        title: 'Positioning & Qualification Setup',
        timeline: 'Days 1 - 7',
        deliverables: [
          'Review target project scope minimums and service territory zones',
          'Build high-converting kitchen and bathroom landing pages',
          'Implement qualification form fields and CallRail tracking',
          'Upload custom negative keyword libraries',
        ],
      },
      {
        phase: 'Phase 02',
        title: 'Segmented Campaign Launch',
        timeline: 'Days 8 - 14',
        deliverables: [
          'Launch distinct campaigns for Kitchens, Baths, and Additions',
          'Deploy high-intent search ads highlighting design warranties and financing',
          'Configure geographic targeting to high-equity zip codes',
          'Test lead routing and instant email/SMS notifications',
        ],
      },
      {
        phase: 'Phase 03',
        title: 'Search Term & Sit-Rate Tuning',
        timeline: 'Days 15 - 45',
        deliverables: [
          'Prune non-remodeling search queries and handyman keywords',
          'Review lead qualification quality with sales estimators',
          'A/B test landing page photo layouts and financing headlines',
          'Adjust bids toward top-performing zip codes',
        ],
      },
      {
        phase: 'Phase 04',
        title: 'Pipeline Scaling & CRM Attribution',
        timeline: 'Days 45+',
        deliverables: [
          'Scale budget in your highest-margin remodeling categories',
          'Connect closed job revenue from Buildertrend or JobTread',
          'Refine seasonal messaging for spring and fall booking windows',
          'Monthly strategy calls focused on project profitability',
        ],
      },
    ],
    faqs: [
      {
        question: 'How can Google Ads for Home Remodeling help my business?',
        answer:
          'Google Ads for Home Remodeling can put your remodeling company in front of homeowners searching for kitchen remodeling, bathroom remodeling, additions, renovations, and other remodeling services.',
      },
      {
        question: 'What remodeling services can I advertise with Google Ads?',
        answer:
          'You can advertise kitchen remodeling, bathroom remodeling, basement remodeling, home additions, whole-home remodeling, renovations, and other remodeling services your company provides.',
      },
      {
        question: 'How do Google Local Services Ads work for remodeling contractors?',
        answer:
          'Local Services Ads can help eligible remodeling businesses appear for relevant local service searches. Your profile can include services, service areas, hours, and reviews.',
      },
      {
        question: 'Can I run Local Services Ads and Google Ads for Home Remodeling together?',
        answer:
          'Yes. They are separate advertising options and can be used together when available for your business and market.',
      },
      {
        question: 'How much do Local Services Ads cost for remodeling contractors?',
        answer:
          'Local Services Ads charge for valid leads instead of clicks. Lead prices can vary based on your location, job type, lead type, and bidding.',
      },
      {
        question: 'Do reviews matter for remodeling Local Services Ads?',
        answer:
          'Yes. Your review count and star rating can affect how your remodeling business is ranked in Local Services Ads.',
      },
      {
        question: 'Do I still need Google Ads management if I already run remodeling ads?',
        answer:
          'If you already run Google Ads for Home Remodeling, we can review your keywords, search terms, campaigns, ads, locations, tracking, bidding, and budget.',
      },
      {
        question: 'Can Google Ads for Home Remodeling improve the quality of inquiries I get?',
        answer:
          'Yes. Campaigns can focus on the remodeling services, locations, and searches that match the projects your company wants to take on.',
      },
      {
        question: 'Can you track remodeling calls and estimate requests from Google Ads?',
        answer:
          'Yes. Phone calls and website estimate forms can be tracked as conversions. Additional sales information can also be connected when your systems support it.',
      },
      {
        question: 'How do I get started with Google Ads and Local Services Ads for Home Remodeling?',
        answer:
          'We review your remodeling services, target locations, website, Google Ads account, Local Services Ads setup if applicable, conversion tracking, and budget before recommending the next step.',
      },
    ],
    finalCta: {
      headline: 'Ready to Fill Your Calendar with High-Ticket Remodeling Consultations?',
      subheadline:
        'Schedule a straightforward review of your Google Ads setup. We will show you how to screen out low-budget tire-kickers and focus spend on serious renovation projects.',
      primaryButton: 'Schedule Remodeling Account Audit',
      secondaryButton: 'Call (980) 448-2627',
    },
  },

  'window-door-contractors': {
    slug: 'window-door-contractors',
    industry: 'Window & Door',
    categoryTitle: 'Window & Door Contractors',
    heroH1: 'Google Ads for Window & Door Contractors',
    heroSupportingCopy:
      'We run Google Ads campaigns for independent window and door replacement companies. We help local contractors win high-intent replacement projects without trying to outspend national franchise dealer budgets.',
    primaryCtaText: 'Request a Window & Door Audit',
    secondaryCtaText: 'See Comparison Strategy',
    salesMotion: 'considered-purchase',
    heroStats: [
      { label: 'ROAS Range', value: '5x - 17x', sublabel: 'Closed contract performance' },
      { label: 'Core Sales Metric', value: 'Cost Per Sat Estimate', sublabel: 'Protecting in-home sales reps' },
      { label: 'Strategy Focus', value: 'Long-Tail Intent', sublabel: 'Beating national brand ad spend' },
    ],
    heroDashboard: {
      monthlySpend: '$9,200',
      leadsCount: 46,
      primaryMetricLabel: 'Sat In-Home Estimates',
      primaryMetricValue: '31 Sat',
      avgTicket: '$14,800',
      closedRevenue: '$162,000',
      roas: '17.6x',
    },
    trustItems: [
      'Energy-Efficient Window Ads',
      'Whole-House Package Landing Pages',
      'CallRail Tracking & Lead Routing',
      'Leap & MarketSharp CRM Sync',
      'In-Home Estimate Scheduling Integration',
    ],
    howItWorksSteps: [
      {
        step: '01',
        title: 'Homeowner Researches Window Replacement',
        description: 'A homeowner searches for energy-efficient vinyl, wood, or composite replacement windows in your metro area.',
      },
      {
        step: '02',
        title: 'Ad Highlights Local Pricing & Energy Ratings',
        description: 'Our ad displays your local warranty, energy rebate eligibility, and package financing without corporate franchise markups.',
      },
      {
        step: '03',
        title: 'Homeowner Books In-Home Measurement',
        description: 'The homeowner inputs their approximate window count, home age, and desired consultation time.',
      },
      {
        step: '04',
        title: 'Sales Rep Measures and Closes the Project',
        description: 'Your sales representative visits the property, demonstrates sample units, and presents financing.',
      },
    ],
    problems: [
      {
        title: 'Trying to bid head-on against national franchise budgets',
        description: 'National franchise dealers spend hundreds of thousands monthly on broad terms like "replacement windows". Bidding against them directly drives up click costs.',
        whyItHappens: 'Agencies target generic short-tail keywords instead of high-intent specific window types, materials, and local comparison terms.',
      },
      {
        title: 'Clicks from single broken glass repair searches',
        description: 'Homeowners with one cracked double-hung sash click on expensive ads intended for whole-home window replacement projects.',
        whyItHappens: 'Missing negative keywords for auto glass, single glass repair, window screen fixes, and glass cutting.',
      },
      {
        title: 'High no-show rates for in-home consultations',
        description: 'Sales reps spend half their week driving to homes where the prospect forgets the appointment or refuses to sit for the demonstration.',
        whyItHappens: 'Landing page forms fail to set expectations about in-home measurements and both homeowners being present.',
      },
      {
        title: 'No differentiation against cheap vinyl competitors',
        description: 'Ad copy fails to articulate why your quality installation, energy ratings, and warranties justify premium pricing.',
        whyItHappens: 'Template ads that look identical to every low-cost subcontractor in the market.',
      },
    ],
    searchIntents: [
      {
        intentType: 'Whole-House Window Replacement',
        queryExamples: ['full house window replacement cost', 'energy efficient replacement windows [city]', 'vinyl window installation contractors'],
        contractorImpact: 'Core whole-house replacement demand requiring in-home demonstration.',
        howWeHandleIt: 'Landing pages featuring whole-home packages, energy bill savings, and financing breakdowns.',
      },
      {
        intentType: 'Custom Entry & Patio Doors',
        queryExamples: ['custom sliding glass patio door replacement', 'french patio door installers near me', 'fiberglass front entry door installation'],
        contractorImpact: 'High-margin add-on or standalone project with quick turnaround.',
        howWeHandleIt: 'Dedicated door landing page highlighting security, weather sealing, and aesthetic finishes.',
      },
      {
        intentType: 'Brand & Material Specific Queries',
        queryExamples: ['black frame windows replacement cost', 'composite vs vinyl windows contractor', 'casement window replacement company'],
        contractorImpact: 'Highly educated homeowner with specific architectural requirements and strong budget.',
        howWeHandleIt: 'Targeted ad groups addressing specific materials, styles, and energy ratings directly.',
      },
    ],
    campaignStructure: [
      {
        campaignName: 'Search: Full Window Replacement',
        focus: 'Homeowners searching for multi-window replacements and energy upgrades.',
        budgetShare: '50% of monthly spend',
        keyTargets: ['window replacement contractor', 'energy star windows installation', 'house window replacement cost'],
      },
      {
        campaignName: 'Search: Patio & Entry Doors',
        focus: 'Custom front door and sliding patio door replacement inquiries.',
        budgetShare: '25% of monthly spend',
        keyTargets: ['patio door replacement', 'custom entry door installation', 'sliding glass door installers'],
      },
      {
        campaignName: 'Search: Window Styles & Materials',
        focus: 'High-intent queries for black frames, composite, wood-clad, and casement units.',
        budgetShare: '20% of monthly spend',
        keyTargets: ['black frame window replacement', 'composite window installers', 'casement window replacement'],
      },
      {
        campaignName: 'Search: Brand & Local Retargeting',
        focus: 'Recapturing homeowners during their multi-week deliberation phase.',
        budgetShare: '5% of monthly spend',
        keyTargets: ['[Company Name] windows', '[Company Name] reviews'],
      },
    ],
    landingPageStrategies: [
      {
        rule: 'Window Count Qualifier',
        detail: 'Form includes a dropdown for number of windows (e.g. 5-10, 10-20, 20+) to filter out single-pane repair requests.',
      },
      {
        rule: 'Local Warranty and Energy Rating Proof',
        detail: 'Prominent display of U-Factor ratings, Energy Star compliance, and transferable lifetime installation warranties.',
      },
      {
        rule: 'Transparent In-Home Consultation Explanation',
        detail: 'Explaining the 30-minute measurement and demonstration process so homeowners are prepared to sit with your rep.',
      },
      {
        rule: 'Financing Calculator Teaser',
        detail: 'Displaying estimated monthly investment options (e.g. starting at $99/mo) to remove upfront price hesitation.',
      },
    ],
    conversionTracking: [
      {
        method: 'Estimate Booking Form Tracking',
        tool: 'Google Tag Manager + GA4',
        purpose: 'Measures complete in-home measurement requests with window count details.',
      },
      {
        method: 'CallRail Inbound Call Tracking',
        tool: 'CallRail',
        purpose: 'Attributes incoming calls to the exact window material or door campaign keyword.',
      },
      {
        method: 'Sales CRM Integration',
        tool: 'Leap / MarketSharp / Salesforce',
        purpose: 'Tracks sat appointments, demo ratios, and signed contracts back to Google Ads.',
      },
    ],
    leadQualitySection: {
      headline: 'Focusing on Sat Estimates Rather Than Low-Intent Clicks',
      subheadline: 'Your sales reps can only run 2 to 3 appointments per day. We make sure they are driving to homeowners who actually intend to buy windows.',
      comparisonRows: [
        {
          standardAgency: 'Bids on generic "windows" terms and generates single cracked pane glass repair leads',
          ourApproach: 'Excludes all glass repair and auto glass terms to focus purely on full-frame replacements',
        },
        {
          standardAgency: 'Sends ad traffic to generic product manufacturer specification pages',
          ourApproach: 'Builds conversion-focused local landing pages highlighting installation warranties and pricing',
        },
        {
          standardAgency: 'Ignores the set-to-sit rate and celebrates cheap form submissions',
          ourApproach: 'Measures cost per sat appointment and refines forms to eliminate uncommitted shoppers',
        },
        {
          standardAgency: 'Burns budget competing head-on with national mega-franchises for single broad keywords',
          ourApproach: 'Targets specific long-tail queries, material styles, and local neighborhood comparisons',
        },
      ],
    },
    optimizationTasks: [
      {
        task: 'Negative Keyword Filtering',
        frequency: '3 times per week',
        description: 'Excluding auto glass, single glass repair, DIY screen repair, and wholesale supplier queries.',
      },
      {
        task: 'Ad Copy Testing',
        frequency: 'Bi-weekly',
        description: 'Testing headlines emphasizing local craftsmanship, energy rebates, and package financing.',
      },
      {
        task: 'Sales Sit Rate Reviews',
        frequency: 'Monthly',
        description: 'Auditing lead-to-sat rates with your sales manager to tighten landing page qualification.',
      },
      {
        task: 'Geographic Radius Pruning',
        frequency: 'Monthly',
        description: 'Focusing ad spend on established neighborhoods where original builder windows are failing.',
      },
    ],
    negativeKeywords: {
      group: 'Window & Door Negative Keyword Exclusions',
      examples: [
        'auto glass windshield repair',
        'cracked single window pane repair',
        'window screen mesh roll',
        'diy window tinting kit',
        'home depot window installation cost',
        'how to replace window balance spring',
        'storefront glass repair',
        'cheap used windows craigslist',
      ],
      reason: 'These queries come from auto glass customers, DIY repairers, or people looking for individual spare parts.',
    },
    geographicTargeting: [
      {
        strategy: 'Housing Age Targeting',
        description: 'Focusing on subdivisions built 15 to 30 years ago where original builder-grade vinyl or wood windows have failed.',
      },
      {
        strategy: 'Service Territory Boundaries',
        description: 'Keeping ad coverage within comfortable driving distance for your sales reps and installation crews.',
      },
      {
        strategy: 'High-Equity Neighborhood Prioritization',
        description: 'Bidding higher in zip codes with high home values where homeowners invest in premium composite and black frame upgrades.',
      },
    ],
    caseStudy: {
      contractorName: 'Apex Windows & Doors',
      location: 'Charlotte, NC',
      marketSize: 'Independent replacement contractor with 4 sales reps',
      monthlySpend: '$8,400 / month',
      leadsGenerated: 42,
      primaryOutcomeMetric: 'Cost Per Sat In-Home Estimate',
      primaryOutcomeValue: '$320 / Sat Estimate',
      closedRevenue: '$182,000 in installed window packages',
      roas: '21.6x ROAS',
      summary:
        'By eliminating single-pane glass repair searches and implementing window-count form qualifiers, Apex Windows reduced sales rep drive time waste and increased their appointment sit rate to 71%.',
    },
    processSteps: [
      {
        phase: 'Phase 01',
        title: 'Positioning & Negative Library Setup',
        timeline: 'Days 1 - 7',
        deliverables: [
          'Audit product margins (vinyl vs composite vs wood) and target minimums',
          'Deploy high-intent window and patio door landing pages',
          'Install CallRail number insertion and window count form qualifiers',
          'Upload comprehensive glass repair and DIY negative keyword lists',
        ],
      },
      {
        phase: 'Phase 02',
        title: 'Campaign Build & Launch',
        timeline: 'Days 8 - 14',
        deliverables: [
          'Launch structured Search campaigns for replacement windows and doors',
          'Deploy local comparison ad copy highlighting warranty and financing',
          'Configure geographic radius to target mature subdivisions',
          'Verify call tracking and appointment conversion recording',
        ],
      },
      {
        phase: 'Phase 03',
        title: 'Search Query & Sit Rate Optimization',
        timeline: 'Days 15 - 45',
        deliverables: [
          'Prune non-replacement queries multiple times each week',
          'Review consultation sit rates with sales management',
          'Refine ad copy for specific window styles and energy codes',
          'Adjust bids based on top-performing zip codes',
        ],
      },
      {
        phase: 'Phase 04',
        title: 'Rep Capacity & Budget Scaling',
        timeline: 'Days 45+',
        deliverables: [
          'Scale budget in high-converting neighborhoods to match rep capacity',
          'Introduce dedicated patio door and entry door campaigns',
          'Connect closed deal revenue to improve Google bidding signals',
          'Monthly performance reviews focused on closed contract ROI',
        ],
      },
    ],
    faqs: [
      {
        question: 'How can Google Ads for Window & Door help my business?',
        answer:
          'Google Ads for Window & Door can put your company in front of homeowners searching for replacement windows, doors, installation, and related services in your area.',
      },
      {
        question: 'What window and door services can I advertise with Google Ads?',
        answer:
          'You can advertise replacement windows, entry doors, patio doors, sliding doors, window installation, door installation, and other products or services your company provides.',
      },
      {
        question: 'How do Google Local Services Ads work for window and door contractors?',
        answer:
          'If your business category and location are eligible, Local Services Ads can show your business to people searching for relevant local services. Your profile can include your services, service areas, hours, and reviews.',
      },
      {
        question: 'Can I run Local Services Ads and Google Ads for Window & Door together?',
        answer:
          'Yes. They are separate advertising options and can be used together when they are available for your business.',
      },
      {
        question: 'How much do Local Services Ads cost for window and door contractors?',
        answer:
          'You pay for valid leads rather than clicks. Lead prices can vary according to location, job type, lead type, and bidding settings.',
      },
      {
        question: 'Do reviews matter for Window & Door Local Services Ads?',
        answer:
          'Yes. Your star rating and number of reviews can affect how your business is ranked in Local Services Ads.',
      },
      {
        question: 'Do I still need Google Ads management if I already run window and door ads?',
        answer:
          'If you already run Google Ads for Window & Door, we can review your campaigns, keywords, search terms, ads, locations, tracking, bidding, and budget.',
      },
      {
        question: 'Can Google Ads for Window & Door improve the quality of inquiries I get?',
        answer:
          'Yes. Campaigns can focus on relevant window and door searches, locations, and services that match what your company sells and installs.',
      },
      {
        question: 'Can you track window and door calls and quote requests?',
        answer:
          'Yes. Phone calls and website quote forms can be tracked as conversions so you can see which Google Ads campaigns are generating inquiries.',
      },
      {
        question: 'How do I get started with Google Ads and Local Services Ads for Window & Door?',
        answer:
          'We review your products, services, target locations, website, Google Ads account, Local Services Ads setup if applicable, tracking, and budget before recommending the next step.',
      },
    ],
    finalCta: {
      headline: 'Ready to Fill Your Sales Reps Calendars with Serious Window Buyers?',
      subheadline:
        'Schedule a straightforward review of your Google Ads setup. We will show you how to beat national franchise budgets and generate qualified in-home estimates.',
      primaryButton: 'Schedule Window Account Audit',
      secondaryButton: 'Call (980) 448-2627',
    },
  },

  'deck-outdoor-living-contractors': {
    slug: 'deck-outdoor-living-contractors',
    industry: 'Outdoor Living',
    categoryTitle: 'Deck & Outdoor Living Contractors',
    heroH1: 'Google Ads for Deck & Outdoor Living Contractors',
    heroSupportingCopy:
      'We manage Google Ads campaigns for custom deck builders, hardscape contractors, and outdoor living specialists. We target complete outdoor living spaces, composite decks, pergolas, and outdoor kitchens.',
    primaryCtaText: 'Request an Outdoor Living Audit',
    secondaryCtaText: 'View Campaign Strategy',
    salesMotion: 'considered-purchase',
    heroStats: [
      { label: 'ROAS Range', value: '5x - 17x', sublabel: 'Closed contract performance' },
      { label: 'Core Sales Metric', value: 'Cost Per Sat Consultation', sublabel: 'Qualified property owners' },
      { label: 'Seasonality Focus', value: 'Pre-Season Pipeline', sublabel: 'Building backlogs before spring' },
    ],
    heroDashboard: {
      monthlySpend: '$6,400',
      leadsCount: 36,
      primaryMetricLabel: 'Sat Design Consults',
      primaryMetricValue: '24 Consults',
      avgTicket: '$22,500',
      closedRevenue: '$135,000',
      roas: '21.0x',
    },
    trustItems: [
      'Composite Decking Campaigns',
      'Hardscape & Paver Patio Ads',
      'Outdoor Kitchen & Living Landing Pages',
      'CallRail Tracking & Lead Routing',
      'Jobber & Structure Studios Sync',
    ],
    howItWorksSteps: [
      {
        step: '01',
        title: 'Homeowner Plans Outdoor Living Upgrade',
        description: 'A property owner searches for a custom composite deck builder, paver patio contractor, or outdoor kitchen specialist.',
      },
      {
        step: '02',
        title: 'Ad Showcases Completed Outdoor Spaces',
        description: 'Our ad highlights your local portfolio, material warranties (Trex, TimberTech), and custom 3D design capabilities.',
      },
      {
        step: '03',
        title: 'Homeowner Submits Project Scope',
        description: 'The homeowner inputs their approximate square footage, desired features (pergola, kitchen, fire pit), and budget expectation.',
      },
      {
        step: '04',
        title: 'Estimator Sits On-Site Consultation',
        description: 'Your project specialist conducts the yard walk-through and reviews 3D design concepts with the homeowner.',
      },
    ],
    problems: [
      {
        title: 'Wasting budget on cheap deck staining and small power washing jobs',
        description: 'Clicks intended for custom composite deck builds get burned on searches for deck board replacement or pressure washing.',
        whyItHappens: 'Broad keywords that do not distinguish between basic maintenance and new custom outdoor construction.',
      },
      {
        title: 'Severe winter revenue drop-offs',
        description: 'Contractors turn ads off in winter and find themselves with empty calendars when warm weather arrives in spring.',
        whyItHappens: 'Failing to run pre-season design campaigns between January and March to pre-book summer build schedules.',
      },
      {
        title: 'Leads from renters with small balconies',
        description: 'Ad budget gets spent on apartment renters or townhouse owners looking for portable patio solutions.',
        whyItHappens: 'Lack of geographic exclusions and missing property type form qualifiers.',
      },
      {
        title: 'No differentiation against unlicensed two-man crews',
        description: 'Ad copy fails to convey why your structural engineering, 3D design process, and manufacturer warranties justify higher bids.',
        whyItHappens: 'Generic ad templates that look like basic handyman classified ads.',
      },
    ],
    searchIntents: [
      {
        intentType: 'Custom Composite Decks',
        queryExamples: ['custom composite deck builders near me', 'trex deck contractor cost', 'timbertech deck installation company'],
        contractorImpact: 'High-margin composite project requiring certified installer status.',
        howWeHandleIt: 'Landing pages featuring composite color galleries, railing options, and manufacturer certifications.',
      },
      {
        intentType: 'Hardscapes & Paver Patios',
        queryExamples: ['paver patio contractors near me', 'retaining wall and patio builders [city]', 'outdoor fire pit and patio installation'],
        contractorImpact: 'High-value hardscape project with strong upsell potential for complete landscaping.',
        howWeHandleIt: 'Visual landing pages showcasing permeable pavers, retaining walls, and integrated seating.',
      },
      {
        intentType: 'Complete Outdoor Living Spaces',
        queryExamples: ['outdoor kitchen and living area contractor', 'covered patio with fireplace builder', 'louvered pergola installation company'],
        contractorImpact: 'Top tier custom build requiring comprehensive architectural design.',
        howWeHandleIt: 'Portfolio-focused pages demonstrating 3D design renders and full-scope construction management.',
      },
    ],
    campaignStructure: [
      {
        campaignName: 'Search: Custom Composite Decks',
        focus: 'Homeowners investing in new or replacement Trex, TimberTech, and multi-level decks.',
        budgetShare: '45% of monthly spend',
        keyTargets: ['custom deck builders', 'composite deck installation', 'deck replacement contractor'],
      },
      {
        campaignName: 'Search: Hardscapes & Paver Patios',
        focus: 'Homeowners planning stone patios, retaining walls, and fire pit installations.',
        budgetShare: '30% of monthly spend',
        keyTargets: ['paver patio installation', 'hardscape contractor near me', 'stone patio builder'],
      },
      {
        campaignName: 'Search: Outdoor Kitchens & Covered Patios',
        focus: 'Premium inquiries for covered structures, pergolas, and outdoor kitchens.',
        budgetShare: '20% of monthly spend',
        keyTargets: ['outdoor kitchen builders', 'covered patio contractor', 'pergola installation company'],
      },
      {
        campaignName: 'Search: Brand & Retargeting',
        focus: 'Protecting your brand name and recapturing spring planning traffic.',
        budgetShare: '5% of monthly spend',
        keyTargets: ['[Company Name] decks', '[Company Name] reviews'],
      },
    ],
    landingPageStrategies: [
      {
        rule: 'Scope Checklist Form',
        detail: 'Form includes checkboxes for Deck, Paver Patio, Outdoor Kitchen, Fire Pit, and Pergola to identify multi-feature projects.',
      },
      {
        rule: 'Local 3D Design Showcase',
        detail: 'Demonstrating how your company creates 3D architectural renderings prior to construction to build buyer trust.',
      },
      {
        rule: 'Material Warranty Badges',
        detail: 'Displaying 25-to-50 year stain and fade warranties from Trex, TimberTech, and Belgard.',
      },
      {
        rule: 'Realistic Starting Investment Ranges',
        detail: 'Stating minimum project thresholds to screen out minor board repairs and staining inquiries.',
      },
    ],
    conversionTracking: [
      {
        method: 'Design Consultation Form Tracking',
        tool: 'Google Tag Manager + GA4',
        purpose: 'Captures full consultation requests with feature selections and property address.',
      },
      {
        method: 'CallRail Phone Tracking',
        tool: 'CallRail',
        purpose: 'Attributes incoming phone inquiries to specific outdoor living and deck campaign keywords.',
      },
      {
        method: 'CRM Deal Pipeline Sync',
        tool: 'Jobber / Structure Studios',
        purpose: 'Tracks consultations sat, proposals presented, and contracts signed back to the origin ad.',
      },
    ],
    leadQualitySection: {
      headline: 'Targeting Complete Outdoor Living Spaces Over Small Board Repairs',
      subheadline: 'We build campaigns that attract homeowners looking for high-value outdoor transformations rather than $400 power washing jobs.',
      comparisonRows: [
        {
          standardAgency: 'Bids on generic deck keywords that attract deck staining and pressure washing clicks',
          ourApproach: 'Excludes all maintenance and repair terms to target only custom construction and replacements',
        },
        {
          standardAgency: 'Runs ads with zero property filters, getting clicks from apartment dwellers',
          ourApproach: 'Targets established neighborhoods with high property equity',
        },
        {
          standardAgency: 'Turns ads off entirely during winter months, causing a slow start in spring',
          ourApproach: 'Runs pre-season design campaigns from January to March to build a full spring backlog',
        },
        {
          standardAgency: 'Sends all traffic to an unstyled contact page with no outdoor photos',
          ourApproach: 'Builds visual landing pages featuring 3D design renderings and completed local spaces',
        },
      ],
    },
    optimizationTasks: [
      {
        task: 'Maintenance Keyword Negative Exclusion',
        frequency: '2 times per week',
        description: 'Excluding searches for deck staining, power washing, board replacements, and DIY plans.',
      },
      {
        task: 'Pre-Season Budget Shifting',
        frequency: 'Quarterly',
        description: 'Ramping budgets in late winter for early bird design consultations and adjusting during peak build season.',
      },
      {
        task: 'Landing Page Gallery Refinement',
        frequency: 'Monthly',
        description: 'Updating project galleries with newly completed local outdoor spaces and client testimonials.',
      },
      {
        task: 'Geographic Radius Optimization',
        frequency: 'Monthly',
        description: 'Concentrating ad spend within 25 miles of your primary shop to minimize crew travel time.',
      },
    ],
    negativeKeywords: {
      group: 'Outdoor Living Negative Keyword Exclusions',
      examples: [
        'deck staining cost per square foot',
        'pressure wash deck near me',
        'replace single deck board',
        'free deck building plans pdf',
        'cheap pallet wood deck',
        'diy paver patio instructions',
        'deck repair handyman',
        'home depot composite deck samples',
      ],
      reason: 'These queries represent DIY homeowners, maintenance shoppers, or people looking for small repair fixes.',
    },
    geographicTargeting: [
      {
        strategy: 'Single-Family Home Focus',
        description: 'Targeting suburban zip codes with large lot sizes and private backyards suitable for major outdoor living projects.',
      },
      {
        strategy: 'Excluding High-Density Urban Centers',
        description: 'Removing downtown multi-family areas where properties lack yards for ground-level decks and patios.',
      },
      {
        strategy: 'Neighborhood Equity Targeting',
        description: 'Focusing on neighborhoods where homeowners have the discretionary income for complete outdoor living spaces.',
      },
    ],
    caseStudy: {
      contractorName: 'TimberCraft Outdoor Living',
      location: 'Nashville, TN',
      marketSize: 'Custom deck & hardscape builder',
      monthlySpend: '$6,200 / month',
      leadsGenerated: 38,
      primaryOutcomeMetric: 'Cost Per Sat Consultation',
      primaryOutcomeValue: '$260 / Sat Design Consult',
      closedRevenue: '$148,000 in outdoor living builds',
      roas: '23.8x ROAS',
      summary:
        'By launching a pre-season design campaign in February and focusing on complete outdoor living packages, TimberCraft booked out their entire summer construction calendar 6 weeks earlier than the previous year.',
    },
    processSteps: [
      {
        phase: 'Phase 01',
        title: 'Positioning & Scope Definition',
        timeline: 'Days 1 - 7',
        deliverables: [
          'Define project minimums and target outdoor living features',
          'Deploy visual composite deck and hardscape landing pages',
          'Install CallRail tracking and scope checklist form qualifiers',
          'Implement negative keyword lists for maintenance and repair terms',
        ],
      },
      {
        phase: 'Phase 02',
        title: 'Campaign Build & Launch',
        timeline: 'Days 8 - 14',
        deliverables: [
          'Launch separated campaigns for Decks, Hardscapes, and Outdoor Kitchens',
          'Deploy ad copy highlighting 3D design and manufacturer warranties',
          'Configure geographic targeting to suburban single-family zip codes',
          'Verify consultation booking and call recording tracking',
        ],
      },
      {
        phase: 'Phase 03',
        title: 'Search Term & Lead Quality Tuning',
        timeline: 'Days 15 - 45',
        deliverables: [
          'Prune non-construction queries weekly',
          'Review consultation quality and project sizes with ownership',
          'A/B test landing page photo arrangements and project estimators',
          'Refine bids toward top-performing zip codes',
        ],
      },
      {
        phase: 'Phase 04',
        title: 'Seasonal Scaling & Backlog Building',
        timeline: 'Days 45+',
        deliverables: [
          'Scale budget in high-demand outdoor living categories',
          'Plan off-season and pre-season promotion schedules',
          'Connect closed project values to Google bidding signals',
          'Conduct monthly performance reviews focused on revenue ROI',
        ],
      },
    ],
    faqs: [
      {
        question: 'How can Google Ads for Deck help my deck business?',
        answer:
          'Google Ads for Deck can put your company in front of homeowners searching for deck construction, deck replacement, composite decking, wood decks, and other deck services.',
      },
      {
        question: 'What deck services can I advertise with Google Ads?',
        answer:
          'You can advertise deck design and construction, deck replacement, composite decks, wood decks, deck repair, and other deck services your company provides.',
      },
      {
        question: 'How do Google Local Services Ads work for deck contractors?',
        answer:
          'Local Services Ads can help eligible local contractors appear for relevant searches in their service areas. Their profiles can show services, service areas, hours, and reviews.',
      },
      {
        question: 'Can I run Local Services Ads and Google Ads for Deck together?',
        answer:
          'Yes. They are separate advertising options and can be used together when your business category and location are eligible.',
      },
      {
        question: 'How much do Local Services Ads cost for deck contractors?',
        answer:
          'Local Services Ads charge for valid leads rather than clicks. Lead prices can vary based on factors such as location, job type, lead type, and bidding.',
      },
      {
        question: 'Do reviews matter for Deck Local Services Ads?',
        answer:
          'Yes. Your rating and number of reviews can affect your ranking in Local Services Ads.',
      },
      {
        question: 'Can Google Ads for Outdoor Living help me get outdoor living projects?',
        answer:
          'Yes. Google Ads for Outdoor Living can target searches for patios, pergolas, screened porches, outdoor kitchens, and other outdoor living projects.',
      },
      {
        question: 'Can Google Ads for Deck target specific cities?',
        answer:
          'Yes. Deck Google Ads campaigns can target the cities and service areas where your company wants to build projects.',
      },
      {
        question: 'Can you track deck estimate requests from Google Ads?',
        answer:
          'Yes. Deck estimate forms and phone calls can be tracked as conversions so you can see which campaigns are generating inquiries.',
      },
      {
        question: 'How do I get started with Google Ads and Local Services Ads for Deck & Outdoor Living?',
        answer:
          'We review your deck and outdoor living services, service area, website, Google Ads account, Local Services Ads setup if applicable, tracking, and budget before recommending the next step.',
      },
    ],
    finalCta: {
      headline: 'Ready to Fill Your Outdoor Living Construction Calendar?',
      subheadline:
        'Schedule a straightforward review of your Google Ads setup. We will show you how to target high-ticket outdoor living projects and build a steady pipeline of consultations.',
      primaryButton: 'Schedule Outdoor Living Audit',
      secondaryButton: 'Call (980) 448-2627',
    },
  },

  'solar-contractors': {
    slug: 'solar-contractors',
    industry: 'Solar',
    categoryTitle: 'Solar Contractors',
    heroH1: 'Google Ads for Solar Contractors',
    heroSupportingCopy:
      'We build Google Ads campaigns for solar installers with a strict focus on Third-Party Ownership (TPO), solar leases, and battery storage. We front-load qualification into the form to protect your sales reps from low sit rates.',
    primaryCtaText: 'Request a Solar Account Audit',
    secondaryCtaText: 'See Qualification Strategy',
    salesMotion: 'considered-purchase',
    heroStats: [
      { label: 'ROAS Range', value: '5x - 17x', sublabel: 'Closed contract performance' },
      { label: 'Critical Metric', value: 'Cost Per Sat Consultation', sublabel: 'Filtering out renters & low credit' },
      { label: 'Financing Focus', value: 'TPO & Power Purchase (PPA)', sublabel: 'Post-25D incentive reality' },
    ],
    heroDashboard: {
      monthlySpend: '$15,500',
      leadsCount: 52,
      primaryMetricLabel: 'Sat Solar Consultations',
      primaryMetricValue: '28 Sat',
      avgTicket: '$26,000',
      closedRevenue: '$208,000',
      roas: '13.4x',
    },
    trustItems: [
      'TPO & Solar Lease Focused Campaigns',
      'Battery Storage & Backup Ads',
      'Ownership & Bill-Gated Landing Pages',
      'CallRail Tracking & Lead Routing',
      'Aurora Solar & Solo CRM Sync',
    ],
    howItWorksSteps: [
      {
        step: '01',
        title: 'Homeowner Researches Solar Energy & Storage',
        description: 'A homeowner searches for solar panel installation, home battery backup, or electric bill savings in your local utility territory.',
      },
      {
        step: '02',
        title: 'Ad Presents Local Utility-Specific Savings',
        description: 'Our ad highlights your local utility rate structure, battery backup options, and TPO or lease financing programs.',
      },
      {
        step: '03',
        title: 'Homeowner Fills Out Qualified Intake Form',
        description: 'The homeowner provides electric bill range, roof condition, shading details, and confirms single-family homeownership.',
      },
      {
        step: '04',
        title: 'Solar Consultant Sits Qualified In-Home Demo',
        description: 'Because non-homeowners and low-bill properties are filtered upfront, your consultant sits down with a genuine buyer.',
      },
    ],
    problems: [
      {
        title: 'Appointment set-to-sit rates collapsing',
        description: 'In the post-incentive environment, lead volume means nothing if 50% of booked appointments no-show when your sales rep arrives.',
        whyItHappens: 'Standard lead forms only ask for name and phone number with zero pre-qualification on electric bills or homeownership.',
      },
      {
        title: 'Relying on expired federal tax credit messaging',
        description: 'Using outdated Section 25D tax credit copy confuses homeowners and causes deals to fall apart during financing review.',
        whyItHappens: 'Agencies using stale ad templates without pivoting to Third-Party Ownership (TPO), leases, or battery storage benefits.',
      },
      {
        title: 'Paying for clicks from apartment renters and mobile homes',
        description: 'Ad spend is wasted on renters or residents of homes where roof structures or lease agreements prevent solar installation.',
        whyItHappens: 'Missing negative keyword lists for apartments, landlords, mobile homes, and shared housing.',
      },
      {
        title: 'Buying recycled leads from third-party brokers',
        description: 'Lead brokers sell the same homeowner inquiry to 4 competing installers, resulting in price races and low close rates.',
        whyItHappens: 'Lack of an exclusive Google Search campaign owned directly by the solar contractor.',
      },
    ],
    searchIntents: [
      {
        intentType: 'Solar & Storage Installation',
        queryExamples: ['solar panel installation cost [city]', 'local solar contractors near me', 'best solar company in [state]'],
        contractorImpact: 'Core installation demand requiring immediate utility rate analysis.',
        howWeHandleIt: 'Landing page showing utility rate inflation, monthly lease payment examples, and local installation photos.',
      },
      {
        intentType: 'Solar Battery Storage & Backup',
        queryExamples: ['home battery backup installation cost', 'tesla powerwall installer near me', 'solar panels with battery storage'],
        contractorImpact: 'High-value add-on focused on power outage resilience and time-of-use rate management.',
        howWeHandleIt: 'Dedicated battery backup landing pages emphasizing severe weather grid reliability and net metering offsets.',
      },
      {
        intentType: 'Zero-Down Lease & PPA Inquiries',
        queryExamples: ['zero down solar lease [city]', 'power purchase agreement solar companies', 'solar subscription vs buy'],
        contractorImpact: 'High-volume consumer segment seeking immediate utility bill reduction without upfront capital investment.',
        howWeHandleIt: 'Clear explanations of third-party ownership, production guarantees, and transferable agreements.',
      },
    ],
    campaignStructure: [
      {
        campaignName: 'Search: Solar & Battery Storage',
        focus: 'Homeowners searching for solar installation, leases, and local installer ratings.',
        budgetShare: '50% of monthly spend',
        keyTargets: ['solar panel installation', 'solar contractors near me', 'solar energy company'],
      },
      {
        campaignName: 'Search: Battery Storage & Backup',
        focus: 'Homeowners seeking blackout resilience, Tesla Powerwalls, and battery storage.',
        budgetShare: '30% of monthly spend',
        keyTargets: ['home battery backup', 'solar battery installation', 'powerwall installers'],
      },
      {
        campaignName: 'Search: Utility Rate & Savings Specifics',
        focus: 'Queries targeting local electric rate hikes and specific utility programs.',
        budgetShare: '15% of monthly spend',
        keyTargets: ['[Local Utility] solar incentives', 'electric bill reduction solar', 'net metering rate solar'],
      },
      {
        campaignName: 'Search: Brand & Retargeting',
        focus: 'Protecting your brand name and recapturing homeowners during financial evaluation.',
        budgetShare: '5% of monthly spend',
        keyTargets: ['[Company Name] solar', '[Company Name] reviews'],
      },
    ],
    landingPageStrategies: [
      {
        rule: 'Single-Family Homeowner Gating',
        detail: 'Explicitly requiring single-family property confirmation on the first form step to exclude renters.',
      },
      {
        rule: 'Average Monthly Electric Bill Selector',
        detail: 'Requiring users to indicate if their bill is under $100, $150-$250, or $250+ to screen out low-usage homes.',
      },
      {
        rule: 'Utility-Specific Inflation Context',
        detail: 'Showing local electric utility rate increase percentages over the past 3 years to create urgency.',
      },
      {
        rule: 'Battery Storage Add-On Toggle',
        detail: 'Allowing homeowners to request whole-home backup estimates alongside solar generation.',
      },
    ],
    conversionTracking: [
      {
        method: 'Qualified Solar Intake Tracking',
        tool: 'Google Tag Manager + GA4',
        purpose: 'Records form submissions that meet single-family homeownership and electric bill minimums.',
      },
      {
        method: 'CallRail Dynamic Tracking',
        tool: 'CallRail',
        purpose: 'Tracks inbound phone calls down to the exact keyword and ad variant.',
      },
      {
        method: 'CRM Deal Stage Attribution',
        tool: 'Aurora Solar / Solo / HubSpot',
        purpose: 'Tracks appointments set, site surveys completed, and PTO contracts signed.',
      },
    ],
    leadQualitySection: {
      headline: 'Prioritizing Sat Consultations Over Unqualified Form Volume',
      subheadline: 'A 600-credit score renter filling out an ad form costs you time and money. We front-load qualification so your sales closers sit with qualified homeowners.',
      comparisonRows: [
        {
          standardAgency: 'Counts low-credit renters and trailer park inquiries as successful leads',
          ourApproach: 'Front-loads property type and average electric bill filters directly into the form',
        },
        {
          standardAgency: 'Continues using outdated 25D federal tax credit hooks that cause deal cancellations',
          ourApproach: 'Pivots messaging to TPO, monthly lease savings, and battery blackout protection',
        },
        {
          standardAgency: 'Celebrates a $45 CPL while your reps experience a 40% no-show rate',
          ourApproach: 'Measures cost per sat consultation and optimizes for appointment completion',
        },
        {
          standardAgency: 'Allows broad search terms to bid on solar jobs, DIY panels, and RV solar kits',
          ourApproach: 'Maintains an active negative keyword library of over 500 excluded terms',
        },
      ],
    },
    optimizationTasks: [
      {
        task: 'Negative Keyword Filtering',
        frequency: '3 times per week',
        description: 'Excluding DIY solar kits, RV panels, free solar scams, and employment inquiries.',
      },
      {
        task: 'Utility Territory Alignment',
        frequency: 'Bi-weekly',
        description: 'Adjusting geographic bids to focus on utility zones with the highest electricity rates.',
      },
      {
        task: 'Set-to-Sit Rate Monitoring',
        frequency: 'Weekly',
        description: 'Auditing sit rates with your sales team and adjusting form gating fields accordingly.',
      },
      {
        task: 'Battery Storage Ad Copy Refinement',
        frequency: 'Monthly',
        description: 'Updating storm resilience and outage messaging ahead of seasonal weather patterns.',
      },
    ],
    negativeKeywords: {
      group: 'Solar Negative Keyword Exclusions',
      examples: [
        'free solar panels government program',
        'diy solar panel kit amazon',
        'rv solar panel setup',
        'solar installer job salary',
        'solar calculator app free',
        'used solar panels for sale',
        'solar panel disposal recycling',
        'how to clean solar panels yourself',
      ],
      reason: 'These queries represent DIYers, job seekers, or consumers misled by sensationalized "free solar" claims.',
    },
    geographicTargeting: [
      {
        strategy: 'High Utility Rate Zone Targeting',
        description: 'Focusing ad spend on specific utility coverage areas with the highest kilowatt-hour rates and time-of-use penalties.',
      },
      {
        strategy: 'Single-Family Homeowner Density',
        description: 'Targeting established suburban zip codes with high rates of owner-occupied single-family homes.',
      },
      {
        strategy: 'Excluding Heavy Tree Canopy Areas',
        description: 'Pruning zip codes known for dense old-growth tree cover where solar production potential is poor.',
      },
    ],
    caseStudy: {
      contractorName: 'SunVanguard Energy',
      location: 'Phoenix & Tucson, AZ',
      marketSize: 'Regional solar installer',
      monthlySpend: '$16,800 / month',
      leadsGenerated: 58,
      primaryOutcomeMetric: 'Cost Per Sat Consultation',
      primaryOutcomeValue: '$410 / Sat Solar Demo',
      closedRevenue: '$286,000 in signed installations',
      roas: '17.0x ROAS',
      summary:
        'By transitioning campaigns to TPO and battery storage messaging with electric bill form gating, SunVanguard increased their in-home consultation sit rate from 51% to 76% in 60 days.',
    },
    processSteps: [
      {
        phase: 'Phase 01',
        title: 'Qualification & Offer Alignment',
        timeline: 'Days 1 - 7',
        deliverables: [
          'Align ad messaging with current TPO, lease, or battery storage offers',
          'Deploy qualified landing pages with electric bill and ownership gating',
          'Install CallRail number insertion and CRM conversion tracking',
          'Upload comprehensive solar negative keyword libraries',
        ],
      },
      {
        phase: 'Phase 02',
        title: 'Campaign Architecture Launch',
        timeline: 'Days 8 - 14',
        deliverables: [
          'Launch structured Search campaigns for Solar and Battery Storage',
          'Deploy utility-specific savings and rate inflation ad copy',
          'Configure geographic targeting to high electric rate territories',
          'Verify lead delivery and instant SMS sales team alerts',
        ],
      },
      {
        phase: 'Phase 03',
        title: 'Search Term & Sit-Rate Tuning',
        timeline: 'Days 15 - 45',
        deliverables: [
          'Prune non-buyer searches and DIY queries daily',
          'Review consultation completion rates with sales management',
          'A/B test utility rate headlines and monthly lease messaging',
          'Adjust bids toward high-performing utility zip codes',
        ],
      },
      {
        phase: 'Phase 04',
        title: 'Pipeline Scaling & CRM Attribution',
        timeline: 'Days 45+',
        deliverables: [
          'Scale budget in zip codes with the highest sit and close rates',
          'Connect closed installation data to train Google bidding signals',
          'Test battery-only campaigns for existing solar homeowners',
          'Conduct monthly ROI reviews focused on closed system revenue',
        ],
      },
    ],
    faqs: [
      {
        question: 'How can Google Ads for Solar Contractors help my business?',
        answer:
          'Google Ads for Solar Contractors can put your company in front of people searching for solar installation, solar panels, battery storage, and other solar services in your area.',
      },
      {
        question: 'What solar services can I advertise with Google Ads?',
        answer:
          'You can advertise residential solar, commercial solar, solar panel installation, battery storage, solar system installation, and other solar services your company provides.',
      },
      {
        question: 'How do Google Local Services Ads work for solar contractors?',
        answer:
          'Local Services Ads are available only for certain categories and locations, so eligibility needs to be checked first. Where available, your business profile can show services, service areas, hours, reviews, and contact options.',
      },
      {
        question: 'Can I run Local Services Ads and Google Ads for Solar together?',
        answer:
          'Yes, when Local Services Ads are available for your solar business and location. They are separate advertising options and can be used together.',
      },
      {
        question: 'How much do Local Services Ads cost for solar contractors?',
        answer:
          'Local Services Ads charge for valid leads rather than clicks. Lead prices can vary based on location, job type, lead type, and bidding settings.',
      },
      {
        question: 'Do reviews matter for Solar Local Services Ads?',
        answer:
          'Yes. Reviews and your star rating can affect how your business ranks in Local Services Ads.',
      },
      {
        question: 'Do I still need Google Ads management if I already run solar ads?',
        answer:
          'If you already run Google Ads for Solar Contractors, we can review your campaigns, keywords, search terms, ads, locations, conversion tracking, bidding, and budget.',
      },
      {
        question: 'Can Google Ads for Solar Contractors improve the quality of inquiries I get?',
        answer:
          'Yes. Campaigns can focus on relevant solar services, locations, and searches that match the customers and projects your company wants.',
      },
      {
        question: 'Can you track solar calls and quote requests from Google Ads?',
        answer:
          'Yes. Phone calls and website quote forms can be tracked as conversions. When your CRM supports it, additional sales information can also be connected to the original Google Ads interaction.',
      },
      {
        question: 'How do I get started with Google Ads and Local Services Ads for Solar?',
        answer:
          'We review your solar services, target locations, website, Google Ads account, Local Services Ads eligibility and setup, conversion tracking, and budget before recommending the next step.',
      },
    ],
    finalCta: {
      headline: 'Ready to Fill Your Solar Closers Calendars with Qualified Homeowners?',
      subheadline:
        'Schedule a straightforward review of your Google Ads setup. We will show you how to front-load qualification and generate in-home consultations that actually sit.',
      primaryButton: 'Schedule Solar Account Audit',
      secondaryButton: 'Call (980) 448-2627',
    },
  },
};
