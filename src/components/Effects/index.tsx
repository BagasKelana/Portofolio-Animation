import Image from 'next/image';
import styles from './style.module.scss';
import { MouseEvent, useRef, useState } from 'react';
import myImage from '@/Default_The_cute_explorer_boy_is_wearing_a_brown_shirt_under_a_0_f1f9cd3e-2b4b-4f6e-a8dd-0fb53e673fa8_0-removebg (1).png';
import gsap from 'gsap';

interface Point {
  x: number;
  y: number;
}

const EffectPhoto = () => {
  const leadingRef = useRef<HTMLDivElement>(null);

  let requestAnimationFrameId: number | null = null;
  let lastX = 0;
  let lastY = 0;
  let targetX = 0;
  let targetY = 0;
  const [animationStopped, setAnimationStopped] = useState(true);

  const manageMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY } = e;

    targetX = pageX;
    targetY = pageY;

    if (requestAnimationFrameId === null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  function lerp({ x, y }: Point, { x: targetX, y: targetY }: Point): Point {
    const fraction = 0.1;

    x += (targetX - x) * fraction;
    y += (targetY - y) * fraction;

    return { x, y };
  }

  function getCoefficients(lerpX: number, lerpY: number) {
    const halfHeight = window.innerHeight / 2;
    const halfWidth = window.innerWidth / 2;

    const xCoeff = ((lerpX || targetX) - halfWidth) / halfWidth;
    const yCoeff = (halfHeight - (lerpY || targetY)) / halfHeight;
    return { xCoeff, yCoeff };
  }

  var tl = gsap.timeline();

  const animate = () => {
    if (animationStopped) {
      setAnimationStopped(false);
      return;
    }
    const maxX = 10;
    const maxY = 10;

    const newPos = lerp(
      {
        x: lastX,
        y: lastY
      },
      {
        x: targetX,
        y: targetY
      }
    );

    const { xCoeff, yCoeff } = getCoefficients(newPos.x, newPos.y);
    lastX = newPos.x;
    lastY = newPos.y;

    positionImage(xCoeff, yCoeff);

    gsap.set('.containerImg', {
      translateZ: '8.519vh',
      rotateX: `${maxX * yCoeff}`,
      rotateY: `${maxY * xCoeff}`
    });

    if (reachedFinalPoint()) {
      setAnimationStopped(false);
      if (requestAnimationFrameId)
        cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  function positionImage(xCoeff: number, yCoeff: number) {
    const maxImgOffset = 1;

    gsap.set('.kucing', {
      translateX: `${maxImgOffset * -xCoeff}em`,
      translateY: `${maxImgOffset * yCoeff}em`
    });
  }

  function reachedFinalPoint() {
    const currentX = ~~lastX;
    const currentY = ~~lastY;
    const currentTargetX = targetX;
    const currentTargetY = targetY;

    return (
      (currentX == currentTargetX ||
        currentX - 1 == currentTargetX ||
        currentX + 1 == currentTargetX) &&
      (currentY == currentTargetY ||
        currentY - 1 == currentTargetY ||
        currentY + 1 == currentTargetY)
    );
  }

  return (
    <div
      ref={leadingRef}
      className={styles.effect}
      onMouseMove={manageMouseMove}
    >
      <div className="containerImg">
        <Image className="kucing" src={myImage} alt="my image" />
      </div>
    </div>
  );
};

export default EffectPhoto;
