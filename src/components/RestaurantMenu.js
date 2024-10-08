import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantIntact from "./RestaurantIntact";
import MenuCategory from "./MenuCategory"; // Importing MenuCategory component
import { MENU_URL } from "../utils/constants";

//my code below
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);

  const { resId } = useParams();
  console.log(resId);
  // Fetching restaurant menu data from API
  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const data = await fetch(
      MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    // Extracting the recommended category separately
    const recommendedCategory =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card || {};

    // Extract the categories and menus based on the given structure
    const categories =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const extractedData = categories.slice(2, 20).map((category) => {
      const items = category.card.card.itemCards || []; // Extract items, ensure it's an array
      // Check if items is an array, if not, log it
      if (!Array.isArray(items)) {
        console.log("items is not an array, found:", items);
        return { title: category.card.card.title, items: [] };
      }
      return {
        title: category.card.card.title,
        items: items, // Fetch the items in the category
      };
    });

    // Include the recommended category
    setMenuData([
      {
        title: recommendedCategory.title,
        items: recommendedCategory.itemCards,
      },
      ...extractedData,
    ]);

    console.log(json);
    console.log(json);

    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  console.log(menuData);

  const handleToggleCategory = (categoryIndex) => {
    setOpenCategory(openCategory === categoryIndex ? null : categoryIndex);
  };

  // const { name, cuisines, avgRating, costForTwoMessage } =
  //   resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  return (
    <div className="menu">
      <RestaurantIntact />
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

      {/* <h1>{name}</h1>
      <p>
        {cuisines?.length > 0 ? cuisines.join(", ") : "Cuisines not available"}{" "}
        - {costForTwoMessage}
      </p>
      <h3>{avgRating}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs {item.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
