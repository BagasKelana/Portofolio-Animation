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
import { assetWorks } from '@/app/assets/static-images/works';
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
        <div className={styles.workTitle1}>
          <p> IT AIN{"'"}T MUCH, BUT</p>
          <p>
            IT{"'"}S <span>PURE DEDICATION</span>
          </p>
        </div>
      </div>
      <div ref={container} className={styles.stickyImagesContainer}>
        <WorkImage imgs={[assetWorks[0], assetWorks[1], assetWorks[2]]} y={y} />
        <WorkImage
          imgs={[assetWorks[3], assetWorks[4], assetWorks[5]]}
          y={y2}
        />
        <WorkImage
          imgs={[assetWorks[6], assetWorks[7], assetWorks[8]]}
          y={y3}
        />
        <WorkImage
          imgs={[assetWorks[9], assetWorks[10], assetWorks[11]]}
          y={y4}
        />
      </div>
      <div className={styles.spacer}>
        <div className={styles.workTitle}>FEATURED PROJECT</div>
      </div>
      <div className={styles.workCardsContainer}>
        <div className={styles.workCards}>
          <div
            style={{ backgroundImage: `url(/myskills-Images/58479.jpg)` }}
            className={styles.workCard}
          ></div>
          <div
            style={{
              backgroundImage: `url(/myskills-Images/16683378_5794854.jpg)`
            }}
            className={styles.workCard}
          ></div>
          <div
            style={{ backgroundImage: `url(/myskills-Images/2149416723.jpg)` }}
            className={styles.workCard}
          ></div>
          <div
            style={{
              backgroundImage: `url(/myskills-Images/1688969506602.png)`
            }}
            className={styles.workCard}
          ></div>
        </div>
      </div>
    </section>
  );
};

type WorkImageProps = {
  y: MotionValue<number>;
  imgs: StaticImageData[];
};

const WorkImage: React.FC<WorkImageProps> = ({ y, imgs }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {imgs.map((img) => {
        return (
          <div key={img.src} className={styles.imageContainer}>
            <Image src={img} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};

export default WorksSection;
