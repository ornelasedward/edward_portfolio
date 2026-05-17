import Container from "@/components/Container";
import { dontHireMeContent } from "@/constant";
import React from "react";

type FilterListProps = {
  items: string[];
  marker: "negative" | "positive";
};

const titleClassName =
  "text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2rem] lg:text-[2.25rem]";

const FilterList = ({ items, marker }: FilterListProps) => (
  <div className="border border-gray">
    <ul>
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 border-t border-gray px-6 py-5 text-base leading-relaxed text-gray first:border-t-0 sm:px-8 sm:py-6"
        >
          <span
            className={`shrink-0 font-medium ${
              marker === "negative" ? "text-red-500" : "text-green-500"
            }`}
            aria-hidden
          >
            {marker === "negative" ? "✕" : "✓"}
          </span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const DontHireMe = () => {
  const { tag, dontHireTitle, hireTitle, dontHireItems, hireItems } =
    dontHireMeContent;

  return (
    <section id="dont-hire-me" className="scroll-mt-28 py-10 lg:py-16">
      <Container>
        <div className="mb-8 lg:mb-12">
          <p className="mb-3 text-sm font-medium text-primary">{tag}</p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="space-y-6">
              <h2 className={titleClassName}>{dontHireTitle}</h2>
              <FilterList items={dontHireItems} marker="negative" />
            </div>
            <div className="space-y-6">
              <h2 className={titleClassName}>{hireTitle}</h2>
              <FilterList items={hireItems} marker="positive" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DontHireMe;
