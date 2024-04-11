'use client';

import styles from './page.module.scss';
import Lottie, {
  LottieOptions,
  useLottie,
  useLottieInteractivity
} from 'lottie-react';
import robotAnimation from '@/lotties/html.json';
import { CSSProperties } from 'react';
const style: CSSProperties = {
  height: 300,
  width: 300
};

const LottieGo = () => {
  const lottieObj = useLottie(robotAnimation as any, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 0.2],
        type: 'stop',
        frames: [0]
      },
      {
        visibility: [0.2, 0.45],
        type: 'seek',
        frames: [0, 45]
      },
      {
        visibility: [0.45, 1.0],
        type: 'loop',
        frames: [45, 60]
      }
    ]
  });

  return Animation;
};

export default LottieGo;
