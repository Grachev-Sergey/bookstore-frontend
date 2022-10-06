import Banner from '../components/Banner/Banner';
import Catalog from '../components/Catalog/Catalog';
import AuthorizeBanner from '../components/AuthorizeBanner/AuthorizeBanner';

function MainPage() {
  const isLogin = false;
  return (
    <>
      <Banner />
      <Catalog />
      {!isLogin && <AuthorizeBanner />}
    </>
  );
}

export default MainPage;
