import { NextResponse, type NextRequest } from 'next/server';

// marketing.edward-ornelas.com serves the /marketing page at its root. Every other path
// (contact, images, API) is shared with the main site, so only "/" is rewritten.
export function proxy(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  if (host.startsWith('marketing.') && request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/marketing', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
