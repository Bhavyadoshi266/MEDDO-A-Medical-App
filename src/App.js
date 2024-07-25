import './App.css';
import Blog from './MyComponents/Blog';
import Homepage from './MyComponents/Homepage';
import Navbar from './MyComponents/Navbar';
import Services from './MyComponents/Services';
import './MyComponents/Style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
     {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
