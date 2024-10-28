import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const data = await fetch(
      MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
