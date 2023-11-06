
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dentistas from './Pages/Dentistas';
import Entrenadores from './Pages/Entrenadores';
import Fisios from './Pages/Fisios';
import Medicos from './Pages/Medicos';
import Nutricionistas from './Pages/Nutricionistas';
import Psicologos from './Pages/Psicologos';
import Home from './Pages/Home';
import DiseñoWeb from './Pages/DiseñoWeb';
import Ads from './Pages/Ads';
import CopyWriting from './Pages/CopyWriting';
import EmailMarketing from './Pages/EmailMarketing';
import RedesSociales from './Pages/RedesSociales';
import Seo from './Pages/Seo';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Aviso from './Pages/Aviso';
import Privacidad from './Pages/Privacidad';
import Cookies from './Pages/Cookies';








function App() {
  return (
    < BrowserRouter>
     
      <Routes>
        <Route path='/home' element={< Home />} />
        <Route path='/home/Medicos' element={<Medicos />} />
        <Route path='/home/Fisios/' element={< Fisios />} />
        <Route path='/home/Dentistas/' element={<Dentistas />} />
        <Route path='/home/Nutricionistas/' element={<Nutricionistas />} />
        <Route path='/home/Entrenadores/' element={<Entrenadores />} />
        <Route path='/home/DiseñoWeb/' element={<DiseñoWeb />} />
        <Route path='/home/Ads/' element={<Ads />} />
        <Route path='/home/CopyWriting/' element={<CopyWriting />} />
        <Route path='/home/EmailMarketing/' element={<EmailMarketing />} />
        <Route path='/home/RedesSociales7' element={<RedesSociales />} />
        <Route path='/home/SEO/' element={<Seo />} />
        <Route path='/home/Contact/' element={< Contact />} />
        <Route path='/home/AboutUs/' element={< AboutUs />} />
        <Route path='/home/Psicologos/' element={< Psicologos />} />
        <Route path='/home/Aviso/' element={< Aviso />} />
        <Route path='/home/Privacidad/' element={< Privacidad />} />
        <Route path='/home/Cookies/' element={<Cookies />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;



