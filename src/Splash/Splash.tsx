import { OverlayText } from '../OverlayText';
import styles from './Splash.module.css';

export const Splash = () => {
  return (
    <section className={styles.container}>
      <OverlayText
        text="Dystre fakta - en verden i endring"
        light={true}
        yPos={30}
      />
    </section>
  );
};
