import Container from "@/components/Container";
import Inquire from "@/components/pages/contact/Form";
import { contactContent } from "@/constant";
import Link from "next/link";

const ContactsPage = () => {
  const { headline, links } = contactContent;

  return (
    <div className="relative py-10 lg:py-16">
      <Container classes="space-y-16 lg:space-y-24">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray">Contact</p>
        </div>
        <div>
          <h1 className="max-w-4xl text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem]">
            {headline.before}
            <span className="text-primary">{headline.accent}</span>
            {headline.after}
          </h1>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
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
        <Inquire />
      </Container>
    </div>
  );
};

export default ContactsPage;
