import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppContainer } from './AppContainer.styles';
// import { UserType } from './utils/types/userTypes';

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
import { checkUser } from './api/checkUser';

function App() {
  const isLogin = true;
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await new Promise((res) => {
  //         setTimeout(() => res(1), 3000);
  //       });
  //       const response = await getAllUser();
  //       setUsers(response);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          await disputch(checkUser);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      }
    })();
  }, [disputch]);

  return (
    <AppContainer>
      <Header />
      {/* {users.map((i) => {
        return (<div key={i.id}>
          <p>{i.email}</p>
          <p>{i.name}</p>
          <p>{i.username}</p>
                </div>);
      })} */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/api/signup" element={<SignUpPage />} />
        <Route path="/api/login" element={<LogInPage />} />
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
