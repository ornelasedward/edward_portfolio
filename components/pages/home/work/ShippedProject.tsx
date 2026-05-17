import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export type ShippedProjectData = {
  name: string;
  tags: string[];
  paragraphs: string[];
  stats: { value: string; label: string }[];
  features_image: StaticImageData;
  liveLink?: string;
  linkSublabel?: string;
};

type Props = {
  index: number;
  project: ShippedProjectData;
};

const ShippedProject = ({ index, project }: Props) => {
  return (
    <article className="border-b border-gray py-16 last:border-b-0 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="min-w-0">
          <p className="mb-8 text-sm text-gray lg:mb-10">/{String(index).padStart(2, "0")}</p>
          <h3 className="mb-8 text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:mb-10 lg:text-[3.5rem]">
            {project.name}
          </h3>
          <div className="mb-10 flex flex-wrap gap-2 lg:mb-12">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray px-4 py-1.5 text-sm text-white lg:text-base"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mb-10 space-y-5 lg:mb-12">
            {project.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="max-w-2xl text-base leading-relaxed text-gray lg:text-lg lg:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap items-end gap-10 border-t border-gray pt-10 lg:gap-14 lg:pt-12">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-white lg:text-3xl">{stat.value}</p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.15em] text-gray">
                  {stat.label}
                </p>
              </div>
            ))}
            {project.liveLink ? (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <p className="text-2xl font-semibold text-primary transition-opacity group-hover:opacity-80 lg:text-3xl">
                  View →
                </p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.15em] text-gray">
                  {project.linkSublabel ?? "Visit project"}
                </p>
              </Link>
            ) : null}
          </div>
        </div>
        <div className="relative min-h-[300px] w-full overflow-hidden rounded-xl border border-gray sm:min-h-[380px] lg:min-h-[460px] xl:min-h-[520px]">
          <Image
            src={project.features_image}
            alt={project.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index === 1}
          />
        </div>
      </div>
    </article>
  );
};

export default ShippedProject;
