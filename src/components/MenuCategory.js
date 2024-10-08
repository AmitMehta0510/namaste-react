import MenuItem from "./MenuItem";
const MenuCategory = ({ category, items = [], onToggle, isOpen }) => {
  return (
    <div className="menu-category">
      <div className="category-header" onClick={onToggle}>
        <h2>
          {category.name} ({items.length})
        </h2>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="category-items">
          {items.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
