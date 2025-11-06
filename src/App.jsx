import './App.css'
import Home from '@components/pages/Home/Home'
import ServerPage from './components/pages/ServerPage/ServerPage'
import Header from '@components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import Wrapper from '@/components/ui/Wrapper/Wrapper'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
      <Wrapper>
        <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/server/:id' element={<ServerPage />}/>
          </Routes>
        <Footer />
      </Wrapper>
      </BrowserRouter>
    </>
  )
}

export default App
