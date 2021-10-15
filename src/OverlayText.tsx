interface Props {
  text: string;
  source?: string;
  yPos?: number;
  light?: boolean;
}

export const OverlayText = ({ source, text, yPos, light }: Props) => {
  const style = { '--y-pos': yPos ? `${yPos}%` : undefined } as React.CSSProperties
  return (
    <div className={`overlay-text ${light ? 'light' : ''}`} style={style}>
      {text}
      <div className="overlay-source">Kilde: {source}</div>
    </div>
  );
};