'use client';

import { useModalSvg } from '@/hook/useModalSvg';
import styles from './style.module.scss';
import Card from '@/components/ui/Card/Card';

const asset = [
  {
    title: 'Next-Courses Website',
    backgroundImage: '/assetWorks/sliceImages/cardImages/nextCourses.png',
    description: (
      <>
        <span>Role : Full-Stack </span>
        <span> Tech : TypeScript, Next JS, Tailwind CSS & Prisma ORM</span>
      </>
    ),
    url: 'https://github.com/aglana123/next-course',
    gradient:
      'radial-gradient( circle farthest-corner at 10% 20%,  rgb(50, 43, 115) 0%, rgba(4,0,4,1) 90% )'
  },
  {
    title: 'E-Commerce Website',
    backgroundImage: '/assetWorks/sliceImages/cardImages/commerce.png',
    description: (
      <>
        <span>Role : Frontend </span>
        <span>Tech : TypeScript, React JS, Tailwind CSS & Laravel Api</span>
      </>
    ),
    url: 'https://github.com/BagasKelana/E-Commerce-Colab',
    gradient:
      'linear-gradient( 65.5deg,  rgba(23,205,205,1) -15.1%, rgba(23,25,95,1) 71.5% )'
  },
  {
    title: 'Cahyadi Rental Car',
    backgroundImage: '/myskills-Images/1688969506602.png',
    description: (
      <>
        <span>Role : Frontend </span>
        <span>Tech : Inertia Js, React JS, Tailwind CSS & Laravel</span>
      </>
    ),
    url: '',
    gradient:
      ' radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% )'
  },
  {
    title: 'Axios Games',
    backgroundImage: '/assetWorks/sliceImages/cardImages/axiosGame.png',
    description: (
      <>
        <span>Role : Full-Stack </span>
        <span>Tech : React JS, Tailwind CSS, Express JS & MongoDB</span>
      </>
    ),
    url: 'https://github.com/BagasKelana/MERN-Astoxgames-Project',
    gradient:
      'radial-gradient( circle 382px at 50% 50.2%,  rgba(73,76,212,1) 0.1%, rgba(3,1,50,1) 100.2% )'
  }
];

const WorkCards = () => {
  const { enterContainer, leaveContainer, handleMouseEnter, handleMouseLeave } =
    useModalSvg();
  return (
    <div
      onMouseEnter={enterContainer}
      onMouseLeave={leaveContainer}
      className={styles.workCardsContainer}
    >
      <div className={styles.workCards}>
        {asset.map((item) => (
          <a
            className={styles.cardWrapper}
            href={item.url}
            target="_blank"
            rel="prev"
            key={item.backgroundImage}
          >
            <Card
              gradient={item.gradient}
              className="workCard"
              backgroundUrl={item.backgroundImage}
              imgUrl={item.backgroundImage}
              handleOnMouseEnter={() => {
                handleMouseEnter(0, 'View', 'workCard');
              }}
              handleOnMouseLeave={() => {
                handleMouseLeave(0, 'View', 'workCard');
              }}
            >
              {
                <>
                  <h2>{item.title}</h2> <p>{item.description}</p>
                </>
              }
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WorkCards;
