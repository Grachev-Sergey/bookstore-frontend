import { useEffect, useState } from 'react';
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
import { useAppDispatch } from './store/hooks';
import userThunks from './store/userSlice/userThunks';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      return setIsLoaded(true);
    }

    (async () => {
      try {
        await dispatch(userThunks.checkUser());
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, [dispatch]);

  if (!isLoaded) {
    return (
      <>loading</>
    );
  }
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/user/cart" element={
          (<PrivateRoute>
            <CartPage />
           </PrivateRoute>
          )}
        />
        <Route path="/user/favorites" element={
          (<PrivateRoute>
            <FavoritesPage />
           </PrivateRoute>
          )}
        />
        <Route path="/user/profile" element={<ProfilePage />} />
          {/* (<PrivateRoute>
            <ProfilePage />
           </PrivateRoute>
          )}
        /> */}
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
