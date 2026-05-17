import Container from "@/components/Container";
import { aboutContent } from "@/constant";
import React from "react";
import Skills from "./Skills";
import FunFacts from "./FunFacts";

const AboutPage = () => {
  return (
    <section className="relative">
      <Container classes="space-y-16 lg:space-y-24">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray">
            {aboutContent.label}
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            {aboutContent.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-gray lg:text-lg lg:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            {aboutContent.detailSections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="space-y-5 border-t border-gray py-6 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-6"
              >
                {section.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-8"
                  >
                    <span className="shrink-0 text-xs uppercase tracking-[0.15em] text-gray">
                      {row.label}
                    </span>
                    <span className="text-sm text-white sm:text-right lg:text-base">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Skills />
        <FunFacts />
      </Container>
    </section>
  );
};

export default AboutPage;
