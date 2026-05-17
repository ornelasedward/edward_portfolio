import { PAGE_MAX_WIDTH } from '@/components/Container';
import Skills from '@/components/pages/home/skills/Skills';
import CredentialsBar from '@/components/pages/home/credentials/CredentialsBar';
import Work from '@/components/pages/home/work/Work';
import Hero from '@/components/pages/home/hero/Hero';
import AboutMe from '@/components/pages/home/about-me/AboutMe';
import Contacts from '@/components/pages/home/contacts/Contacts';
import TechStack from '@/components/pages/home/stack/TechStack';
import AIToolkit from '@/components/pages/home/ai-toolkit/AIToolkit';

const pageContentClass = `mx-auto w-full min-w-0 ${PAGE_MAX_WIDTH}`;

export default function Home() {
  return (
    <div className="space-y-10 lg:space-y-16">
      <div className={pageContentClass}>
        <Hero />
      </div>
      <CredentialsBar />
      <div className={`${pageContentClass} space-y-10 lg:space-y-16`}>
        <Work />
        <TechStack />
        <AIToolkit />
        <Skills />
        <AboutMe />
        <Contacts />
      </div>
    </div>
  );
}
