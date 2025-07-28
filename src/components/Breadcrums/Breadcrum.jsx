import React from "react";
import arrow_icon from "../../assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div id="Breadcrum" className="flex items-center text-[#5e5e5e] gap-2 text-base font-semibold my-[60px] mx-[170px] ">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.category}<img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
