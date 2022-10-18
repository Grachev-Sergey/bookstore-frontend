import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from './AppContainer.styles';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import BookPage from './pages/BookPage/BookPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import LogInPage from './pages/LogInPage';
import PrivateRoute from './utils/PrivateRoute';
import { useAppDispatch } from './store/hooks';
import userThunks from './store/userSlice/userThunks';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      return setIsLoaded(true);
    }

    (async () => {
      try {
        await dispatch(userThunks.checkUser()).unwrap();
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
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
      <ToastContainer
        position="top-left"
        autoClose={3000}
        theme="colored"
      />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/book/:id" element={<BookPage />} />
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
        <Route path="/user/profile" element={
          (<PrivateRoute>
            <ProfilePage />
           </PrivateRoute>
          )}
        />
      </Routes>
      <Footer />
    </AppContainer>
  );
};

export default App;
