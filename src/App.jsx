import './App.css'
import Home from '@components/pages/Home/Home'
import ServerPage from './components/pages/ServerPage/ServerPage'
import Header from '@components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import Wrapper from '@/components/ui/Wrapper/Wrapper'
import { createBrowserRouter, Routes, Route, ScrollRestoration, RouterProvider, Outlet } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import { useSelector } from 'react-redux'
import Form from '@components/ui/Form/Form'
import FormLogin from '@components/ui/FormLogin/FormLogin'

// Layout — общий для всех страниц
function Layout() {
  const isOpen = useSelector((state) => state.openLogin.open)
  console.log(isOpen);

  return (
    <Wrapper>
      <Header />
      <Outlet />         {/* Здесь будут дочерние страницы */}
      <ScrollRestoration />  {/* Теперь работает! */}
      <Footer />
      <Form isOpened={isOpen}>
        <FormLogin />
      </Form>
    </Wrapper>
  );
}

// Определяем маршруты
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/server/:id',
        element: <ServerPage />,
      },
      {
        path: '/account/',
        element: <ProtectedRoute>
        </ProtectedRoute>
      }
    ],
  },
]);

// Основной компонент
export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
