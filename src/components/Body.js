import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local State variable
  const [listOfRestaurants, setRestaurants] = useState(resList);

  /*Another way to write this is ->
    const arr = useState(resList); // array return karta hai jisme (List, setFun) hote hn
    const listOfRestaurants = arr[0];
    const setRestaurants = arr[1];
*/

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
