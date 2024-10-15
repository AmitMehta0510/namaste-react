import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null); // Restaurant Info
  const [menuData, setMenuData] = useState([]); // Menu data
  const [openCategory, setOpenCategory] = useState(null); // Toggle category

  useEffect(() => {
    fetchRestaurant();
  }, [resId]);

  const fetchRestaurant = async () => {
    const data = await fetch(
      MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    // Extract restaurant info and menu categories
    const restaurantInfo = json?.data?.cards[2]?.card?.card?.info; // Dynamic restaurant info

    const categories =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const extractedData = categories.map((category) => {
      const items = category.card.card.itemCards || [];
      return {
        title: category.card.card.title,
        items: items,
      };
    });

    // Set restaurant info and menu data without separating recommended category
    setMenuData(extractedData);
    setResInfo(restaurantInfo);
    console.log("Fetched restaurant menu", menuData);
    // console.log("Fetched restaurant menu", resInfo);
  };

  const handleToggleCategory = (categoryIndex) => {
    setOpenCategory(openCategory === categoryIndex ? null : categoryIndex);
  };

  return { resInfo, menuData, openCategory, handleToggleCategory };
};

export default useRestaurantMenu;
