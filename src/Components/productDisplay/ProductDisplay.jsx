import React, { useContext } from 'react'
import './productdisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';
import { ToastContainer } from 'react-toastify';

function ProductDisplay(props) {
    const {product} = props;
    const  {addTOCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
     <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
     </div>

     <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
         <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className='productdisplay-right-price-new'>${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            A lightweight, usually Knitted, pullover shirt, close-fitting and
            a found neckline and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
            </div>
        </div>
        <button  onClick={()=>{addTOCart(product.id)}}>ADD TO CART</button>
         <ToastContainer/>
        <p className='productdisplay-right-category'><span>Category :</span> Women, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span> Modern,Latest</p>
     </div>
    </div>
  )
}

export default ProductDisplay