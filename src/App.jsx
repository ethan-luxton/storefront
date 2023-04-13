import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadProducts, loadCategories} from "./store/categories";
import './App.scss';
import Header from './Components/Header'
import { Footer } from './Components/Footer'
import Categories from './Components/Categories'

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCategories());
  });
  return (
    <div className="App">
      <Header/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
