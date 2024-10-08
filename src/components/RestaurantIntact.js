import React from "react";
import RestaurantHeader from "./RestaurantHeader";
import DealBanner from "./DealBanner";
import SearchFilter from "./SearchFilter";

const RestaurantIntact = ({ resInfo }) => {
  if (!resInfo) return null;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    locality,
    areaName,
    sla,
  } = resInfo;

  return (
    <div>
      {/* Pass dynamic data to RestaurantHeader */}
      <RestaurantHeader
        name={name}
        avgRating={avgRating}
        totalRatingString={totalRatingsString}
        costForTwo={costForTwoMessage}
        locality={locality}
        areaName={areaName}
        sla={sla}
      />
      <DealBanner deals={[]} /> {/* Modify deals based on your data */}
      <SearchFilter />
    </div>
  );
};

export default RestaurantIntact;
