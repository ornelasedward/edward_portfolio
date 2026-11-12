import { NextResponse, type NextRequest } from 'next/server';

const MARKETING_URL = 'https://marketing.edward-ornelas.com';

// marketing.edward-ornelas.com serves the /marketing page at its root. The two sites stay
// separate: /marketing on the engineering site sends people to the marketing domain, so the
// marketing page only ever appears there.
export function proxy(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  const isMarketing = host.startsWith('marketing.');
  const { pathname } = request.nextUrl;

  if (isMarketing && pathname === '/') {
    return NextResponse.rewrite(new URL('/marketing', request.url));
  }
  if (pathname === '/marketing') {
    if (isMarketing) return NextResponse.redirect(new URL('/', request.url), 308);
    // Local dev (localhost) keeps /marketing reachable for previewing.
    if (host.endsWith('edward-ornelas.com')) return NextResponse.redirect(MARKETING_URL, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/marketing'],
};
