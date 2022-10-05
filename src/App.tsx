import React from 'react';
import { AppContainer } from './AppContainer.styles';
import Header from './components/Header';
import Banner from './components/Banner';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AppContainer>
      <Header />
      <Banner />
      <Catalog />
      <Footer />
    </AppContainer>

  );
}

export default App;
