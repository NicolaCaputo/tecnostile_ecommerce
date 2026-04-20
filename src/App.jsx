import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Brand from './pages/Brand';
import Contatti from './pages/Contatti';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodotti" element={<Products />} />
          <Route path="/prodotti/:id" element={<ProductDetail />} />
          <Route path="/carrello" element={<Cart />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}
