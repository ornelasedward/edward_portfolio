import { links, profile } from '@/constant';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 border-t border-line px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p className="text-muted">
        {profile.name} · {profile.location}
      </p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {links.map((link) => (
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
