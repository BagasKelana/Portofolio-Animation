'use client';
import { useEffect, useState, useRef, MutableRefObject } from 'react';
import styles from './style.module.scss';
import {
  motion,
  useMotionValue,
  useSpring,
  transform,
  animate,
  AnimatePresence
} from 'framer-motion';

type StickyCursorProps = {
  stickyElement?: MutableRefObject<HTMLDivElement | null>;
};

const StickyCursor: React.FC<StickyCursorProps> = ({ stickyElement }) => {
  const cursor = useRef(null);
  const cursorSize = 60;

  const [position, setPosition] = useState({ x: 0, y: 0, size: 60 });

  //Smooth out the mouse values

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    setPosition((current) => ({
      ...current,
      x: clientX,
      y: clientY
    }));
  };

  const handleMouseDown = () => {
    setPosition((current) => ({
      ...current,
      size: current.size / 2
    }));
  };

  const handleMouseUp = () => {
    setPosition((current) => ({
      ...current,
      size: 60
    }));
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const template = ({
    rotate,
    scaleX,
    scaleY
  }: {
    rotate: number;
    scaleX: number;
    scaleY: number;
  }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <div className={styles.cursorContainer}>
      <motion.div
        transformTemplate={template}
        animate={{
          left: position.x - position.size / 2,
          top: position.y - position.size / 2,
          width: position.size,
          height: position.size
        }}
        transition={{
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 250
        }}
        className={styles.cursor}
        ref={cursor}
      />
    </div>
  );
};

export default StickyCursor;
