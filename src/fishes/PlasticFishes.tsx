import React, { useEffect, useState } from 'react';
import { Fish } from './Fish';
import styles from './Page.module.css';

interface OverlayTextProps {
  text: string;
  source?: string;
}

const OverlayText = ({ source, text }: OverlayTextProps) => {
  return (
    <div className={styles.overlayText}>
      {text}
      <div className={styles.overlaySource}>Kilde: {source}</div>
    </div>
  );
};

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

const MAX_FISHES = 25;

export const PlasticFishes = () => {
  const [fishes, setFishes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const slicedFishes =
        fishes.length >= MAX_FISHES ? fishes.slice(1) : fishes;
      setFishes([
        ...slicedFishes,
        <Fish size={getRandomSize()} key={`${Math.random()}`} />,
      ]);
    }, 800);
    return () => {
      clearInterval(interval);
    };
  }, [fishes]);

  return (
    <section className={styles.ocean}>
      {fishes.map((Fish) => Fish)}
      <OverlayText
        text={'Hver tredje fisk innehar plastikk'}
        source={
          'https://www.condorferries.co.uk/plastic-in-the-ocean-statistics'
        }
      />
    </section>
  );
};
