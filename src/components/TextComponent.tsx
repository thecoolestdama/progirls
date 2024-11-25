import React from 'react';

interface TextComponentProps {
  text: React.ReactNode;
  style?: React.CSSProperties;
  color?: string;
  size?: string;
  fontWeight?: string;
}

const TextComponent: React.FC<TextComponentProps> = ({
  text,
  style,
  color = 'black',
  size = '20x',
  fontWeight = 'normal',
}) => {
  return (
    <p style={{ color, fontSize: size, fontWeight, textAlign: 'center', ...style }}>
      {text}
    </p>
  );
};

export default TextComponent;
