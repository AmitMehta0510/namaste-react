import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, id, totalRatingsString } =
    resData?.info;
  const { deliveryTime } = resData.info.sla;

  // Show only two cuisines and add "..."
  const displayedCuisines =
    cuisines.length > 2
      ? cuisines.slice(0, 2).join(", ") + "..."
      : cuisines.join(", ");

  return (
    <div className="res-card m-2 p-4 w-[253px] bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
      <img
        className="res-logo h-40 w-full object-cover rounded-lg transition transform "
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4 className="">
        {avgRating} <strong className="text-yellow-500">⭐</strong> (
        {totalRatingsString}) : {deliveryTime} mins
      </h4>
      <h4>{displayedCuisines}</h4>
    </div>
  );
};

export default RestaurantCard;
