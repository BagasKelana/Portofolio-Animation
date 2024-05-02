import styles from './style.module.scss';

const Spacer = ({
  children,
  id
}: {
  children: React.ReactNode | string;
  id: string;
}) => {
  return (
    <div id={id} className={styles.spacer}>
      <div className={styles.workTitle}>{children}</div>
    </div>
  );
};

export default Spacer;
