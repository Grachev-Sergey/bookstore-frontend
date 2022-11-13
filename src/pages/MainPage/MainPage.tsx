import { useAppSelector } from '../../store/hooks';

import Banner from '../../components/Banner';
import Catalog from '../../components/Catalog';
import AuthorizeBanner from '../../components/AuthorizeBanner';

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
