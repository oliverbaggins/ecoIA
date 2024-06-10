import React from 'react';
import styled from 'styled-components';
import IconImage from '../assets/trophy-icon.svg';
import Partner3 from '../assets/partner.png';

const Partners = () => {
  return (
    <PartnersSection id="partners">
      <Container>
        <StyledIcon src={IconImage} alt="Trophy Icon" />
        <h2>Parceiros</h2>
        <PartnersGrid>
          {/* <Partner>
            <img src="https://via.placeholder.com/150" alt="Parceiro 1" />
            <p>Organização Ambiental</p>
          </Partner>
          <Partner>
            <img src="https://via.placeholder.com/150" alt="Parceiro 2" />
            <p>Empresa de Tecnologia</p>
          </Partner> */}
          <Partner>
            <img src={Partner3} alt="Parceiro 3" />
            <p>Instituição Acadêmica</p>
          </Partner>
        </PartnersGrid>
      </Container>
    </PartnersSection>
  );
};

export default Partners;

const PartnersSection = styled.section`
  padding: 2rem 0;
  background:  #394240;
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
    font-size: 3rem;
    color: #edede9;
  }
`;

const PartnersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const Partner = styled.div`
  background: #edede9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 150px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 0.5rem;
    border-radius: 5px;
  }

  p {
    color: #394240;
  }
`;

const StyledIcon = styled.img`
  display: block;
  margin: 0 auto;
  width: 150px;
  height: auto;
  margin-bottom: 50px;
`;