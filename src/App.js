import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Pages/Start';
import Anatomia from './Pages/Profile';
import MA from './Pages/Contact';
import ETS from './Pages/RoaringKnight';
import Title from './Components/Title';
import Consenso from './Pages/Consenso'; //no tocar equisde   no lo logro señor   no lo logré?     No estoy loco!  estoy l0c0¿¡       QUE NO ESTOY LOLCO!!    lol?    I KNEW THAT DOOR HAD A LOCK ON IT//
import Embrion from './Pages/Embrion';
import Charla from './Pages/Charla';

function App() {
  return (
    <div>
      <Title />
      <Router>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/Profile" element={<Anatomia />}></Route>
          <Route path="/Contact" element={<MA />}></Route>
          <Route path="/RoaringKnight" element={<ETS />}></Route>
          <Route path="/Consenso" element={<Consenso />}></Route>
          <Route path="/Embrion" element={<Embrion />}></Route>
          <Route path="/Charla" element={<Charla />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;