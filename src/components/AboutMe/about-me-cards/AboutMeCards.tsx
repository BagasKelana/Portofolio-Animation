'use client';

import LeftCards from './left-cards/LeftCards';
import CenterCards from './center-cards/CenterCards';
import RightCards from './right-cards/RightCards';
import styles from './style.module.scss';

import MediumDeviceCards from './device/medium-device-cards/MediumDeviceCards';
import SmallDeviceCards from './device/small-device-cards/SmallDeviceCards';
import { useMediaQuery } from '@/hook/useMediaQuery';
import { useLayoutEffect, useState } from 'react';

const AboutMeCards = () => {
  const isMediumDevice = useMediaQuery(
    'only screen and (min-width : 769px) and (max-width : 1200px)'
  );
  const isLargeDevice = useMediaQuery('only screen and (min-width : 1201px)');

  const [iniElement, setIniElement] = useState(
    <>
      <LeftCards />
      <CenterCards />
      <RightCards />
    </>
  );

  useLayoutEffect(() => {
    if (isLargeDevice) {
      setIniElement(
        <>
          <LeftCards />
          <CenterCards />
          <RightCards />
        </>
      );
      return;
    }

    if (isMediumDevice) {
      setIniElement(<MediumDeviceCards />);
      return;
    }

    setIniElement(<SmallDeviceCards />);
  }, [isLargeDevice, isMediumDevice]);
  return <div className={styles.aboutCards}>{iniElement}</div>;
};

export default AboutMeCards;
