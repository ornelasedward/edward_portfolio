import Container from "@/components/Container";
import SectionHead from "@/components/common/SectionHead";
import { aiToolkitContent } from "@/constant";
import React from "react";

const AIToolkit = () => {
  const { tag, title, subtitle, tools } = aiToolkitContent;

  return (
    <section id="ai" className="py-10 lg:py-16">
      <Container>
        <SectionHead tag={tag} title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <article
              key={tool.name}
              className="group relative overflow-hidden border border-gray bg-primary-dark p-6 transition-all hover:border-primary/40 sm:p-7"
            >
              <div className="absolute left-0 top-0 h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              <span className="mb-4 block text-xs text-primary">[ {tool.num} ]</span>
              <p className="mb-2 text-[1.375rem] font-bold tracking-[-0.02em] text-white">
                {tool.name}
              </p>
              <p className="mb-3.5 text-xs uppercase tracking-wider text-gray">{tool.role}</p>
              <p className="text-[13px] leading-relaxed text-gray">{tool.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AIToolkit;
