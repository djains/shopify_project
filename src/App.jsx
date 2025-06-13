import './App.css'
import Header from './components/Header'
import { BrowserRouter  ,Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import Checkout from './components/Checkout';

function App() {

  return (
    
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
         <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>


    
  )
}

export default App
