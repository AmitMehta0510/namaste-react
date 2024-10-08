const DealBanner = ({ deals }) => {
  if (!deals || deals.length === 0) return null;

  return (
    <div className="deal-banner">
      <h2>Exclusive Deals</h2>
      <ul>
        {deals.map((deal, index) => (
          <li key={index}>
            <p>{deal?.info?.header || "Deal"}</p>
            <p>{deal?.info?.couponCode}</p>
            <p>{deal?.info?.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DealBanner;
