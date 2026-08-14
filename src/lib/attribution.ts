/**
 * Multi-Channel Traffic & UTM Attribution Engine for Local Lead Engine
 * Accurately classifies and persists visitor traffic sources:
 * - Paid Search (Google Ads, Bing Ads, etc. via gclid / msclkid / utm_medium=cpc)
 * - Paid Social (Meta/FB/IG, TikTok, LinkedIn, etc. via fbclid / ttclid / utm_medium=paid_social)
 * - Organic Search (Google, Bing, Yahoo, DuckDuckGo, Ecosia, Baidu, Yandex, etc.)
 * - Organic Social (Facebook, Instagram, LinkedIn, X/Twitter, TikTok, YouTube, Reddit, Pinterest, etc.)
 * - Referral (Third-party websites, directory listings, contractor forums)
 * - Email (Campaigns, newsletters via utm_medium=email)
 * - Direct (Direct URL input, bookmarks)
 */

export interface AttributionData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term?: string;
  utm_content?: string;
  referrer: string;
  landing_page: string;
  captured_at: string;
}

const STORAGE_KEY = 'lle_attribution_v1';

// Known Search Engines for Organic Search detection
const SEARCH_ENGINES: { domain: string; name: string }[] = [
  { domain: 'google.', name: 'google' },
  { domain: 'bing.com', name: 'bing' },
  { domain: 'yahoo.com', name: 'yahoo' },
  { domain: 'duckduckgo.com', name: 'duckduckgo' },
  { domain: 'ecosia.org', name: 'ecosia' },
  { domain: 'baidu.com', name: 'baidu' },
  { domain: 'yandex.', name: 'yandex' },
  { domain: 'ask.com', name: 'ask' },
  { domain: 'search.brave.com', name: 'brave' },
  { domain: 'startpage.com', name: 'startpage' },
  { domain: 'qwant.com', name: 'qwant' },
];

// Known Social Networks for Organic Social detection
const SOCIAL_NETWORKS: { domain: string; name: string }[] = [
  { domain: 'facebook.com', name: 'facebook' },
  { domain: 'fb.me', name: 'facebook' },
  { domain: 'instagram.com', name: 'instagram' },
  { domain: 'linkedin.com', name: 'linkedin' },
  { domain: 'lnkd.in', name: 'linkedin' },
  { domain: 'twitter.com', name: 'twitter' },
  { domain: 't.co', name: 'twitter' },
  { domain: 'x.com', name: 'x' },
  { domain: 'tiktok.com', name: 'tiktok' },
  { domain: 'youtube.com', name: 'youtube' },
  { domain: 'youtu.be', name: 'youtube' },
  { domain: 'pinterest.', name: 'pinterest' },
  { domain: 'reddit.com', name: 'reddit' },
  { domain: 'threads.net', name: 'threads' },
  { domain: 'quora.com', name: 'quora' },
  { domain: 'snapchat.com', name: 'snapchat' },
];

/**
 * Parses URL query parameters and referrer to detect traffic channel.
 */
export function detectAttribution(): AttributionData {
  if (typeof window === 'undefined') {
    return {
      utm_source: 'direct',
      utm_medium: 'none',
      utm_campaign: 'direct',
      referrer: '',
      landing_page: '',
      captured_at: new Date().toISOString(),
    };
  }

  const urlParams = new URLSearchParams(window.location.search);
  const rawReferrer = document.referrer || '';
  const currentHost = window.location.hostname;
  const currentPath = window.location.pathname + window.location.search;

  // 1. Explicit UTM Parameters in URL
  const utm_source = urlParams.get('utm_source');
  const utm_medium = urlParams.get('utm_medium');
  const utm_campaign = urlParams.get('utm_campaign');
  const utm_term = urlParams.get('utm_term') || undefined;
  const utm_content = urlParams.get('utm_content') || undefined;

  // Click IDs indicative of Paid Traffic
  const gclid = urlParams.get('gclid') || urlParams.get('gbraid') || urlParams.get('wbraid');
  const fbclid = urlParams.get('fbclid');
  const msclkid = urlParams.get('msclkid');
  const ttclid = urlParams.get('ttclid');
  const li_fat_id = urlParams.get('li_fat_id');
  const twclid = urlParams.get('twclid');

  // Case A: Explicit UTMs provided
  if (utm_source || utm_medium || utm_campaign) {
    return {
      utm_source: utm_source || (gclid ? 'google' : fbclid ? 'facebook' : 'custom'),
      utm_medium: utm_medium || (gclid ? 'paid_search' : fbclid ? 'paid_social' : 'cpc'),
      utm_campaign: utm_campaign || 'campaign',
      utm_term,
      utm_content,
      referrer: rawReferrer,
      landing_page: currentPath,
      captured_at: new Date().toISOString(),
    };
  }

  // Case B: Paid Click IDs present without explicit UTMs
  if (gclid) {
    return {
      utm_source: 'google',
      utm_medium: 'paid_search',
      utm_campaign: 'google_ads',
      referrer: rawReferrer,
      landing_page: currentPath,
      captured_at: new Date().toISOString(),
    };
  }

  if (fbclid) {
    return {
      utm_source: 'facebook',
      utm_medium: 'paid_social',
      utm_campaign: 'meta_ads',
      referrer: rawReferrer,
      landing_page: currentPath,
      captured_at: new Date().toISOString(),
    };
  }

  if (msclkid) {
    return {
      utm_source: 'bing',
      utm_medium: 'paid_search',
      utm_campaign: 'bing_ads',
      referrer: rawReferrer,
      landing_page: currentPath,
      captured_at: new Date().toISOString(),
    };
  }

  if (ttclid) {
    return {
      utm_source: 'tiktok',
      utm_medium: 'paid_social',
      utm_campaign: 'tiktok_ads',
      referrer: rawReferrer,
      landing_page: currentPath,
      captured_at: new Date().toISOString(),
    };
  }

  if (li_fat_id) {
    return {
      utm_source: 'linkedin',
      utm_medium: 'paid_social',
      utm_campaign: 'linkedin_ads',
      referrer: rawReferrer,
      landing_page: currentPath,
      captured_at: new Date().toISOString(),
    };
  }

  if (twclid) {
    return {
      utm_source: 'twitter',
      utm_medium: 'paid_social',
      utm_campaign: 'twitter_ads',
      referrer: rawReferrer,
      landing_page: currentPath,
      captured_at: new Date().toISOString(),
    };
  }

  // Case C: Check Referrer
  if (rawReferrer) {
    try {
      const refUrl = new URL(rawReferrer);
      const refHost = refUrl.hostname.toLowerCase();

      // If internal navigation (same hostname), do not overwrite with internal referral
      if (refHost === currentHost || refHost.endsWith(`.${currentHost}`)) {
        const stored = getStoredAttribution();
        if (stored) return stored;
        return {
          utm_source: 'direct',
          utm_medium: 'none',
          utm_campaign: 'direct',
          referrer: '',
          landing_page: currentPath,
          captured_at: new Date().toISOString(),
        };
      }

      // Check Organic Search
      const matchedSearch = SEARCH_ENGINES.find((s) => refHost.includes(s.domain));
      if (matchedSearch) {
        return {
          utm_source: matchedSearch.name,
          utm_medium: 'organic_search',
          utm_campaign: 'organic',
          referrer: rawReferrer,
          landing_page: currentPath,
          captured_at: new Date().toISOString(),
        };
      }

      // Check Organic Social
      const matchedSocial = SOCIAL_NETWORKS.find((s) => refHost.includes(s.domain));
      if (matchedSocial) {
        return {
          utm_source: matchedSocial.name,
          utm_medium: 'organic_social',
          utm_campaign: 'social',
          referrer: rawReferrer,
          landing_page: currentPath,
          captured_at: new Date().toISOString(),
        };
      }

      // Other external website = Referral
      const cleanSource = refHost.replace(/^www\./, '');
      return {
        utm_source: cleanSource,
        utm_medium: 'referral',
        utm_campaign: 'referral',
        referrer: rawReferrer,
        landing_page: currentPath,
        captured_at: new Date().toISOString(),
      };
    } catch {
      // Fall through to Direct
    }
  }

  // Case D: Direct traffic (no referrer, no UTMs)
  return {
    utm_source: 'direct',
    utm_medium: 'none',
    utm_campaign: 'direct',
    referrer: '',
    landing_page: currentPath,
    captured_at: new Date().toISOString(),
  };
}

/**
 * Saves attribution data in sessionStorage and localStorage.
 */
export function saveAttribution(data: AttributionData): void {
  if (typeof window === 'undefined') return;
  try {
    const serialized = JSON.stringify(data);
    sessionStorage.setItem(STORAGE_KEY, serialized);
    // Also save in localStorage for long-term multi-session attribution
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, serialized);
    }
  } catch (e) {
    console.warn('Attribution storage error:', e);
  }
}

/**
 * Retrieves persisted attribution data from storage if available.
 */
export function getStoredAttribution(): AttributionData | null {
  if (typeof window === 'undefined') return null;
  try {
    const sessionData = sessionStorage.getItem(STORAGE_KEY);
    if (sessionData) return JSON.parse(sessionData);

    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) return JSON.parse(localData);
  } catch {
    return null;
  }
  return null;
}

/**
 * Initializes attribution capture on app entry.
 * Should be invoked early in the application lifecycle.
 */
export function initializeAttribution(): AttributionData {
  const current = detectAttribution();
  const stored = getStoredAttribution();

  // If current hit is non-direct (e.g. fresh campaign or organic click), always update storage
  if (current.utm_source !== 'direct' || !stored) {
    saveAttribution(current);
    return current;
  }

  return stored;
}
