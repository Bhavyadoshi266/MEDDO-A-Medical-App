import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './MyComponents/Blog';
import Homepage from './MyComponents/Homepage';
import Navbar from './MyComponents/Navbar';
import Services from './MyComponents/Services';
import './MyComponents/Style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Department from './MyComponents/Department';

function App() {
  return (
    <>
     <BrowserRouter>
     {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/department" element={<Department/>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
