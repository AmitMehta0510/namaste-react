import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-start border-b border-gray-200 p-4 shadow-lg rounded-md"
        >
          <div className="flex-1 pr-4 text-left">
            <div className=" mb-2">
              <h1 className="font-semibold text-lg text-gray-800 mr-2">
                {item.card.info.name}
              </h1>
              <h3 className="font-semibold text-gray-800 ml-2">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </h3>
            </div>

            <p className="text-sm text-gray-500 mb-2">
              {item.card.info.description}
            </p>
          </div>

          {item.card.info.imageId && (
            <div className="relative w-24 h-24 flex-shrink-0">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full h-full object-cover rounded-lg shadow-md"
                alt={item.card.info.name}
              />
              <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-md font-semibold">
                ADD
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
