import Container from "@/components/Container";
import Button from "@/components/common/Button";
import { contactContent } from "@/constant";
import Link from "next/link";
import React from "react";

const Contacts = () => {
  const { headline, links } = contactContent;

  return (
    <section id="contacts" className="py-16 lg:py-24">
      <Container>
        <div>
          <h2 className="max-w-4xl text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem]">
            {headline.before}
            <span className="text-primary">{headline.accent}</span>
            {headline.after}
          </h2>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-12">
          {links.map((link) => (
            <div key={link.label}>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray">
                {link.label}
              </p>
              <Link
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-base text-white underline decoration-gray underline-offset-4 transition-colors hover:text-primary hover:decoration-primary lg:text-lg"
              >
                {link.value}
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 lg:mt-14">
          <Button name="Contact me ->" link="/contact" type="primary" />
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
