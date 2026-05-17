import Container from "@/components/Container";
import { shippedProjects } from "@/constant";
import Image from "next/image";
import { dots3, topRegR } from "@/assets";
import ShippedProject from "./ShippedProject";

const Work = () => {
  return (
    <section id="things-i-shipped" className="relative w-full scroll-mt-28 border-b border-gray pb-16 lg:pb-24">
      <Container>
        <div className="flex w-full items-center gap-4 py-6 lg:gap-6 lg:py-10">
          <h2 className="shrink-0 text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem]">
            <span className="text-primary">#</span>
            <span className="text-white">things-i&apos;ve-</span>
            <span className="text-primary">shipped</span>
          </h2>
          <div className="hidden h-[1px] flex-1 bg-primary md:block" />
        </div>
        <div>
          {shippedProjects.map((project, index) => (
            <ShippedProject key={project.name} index={index + 1} project={project} />
          ))}
        </div>
      </Container>
      <div className="pointer-events-none absolute left-0 top-[12%] z-0 hidden sm:block">
        <Image src={dots3} alt="" className="w-auto max-w-[120px] lg:max-w-none" />
      </div>
      <div className="pointer-events-none absolute right-0 top-[45%] z-0 hidden sm:block">
        <Image src={topRegR} alt="" className="w-auto max-w-[150px] lg:max-w-none" />
      </div>
    </section>
  );
};

export default Work;
