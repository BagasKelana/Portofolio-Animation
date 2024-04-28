import styles from './style.module.scss';

type ExperienceItemsProps = {
  experienceLists: ExperienceItemParams[];
};

const ExperienceItems: React.FC<ExperienceItemsProps> = ({
  experienceLists
}) => {
  return (
    <div className={styles.experienceListsContainer}>
      {experienceLists.map((list) => (
        <ExperienceItem
          key={list.highLightParaf}
          year={list.year}
          highLightParaf={list.highLightParaf}
          descriptionParaf={list.descriptionParaf}
        />
      ))}
    </div>
  );
};

type ExperienceItemParams = {
  year: string;
  highLightParaf: string;
  descriptionParaf: string;
};

const ExperienceItem: React.FC<ExperienceItemParams> = ({
  year,
  highLightParaf,
  descriptionParaf
}) => {
  return (
    <section>
      <div className={styles.listYear}>
        <p>{year}</p>
      </div>
      <div>
        <p className={styles.lightParaf}>{highLightParaf}</p>
        <p className={styles.darkParaf}>{descriptionParaf}</p>
      </div>
    </section>
  );
};

export default ExperienceItems;
