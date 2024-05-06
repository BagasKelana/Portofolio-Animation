'use client';
import { useAnimationFrame } from 'framer-motion';
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

import styles from './style.module.scss';
import Image, { StaticImageData } from 'next/image';
import hilalbagas from '@/IMG_0990.jpg';

const ImageEffect = ({ img = hilalbagas }: { img: StaticImageData }) => {
  const lerp = (a: number, b: number, t: number) => (1 - t) * a + t * b;
  const root = useRef<HTMLDivElement | null>(null);
  const imgContainer = useRef<HTMLDivElement | null>(null);
  const mouseDelta = useRef([0, 0]);
  const targetOffset = useRef([0, 0]);

  const startAnimation = useRef(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobileDevice(true);
      } else {
        setIsMobileDevice(false);
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const animate = useCallback(() => {
    let mouseDeltaX = 0;
    let mouseDeltaY = 0;

    if (startAnimation.current) {
      [mouseDeltaX, mouseDeltaY] = mouseDelta.current;

      targetOffset.current = [
        lerp(targetOffset.current[0], mouseDeltaX, 0.025),
        lerp(targetOffset.current[1], mouseDeltaY, 0.025)
      ];

      if (imgContainer.current) {
        imgContainer.current.style.transform = `translateX(${targetOffset.current[0]}%) translateY(${targetOffset.current[1]}%)  `;
      }
    } else {
      stopAnimation();
    }
  }, []);

  const stopAnimation = () => {
    if (imgContainer.current) {
      imgContainer.current.style.transform = 'translateX(0) translateY(0)';
      targetOffset.current = [0, 0];
      mouseDelta.current = [0, 0];
    }
  };

  useAnimationFrame(
    !isMobileDevice
      ? animate
      : () => {
          return;
        }
  );

  const onMouseEnter = useCallback(() => {
    if (root.current && imgContainer.current) {
      if (imgContainer.current.classList.contains('ayolah')) {
        imgContainer.current.classList.remove('ayolah');
      }

      startAnimation.current = true;
    }
    return;
  }, []);

  const onMouseLeave = useCallback(() => {
    if (imgContainer.current) {
      imgContainer.current.classList.add('ayolah');
      startAnimation.current = false;
    }
  }, []);

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (root.current) {
      const { clientX, clientY } = e;
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = root.current;
      const centerX = 0.5 * offsetWidth;
      const centerY = 0.5 * offsetHeight;

      mouseDelta.current = [
        (-20 * (clientX - centerX - offsetLeft)) / offsetWidth,
        (-20 * (clientY - centerY - offsetTop / 2)) / offsetHeight
      ];
    }
  };

  return (
    <div
      className={styles.eventImage}
      ref={root}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <div className={styles.haloGuys} ref={imgContainer}>
        <Image alt="image of me" src={img} priority />
      </div>
    </div>
  );
};

export default ImageEffect;
