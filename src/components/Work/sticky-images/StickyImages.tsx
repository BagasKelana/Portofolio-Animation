'use client';

import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { assetWorks } from '@/app/assets/static-images/works';
import ColumnImages from './column-images/ColumnImages';
import styles from './style.module.scss';

const StickyImages = () => {
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
    <div ref={container} className={styles.stickyImagesContainer}>
      <ColumnImages
        imgs={[assetWorks[0], assetWorks[1], assetWorks[2]]}
        y={y}
      />
      <ColumnImages
        imgs={[assetWorks[3], assetWorks[4], assetWorks[5]]}
        y={y2}
      />
      <ColumnImages
        imgs={[assetWorks[6], assetWorks[7], assetWorks[8]]}
        y={y3}
      />
      <ColumnImages
        imgs={[assetWorks[9], assetWorks[11], assetWorks[10]]}
        y={y4}
      />
    </div>
  );
};

export default StickyImages;
