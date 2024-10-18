import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, totalRatingsString } = resData?.info;
  const { deliveryTime } = resData.info.sla;

  // Show only two cuisines and add "..."
  const displayedCuisines =
    cuisines.length > 2
      ? cuisines.slice(0, 2).join(", ") + "..."
      : cuisines.join(", ");

  return (
    <div className="res-card p-4 bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl w-full">
      <div className="relative">
        {/* Restaurant Image */}
        <img
          className="res-logo h-40 w-full object-cover rounded-lg"
          alt="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
      </div>
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4 className="flex items-center space-x-1">
        <span className="text-yellow-500 font-bold">{avgRating}⭐</span>
        <span>({totalRatingsString})</span>
        <span>· {deliveryTime} mins</span>
      </h4>
      <h4>{displayedCuisines}</h4>
    </div>
  );
};

// Higher Order Component for RestaurantCard with Offer
export const RestaurantCardWithOffer = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV3 } = resData?.info || {};

    return (
      <div className="relative res-card m-2 p-4 w-[253px] bg-white rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
        {/* Restaurant image */}
        <div className="relative">
          <img
            className="res-logo h-40 w-full object-cover rounded-lg"
            alt="res-logo"
            src={CDN_URL + resData.info.cloudinaryImageId}
          />

          {/* Display Offer on the image */}
          {aggregatedDiscountInfoV3?.header && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 z-20 rounded-b-lg">
              <div className="flex justify-center items-center">
                <h5 className="font-bold text-sm">
                  {aggregatedDiscountInfoV3.header}
                </h5>
                {aggregatedDiscountInfoV3.subHeader && (
                  <p className="font-bold text-sm ml-1">
                    {aggregatedDiscountInfoV3.subHeader}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="text-left">
          <h3 className="font-bold py-1 text-lg">{resData.info.name}</h3>
          <h4>
            {resData.info.avgRating}{" "}
            <strong className="text-yellow-500">⭐</strong> (
            {resData.info.totalRatingsString}) : {resData.info.sla.deliveryTime}{" "}
            mins
          </h4>
          <h4>
            {resData.info.cuisines.length > 2
              ? resData.info.cuisines.slice(0, 2).join(", ") + "..."
              : resData.info.cuisines.join(", ")}
          </h4>
        </div>
      </div>
    );
  };
};

export default RestaurantCard;
