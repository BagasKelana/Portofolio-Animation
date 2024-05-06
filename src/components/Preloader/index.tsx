import { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss'; // Pastikan import styles dari file yang sesuai

import { curtainDown, curtainUp, opacity } from './anim';

export default function Preloader() {
  const ref = useRef<HTMLParagraphElement | null>(null);
  let currentValue = useRef(0);
  useLayoutEffect(() => {
    function startAnimation() {
      const updateCounter = () => {
        if (ref.current) {
          if (currentValue.current === 100) {
            return;
          }
          const increment = Math.floor(Math.random() * 10) + 1;
          currentValue.current = Math.min(
            currentValue.current + increment,
            100
          );
          ref.current.textContent = `${currentValue.current} %`;
          const delay = Math.floor(Math.random() * 180) + 50;
          setTimeout(updateCounter, delay);
        }
      };
      updateCounter();
    }
    startAnimation();
  }, []);

  return (
    <motion.div className={styles.introduction}>
      <motion.p
        variants={opacity}
        initial="initial"
        animate="enter"
        exit="exit"
        ref={ref}
      ></motion.p>
      <motion.div
        variants={curtainUp}
        exit="exit"
        className={styles.curtain1}
      ></motion.div>
      <motion.div
        variants={curtainDown}
        exit="exit"
        className={styles.curtain2}
      ></motion.div>
    </motion.div>
  );
}
