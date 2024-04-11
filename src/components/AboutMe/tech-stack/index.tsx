'use client';
import styles from './page.module.scss';
import { useState } from 'react';
import { svgAssets } from '@/app/assets/svg/svg-assets';
import Modal from './modal/modal';
import FloatSvg from './float-svg/floatSvg';

const TechStack = () => {
  return (
    <>
      <section className={styles.techStackContainer}>
        <h2>TECH STACK</h2>
        <section className={styles.techStack}>
          {svgAssets.map((project, index) => {
            return <FloatSvg index={index} title={project.title} key={index} />;
          })}
        </section>
      </section>
    </>
  );
};

export default TechStack;
