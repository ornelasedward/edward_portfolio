import type { Metadata } from 'next';
import Row from '@/components/resume/Row';
import Inquire from '@/components/pages/contact/Form';
import { links, profile } from '@/constant';
import { isMarketingHost } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact · Edward Ornelas',
};

const ContactsPage = async () => {
  const marketing = await isMarketingHost();
  // The marketing site leaves out GitHub, which leads back to the engineering portfolio.
  const shown = marketing ? links.filter((link) => link.label !== 'GitHub') : links;
  return (
    <>
      <section className="border-t border-line px-4 py-12 sm:px-6 md:py-16">
        <p className="label">Contact</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
          {marketing ? 'Let’s grow what you’re building.' : 'Let’s build something that ships.'}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{profile.availability}.</p>
      </section>

      <Row label="Direct">
        <ul className="divide-y divide-line border-y border-line">
          {shown.map((link) => (
            <li key={link.label} className="flex items-baseline justify-between gap-6 py-3">
              <span className="label">{link.label}</span>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="truncate link"
              >
                {link.href.replace(/^mailto:|^https:\/\/(www\.)?/g, '')}
              </a>
            </li>
          ))}
        </ul>
      </Row>

      <Row label="Message">
        <Inquire />
      </Row>
    </>
  );
};

export default ContactsPage;
