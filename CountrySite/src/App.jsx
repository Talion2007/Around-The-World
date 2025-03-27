import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import PaginaOne from './pages/Pagina1';
import PaginaTwo from './pages/Pagina2';
import PaginaThree from './pages/Pagina3';
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
      <Route path="/pagina2" element={<PaginaTwo />} />
      <Route path="/pagina3" element={<PaginaThree />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
