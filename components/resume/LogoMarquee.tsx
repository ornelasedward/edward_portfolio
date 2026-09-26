import Image from "next/image";
import { logos } from "@/constant";

// Monochrome logo strip that scrolls on a loop. The list is rendered twice so the -50% translate
// wraps seamlessly; the copy is hidden from screen readers. Pauses on hover and runs at half
// speed for visitors who prefer reduced motion (see .marquee in globals.css).
const LogoMarquee = () => {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-14 pr-14" aria-hidden={hidden || undefined}>
      {logos.map((logo) => (
        <li key={logo.name} className="shrink-0">
          <Image
            src={logo.src}
            alt={hidden ? "" : logo.name}
            width={logo.width}
            height={logo.height}
            style={{ height: logo.h, width: "auto" }}
            className={logo.keepDetail ? "grayscale contrast-125" : "brightness-0"}
            loading="eager"
            unoptimized
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section className="border-t border-line py-7" aria-label="Companies I have worked with">
      <p className="label px-4 sm:px-6">Worked with</p>
      <div className="marquee-mask mt-5 overflow-hidden">
        <div className="marquee flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
