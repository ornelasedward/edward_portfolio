import React from "react";

type SectionHeadProps = {
  tag: string;
  title: string;
  subtitle?: string;
};

const SectionHead = ({ tag, title, subtitle }: SectionHeadProps) => {
  return (
    <div className="mb-8 lg:mb-12">
      <p className="mb-3 text-sm font-medium text-primary">{tag}</p>
      <div className="flex w-full items-center gap-4 lg:gap-6">
        <h2 className="shrink-0 text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem]">
          {title}
        </h2>
        <div className="hidden h-[1px] flex-1 bg-primary md:block" />
      </div>
      {subtitle ? (
        <p className="mt-4 max-w-[620px] text-base leading-relaxed text-gray sm:text-lg sm:leading-8">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHead;
