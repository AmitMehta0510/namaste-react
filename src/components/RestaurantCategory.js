import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log(data);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-10/12 lg:w-6/12 mx-auto my-4 bg-white shadow-lg rounded-md p-4">
      <div className="flex justify-between items-center mb-2 ">
        <span className="font-bold text-lg text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl cursor-pointer mr-4" onClick={handleClick}>
          ⬇️
        </span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
