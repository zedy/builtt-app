// libs
import { Navigate, useLocation } from 'react-router-dom';

// store
import { useStore } from '@/store';

type Props = {
  children: JSX.Element | JSX.Element[];
};

function PublicRoute({ children }: Props) {
  const user = useStore((store) => store.currentUser);
  const location = useLocation();

  if (user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default PublicRoute;
