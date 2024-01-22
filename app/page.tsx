import Image from 'next/image';
import Skills from '@/components/pages/home/skills/Skills';
import Testimonial from '@/components/pages/home/testimonial/Testimonial';
import Work from '@/components/pages/home/work/Work';
import Hero from '@/components/pages/home/hero/Hero';
import AboutMe from '@/components/pages/home/about-me/AboutMe';
import Contacts from '@/components/pages/home/contacts/Contacts';

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonial />
      <Work />
      <Skills />
      <AboutMe />
      <Contacts />
    </>
  );
}
