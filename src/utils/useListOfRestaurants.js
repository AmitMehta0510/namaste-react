import { useState, useEffect } from "react";

const useListOfRestaurants = () => {
  const [listOfRestaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2138156&lng=75.8647527&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  return { listOfRestaurants, filteredRestaurants, setFilteredRestaurants };
};

export default useListOfRestaurants;
