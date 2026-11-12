import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Row from '@/components/resume/Row';
import LogoMarquee from '@/components/resume/LogoMarquee';
import { links, profile } from '@/constant';
import {
  caseStudies,
  marketingBackground,
  marketingProfile,
  marketingStats,
  marketingToolkit,
} from '@/constant/marketing';

const title = 'Edward Ornelas · Growth Engineer & Content Lead';
const description =
  'Engineer and marketer in Austin, TX. I grow the products I build: partner campaigns, onboarding, content and AI content operations.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://marketing.edward-ornelas.com' },
  openGraph: { title, description, images: ['/images/header-img.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/header-img.png'] },
};

const ENGINEERING_SITE = 'https://www.edward-ornelas.com';

export default function MarketingHome() {
  return (
    <>
      <section className="relative border-t border-line px-4 py-12 sm:px-6 md:py-16">
        <Image
          src="/images/edward.png"
          alt="Edward Ornelas"
          width={226}
          height={360}
          priority
          className="pointer-events-none absolute bottom-0 right-6 hidden h-[340px] w-auto select-none md:block"
        />
        <div className="md:max-w-[calc(100%-240px)]">
          <p className="label">
            {marketingProfile.title} · {profile.location}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-[2.75rem]">
            {marketingProfile.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{marketingProfile.summary}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {marketingProfile.focus.map((item) => (
              <li key={item} className="border border-line px-2.5 py-1 font-mono text-xs">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="border border-line bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Get in touch
            </Link>
            {links
              .filter((link) => ['LinkedIn', 'YouTube'].includes(link.label))
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-line px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
                >
                  {link.label}
                </a>
              ))}
          </div>
          <p className="mt-6 font-mono text-xs text-muted">
            {profile.availability} ·{' '}
            <a href={ENGINEERING_SITE} className="link">
              Engineering portfolio ↗
            </a>
          </p>
        </div>
      </section>

      <dl className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-4">
        {marketingStats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse justify-end border-b border-r border-line px-4 py-4 sm:px-6">
            <dt className="label mt-1">{stat.label}</dt>
            <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <LogoMarquee />

      {caseStudies.map((study, i) => (
        <Row key={study.id} id={study.id} label={study.label}>
          <article>
            <h3 className="text-2xl font-semibold tracking-tight">
              <span className="mr-3 font-mono text-sm font-normal text-faint">
                {String(i + 1).padStart(2, '0')}
              </span>
              {study.title}
            </h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">{study.context}</p>

            {study.stats ? (
              <dl
                className={`mt-5 grid grid-cols-2 border-l border-t border-line ${
                  study.stats.length === 3 ? 'sm:grid-cols-3' : ''
                }`}
              >
                {study.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse justify-end border-b border-r border-line px-4 py-3">
                    <dt className="label mt-1">{stat.label}</dt>
                    <dd className="text-2xl font-semibold tracking-tight">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <ul className="mt-5 space-y-2">
              {study.points.map((point) => (
                <li key={point.slice(0, 40)} className="flex max-w-2xl gap-3 leading-relaxed">
                  <span aria-hidden className="select-none text-faint">
                    —
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {study.href ? (
              <a
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-medium link"
              >
                {study.hrefLabel} ↗
              </a>
            ) : null}
          </article>
        </Row>
      ))}

      <Row id="background" label="Before engineering">
        <ul className="space-y-2">
          {marketingBackground.map((item) => (
            <li key={item.slice(0, 40)} className="flex max-w-2xl gap-3 leading-relaxed">
              <span aria-hidden className="select-none text-faint">
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Row>

      <Row id="toolkit" label="Toolkit">
        <table className="w-full border-collapse text-left">
          <tbody>
            {marketingToolkit.map((group) => (
              <tr key={group.label} className="border-b border-line align-top first:border-t">
                <th scope="row" className="w-36 py-3 pr-4 text-sm font-medium sm:w-44">
                  {group.label}
                </th>
                <td className="py-3 leading-relaxed">{group.items.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Row>

      <Row id="contact" label="Contact">
        <p className="max-w-xl text-lg leading-relaxed">
          Hiring for growth, content or marketing engineering? Email me at{' '}
          <a href={`mailto:${profile.email}`} className="link">
            {profile.email}
          </a>{' '}
          or use the{' '}
          <Link href="/contact" className="link">
            contact form
          </Link>
          . For my engineering work, see{' '}
          <a href={ENGINEERING_SITE} className="link">
            edward-ornelas.com
          </a>
          .
        </p>
      </Row>
    </>
  );
}
