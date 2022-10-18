import Banner from '../../components/Banner';
import Catalog from '../../components/Catalog';
import AuthorizeBanner from '../../components/AuthorizeBanner';
import { useAppSelector } from '../../store/hooks';

const MainPage: React.FC = () => {
  const userInfo = useAppSelector((state) => state.user.user?.email);
  return (
    <>
      <Banner />
      <Catalog />
      {!userInfo && <AuthorizeBanner />}
    </>
  );
};

export default MainPage;
