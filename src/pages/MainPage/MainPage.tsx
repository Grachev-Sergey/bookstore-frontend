import Banner from '../../components/Banner';
import Catalog from '../../components/Catalog';
import AuthorizeBanner from '../../components/AuthorizeBanner';

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
