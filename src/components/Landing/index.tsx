'use client';

import landingImage from '@/Default_The_cute_explorer_boy_is_wearing_a_brown_shirt_under_a_0_43ef2ba5-3aa0-4035-bd6e-c144ef4de091_0 2.png';
import Image from 'next/image';
import styles from './style.module.scss';
import { useRef } from 'react';
import { slideUp } from './animation';
import { motion, useScroll, useTransform } from 'framer-motion';
import InfinityText from './infinity-text/InfinityText';

export default function Home() {
  const landingContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: landingContainer,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 450]);

  return (
    <motion.main className={styles.landingContainer}>
      <motion.div
        ref={landingContainer}
        style={{ y }}
        variants={slideUp}
        initial="initial"
        animate="enter"
        className={styles.landing}
      >
        <Image src={landingImage} alt="landingImage" priority={true} />
        <InfinityText />
      </motion.div>
    </motion.main>
  );
}
