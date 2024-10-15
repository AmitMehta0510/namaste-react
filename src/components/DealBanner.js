const DealBanner = ({ deals }) => {
  if (!deals || deals.length === 0) return null;

  return (
    <div className="deal-banner bg-blue-50 p-4 rounded-lg mt-4">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">
        Exclusive Deals
      </h2>
      <ul className="space-y-2">
        {deals.map((deal, index) => (
          <li
            key={index}
            className="border border-gray-200 rounded-lg p-3 bg-white shadow-sm"
          >
            <p className="font-semibold text-gray-700">
              {deal?.info?.header || "Deal"}
            </p>
            <p className="text-gray-600">Code: {deal?.info?.couponCode}</p>
            <p className="text-gray-500">{deal?.info?.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DealBanner;
