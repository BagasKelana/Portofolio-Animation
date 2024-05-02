'use client';

import Preloader from '@/components/Preloader';

import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimePresence = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [widthDevice, setWidthDevice] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1200 && widthDevice <= 1200) {
        setIsLoading(true);
        setWidthDevice(window.innerWidth);
        document.body.style.overflow = 'hidden';
      } else if (
        window.innerWidth <= 1200 &&
        window.innerWidth >= 768 &&
        (widthDevice > 1200 || widthDevice < 768)
      ) {
        setIsLoading(true);
        setWidthDevice(window.innerWidth);
        document.body.style.overflow = 'hidden';
      } else if (window.innerWidth < 768 && widthDevice >= 768) {
        setIsLoading(true);
        setWidthDevice(window.innerWidth);
        document.body.style.overflow = 'hidden';
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [widthDevice]);

  useEffect(() => {
    if (isLoading) {
      (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
          window.scrollTo(0, 0);
          document.body.style.overflow = 'auto';
        }, 2500);
      })();
    }
  }, [isLoading]);
  return (
    <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
  );
};

export default AnimePresence;
