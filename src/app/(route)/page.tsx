'use client';

import AboutMe from '@/components/AboutMe';
import styles from './page.module.scss';
import Landing from '@/components/Landing';
import { useEffect, useState } from 'react';
import Preloader from '@/components/Preloader';
import { AnimatePresence } from 'framer-motion';
import WorksSection from '@/components/Work';
import Navbar from '@/components/Navbar';
import Modal from '@/components/AboutMe/tech-stack/modal/modal';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
        document.body.style.overflow = 'auto';
      }, 2000);
    })();
  }, []);
  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <Landing />
      <Modal />
      <AboutMe />
      <WorksSection />
    </main>
  );
}
