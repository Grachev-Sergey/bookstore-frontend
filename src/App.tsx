import { Route, Routes } from 'react-router-dom';
import { AppContainer } from './AppContainer.styles';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import LogInPage from './pages/LogInPage';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  const isLogin = true;

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/cart" element={
          (<PrivateRoute isLogin={isLogin}>
            <CartPage />
           </PrivateRoute>
          )}
        />
        <Route path="/favorites" element={
          (<PrivateRoute isLogin={isLogin}>
            <FavoritesPage />
           </PrivateRoute>
          )}
        />
        <Route path="/profile" element={
          (<PrivateRoute isLogin={isLogin}>
            <ProfilePage />
           </PrivateRoute>
          )}
         />
      </Routes>
      <Footer />
    </AppContainer>

  );
}

export default App;
