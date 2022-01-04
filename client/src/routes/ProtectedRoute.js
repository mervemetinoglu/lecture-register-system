import { useSelector } from 'react-redux';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ roles }) => {
  const location = useLocation();
  const { user, isFetching } = useSelector((state) => state.user);
  const userRole = user.data?.role;

  if (isFetching) {
    return <p>Checking auth...</p>;
  }

  const userHasRequiredRole = !!(user && roles.includes(userRole));

  if (!userHasRequiredRole) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
