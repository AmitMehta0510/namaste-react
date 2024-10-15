const MenuItem = ({ item }) => {
  return (
    <div className="menu-item flex items-start justify-between bg-white rounded-lg shadow-md p-4 mb-4 transition-all duration-200 hover:shadow-lg">
      <div className="menu-item-info flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        {item.price != undefined && (
          <p className="text-gray-600">₹{item.price}</p>
        )}

        {item.rating && (
          <p className="text-gray-500">
            {item.rating} ⭐ ({item.totalRatings})
          </p>
        )}
        <p className="text-gray-700 mt-1">{item.description}</p>
      </div>
      <div className="menu-item-image ml-4 flex-shrink-0">
        {item.imageUrl && (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-24 h-24 object-cover rounded-lg border border-gray-200 shadow-sm"
          />
        )}
        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition">
          Add
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
