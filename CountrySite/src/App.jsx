import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import PaginaOne from './pages/Pagina1';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pagina1" element={<PaginaOne />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
