import { createClient } from "@supabase/supabase-js";

// SuperCool managed database (public url + anon key).
const url = "https://prjcab7f36086aec4dd9a59.databasepad.com";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImU2MzlmNzY3LWJiMTUtNGExNS04YWI0LTRjMzIxNjM4YjkyZCJ9.eyJwcm9qZWN0SWQiOiJwcmpjYWI3ZjM2MDg2YWVjNGRkOWE1OSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzg1ODc1OTQzLCJleHAiOjIxMDEyMzU5NDMsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.V0I_r7odZ2Y44yvuhiF5Jbx_D6fXIKDkCE8He3pU8W4";

export const db = createClient(url, anonKey, {
  auth: {
    persistSession: typeof window !== 'undefined',
  },
  global: {
    fetch: typeof window !== 'undefined' ? window.fetch.bind(window) : undefined,
  },
});
export default db;
