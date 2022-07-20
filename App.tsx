import Navbar from './pages/Navbar';
import "./assets/styles/styles.css"
import FindACourt from './pages/FindACourt';
import TennisContent from './pages/TennisContent';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TennisCourt from './pages/TennisCourt';
import ContactUs from './pages/ContactUs';
import Confirmation from './pages/Confirmation';
import HowToUse from './pages/HowToUse';
import FindACourtFR from './pages/FindACourtFR';
import ErrorComponent from './pages/Error404';
import Error404 from './pages/Error404';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/findacourt" element={<FindACourt />} />
          <Route path="/findacourtfr" element={<FindACourtFR />} />
          <Route path="/tenniscontent" element={<TennisContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/tenniscourt" element={<TennisCourt />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/howtouse" element={<HowToUse />} />
          <Route element={<Error404 />} />
          <Route path='*' element={<Home />}></Route>
        </Routes>
      </div>
      
    </BrowserRouter>

    
  );
}

export default App
