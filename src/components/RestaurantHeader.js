import "./RestaurantHeader.css";

const RestaurantHeader = (props) => {
  const {
    id,
    name,
    avgRating,
    totleRatingString,
    costForTwo,
    locality,
    areaName,
  } = props;
  return (
    <div className="restaurant-header">
      {/* <h1>{name}</h1>
      <div className="restaurant-info">
        <span>
          {avgRating} ({totleRatingString}) • {costForTwo}
        </span>
        <span>
          {locality} : {areaName}
        </span>
        <span>{props.sla.slaStrin}</span>
      </div> */}
    </div>
  );
};

export default RestaurantHeader;
