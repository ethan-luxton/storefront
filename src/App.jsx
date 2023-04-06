import './App.scss';
import Header from './Components/Header'
import { Footer } from './Components/Footer'
import Categories from './Components/Categories'
function App() {
  return (
    <div className="App">
      <Header/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
