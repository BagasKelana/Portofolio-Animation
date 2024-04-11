'use client';
import styles from './page.module.scss';
import { SVGProps, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { svgAssets } from '@/app/assets/svg/svg-assets';

const FloatImgEffect = () => {
  const [modal, setModal] = useState({ active: false, index: 0, title: '' });

  const handleClick = ({
    index,
    active,
    title
  }: {
    index: number;
    active: boolean;
    title: string;
  }) => {
    setModal({ active, index, title });
  };

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <section className={styles.techStackContainer}>
          <h2>TECH STACK</h2>
          <section className={styles.techStack}>
            {svgAssets.map((project, index) => {
              return (
                <Project
                  index={index}
                  title={project.title}
                  setModal={handleClick}
                  key={index}
                />
              );
            })}
          </section>
        </section>
      </div>
      <Modal modal={modal} svgAssets={svgAssets} />
    </main>
  );
};

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
  }
};

function Modal({
  modal,
  svgAssets
}: {
  modal: {
    active: boolean;
    index: number;
    title: string;
  };
  svgAssets: {
    title: string;
    svg: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  }[];
}) {
  const { active, index, title } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3'
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
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

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
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

type ProjectProps = {
  index: number;
  title: string;
  setModal: ({
    index,
    active
  }: {
    index: number;
    active: boolean;
    title: string;
  }) => void;
};

function Project({ index, title, setModal }: ProjectProps) {
  return (
    <div
      className={styles.tech}
      onMouseEnter={() => {
        setModal({ active: true, index, title });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index, title });
      }}
    >
      <div className={styles.techContent}>{title}</div>
    </div>
  );
}

export default FloatImgEffect;
