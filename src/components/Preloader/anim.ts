import { Variants } from 'framer-motion';

export const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 }
  }
};

export const slideUp = {
  initial: {
    clipPath: 'circle(141.4% at 100% 0)'
  },
  exit: {
    clipPath: 'circle(0% at 100% 0)',
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.18, 1],
      delay: 0.4
    }
  }
};

export const sticky: Variants = {
  initial: {
    clipPath: 'circle(141.4% at 100% 0)'
  },
  exit: {
    clipPath: 'circle(0% at 100% 0)',
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.18, 1],
      delay: 0.2
    }
  }
};
