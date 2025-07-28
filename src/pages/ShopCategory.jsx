import { ShopContext } from "../context/ShopContext";
import React, { useContext } from "react";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/Items/Item.jsx";

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div id="ShopCategory" className="">
      <img className=" block my-[30px] mx-auto w-[81%] " src={props.banner} alt="" />
      <div id="shop-indexSort" className="flex my-0 mx-[170px] justify-between ">
        <p>
          <span className=" font-semibold ">Showing 1-12</span> out of 36 products
        </p>
        <div id="shopcategory-sort" className=" py-[10px] px-[20px] rounded-[40px] border-[1px] border-solid border-[#888] ">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div id="shop-category-products" className=" my-[20px] mx-[170px] grid grid-cols-4 gap-y-[80px] ">
        {all_product.map((item,i) => {
          if (props.category===item.category) {
            return (<Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div id="shopcategory-loadmore" className=" flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium  ">
        Explore more
      </div>
    </div>
  );
};

export default ShopCategory;
