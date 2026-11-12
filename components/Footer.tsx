import { links, profile } from '@/constant';
import { isMarketingHost } from '@/lib/site';

const Footer = async () => {
  // The marketing site leaves out GitHub, which leads back to the engineering portfolio.
  const shown = (await isMarketingHost()) ? links.filter((link) => link.label !== 'GitHub') : links;
  return (
    <footer className="flex flex-col gap-3 border-t border-line px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p className="text-muted">
        {profile.name} · {profile.location}
      </p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {shown.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
