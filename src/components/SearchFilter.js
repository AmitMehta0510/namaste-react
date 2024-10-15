import "./SearchFilter.css";

const SearchFilter = () => {
  return (
    <div className="search-filter mt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <input
        type="text"
        placeholder="Search for dishes"
        className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="filters flex space-x-2">
        <button className="filter-btn bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          Pure Veg
        </button>
        <button className="filter-btn bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          Bestseller
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
