import './App.css'
import Home from '@components/pages/Home/Home'
import ServerPage from './components/pages/ServerPage/ServerPage'
import Header from '@components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import Wrapper from '@/components/ui/Wrapper/Wrapper'
import { createBrowserRouter, Routes, Route, ScrollRestoration, RouterProvider, Outlet } from 'react-router-dom'

// Layout — общий для всех страниц
function Layout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />         {/* Здесь будут дочерние страницы */}
      <ScrollRestoration />  {/* Теперь работает! */}
      <Footer />
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
    ],
  },
]);

// Основной компонент
export default function App() {
  return <RouterProvider router={router} />;
}
