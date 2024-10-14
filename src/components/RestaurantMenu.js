import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantIntact from "./RestaurantIntact";
import MenuCategory from "./MenuCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu"; // Import custom hook

const RestaurantMenu = () => {
  const { resId } = useParams();

  // Use custom hook to fetch restaurant data
  const { resInfo, menuData, openCategory, handleToggleCategory } =
    useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

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
