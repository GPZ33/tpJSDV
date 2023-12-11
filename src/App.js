import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from "./pages/Product";
import CGV from "./pages/CGV";

function App() {
    return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cgv" element={<CGV />} />
      </Routes>
    </BrowserRouter>
    </>
  );
    }
export default App;
