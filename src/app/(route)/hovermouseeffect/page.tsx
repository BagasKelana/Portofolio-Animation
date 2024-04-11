'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import styles from './page.module.scss';
import gallerys from '@/app/assets/static-images/images';

type projectsProps = {
  title1: string;
  title2: string;
};

const HoverMouseEffect = () => {
  const projects: projectsProps[] = [
    {
      title1: 'Jomor',
      title2: 'Design'
    },
    {
      title1: 'La',
      title2: 'Grange'
    },
    {
      title1: 'Deux Huit',
      title2: 'Huit'
    },
    {
      title1: 'Nothing',
      title2: 'Design Studio'
    },
    {
      title1: 'Mambo',
      title2: 'Mambo'
    }
  ];
  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <p>Featured Work</p>
        {projects.map((project, index) => {
          return (
            <TextHover
              key={project.title1}
              project={project}
              staticImg={gallerys[index + 1]}
            />
          );
        })}
      </div>
    </main>
  );
};

const anim = {
  initial: { width: 0 },
  open: {
    width: 'auto',
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
  },
  closed: { width: 0 }
};

const TextHover = ({
  project,
  staticImg
}: {
  project: projectsProps;
  staticImg: StaticImageData;
}) => {
  const [isActive, setIsActive] = useState(false);

  const { title1, title2 } = project;
  return (
    <div
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className={styles.project}
    >
      <p>{title1}</p>
      <motion.div
        variants={anim}
        animate={isActive ? 'open' : 'closed'}
        className={styles.imgContainer}
      >
        <Image alt="hilal bagas" src={staticImg} width={100} height={100} />
      </motion.div>
      <p>{title2}</p>
    </div>
  );
};

export default HoverMouseEffect;
