import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { loadProducts, loadCategories} from "./store/categories";
import './App.scss';
import HomePage from './Home'
import ProductDetails from "./Components/Products/ProductDetails";
import CartPage from "./Components/Cart/CartPage";
import Header from './Components/Header'
import { Footer } from './Components/Footer'
import { clickOffEvent } from './store/product'
function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategories());
  });
  const location = useLocation();
  if (location.pathname !== '/product-details') {
    dispatch(clickOffEvent())
  }
  return (
    <>
      
      
        <Header/> 
        <Routes location={location}>
          
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
        <Footer/>
      
      
    </>
    
    
  );
}

export default App;
