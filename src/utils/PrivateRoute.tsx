import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

type PrivateRouteType = {
  children: JSX.Element;
} & React.PropsWithChildren;

const PrivateRoute: React.FunctionComponent<PrivateRouteType> = (props) => {
  const userInfo = useAppSelector((state) => state.user.user?.email);
  const location = useLocation();
  if (!userInfo) {
    return <Navigate to="/signup" state={{ from: location.pathname }} />;
  }
  return props.children;
};

export default PrivateRoute;
