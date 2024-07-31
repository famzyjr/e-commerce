import React from 'react'
import './breadCrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const BreadCrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
    Home <img src={arrow_icon} alt="g" /> SHOP <img src={arrow_icon} alt="f" /> {product.category} <img src={arrow_icon} alt='g'/> {product.name} 
    
    </div>
  )
}

export default BreadCrum