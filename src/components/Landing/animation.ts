import { Variants } from 'framer-motion';

export const slideUp: Variants = {
  initial: {
    scale: 1.8
  },
  enter: {
    scale: 1,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 3 }
  }
};

export const zoom = {
  initial: {
    y: 400
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 }
  }
};
