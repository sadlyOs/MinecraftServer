import { useAuth } from '@/context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editOpenLog } from '@/store/openLogin';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  const dispatch = useDispatch()

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Перенаправляем на страницу логина, сохраняя текущий путь
        dispatch(editOpenLog(true))
        return <Navigate to="/" />
  }

  return (
    <div className='flex-1 min-h-screen'>
      {children}
    </div>
  );
};

export default ProtectedRoute;