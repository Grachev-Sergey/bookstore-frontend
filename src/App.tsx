import React from 'react';
import { AppContainer } from './AppContainer.styles';
import Header from './components/Header';
import Banner from './components/Banner';
import Catalog from './components/Catalog/Catalog';
import AuthorizeBanner from './components/authorizeBanner/AuthorizeBanner';
import Footer from './components/Footer/Footer';

function App() {
  const isLogin = false;
  return (
    <AppContainer>
      <Header />
      <Banner />
      <Catalog />
      {!isLogin && <AuthorizeBanner />}
      <Footer />
    </AppContainer>

  );
}

export default App;
