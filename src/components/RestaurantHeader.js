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
    <div className="restaurant-header text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
      <div className="restaurant-info text-gray-600 space-y-1">
        <span className="block">
          <strong className="text-yellow-500">{avgRating}⭐</strong> (
          {totalRatingString})
        </span>
        <span className="block">
          {locality} • {areaName}
        </span>
        <span className="block text-gray-500">{sla?.slaString}</span>
      </div>
    </div>
  );
};

export default RestaurantHeader;
