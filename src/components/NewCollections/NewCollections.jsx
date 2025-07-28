import React from "react";
import new_collections from "../../assets/new_collections";
import Item from "../Items/Item.jsx";

const NewCollections = () => {
  return (
    <div id="new-collections" className="flex flex-col pb-[220px] items-center gap-[10px] mb-[100px] ">
      <h1 className="text-[#171717] text-[50px] font-semibold ">NEW COLLECTIONS</h1>
      <hr className=" w-[200px] h-[6px] rounded-[10px] bg-[#252525] " />
      <div id="collections"className="  mt-[50px] grid grid-cols-4 gap-[30px]">
        {new_collections.map((item, index) => {
          return (
            <Item
              key={index}
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

export default NewCollections;
