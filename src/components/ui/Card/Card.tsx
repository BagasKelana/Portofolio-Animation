'use client';

import { MouseEventHandler, ReactNode } from 'react';
import styles from './style.module.scss';

type CardProps = {
  backgroundUrl: string;
  imgUrl: string;
  children: ReactNode | string;
  className: 'competenciesCard' | 'workCard';
  handleOnMouseEnter?: MouseEventHandler<HTMLDivElement>;
  handleOnMouseLeave?: MouseEventHandler<HTMLDivElement>;
  gradient?: string;
};

const Card = ({
  backgroundUrl,
  imgUrl,
  children,
  className,
  handleOnMouseEnter,
  handleOnMouseLeave,
  gradient
}: CardProps) => {
  return (
    <div
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className={`${
        className === 'competenciesCard'
          ? styles.competenciesCard
          : styles.workCard
      }`}
    >
      <div
        style={{
          backgroundImage: `${gradient ? gradient : `url(${backgroundUrl})`}`
        }}
        className={styles.innerCard}
      />
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className={styles.contentCompetencies}
      />
      <div className={styles.cardTitle}>{children}</div>
    </div>
  );
};

export default Card;
