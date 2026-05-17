'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const NavLink = ({ href, children, onClick, className }: NavLinkProps) => {
  const pathname = usePathname();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, [pathname]);

  const isActive = (() => {
    if (href === '/contact') return pathname === '/contact';
    if (href === '/#hero') return pathname === '/' && (hash === '' || hash === '#hero');
    if (href.includes('#')) {
      const linkHash = href.slice(href.indexOf('#'));
      return pathname === '/' && hash === linkHash;
    }
    return pathname === href;
  })();

  return (
    <Link href={href} onClick={onClick} className={className}>
      <span className={`text-base ${isActive ? 'text-white' : 'text-gray'}`}>
        <span className="text-primary">#</span>
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
