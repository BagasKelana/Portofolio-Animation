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
        <span>Tech : TypeScript, Next JS, Tailwind CSS & Prisma ORM</span>
        <span>Year : 2024</span>
      </>
    ),
    url: 'https://github.com/aglana123/next-course',
    gradient:
      'radial-gradient( circle 382px  at  50% 50.2%,  rgb(50, 43, 115) 0.1%,  rgba(4,0,4,1) 100.2% )'
  },
  {
    title: 'E-Commerce Website',
    backgroundImage: '/assetWorks/sliceImages/cardImages/commerce.png',
    description: (
      <>
        <span>Role : Frontend </span>
        <span>Tech : TypeScript, React JS, Tailwind CSS & Laravel Api</span>
        <span>Year : 2024</span>
      </>
    ),
    url: 'https://github.com/BagasKelana/E-Commerce-Colab',
    gradient:
      'radial-gradient( circle 382px  at  50% 50.2%, rgb(35, 151, 151) 0.1%, rgb(14, 15, 61) 100.2% )'
  },
  {
    title: 'Cahyadi Rental Car',
    backgroundImage: '/myskills-Images/1688969506602.png',
    description: (
      <>
        <span>Role : Frontend </span>
        <span>Tech : Inertia Js, React JS, Tailwind CSS & Laravel</span>
        <span>Year : 2023</span>
      </>
    ),
    url: '',
    gradient:
      'radial-gradient( circle 382px  at  50% 50.2%,  rgba(5,8,114,1) 0.1%, rgba(7,3,53,1) 100.2%  )'
  },
  {
    title: 'Axios Games',
    backgroundImage: '/assetWorks/sliceImages/cardImages/axiosGame.png',
    description: (
      <>
        <span>Role : Full-Stack </span>
        <span>Tech : React JS, Tailwind CSS, Express JS & MongoDB</span>
        <span>Year : 2023</span>
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
