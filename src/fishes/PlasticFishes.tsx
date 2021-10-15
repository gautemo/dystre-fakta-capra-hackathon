import React, { useEffect, useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { OverlayText } from '../OverlayText';
import { Fish } from './Fish';
import styles from './Page.module.css';

const getRandomSize = (): 'small' | 'medium' | 'large' => {
  const rand = Math.random();
  if (rand < 0.23) {
    return 'small';
  } else if (rand < 0.76) {
    return 'medium';
  } else {
    return 'large';
  }
};

const isPlastic = (): boolean => {
  return Math.random() > 0.66;
};

const MAX_FISHES = 25;

export const PlasticFishes = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(ref);
  const [fishes, setFishes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const listener = () => {
      if (document.hidden) {
        setFishes([]);
      }
    };
    document.addEventListener('visibilitychange', listener);
    return () =>
      document.removeEventListener('visibilitychange', listener);
  }, []);

  useEffect(() => {
    setFishes([]);
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }
    const interval = setInterval(() => {
      const slicedFishes =
        fishes.length >= MAX_FISHES ? fishes.slice(1) : fishes;
      setFishes([
        ...slicedFishes,
        <Fish
          size={getRandomSize()}
          key={`${Math.random()}`}
          withPlastic={isPlastic()}
        />,
      ]);
    }, 800);
    return () => {
      clearInterval(interval);
    };
  }, [fishes, isVisible]);

  return (
    <section className={styles.ocean} ref={ref}>
      {fishes.map((Fish) => Fish)}
      <OverlayText
        text={
          'En av tre fisker fanget av mennekser inneholder plastikk'
        }
        source={
          'https://www.condorferries.co.uk/plastic-in-the-ocean-statistics'
        }
      />
    </section>
  );
};
