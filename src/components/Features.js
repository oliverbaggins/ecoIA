import React from 'react';
import styled from 'styled-components';
import IconImage from '../assets/like-icon.svg';

const Features = () => {
  return (
    <FeaturesSection id="features">
      <Container>
        <StyledIcon src={IconImage} alt="Book Icon" />
        <h2>Benefícios da IA para o Meio Ambiente</h2>
        <FeaturesGrid>
          <Feature>
            <h3>Monitoramento Ambiental</h3>
            <p>IA pode ajudar a monitorar ecossistemas e detectar mudanças ambientais em tempo real.</p>
          </Feature>
          <Feature>
            <h3>Gestão de Resíduos</h3>
            <p>IA pode otimizar processos de reciclagem e gestão de resíduos para reduzir o impacto ambiental.</p>
          </Feature>
          <Feature>
            <h3>Energia Renovável</h3>
            <p>IA pode melhorar a eficiência de sistemas de energia renovável, como solar e eólica.</p>
          </Feature>
          <Feature>
            <h3>Previsão Climática</h3>
            <p>IA pode fornecer previsões climáticas mais precisas, ajudando a mitigar os efeitos das mudanças climáticas.</p>
          </Feature>
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;

const FeaturesSection = styled.section`
  padding: 2rem 0;
  background: #394240;
  min-height: 100vh; /* Altura mínima igual à altura da tela */
  display: flex; /* Para centralizar o conteúdo verticalmente */
  justify-content: center; /* Para centralizar o conteúdo horizontalmente */
  align-items: center; /* Para centralizar o conteúdo verticalmente */
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  color: #edede9;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 3rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid; /* Alterado para grid */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Layout responsivo em grade */
  gap: 1rem;
  justify-content: center;
`;

const Feature = styled.div`
  background: #edede9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #394240;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
  }
`;

const StyledIcon = styled.img`
  display: block;
  margin: 0 auto;
  width: 150px;
  height: auto;
  margin-bottom: 50px;
`;