import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Features from './components/Features';
import Resources from './components/Resources';
import Partners from './components/Partners';
import Footer from './components/Footer';
import GlobalStyle from './components/GlobalStyle';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <HeroSection />
                  <About />
                  <Features />
                  <Resources />
                  <Partners />
                </>
              }
            />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
