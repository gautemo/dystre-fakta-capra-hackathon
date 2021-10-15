import Matter, { Bodies, Engine, Render, World } from 'matter-js';
import { useEffect, useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { OverlayText } from '../OverlayText';
import styles from './PlasticBagGarbage.module.css';

const MAX_NUM_BAGS = 50;

export const PlasticBagGarbage = () => {
  const scene = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(scene);

  const engine = useRef(Engine.create());

  useEffect(() => {
    if (!isVisible) {
      return;
    }
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;
    const render = Render.create({
      engine: engine.current,
      element: scene.current as any,
      options: {
        width: clientWidth,
        height: clientHeight,
        wireframes: false,
        background: 'transparent',
      },
    });
    World.add(engine.current.world, [
      Bodies.rectangle(clientWidth / 2, -10, clientWidth, 20, {
        isStatic: true,
      }),
      Bodies.rectangle(-10, clientHeight / 2, 20, clientHeight, {
        isStatic: true,
      }),
      Bodies.rectangle(
        clientWidth / 2,
        clientHeight + 10,
        clientWidth,
        20,
        { isStatic: true }
      ),
      Bodies.rectangle(
        clientWidth + 10,
        clientHeight / 2,
        20,
        clientHeight,
        { isStatic: true }
      ),
    ]);

    Matter.Runner.run(engine.current);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.textures = {};
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) {
      World.clear(engine.current.world, false);
      return;
    }
    let numBags = 0;
    const interval = setInterval(() => {
      const clientWidth = document.body.clientWidth;
      const ball = Bodies.circle(
        clientWidth * Math.random(),
        20,
        50 + Math.random() * window.innerWidth * 0.06,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: '#e7f4f4',
          },
        }
      );
      numBags++;
      World.add(engine.current.world, [ball]);
      if (numBags > MAX_NUM_BAGS) {
        clearInterval(interval);
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [isVisible]);

  return (
    <section ref={scene} className={styles.component}>
      <OverlayText
        text="Mer enn 1 million plastikkposer ender opp i søpla hvert minutt"
        source="https://www.condorferries.co.uk/plastic-in-the-ocean-statistics"
        yPos={50}
      />
    </section>
  );
};
