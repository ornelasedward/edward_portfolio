import Image from 'next/image';
import Link from 'next/link';
import Row from '@/components/resume/Row';
import ProjectEntry from '@/components/resume/ProjectEntry';
import LogoMarquee from '@/components/resume/LogoMarquee';
import AiBuildEntry from '@/components/resume/AiBuildEntry';
import { aiBuilds, education, links, profile, projects, sideProjects, stack } from '@/constant';

const [featured, ...earlier] = projects;

const sentenceCase = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export default function Home() {
  return (
    <>
      <section className="relative border-t border-line px-4 py-12 sm:px-6 md:py-16">
        {/* Cutout stands on the section's bottom rule; the text column is capped so it never runs under it. */}
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
          {profile.title} · {profile.location}
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-[2.75rem]">
          {profile.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{profile.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {profile.focus.map((item) => (
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
          {links.slice(1, 3).map((link) => (
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
        <p className="mt-6 font-mono text-xs text-muted">{profile.availability}</p>
        </div>
      </section>

      <LogoMarquee />

      <Row id="work" label="Featured">
        <ProjectEntry project={featured} index={1} />
      </Row>

      <Row id="ai" label="AI engineering">
        <div className="space-y-8">
          {aiBuilds.map((build) => (
            <AiBuildEntry key={build.name} build={build} />
          ))}
        </div>
      </Row>

      <Row label="Earlier products">
        <div className="space-y-12">
          {earlier.map((project, i) => (
            <ProjectEntry key={project.id} project={project} index={i + 2} />
          ))}
        </div>
      </Row>

      <Row label="Side projects">
        <div className="space-y-8">
          {sideProjects.map((build) => (
            <AiBuildEntry key={build.name} build={build} />
          ))}
        </div>
      </Row>

      <Row id="stack" label="Stack">
        <table className="w-full border-collapse text-left">
          <tbody>
            {stack.map((group) => (
              <tr key={group.label} className="border-b border-line align-top first:border-t">
                <th scope="row" className="w-36 py-3 pr-4 font-normal sm:w-44">
                  <span className="block text-sm font-medium">{group.label}</span>
                  {group.note ? (
                    <span className="block font-mono text-[11px] text-faint">{group.note}</span>
                  ) : null}
                </th>
                <td className="py-3 leading-relaxed">
                  {sentenceCase(group.items.join(', '))}
                  {group.proof ? (
                    <span className="mt-1 block font-mono text-[11px] text-faint">In {group.proof}</span>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Row>

      <Row label="Education">
        <p className="font-medium">{education.degree}</p>
        <p className="text-muted">Focus: {education.focus}</p>
      </Row>

      <Row id="contact" label="Contact">
        <p className="max-w-xl text-lg leading-relaxed">
          Hiring for AI or full-stack work? Email me at{' '}
          <a href={`mailto:${profile.email}`} className="link">
            {profile.email}
          </a>{' '}
          or use the{' '}
          <Link href="/contact" className="link">
            contact form
          </Link>
          .
        </p>
      </Row>
    </>
  );
}
