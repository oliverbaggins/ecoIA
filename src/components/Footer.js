import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <p>© 2024 EcoIA. Todos os direitos reservados.</p>
        {/* <FooterLinks>
          <a href="#privacy">Política de Privacidade</a>
          <a href="#terms">Termos de Uso</a>
        </FooterLinks> */}
      </Container>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  background: #333;
  color: #edede9;
  padding: 1rem 0;
  text-align: center;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterLinks = styled.div`
  margin-top: 0.5rem;

  a {
    color: #edede9;
    margin: 0 0.5rem;
    font-size: 0.9rem;
  }

  a:hover {
    color: #B4CCB9;
  }
`;
