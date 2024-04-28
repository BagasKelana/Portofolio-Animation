import styles from './style.module.scss';

const Spacer = ({ children }: { children: React.ReactNode | string }) => {
  return (
    <div className={styles.spacer}>
      <div className={styles.workTitle}>{children}</div>
    </div>
  );
};

export default Spacer;
