import React from 'react';
import styled from 'styled-components';
import IconImage from '../assets/box-icon.svg';

const Resources = () => {
  return (
    <ResourcesSection id="resources">
      <Container>
        <StyledIcon src={IconImage} alt="Box Icon" />
        <h2>Recursos</h2>
        <ResourceList>
          <ResourceItem>
            <a target='_blank' href="https://www.ecoresponse.com.br/blog/noticia-interna/como-a-inteligencia-artificial-pode-contribuir-com-o-meio-ambientea-371">Artigo: Como a Inteligência Artificial pode contribuir com o meio ambiente?</a>
          </ResourceItem>
          <ResourceItem>
            <a target='_blank' href="https://trashin.com.br/inteligencia-artificial-e-sustentabilidade/">Artigo: Inteligência Artificial e sustentabilidade: como a tecnologia pode atuar em favor do planeta</a>
          </ResourceItem>
          <ResourceItem>
            <a target='_blank' href="https://www.ecycle.com.br/inteligencia-artificial/">Artigo: Inteligência artificial e sustentabilidade</a>
          </ResourceItem>
          <ResourceItem>
            <a target='_blank' href="https://youtu.be/3sg04ArUZYk">Vídeo: Inteligência artificial é aliada da sustentabilidade</a>
          </ResourceItem>
          <ResourceItem>
            <a target='_blank' href="https://youtu.be/G2_SzHfGLEQ">Vídeo: Como a inteligência artificial pode ajudar a sustentabilidade?</a>
          </ResourceItem>
        </ResourceList>
      </Container>
    </ResourcesSection>
  );
};

export default Resources;

const ResourcesSection = styled.section`
  padding: 2rem 0;
  background: #edede9;
  min-height: 100vh; /* Altura mínima igual à altura da tela */
  display: flex; /* Para centralizar o conteúdo verticalmente */
  justify-content: center; /* Para centralizar o conteúdo horizontalmente */
  align-items: center; /* Para centralizar o conteúdo verticalmente */
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #394240;
    font-size: 3rem;
  }
`;

const ResourceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const ResourceItem = styled.li`
  background: #394240;
  padding: 1.2rem;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  color: #edede9;

  a {
    font-weight: 500;
    font-size: 1.5rem;
  }

  a:hover {
    color: #B4CCB9;
  }
`;

const StyledIcon = styled.img`
  display: block;
  margin: 0 auto;
  width: 150px;
  height: auto;
  margin-bottom: 50px;
`;