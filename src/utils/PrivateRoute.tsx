import { Navigate } from 'react-router-dom';

type PrivateRouteType = {
  isLogin: boolean;
  children: JSX.Element;
} & React.PropsWithChildren;

const PrivateRoute: React.FunctionComponent<PrivateRouteType> = (props) => {
  if (!props.isLogin) {
    return <Navigate to="/auth" />;
  }
  return props.children;
};

export default PrivateRoute;
