import { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import styles from './Oil.module.css'

export function Oil() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useOnScreen(ref)

  return (
    <section className={styles.sea} ref={ref}>
      <div className={styles.content}>
        <h1>85 liter olje havner i havet hvert sekund</h1>
        <h2>Det er nok til å fylle en gjennomsnittsleilighet i Norge på under 1 time!</h2>
        <p>
          Kilde: {' '}
          <a
            href="http://www.waterencyclopedia.com/Oc-Po/Oil-Spills-Impact-on-the-Ocean.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Water Encyclopedia
          </a>
        </p>
      </div>
      <div className={styles.container}>
        <div className={`${styles.oil} ${isVisible ? styles.sink : ''}`}></div>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path id='sineWave' fill="black" d="M 0 100 C 331 202 401 231 726 121 C 1022 15 1120 20 1440 100 V 0 H 0" />
          </defs>
          <use className={styles.wave} href="#sineWave" />
          <use className={styles.wave} x="-100%" href="#sineWave" />
        </svg>
      </div>
    </section>
  );
}
