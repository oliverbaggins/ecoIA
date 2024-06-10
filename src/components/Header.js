import React from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/logo.svg';

const Header = () => {
  return (
    <Nav>
      <Logo href="/">
        <StyledLogo src={LogoImage} alt="EcoAI Logo" />
      </Logo>
      <NavMenu>
        <NavItem href="#about">Sobre</NavItem>
        <NavItem href="#features">Benefícios</NavItem>
        <NavItem href="#resources">Recursos</NavItem>
        <NavItem href="#partners">Parceiros</NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #edede9;
  padding: 1rem;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const StyledLogo = styled.img`
  width: 150px; /* Ajuste o tamanho conforme necessário */
  height: auto;
`;

const NavMenu = styled.div`
  display: flex;
`;

const NavItem = styled.a`
  color: #394240;
  margin-left: 1rem;
  text-decoration: none;

  &:hover {
    color: #B4CCB9;
  }
`;
