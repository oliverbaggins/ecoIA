import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/eco.png';

const HeroSection = () => {
  return (
    <Hero>
      <HeroText>
        <h1>Conscientização Ambiental Impulsionada pela IA</h1>
        <p>Descubra como a Inteligência Artificial pode ajudar a proteger o meio ambiente e promover a sustentabilidade.</p>
      </HeroText>
    </Hero>
  );
};

export default HeroSection;

const Hero = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 91vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${backgroundImage}) no-repeat center center/cover;
    filter: blur(7px); /* Ajuste o valor conforme necessário */
    z-index: -1; /* Certifique-se de que o desfoque está atrás do conteúdo */
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(57, 66, 64, 0.3); /* Ajuste a cor e a opacidade conforme necessário */
    z-index: 0; /* Camada abaixo do conteúdo mas acima do fundo */
  }
`;

const HeroText = styled.div`
  position: relative;
  text-align: center;
  color: #edede9;
  z-index: 1; /* Garanta que o texto esteja acima das sobreposições */
  text-shadow: 2px 2px 4px rgba(57, 66, 64, 0.5); /* Adiciona a sombra projetada */

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 800;
    animation: fadeIn 1s ease-in-out;
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    animation: fadeIn 2s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
