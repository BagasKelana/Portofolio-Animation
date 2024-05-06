'use client';

import infinityStyles from './style.module.scss';
import { useRef, useLayoutEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import useWindowDimension from '@/hook/useWindowDimensions';

const InfinityText = () => {
  const windowSize = useWindowDimension();

  const firstText = useRef(null);
  const secondText = useRef(null);
  const firstTextMask = useRef(null);
  const secondTextMask = useRef(null);
  const slider = useRef(null);
  const slider1 = useRef(null);
  let xPercent = useRef(0);
  let direction = useRef(-1);

  const animate = useCallback(() => {
    if (xPercent.current < -100) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent.current });
    gsap.set(secondText.current, { xPercent: xPercent.current });
    gsap.set(firstTextMask.current, { xPercent: xPercent.current });
    gsap.set(secondTextMask.current, { xPercent: xPercent.current });

    requestAnimationFrame(animate);
    xPercent.current += 0.06 * direction.current;
  }, []);

  useLayoutEffect(() => {
    if (
      slider.current &&
      firstText.current &&
      secondText.current &&
      firstTextMask.current &&
      secondTextMask.current
    ) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 1,
          start: 0,
          end: window.innerHeight,

          onUpdate: (e) => (direction.current = e.direction * -1)
        },
        x: '-400px'
      });

      gsap.to(slider1.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 1,
          start: 0,
          end: window.innerHeight
        },
        x: '-400px'
      });

      requestAnimationFrame(animate);
    }
  }, [animate, direction]);

  return (
    <>
      <div key={'ini slider'} className={infinityStyles.sliderContainer}>
        <div ref={slider} className={infinityStyles.slider}>
          <p key={12} ref={firstText}>
            WELCOME TO MY PORTFOLIO -
          </p>
          <p key={13} ref={secondText}>
            WELCOME TO MY PORTFOLIO -
          </p>
        </div>
      </div>

      <div
        style={{
          maskSize: `${
            (windowSize[1] * 120) / 100 > 748 ? 'auto 120dvh' : 'auto 748px'
          }`
        }}
        className={infinityStyles.itemMask}
      >
        <div
          data-scroll
          data-scroll-speed={0.1}
          key={'ini slider123'}
          className={infinityStyles.sliderContainer}
        >
          <div ref={slider1} className={infinityStyles.slider}>
            <p key={14} ref={firstTextMask}>
              WELCOME TO MY PORTFOLIO -
            </p>
            <p key={15} ref={secondTextMask}>
              WELCOME TO MY PORTFOLIO -
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfinityText;
