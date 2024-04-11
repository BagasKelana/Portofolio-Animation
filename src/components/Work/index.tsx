'use client';

import {
  useInView,
  useScroll,
  useTransform,
  motion,
  MotionValue
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import Image, { StaticImageData } from 'next/image';
import worksAsset from '@/app/assets/static-images/works';

const WorksSection = () => {
  const container = useRef<HTMLDivElement | null>(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { height } = dimension;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', resize);

    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className={styles.worksContainer}>
      <div className={styles.spacer}>
        <div className={styles.workTitle}>
          IT AIN'T MUCH BUT IT'S PURE DEDICATION
        </div>
      </div>
      <div ref={container} className={styles.stickyImagesContainer}>
        <WorkImage img={worksAsset[0]} y={y} />
        <WorkImage img={worksAsset[1]} y={y2} />
        <WorkImage img={worksAsset[2]} y={y3} />
        <WorkImage img={worksAsset[1]} y={y4} />
      </div>
      <div className={styles.spacer}></div>
    </section>
  );
};

type WorkImageProps = {
  y: MotionValue<number>;
  img: StaticImageData;
};

const WorkImage: React.FC<WorkImageProps> = ({ y, img }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      <div className={styles.imageContainer}>
        <Image src={img} alt={`image work number ${img.src}`} />
      </div>
    </motion.div>
  );
};

export default WorksSection;
