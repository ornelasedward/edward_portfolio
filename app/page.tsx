import { PAGE_MAX_WIDTH } from '@/components/Container';
import CredentialsBar from '@/components/pages/home/credentials/CredentialsBar';
import Work from '@/components/pages/home/work/Work';
import Hero from '@/components/pages/home/hero/Hero';
import AboutMe from '@/components/pages/home/about-me/AboutMe';
import DontHireMe from '@/components/pages/home/dont-hire-me/DontHireMe';
import Contacts from '@/components/pages/home/contacts/Contacts';
import TechStack from '@/components/pages/home/stack/TechStack';

const pageContentClass = `mx-auto w-full min-w-0 ${PAGE_MAX_WIDTH}`;

export default function Home() {
  return (
    <div className="space-y-10 lg:space-y-16">
      <div className="flex flex-col gap-12 lg:gap-16">
        <div className={pageContentClass}>
          <Hero />
        </div>
        <CredentialsBar />
      </div>
      <Work />
      <div className={`${pageContentClass} space-y-10 lg:space-y-16`}>
        <TechStack />
        <AboutMe />
        <DontHireMe />
        <Contacts />
      </div>
    </div>
  );
}
