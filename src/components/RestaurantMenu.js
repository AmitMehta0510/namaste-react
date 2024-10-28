import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu"; // Import custom hook
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // Use custom hook to fetch restaurant data
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);
  return (
    <div className="menu text-center bg-gray-100 min-h-screen p-6">
      <h1 className="font-bold text-3xl my-6 text-gray-800">{name}</h1>
      <p className="font-semibold text-lg text-gray-600 mb-4">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
