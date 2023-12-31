
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
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
import Aviso from './Pages/Aviso';
import Privacidad from './Pages/Privacidad';
import Cookies from './Pages/Cookies';











function App() {
  return (
    <HashRouter HashRouter>
     
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/Medicos' element={<Medicos />} />
        <Route path='/Fisios' element={< Fisios />} />
        <Route path='/Dentistas' element={<Dentistas />} />
        <Route path='/Nutricionistas' element={<Nutricionistas />} />
        <Route path='/Entrenadores' element={<Entrenadores />} />
        <Route path='/DiseñoWeb' element={<DiseñoWeb />} />
        <Route path='/Ads' element={<Ads />} />
        <Route path='/CopyWriting' element={<CopyWriting />} />
        <Route path='/EmailMarketing' element={<EmailMarketing />} />
        <Route path='/RedesSociales' element={<RedesSociales />} />
        <Route path='/Seo' element={<Seo />} />
        <Route path='/Contact' element={< Contact />} />
       
        <Route path='/Psicologos' element={< Psicologos />} />
        <Route path='/Aviso' element={< Aviso />} />
        <Route path='/Privacidad' element={< Privacidad />} />
        <Route path='/Cookies' element={<Cookies />} />
      </Routes>

    </HashRouter>
  );
}

export default App;



