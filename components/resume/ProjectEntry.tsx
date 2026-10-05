import Image from "next/image";
import type { Project } from "@/constant";

type Props = {
  project: Project;
  index: number;
};

const ProjectEntry = ({ project, index }: Props) => {
  return (
    <article id={project.id} className="scroll-mt-4 border-t border-line pt-8 first:border-t-0 first:pt-0">
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-2xl font-semibold tracking-tight">
          <span className="mr-3 font-mono text-sm font-normal text-faint">
            {String(index).padStart(2, "0")}
          </span>
          {project.name}
        </h3>
        {project.role || project.period ? (
          <span className="font-mono text-xs text-muted">
            {[project.role, project.period].filter(Boolean).join(" · ")}
          </span>
        ) : null}
      </header>
      <p className="mt-2 text-lg leading-snug">{project.kind}</p>

      {project.image ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block overflow-hidden border border-line"
          aria-label={`Open ${project.name}`}
        >
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            className="h-auto w-full transition-transform duration-500 hover:scale-[1.015]"
            sizes="(min-width: 1024px) 760px, 100vw"
            placeholder="blur"
            priority={index === 1}
          />
        </a>
      ) : null}

      {project.stats.length > 0 ? (
        <div>
          <dl
            className={`grid grid-cols-2 border-l border-line ${
              project.stats.length >= 4 ? "sm:grid-cols-4" : project.stats.length === 3 ? "sm:grid-cols-3" : ""
            }`}
          >
            {project.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end border-b border-r border-line px-4 py-3">
                <dt className="label mt-1">{stat.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
          {project.statsNote ? (
            <p className="mt-2 font-mono text-[11px] text-faint">{project.statsNote}</p>
          ) : null}
        </div>
      ) : null}

      <p className="mt-5 max-w-2xl leading-relaxed">{project.summary}</p>

      {project.features ? <BulletList title="Under the hood" items={project.features} /> : null}
      {project.ai ? <BulletList title="AI in the product" items={project.ai} /> : null}
      {project.built ? <BulletList title="What I built" items={project.built} /> : null}
      {project.engineering ? <BulletList title="Engineering" items={project.engineering} /> : null}
      {project.growth ? <BulletList title="Growth and partnerships" items={project.growth} /> : null}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs leading-relaxed text-muted">{project.stack.join("  /  ")}</p>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-medium link"
        >
          {project.hrefLabel} ↗
        </a>
      </div>
    </article>
  );
};

const BulletList = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mt-6">
    <h4 className="label">{title}</h4>
    <ul className="mt-2 space-y-2">
      {items.map((item) => (
        <li key={item.slice(0, 40)} className="flex max-w-2xl gap-3 leading-relaxed">
          <span aria-hidden className="select-none text-faint">
            —
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectEntry;
