'use client';

import infinityStyles from './style.module.scss';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const InfinityText = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const firstTextMask = useRef(null);
  const secondTextMask = useRef(null);
  const slider = useRef(null);
  const slider1 = useRef(null);
  let xPercent = 0;
  let direction = -1;

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

          // eslint-disable-next-line react-hooks/exhaustive-deps
          onUpdate: (e) => (direction = e.direction * -1)
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
  }, [direction]);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(firstTextMask.current, { xPercent: xPercent });
    gsap.set(secondTextMask.current, { xPercent: xPercent });

    requestAnimationFrame(animate);
    xPercent += 0.06 * direction;
  };

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

      <div className={infinityStyles.itemMask}>
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
