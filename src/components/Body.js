import RestaurantCard, { RestaurantCardWithOffer } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestaurants from "../utils/useListOfRestaurants"; // Import custom hook

const Body = () => {
  const { listOfRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useListOfRestaurants();
  const [searchText, setSearch] = useState("");
  console.log(listOfRestaurants);
  const OfferedRestaurantCard = RestaurantCardWithOffer(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-center text-xl font-semibold text-red-600">
        Looks like you're offline! Check your internet connection.
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body py-4 px-8 mx-auto max-w-6xl">
      {/* Set horizontal padding and max width */}
      <div className="filter flex justify-between items-center mb-4">
        <div className="search flex space-x-2">
          <input
            type="text"
            className="search-box border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:border-blue-500"
            placeholder="Search Restaurants or Dishes.."
            value={searchText}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="search-btn bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter(
                (res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  res.info.cuisines
                    .join(", ")
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3?.header ? (
              <OfferedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
