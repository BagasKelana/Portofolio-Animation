'use client';

import { useRef, useState } from 'react';
import { PanInfo, motion } from 'framer-motion';
import styles from './page.module.scss';
import Image from 'next/image';
import gallerys from '@/app/assets/static-images/images';

const CarouselGallery = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const carousel = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const width = (container.current && container.current.offsetWidth) || 611;

  function clamp(number: number, lower: number, upper: number) {
    return number < lower ? lower : number > upper ? upper : number;
  }

  const dragEndHandler = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.x;

    if (Math.abs(offset) > 50) {
      const direction = offset < 0 ? 1 : -1;
      setActive((active) =>
        clamp(active + direction, 0, gallerys.length - 1 )
      );
    }
  };

  return (
    <div ref={container} className={styles.carouselContainer}>
      <div className={styles.dotContainer}>
        {Array.from({ length: gallerys.length }).map((_, i) => (
          <motion.div
            onClick={() => setActive(i)}
            key={i}
            className={styles.dot}
            initial={false}
            animate={{
              scale: active === i ? 1.5 : 1,
              opacity: active === i ? 1 : 0.5
            }}
          />
        ))}
      </div>
      <motion.div
        onDragEnd={dragEndHandler}
        ref={carousel}
        dragConstraints={container}
        drag="x"
        className={styles.carouselGallery}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 30 }}
        dragElastic={0.2}
        animate={{
          x: -1 * active * width
        }}
        transition={{
          type: 'easeInOut'
        }}
      >
        {gallerys.map((gallery, index) => (
          <motion.div key={index}>
            <Image
              style={{ width }}
              className={styles.imgSlider}
              src={gallery}
              alt="image of gallery"
            />
          </motion.div>
        ))}
        {gallerys.map((gallery, index) => (
          <motion.div key={index + 6}>
            <Image
              style={{ width }}
              className={styles.imgSlider}
              src={gallery}
              alt="image of gallery"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CarouselGallery;
