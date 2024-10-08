import React from "react";
import RestaurantHeader from "./RestaurantHeader";
import DealBanner from "./DealBanner";
import SearchFilter from "./SearchFilter";

const RestaurantIntact = (props) => {
  return (
    <div>
      <RestaurantHeader />
      <DealBanner />
      <SearchFilter />
    </div>
  );
};

export default RestaurantIntact;
