import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

type PrivateRouteType = {
  children: JSX.Element;
} & React.PropsWithChildren;

const PrivateRoute: React.FunctionComponent<PrivateRouteType> = (props) => {
  const userInfo = useAppSelector((state) => state.user.email);
  if (!userInfo) {
    return <Navigate to="/signup" />;
  }
  return props.children;
};

export default PrivateRoute;
