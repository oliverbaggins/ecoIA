import React from 'react';
import styled from 'styled-components';
import IconImage from '../assets/book-icon.svg';

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <StyledIcon src={IconImage} alt="Book Icon" />
        <h2>Sobre a Campanha</h2>
        <p>EcoIA é uma iniciativa dedicada a aumentar a conscientização sobre o uso da inteligência artificial para benefício ambiental. Nosso objetivo é educar e inspirar ações concretas em prol do meio ambiente.</p>
      </Container>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  padding: 2rem 0;
  background: #edede9;
  height: 100vh; /* Altura igual à altura da tela */
  display: flex; /* Para centralizar o conteúdo verticalmente */
  justify-content: center; /* Para centralizar o conteúdo horizontalmente */
  align-items: center; /* Para centralizar o conteúdo verticalmente */
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  color: #394240;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 3rem;
  }

  p {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const StyledIcon = styled.img`
  display: block;
  margin: 0 auto;
  width: 150px;
  height: auto;
  margin-bottom: 50px;
`;
