import { headers } from 'next/headers';

// The engineering site (www) and the marketing site (marketing.) are deployed together but are
// meant to be separate: nothing on the marketing host should point to or describe the engineering one.
export const ENGINEERING_URL = 'https://www.edward-ornelas.com';
export const MARKETING_URL = 'https://marketing.edward-ornelas.com';

export async function isMarketingHost() {
  const host = (await headers()).get('host') ?? '';
  return host.startsWith('marketing.');
}
