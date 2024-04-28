import styles from './style.module.scss';

const ExperienceContainer = ({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.experience}>
      <div>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default ExperienceContainer;
