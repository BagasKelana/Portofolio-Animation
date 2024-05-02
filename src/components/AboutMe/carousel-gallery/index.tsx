'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay, { AutoplayType } from 'embla-carousel-autoplay';
import styles from './page.module.scss';
import gallerys from '@/app/assets/static-images/images';
import Image from 'next/image';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

export default function CarouselGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 2000 })
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const handleOnMouseEnter = useCallback(() => {
    const autoPlay = emblaApi?.plugins()?.autoplay as AutoplayType;
    if (!autoPlay) return;

    const playOrStop = autoPlay.stop;
    playOrStop();
  }, [emblaApi]);

  const handleOnMouseLeave = useCallback(() => {
    const autoPlay = emblaApi?.plugins()?.autoplay as AutoplayType;
    if (!autoPlay) return;

    const playOrStop = autoPlay.play;
    playOrStop();
  }, [emblaApi]);

  return (
    <div className={styles.carouselContainer}>
      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className={styles.embla}
        ref={emblaRef}
      >
        <div className={styles.embla__container}>
          {gallerys.map((gallery) => (
            <div key={gallery.src} className={styles.embla__slide}>
              <Image src={gallery} alt="gallery" priority />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => {
          return (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles['embla__dot']} ${
                index === selectedIndex ? styles['embla__dot__selected'] : ''
              }`}
            >
              <span className={styles.dot} />
            </DotButton>
          );
        })}
      </div>
    </div>
  );
}
