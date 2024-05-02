import AboutMe from '@/components/AboutMe';

import Landing from '@/components/Landing';
import WorksSection from '@/components/Work';
import Modal from '@/components/AboutMe/tech-stack/modal/modal';
import ContactMe from '@/components/Contact';
import AnimePresence from './_AnimePresence/AnimePresence';

export default function Home() {
  return (
    <main>
      <AnimePresence />
      <Landing />
      <Modal />
      <AboutMe />
      <WorksSection />
      <ContactMe />
    </main>
  );
}
