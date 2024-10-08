import "./RestaurantHeader.css";

const RestaurantHeader = ({
  name,
  avgRating,
  totalRatingString,
  costForTwo,
  locality,
  areaName,
  sla,
}) => {
  return (
    <div className="restaurant-header">
      <h1>{name}</h1>
      <div className="restaurant-info">
        <span>
          {avgRating} ({totalRatingString}) • {costForTwo}
        </span>
        <span>
          {locality} : {areaName}
        </span>
        <span>{sla?.slaString}</span> {/* Ensure slaString exists */}
      </div>
    </div>
  );
};

export default RestaurantHeader;
