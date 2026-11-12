import Link from 'next/link';
import { headers } from 'next/headers';
import { profile } from '@/constant';

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'AI', href: '/#ai' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Contact', href: '/contact' },
];

// On marketing.edward-ornelas.com "/" is the marketing page (see proxy.ts).
const marketingLinks = [
  { label: 'Growth', href: '/#onboarding' },
  { label: 'Content', href: '/#content' },
  { label: 'Toolkit', href: '/#toolkit' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = async () => {
  const host = (await headers()).get('host') ?? '';
  const items = host.startsWith('marketing.') ? marketingLinks : navLinks;
  return (
    <header className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
      <Link href="/" className="font-semibold tracking-tight">
        {profile.name}
      </Link>
      <nav>
        <ul className="flex items-center gap-5 text-sm">
          {items.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-muted transition-colors hover:text-ink">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
