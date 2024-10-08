import "./SearchFilter.css";

const SearchFilter = () => {
  return (
    <div className="search-filter">
      <input type="text" placeholder="Search for dishes" />
      <div className="filters">
        <button className="filter-btn">Pure Veg</button>
        <button className="filter-btn">Bestseller</button>
      </div>
    </div>
  );
};

export default SearchFilter;
