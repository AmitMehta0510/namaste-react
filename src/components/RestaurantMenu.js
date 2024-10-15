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

  // Base URL for dish images (this should match your actual image URL base)
  const IMAGE_BASE_URL = "https://cdn.example.com/images/";

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="menu py-6 px-4 lg:px-16 max-w-7xl mx-auto">
      {/* Pass restaurant info to RestaurantIntact */}
      <RestaurantIntact resInfo={resInfo} />
      <h1 className="text-3xl font-semibold text-center my-6">
        Restaurant Menu
      </h1>
      <div className="menu-list space-y-8">
        {menuData?.length > 0 ? (
          menuData.map((category, categoryIndex) => (
            <MenuCategory
              key={categoryIndex}
              category={{ name: category.title }}
              items={category.items?.map((item) => ({
                name: item.card.info.name,
                price: item.card.info.price / 100,
                description: item.card.info.description,
                imageUrl: item.card.info.imageUrl
                  ? `${IMAGE_BASE_URL}${item.card.info.imageUrl}` // Construct the full image URL
                  : "", // Provide an empty string if there's no image
                rating: item.card.info.rating, // Make sure you also pass the rating if available
                totalRatings: item.card.info.totalRatings, // Pass the total number of ratings if available
              }))}
              isOpen={openCategory === categoryIndex}
              onToggle={() => handleToggleCategory(categoryIndex)}
            />
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">No menu available</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
