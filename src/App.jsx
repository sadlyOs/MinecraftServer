import './App.css'
import Home from '@components/pages/Home/Home'
import ServerPage from './components/pages/ServerPage/ServerPage'
import Header from '@components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import Wrapper from '@/components/ui/Wrapper/Wrapper'
import { createBrowserRouter, Routes, Route, ScrollRestoration, RouterProvider, Outlet } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import ProtectedRoute from './components/ProtectedRoute'
import { useSelector } from 'react-redux'
import Form from '@components/ui/Form/Form'
import FormLogin from '@components/ui/FormLogin/FormLogin'
import FormReg from '@components/ui/FormReg/FormReg'
import AccountPage from '@components/pages/AccountPage/AccountPage'
import AccountLayout from '@components/layout/AccountLayout/AccountLayout'
import AddServerPage from '@components/pages/AddServerPage/AddServerPage'
import MyServersPage from './components/pages/MyServersPage/MyServersPage'
import MyServerPage from './components/pages/MyServerPage/MyServerPage'
import MyServerEditPage from '@components/pages/MyServerEditPage/MyServerEditPage'

// Layout — общий для всех страниц
function Layout() {
  const isOpenLog = useSelector((state) => state.openLogin.open)
  const isOpenReg = useSelector((state) => state.openReg.open)
  console.log(isOpenLog);

  if (!localStorage.getItem('users')) {
    localStorage.setItem("users", JSON.stringify([]))
  }

  return (
    <Wrapper>
      <Header />
      <Outlet />         {/* Здесь будут дочерние страницы */}
      <ScrollRestoration />  {/* Теперь работает! */}
      <Footer />
      <Form isOpenedLog={isOpenLog} isOpenedReg={isOpenReg}>
        {isOpenLog &&
          <FormLogin />
        }

        {isOpenReg &&
          <FormReg />
        }
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
          <AccountLayout />
        </ProtectedRoute>,
        children: [
          {
            path: '/account/cab/',
            element: <AccountPage />
          },

          {
            path: '/account/servers/',
            element: <MyServersPage />,
          },

          {
            path: '/account/add/',
            element: <AddServerPage />,
          }
        ]
      },
      {
        path: "/myServer/:id",
        element: <ProtectedRoute>
          <MyServerPage />
        </ProtectedRoute>,
      },
      {
        path: "/myServer/:id/edit/",
        element: <ProtectedRoute>
          <MyServerEditPage />
        </ProtectedRoute>,
      },
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
