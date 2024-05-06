import AboutMe from '@/components/AboutMe';
import Landing from '@/components/Landing';
import WorksSection from '@/components/Work';
import ContactMe from '@/components/Contact';
import AnimePresence from './_AnimePresence/AnimePresence';

export default function Home() {
  return (
    <main>
      <AnimePresence />
      <Landing />
      <AboutMe />
      <WorksSection />
      <ContactMe />
    </main>
  );
}
