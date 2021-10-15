import { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { OverlayText } from '../OverlayText';
import styles from './Oil.module.css';

export function Oil() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <section className={styles.sea} ref={ref}>
      <div className={styles.content}>
        <OverlayText
          text="85 liter olje havner i havet hvert sekund"
          source="http://www.waterencyclopedia.com/Oc-Po/Oil-Spills-Impact-on-the-Ocean.html"
          yPos={15}
          light
        />
        <h2>
          Det er nok til å fylle en gjennomsnittsleilighet i Norge på
          under 1 time!
        </h2>
      </div>
      <div className={styles.container}>
        <div
          className={`${styles.oil} ${isVisible ? styles.sink : ''}`}
        ></div>
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="sineWave"
              fill="black"
              d="M 0 100 C 331 202 401 231 726 121 C 1022 15 1120 20 1440 100 V 0 H 0"
            />
          </defs>
          <use className={styles.wave} href="#sineWave" />
          <use className={styles.wave} x="-100%" href="#sineWave" />
        </svg>
      </div>
    </section>
  );
}
