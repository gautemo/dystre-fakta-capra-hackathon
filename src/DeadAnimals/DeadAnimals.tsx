import { useEffect, useState } from 'react';
import { OverlayText } from '../OverlayText';
import styles from './DeadAnimals.module.css';

const random = (max: number) => Math.floor(Math.random() * max);

interface Animal {
  emoji: string;
  alive: boolean;
}

const initial = [
  { emoji: '🐳', alive: true },
  { emoji: '🐋', alive: true },
  { emoji: '🐬', alive: true },
  { emoji: '🐟', alive: true },
  { emoji: '🐠', alive: true },
  { emoji: '🐡', alive: true },
  { emoji: '🦈', alive: true },
  { emoji: '🐙', alive: true },
  { emoji: '🐚', alive: true },
];

export function DeadAnimals() {
  const [animals, setAnimals] = useState<Animal[]>(
    Array(80).fill(initial).flat()
  );

  const updateAnimals = () => {
    let kill = random(animals.length);
    while (!animals[kill].alive) {
      kill = random(animals.length);
    }
    const copy = animals.map((a) => ({ ...a }));
    copy[kill] = { emoji: '☠', alive: false };
    setAnimals(copy);
  };

  useEffect(() => {
    const t = setTimeout(updateAnimals, 100);
    return () => clearTimeout(t);
  }, [animals]);

  return (
    <section className={styles.grid}>
      {animals.map((animal, i) => (
        <span key={i}>{animal.emoji}</span>
      ))}
      <OverlayText
        text="100 millioner marine dyr dør hvert år fra plast i naturen"
        source="https://www.condorferries.co.uk/marine-ocean-pollution-statistics-facts"
      />
    </section>
  );
}
