import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './style.module.scss'; // Sesuaikan dengan path yang benar

interface Props {
  title: string;
  backgroundColor?: string;
}

export default function RoundedButton({
  title,
  backgroundColor = '#455CE9'
}: Props): JSX.Element {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    if (timeline.current) {
      timeline.current
        .to(
          circle.current,
          { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' },
          'enter'
        )
        .to(
          circle.current,
          { top: '-150%', width: '125%', duration: 0.25 },
          'exit'
        );
    }
  }, []);

  const manageMouseEnter = (): void => {
    if (timeoutId) clearTimeout(timeoutId);
    if (timeline.current) {
      timeline.current.tweenFromTo('enter', 'exit');
    }
  };

  const manageMouseLeave = (): void => {
    timeoutId = setTimeout(() => {
      if (timeline.current) {
        timeline.current.play();
      }
    }, 300);
  };

  return (
    <div
      className={styles.roundedButton}
      style={{ overflow: 'hidden' }}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
    >
      <p>{title}</p>
      <div ref={circle} style={{ backgroundColor }} className={styles.circle} />
    </div>
  );
}
