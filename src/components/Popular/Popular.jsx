import React from "react";
import data_product from "../../assets/data";
import Item from "../Items/Item.jsx";

const Popular = () => {
  return (
    <div id="popular" className="flex flex-col pb-[220px] items-center gap-[10px] h-90vh">
      <h1 className="text-[#171717] text-[50px] font-semibold ">POPULAR IN WOMEN</h1>
      <hr className=" w-[200px] h-[6px] rounded-[10px] bg-[#252525] "/>
      <div id="popular-item" className=" flex mt-[50px] gap-[30px] ">
        {data_product.map((item,i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
