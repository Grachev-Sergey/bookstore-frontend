import Banner from '../../components/Banner';
import Catalog from '../../components/Catalog';
import AuthorizeBanner from '../../components/AuthorizeBanner';
import { useAppSelector } from '../../store/hooks';

function MainPage() {
  const userInfo = useAppSelector((state) => state.user.email);
  return (
    <>
      <Banner />
      <Catalog />
      {!userInfo && <AuthorizeBanner />}
    </>
  );
}

export default MainPage;
