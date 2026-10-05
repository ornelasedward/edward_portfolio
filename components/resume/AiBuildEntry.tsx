import Image from "next/image";
import type { AiBuild } from "@/constant";

// Entry for smaller AI builds: same rules and type as ProjectEntry, screenshot optional.
const AiBuildEntry = ({ build }: { build: AiBuild }) => {
  return (
    <article className="border-t border-line pt-6 first:border-t-0 first:pt-0">
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-xl font-semibold tracking-tight">{build.name}</h3>
        <span className="font-mono text-xs text-muted">
          {[build.role, build.period].filter(Boolean).join(" · ")}
        </span>
      </header>
      <p className="mt-2 text-lg leading-snug">{build.kind}</p>
      {build.image ? (
        <a
          href={build.imageHref ?? build.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block overflow-hidden border border-line"
          aria-label={`Open ${build.name}`}
        >
          <Image
            src={build.image}
            alt={`${build.name} screenshot`}
            className="h-auto w-full transition-transform duration-500 hover:scale-[1.015]"
            sizes="(min-width: 1024px) 760px, 100vw"
            placeholder="blur"
          />
        </a>
      ) : null}
      <p className="mt-4 max-w-2xl leading-relaxed">{build.summary}</p>
      <ul className="mt-3 space-y-2">
        {build.points.map((point) => (
          <li key={point.slice(0, 40)} className="flex max-w-2xl gap-3 leading-relaxed">
            <span aria-hidden className="select-none text-faint">
              —
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs leading-relaxed text-muted">{build.stack.join("  /  ")}</p>
        {build.href ? (
          <a href={build.href} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-medium link">
            {build.hrefLabel} ↗
          </a>
        ) : (
          <span className="shrink-0 font-mono text-xs text-faint">Private repo</span>
        )}
      </div>
    </article>
  );
};

export default AiBuildEntry;
