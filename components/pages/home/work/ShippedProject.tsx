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
    <article className="border-b border-gray py-16 first:pt-10 last:border-b-0 lg:py-24 lg:first:pt-14">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="min-w-0">
          <p className="mb-3 text-sm text-gray">/{String(index).padStart(2, "0")}</p>
          <h3 className="mb-5 text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-4xl lg:mb-6 lg:text-[2.75rem]">
            {project.name}
          </h3>
          <div className="mb-5 flex flex-wrap gap-2 lg:mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray px-3.5 py-1 text-sm text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mb-6 space-y-3 lg:mb-7">
            {project.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="max-w-xl text-base leading-relaxed text-gray"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid w-full grid-cols-3 items-end gap-6 border-t border-gray pt-6 sm:gap-10 lg:gap-14 lg:pt-7">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-semibold text-white lg:text-2xl">{stat.value}</p>
                <p className="mt-1 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.15em] text-gray">
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
                <p className="text-xl font-semibold text-primary transition-opacity group-hover:opacity-80 lg:text-2xl">
                  View →
                </p>
                <p className="mt-1 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.15em] text-gray">
                  {project.linkSublabel ?? "Visit project"}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray lg:aspect-[5/3]">
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
