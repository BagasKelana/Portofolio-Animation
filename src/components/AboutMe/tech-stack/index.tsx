'use client';
import styles from './page.module.scss';
import { svgAssets } from '@/app/assets/svg/svg-assets';
import FloatSvg from './float-svg/floatSvg';
import { useModalSvg } from '@/hook/useModalSvg';

const TechStack = () => {
  const { enterContainer, leaveContainer } = useModalSvg();
  return (
    <section
      onMouseEnter={enterContainer}
      onMouseLeave={leaveContainer}
      className={styles.techStackContainer}
    >
      <h2>TECH STACK</h2>
      <section className={styles.techStack}>
        {svgAssets.map((project, index) => {
          return <FloatSvg index={index} title={project.title} key={index} />;
        })}
      </section>
    </section>
  );
};

export default TechStack;
