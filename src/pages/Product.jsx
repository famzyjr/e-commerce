import React, { useContext } from 'react'
import {useParams} from 'react-router-dom';
import {ShopContext} from "../Context/ShopContext"
import BreadCrum from '../Components/BreadCrum/Breadcrums';
import ProductDisplay from '../Components/productDisplay/ProductDisplay';
import DescriptionBox from '../Components/description/DescriptionBox';
import RelatedProject from '../Components/relatedProduct/RelatedProject';
  
function Product() {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
     <BreadCrum product={product}/>
     <ProductDisplay product={product}/>
     <DescriptionBox/>
     <RelatedProject/>
     {console.log(product)}
    </div>
  )
}

export default Product