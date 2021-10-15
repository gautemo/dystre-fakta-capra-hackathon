import classNames from 'classnames';
import styles from './Rock.module.css';

interface Props {
  size: 'small' | 'medium' | 'large';
  offset: number;
}

export default function Rock({ size, offset }: Props) {
  const pixelSize =
    size === 'small' ? 50 : size === 'medium' ? 100 : 150;

    

  return (
    <svg
      x="1150"
      y="400"
    style={{
        right: `${100+offset}px`,
        top: "570px"    
    }}
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(styles.rock, styles[`rock-${size}`])}
    >
      <g id="layer1" transform="translate(28.757844,165.99407)">
        <g
          stroke="#000000"
          id="g229"
          transform="matrix(0.26385653,0,0,0.265343,-132.27815,-236.924)"
        >
          <path
            d="m 420,279 h 1 v -2 c 0,-4 0,-8 -1,-8 h -4 c -1,0 -1.693,-0.459 -3,-1 -0.924,-0.383 -2,0 -2,0 h -2 c -1,0 -2.076,-0.383 -3,0 -1.307,0.541 -1.186,1.693 -3,3 -1.147,0.827 -2,1 -2,2 0,0 0.707,0.293 0,1 -0.707,0.707 -1.293,0.293 -2,1 -0.707,0.707 -1,1 -1,2 0,0 -0.293,-0.707 -1,0 -0.707,0.707 -0.293,1.293 -1,2 -0.707,0.707 -1.293,0.293 -2,1 -0.707,0.707 -0.459,0.693 -1,2 -0.383,0.924 0,1 0,2 v 28 l 1,1 c 0,1 1,1 2,1 0,0 0,1 1,1 0,0 1.293,-0.707 2,0 0.707,0.707 1.293,0.293 2,1 0.707,0.707 0,1 0,1 v 2 c 0,0 -0.707,1.293 0,2 0.707,0.707 1,0 2,0 h 14 c 1,0 1.293,-0.707 2,0 0.707,0.707 0.293,1.293 1,2 0.707,0.707 1.293,0.293 2,1 0.707,0.707 0,1 0,1 1,0 1.293,0.293 2,1 0.707,0.707 0.293,1.293 1,2 0.707,0.707 1,0 2,0 h 12 c 0,0 0.098,-0.824 2,-2 0.85,-0.526 3.027,-0.77 4,-1 2.176,-0.514 3,-1 3,-1 2,0 3.372,0.615 7,-2 1.147,-0.827 1.387,-1.918 4,-3 0.924,-0.383 2.293,-0.293 3,-1 0.707,-0.707 1,-1 2,-1 0,0 0.293,0.707 1,0 0.707,-0.707 0,-2 0,-3 0,0 -0.707,-1.293 0,-2 0.707,-0.707 1,-1 1,-3 0,-1 1,-1 1,-3 v -7 c -1,-2 -1,-3 -1,-4 v -5 c 0,-1 0,-1 -1,-2 0,0 -2,-2 -3,-2 h -2 c -1,0 -1.15,0.526 -2,0 -1.902,-1.176 -2,-3 -2,-4 0,-1 1,-2 1,-3 0,0 -1,-2 -2,-2 -1,0 -1.098,-0.824 -3,-2 -0.85,-0.526 -3.186,-1.693 -5,-3 -1.147,-0.827 -3,-1 -4,-1 h -2 c -1,0 -1,0 -1,-1 0,0 0,-1 -1,-1 h -25"
            fill="#8e4908"
            id="path225"
          />
          <path
            d="m 396,295 h 13 c 0,0 1,0 1,-1 0,0 0.076,-0.617 1,-1 1.307,-0.541 1,-1 2,-1 h 2 m 32,20 c 0,0 0,-1 -1,-1 v -12 c -1,0 -1.693,-0.459 -3,-1 -0.924,-0.383 -2,0 -2,0 h -1"
            fill="none"
            id="path227"
          />
        </g>
      </g>
    </svg>
  );
}