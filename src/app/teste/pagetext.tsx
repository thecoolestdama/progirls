import React from 'react';
import TextComponent from '../../components/TextComponent';

const TextPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', height: '100vh', padding: '20px' }}>
      <TextComponent
        text={
          <>
            Uma comunidade feita para você desenvolver habilidades,<br />
            criar conexões e alcançar seu potencial na tecnologia.
          </>
        }
        style={{ fontFamily: 'Inter', fontSize: '18px', lineHeight: '1.5' }}
      />
    </div>
  );
};

export default TextPage;
