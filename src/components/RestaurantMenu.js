import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantIntact from "./RestaurantIntact";
import MenuCategory from "./MenuCategory";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null); // Restaurant Info
  const [menuData, setMenuData] = useState([]); // Menu data
  const [openCategory, setOpenCategory] = useState(null); // Toggle category

  const { resId } = useParams();

  // Fetch restaurant and menu data from API
  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const data = await fetch(
      MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    // Extract restaurant info and menu categories
    const restaurantInfo = json?.data?.cards[2]?.card?.card?.info; // Dynamic restaurant info
    const recommendedCategory =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card || {};
    const categories =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const extractedData = categories.slice(2, 20).map((category) => {
      const items = category.card.card.itemCards || [];
      return {
        title: category.card.card.title,
        items: items,
      };
    });

    // Set restaurant info and menu data
    setMenuData([
      {
        title: recommendedCategory.title,
        items: recommendedCategory.itemCards,
      },
      ...extractedData,
    ]);
    setResInfo(restaurantInfo);
  };

  if (resInfo === null) return <Shimmer />;

  const handleToggleCategory = (categoryIndex) => {
    setOpenCategory(openCategory === categoryIndex ? null : categoryIndex);
  };

  return (
    <div className="menu">
      {/* Pass restaurant info to RestaurantIntact */}
      <RestaurantIntact resInfo={resInfo} />
      <h1>Restaurant Menu</h1>
      <div className="menu-list">
        {menuData?.length > 0 ? (
          menuData.map((category, categoryIndex) => (
            <MenuCategory
              key={categoryIndex}
              category={{ name: category.title }}
              items={category.items?.map((item) => ({
                name: item.card.info.name,
                price: item.card.info.price / 100,
                description: item.card.info.description,
                imageUrl: item.card.info.imageId
                  ? `${item.card.info.imageId}`
                  : "",
              }))}
              isOpen={openCategory === categoryIndex}
              onToggle={() => handleToggleCategory(categoryIndex)}
            />
          ))
        ) : (
          <p>No menu available</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
