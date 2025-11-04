import './App.css'
import Home from '@components/pages/Home/Home'
import Header from '@components/layout/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
