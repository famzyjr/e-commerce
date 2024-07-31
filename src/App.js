import './App.css';
import Navbar from './Components/navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './Components/footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>  
      <Navbar/>
       <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory  banner={women_banner} category="women"/>}/>
        <Route path='/Kids' element={<ShopCategory   banner={kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
       </Routes> 
       <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
