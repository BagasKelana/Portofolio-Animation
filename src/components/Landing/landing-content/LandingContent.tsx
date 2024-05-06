'use client';

import landingImage from '@/Default_The_cute_explorer_boy_is_wearing_a_brown_shirt_under_a_0_43ef2ba5-3aa0-4035-bd6e-c144ef4de091_0 2.png';
import Image from 'next/image';
import styles from './style.module.scss';
import { useRef } from 'react';
import { zoomOut, slideIn } from './animation';
import { motion, useScroll, useTransform } from 'framer-motion';
import InfinityText from '../infinity-text/InfinityText';
import NavLists from '@/components/ui/NavLists/NavLists';

const LandingContent = () => {
  const landingContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: landingContainer,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 550]);
  return (
    <>
      <motion.nav
        variants={slideIn}
        initial="initial"
        animate="enter"
        className={styles.fixedNavbar}
      >
        <NavLists />
      </motion.nav>

      <motion.div
        ref={landingContainer}
        style={{ y }}
        variants={zoomOut}
        initial="initial"
        animate="enter"
        className={styles.landing}
      >
        <Image src={landingImage} alt="landingImage" priority={true} />

        <div className={styles.introduct}>
          <p>
            <span>Hello </span> <span> I{"'"}m Bagas Kelana</span>
          </p>
        </div>
        <InfinityText />
      </motion.div>
    </>
  );
};

export default LandingContent;
