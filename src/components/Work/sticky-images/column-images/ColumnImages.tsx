import styles from './style.module.scss';
import { MotionValue } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

type ColumnImagesProps = {
  y: MotionValue<number>;
  imgs: StaticImageData[];
};

const ColumnImages: React.FC<ColumnImagesProps> = ({ y, imgs }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {imgs.map((img) => {
        return (
          <div key={img.src} className={styles.imageContainer}>
            <Image
              src={img}
              alt="image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default ColumnImages;
