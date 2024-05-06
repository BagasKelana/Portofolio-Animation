'use client';
import { useModalSvg } from '@/hook/useModalSvg';
import styles from './page.module.scss';

type FloatSvgProps = {
  index: number;
  title: string;
};

export default function FloatSvg({ index, title }: FloatSvgProps) {
  const { handleMouseEnter, handleMouseLeave } = useModalSvg();
  return (
    <div
      className={styles.tech}
      onMouseEnter={() => {
        handleMouseEnter(index, title, 'floatSvg');
      }}
      onMouseLeave={() => {
        handleMouseLeave(index, title, 'floatSvg');
      }}
    >
      <div className={styles.techContent}>{title}</div>
    </div>
  );
}
