import React, { useContext } from 'react'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import './navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
function Navbar() {
    const [menu,setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
     <div className="nav-logo">
     <img src={logo} alt="" />
     <p>SHOPPER</p>
     </div>
     <ul className='nav-menu'>
        <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Men')}}><Link to='/mens'>Men</Link>{menu === "Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('womens')}}><Link to='/Womens'>Women</Link>{menu === "womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('kids')}}><Link to='/Kids'>kids</Link>{menu === "kids"?<hr/>:<></>}</li>
     </ul>
     
     <div className="nav-login-cart">
         <Link to='/login'> <button>Login</button></Link>
         <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems}</div>
     </div>
    </div>
  )
}

export default Navbar