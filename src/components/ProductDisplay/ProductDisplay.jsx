import React, { useContext } from "react";
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from "../../context/ShopContext";


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div id="ProductDisplay" className="flex my-0 mx-[170px]  ">
      <div id="product-display-left" className=" flex gap-[17px]">
        <div id="productdisplay-list" className="flex flex-col gap-4 ">
            <img className="h-[163px] " src={product.image} alt="" />
            <img className="h-[163px] " src={product.image} alt="" />
            <img className="h-[163px] " src={product.image} alt="" />
            <img className="h-[163px] " src={product.image} alt="" />
        </div>
        <div id="product-displayimage">
            <img className="w-[586px] " id="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div id="product-display-right" className="my-0 mx-[70px] flex flex-col ">
            <h1 className="text-[#3d3d3d] text-[40px] font-bold ">{product.name}</h1>
            <div id="productdisplay-right-star" className="flex items-center mt-13px gap-[5px] text-[#1c1c1c] text-base  ">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
          <div id="productdisplay-right-prices" className="flex my-[40px] mx-0 gap-[30px] text-[24px] font-bold  ">
             <div id="productdisplay-right-price-old" className="text-[#818181] line-through    ">${product.old_price}</div>
             <div id="productdisplay-right-price-new" className="text-[#ff4141] ">${product.new_price}</div>
          </div>  
          <div id="productdisplay-right-description">
             A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline
              and short sleeves, worm as an undershirt or outer garment.
          </div>
          <div id="productdisplay-right-size">
            <h1 className="mt-[55px] text-[#656565] text-[20px] font-semibold ">Select Size</h1>
            <div id="productdisplay-right-size" className="flex my-[30px] mx-0 gap-5  ">
                <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer  ">S</div>
                <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer  ">M</div>
                <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer  ">L</div>
                <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer  ">XL</div>
                <div className="py-[18px] px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer  ">XXL</div>
            </div>
          </div>
          <button onClick={() => {addToCart(product.id)}} className="py-[20px] w-[200px ] px-[40px] text-base font-semibold text-white bg-[#ff4141] mb-[40px] border-none outline-none cursor-pointer ">ADD TO CART</button>
          <p id="productdisplay-right-category" className="mt-2.5 "><span className="font-semibold ">Category :</span> Women, T-shirt, Crop Top</p>
          <p id="productdisplay-right-category" className="mt-2.5 "><span  className="font-semibold " >Tags :</span>Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
