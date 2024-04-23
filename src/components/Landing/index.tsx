'use client';

import landingImage from '@/Default_The_cute_explorer_boy_is_wearing_a_brown_shirt_under_a_0_43ef2ba5-3aa0-4035-bd6e-c144ef4de091_0 2.png';
import Image from 'next/image';
import styles from './style.module.scss';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion, useScroll, useTransform } from 'framer-motion';
import InstagramIcon from '@/app/assets/svg/instagram';

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const firstTextMask = useRef(null);
  const secondTextMask = useRef(null);
  const slider = useRef(null);
  const slider1 = useRef(null);
  const landingContainer = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const { scrollYProgress } = useScroll({
    target: landingContainer,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 450]);

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

  useLayoutEffect(() => {
    const element = slider.current;

    if (element) {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power3.inOut', duration: 1 }
      });

      const ulListMenu = document.querySelector('.ulListMenu');
      if (ulListMenu) {
        const listItems = ulListMenu.children;

        Array.from(listItems).forEach((item, index) => {
          const span = item.querySelector('span')!;

          tl.to(
            item,
            {
              //gap * index + x% - panjang element * index
              x:
                -16 * index +
                (ulListMenu.clientWidth -
                  item.clientWidth +
                  (item.clientWidth - span.clientWidth)) -
                item.clientWidth * index,
              yPercent: 100 * index
            },
            '<'
          );
        });
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.reverse();
          } else {
            tl.play();
          }
        });
      });

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }
  }, []);

  return (
    <motion.main className={styles.landingContainer}>
      <motion.div
        ref={landingContainer}
        style={{ y }}
        variants={slideUp}
        initial="initial"
        animate="enter"
        className={styles.landing}
      >
        <Image
          data-scroll
          data-scroll-speed={0.1}
          src={landingImage}
          alt="landingImage"
          priority={true}
        />
        <div key={'ini slider'} className={styles.sliderContainer}>
          <div ref={slider} className={styles.slider}>
            <p key={12} ref={firstText}>
              WELCOME TO MY PORTFOLIO -
            </p>
            <p key={13} ref={secondText}>
              WELCOME TO MY PORTFOLIO -
            </p>
          </div>
        </div>

        <div data-scroll data-scroll-speed={0.1} className={styles.itemMask}>
          <div key={'ini slider123'} className={styles.sliderContainer}>
            <div ref={slider1} className={styles.slider}>
              <p key={14} ref={firstTextMask}>
                WELCOME TO MY PORTFOLIO -
              </p>
              <p key={15} ref={secondTextMask}>
                WELCOME TO MY PORTFOLIO -
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
}
