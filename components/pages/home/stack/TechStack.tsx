import Container from "@/components/Container";
import SectionHead from "@/components/common/SectionHead";
import { techStackContent } from "@/constant";
import React from "react";

const TechStack = () => {
  const { tag, title, subtitle, categories } = techStackContent;

  return (
    <section id="stack" className="py-10 lg:py-16">
      <Container>
        <SectionHead tag={tag} title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 gap-px border border-gray bg-gray sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.label}
              className="bg-primary-dark p-6 transition-colors hover:bg-black/30 sm:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center border border-primary text-base font-semibold text-primary">
                  {category.icon}
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray">
                  {category.label}
                </p>
              </div>
              <div className="flex flex-wrap gap-x-3.5 gap-y-1.5 text-[15px] leading-[1.8]">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-white after:ml-3.5 after:text-primary after:content-['·'] last:after:content-['']"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechStack;
