'use client';
import styles from './page.module.scss';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useModalSvg } from '@/hook/useModalSvg';
import { svgAssets } from '@/app/assets/svg/svg-assets';

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] }
  },
  enterCursor: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
  },
  closedCursor: {
    scale: 0.3,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] }
  }
};

export default function Modal() {
  const { modalData } = useModalSvg();
  const { active, index, title, modalType } = modalData;
  const modalContainer = useRef(null);
  const cursorLabel = useRef(null);
  const cursor = useRef(null);

  useEffect(() => {
    //Move Container
    let xMoveContainer: gsap.QuickToFunc;
    let yMoveContainer: gsap.QuickToFunc;

    //Move cursor
    let xMoveCursor: gsap.QuickToFunc;
    let yMoveCursor: gsap.QuickToFunc;

    xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3'
    });
    yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3'
    });

    xMoveCursor = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3'
    });
    yMoveCursor = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3'
    });

    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3'
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3'
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientY, clientX, pageY } = e;

      console.log(clientY, pageY);

      xMoveContainer(clientX);
      yMoveContainer(clientY);

      xMoveCursor(clientX);
      yMoveCursor(clientY);

      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    };

    document.documentElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.documentElement.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, [modalType]);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={modalType === 'floatSvg' && active ? 'enter' : 'closed'}
        className={styles.modalContainer}
      >
        <div
          style={{ left: index * -100 + '%' }}
          className={styles.modalSlider}
        >
          {svgAssets.map((svgAsset, index) => {
            const { svg: ImgSvg } = svgAsset;
            return (
              <div className={styles.modal} key={`modal_${index}`}>
                <ImgSvg />
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        style={{
          mixBlendMode: 'normal',
          opacity: `${modalType === 'floatSvg' && active ? '0%' : '100%'}`
        }}
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enterCursor' : 'closedCursor'}
      />
      <motion.div
        style={{
          mixBlendMode: `${modalType === 'workCard' ? 'normal' : 'exclusion'}`
        }}
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      >
        {title}
      </motion.div>
    </>
  );
}
