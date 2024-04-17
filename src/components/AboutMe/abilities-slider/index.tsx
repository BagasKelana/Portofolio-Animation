'use client';

import styles from './style.module.scss';
import { useCallback, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const abilities = [
  'Colaborative',
  'Adaptable',
  'Innovative',
  'Problem-solving',
  'Detail-oriented'
];

export default function AbilitiesSlider() {
  const abilities1 = useRef(null);
  const abilities2 = useRef(null);
  const xPercent = useRef(0);

  const animate = useCallback(() => {
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }
    gsap.set(abilities1.current, { xPercent: xPercent.current });
    gsap.set(abilities2.current, { xPercent: xPercent.current });

    requestAnimationFrame(animate);
    xPercent.current += 0.2 * -1;
  }, []);

  useLayoutEffect(() => {
    if (abilities1.current && abilities2.current) {
      requestAnimationFrame(animate);
    }
  }, [animate]);

  return (
    <div className={styles.cardAbilities}>
      <div className={styles.containerSliderAbilities}>
        <div ref={abilities1} className={styles.abilities}>
          {abilities.map((ability) => (
            <div key={ability} className={styles.ability}>
              {ability}
            </div>
          ))}
        </div>
        <div ref={abilities2} className={styles.abilities}>
          {abilities.map((ability) => (
            <div key={ability} className={styles.ability}>
              {ability}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
