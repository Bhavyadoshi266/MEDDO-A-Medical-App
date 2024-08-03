import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './MyComponents/Blog';
import Homepage from './MyComponents/Homepage';
import Navbar from './MyComponents/Navbar';
import Services from './MyComponents/Services';
import './MyComponents/Style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Department from './MyComponents/Department';
import Footer from './MyComponents/Footer';
import Price from './MyComponents/Price';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/department" element={<Department />}/>
          <Route path="/price" element={<Price />}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
