'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';

export default function AutoGraph() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls1
        .start({
          pathLength: 1,
          transition: { duration: 2 }
        })
        .then(() => {
          // Memulai animasi kedua setelah animasi pertama selesai
          controls2.start({
            pathLength: 1,
            transition: { duration: 0.5, type: 'spring' }
          });
        });
    } else {
      controls1.start({
        pathLength: 0,
        transition: { duration: 0 }
      });
      controls2.start({
        pathLength: 0,
        transition: { duration: 0 }
      });
    }
  }, [controls1, controls2, isInView]);

  return (
    <div className={styles.containerAutoGraph}>
      <motion.svg
        ref={ref}
        width="180"
        height="88"
        viewBox="0 0 180 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileInView={{ filter: 'drop-shadow(0 0 5px white)' }}
      >
        <motion.path
          d="M88.9191 87.0476C86.2866 84.814 85.3566 80.9104 84.6565 77.7126C82.1038 66.0528 83.1903 54.1802 85.1112 42.5178C87.1168 30.3411 89.5 24.5296 91.5 18.9999C92.8822 15.7543 95.8607 8.24606 97 6C97.6108 4.7959 98 1.5 94.5599 1.11377C86.8098 1.11377 79.0182 1.73925 71.3288 2.6483C54.209 4.67226 36.8569 7.82834 21.4565 15.9476C14.7446 19.4862 7.69643 24.0909 3.63883 30.753C0.80281 35.4094 -0.182495 41.1182 2.84314 45.9278C5.63357 50.3636 9.52974 52.7717 14.1958 55.0498C24.9698 60.3098 37.1812 62.295 49.0781 62.6088C57.4969 62.8308 68.3578 61.8423 76.6428 60.4491C88.2131 58.5034 100.631 55.6526 111.099 50.1336C121.313 44.7485 127.434 35.728 129.584 24.5296C129.938 22.6856 130.593 18.9987 128.305 21.8584C127.313 23.099 125.971 24.8588 125.236 26.1494C122.966 30.1405 120.545 34.1148 118.615 38.2836C115.98 43.9773 112.506 55.6547 120.661 58.9856C128.48 62.1791 137.486 54.0113 141.178 48.0023C142.853 45.2774 143.889 41.9943 144.532 38.8803C144.749 37.8286 144.82 36.7517 144.93 35.6834C145 34.9892 145.075 34.2925 145.072 33.5947C145.07 33.3661 145.14 32.9697 144.915 32.9269C143.478 32.6531 140.04 47.4459 139.843 48.5706C139.582 50.0593 139.1 53.6092 139.9 55.2771C141.347 58.2977 145.503 56.1026 147.146 54.9361C152.34 51.2488 154.579 45.6114 156.922 39.9886C157.607 38.3439 156.614 43.6935 157.348 45.3169C158.796 48.5188 161.081 43.0186 161.383 41.8926C161.458 41.6126 161.575 41.2894 161.454 41.0258C161.198 40.467 160.634 41.9801 160.431 42.5604C159.642 44.8164 159.389 47.2723 159.536 49.6505C159.628 51.14 160.115 52.8933 160.403 50.5883C160.429 50.375 160.525 49.6887 160.474 50.503C160.335 52.7265 160.088 54.9482 160.218 57.1811C160.231 57.4057 160.421 60.0381 160.985 60.5059C161.169 60.6579 161.508 60.4695 161.667 60.2928C162.566 59.2982 163.617 56.0882 163.87 55.3624C168.121 43.1569 169.418 30.4081 171.045 17.6668C171.17 16.6855 171.329 15.7084 171.443 14.7256C171.476 14.443 171.698 14.0622 171.486 13.8731C171.313 13.7197 171.26 14.2792 171.187 14.4983C170.708 15.9359 169.254 21.1632 169.056 21.8868C165.173 36.0601 161.556 50.3366 158.627 64.7401C157.868 68.4687 157.471 70.5844 156.979 74.1036C156.888 74.7505 156.808 75.3994 156.751 76.0502C156.742 76.1544 156.739 76.4592 156.78 76.3627C156.893 76.0938 156.913 75.7947 156.979 75.5102C157.124 74.8744 158.484 69.6625 157.973 72.7253"
          stroke-linecap="round"
          stroke="white"
          initial={{ pathLength: 0 }}
          animate={controls1}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M65.1339 78.6079C67.4784 78.3947 69.795 77.7783 72.0961 77.3291C88.1569 74.1936 104.378 72.0418 120.633 70.1964C138.951 68.1168 157.314 66.6619 175.677 65.0813C183.609 64.3985 174.566 64.9967 173.574 65.0528"
          stroke="white"
          stroke-linecap="round"
          initial={{ pathLength: 0 }}
          animate={controls2}
        />
      </motion.svg>
    </div>
  );
}