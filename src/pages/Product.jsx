import ProductDisplay from "../components/ProductDisplay/ProductDisplay.jsx";
import Breadcrum from "../components/Breadcrums/Breadcrum.jsx";
import { ShopContext } from "../context/ShopContext.jsx";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox.jsx";
import RelativeProduct from "../components/RelativeProduct/RelativeProduct.jsx";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => {
   return e.id === Number(productId);
  });
  return( 
  <div>
    <Breadcrum product={product}/>
    <ProductDisplay product={product}/>
    <DescriptionBox/>
    <RelativeProduct/>
  </div>
  )
};
 
export default Product;
