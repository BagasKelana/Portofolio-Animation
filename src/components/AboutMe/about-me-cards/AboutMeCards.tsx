'use client';

import LeftCards from './left-cards/LeftCards';
import CenterCards from './center-cards/CenterCards';
import RightCards from './right-cards/RightCards';
import styles from './style.module.scss';
import { useMediaQuery } from '@uidotdev/usehooks';
import MediumDeviceCards from './device/medium-device-cards/MediumDeviceCards';
import SmallDeviceCards from './device/small-device-cards/SmallDeviceCards';

const AboutMeCards = () => {
  const isMediumDevice = useMediaQuery(
    'only screen and (min-width : 769px) and (max-width : 1200px)'
  );
  const isLargeDevice = useMediaQuery('only screen and (min-width : 1201px)');

  const mediaQuery = () => {
    if (isLargeDevice) {
      return (
        <>
          <LeftCards />
          <CenterCards />
          <RightCards />
        </>
      );
    }

    if (isMediumDevice) {
      return <MediumDeviceCards />;
    }

    return <SmallDeviceCards />;
  };

  return <div className={styles.aboutCards}>{mediaQuery()}</div>;
};

export default AboutMeCards;
