import MenuItem from "./MenuItem";

const MenuCategory = ({ category, items = [], onToggle, isOpen }) => {
  // Check if there are items in the category
  if (items.length === 0) return null; // Do not render if there are no items
  console.log(items);
  return (
    <div className="menu-category border-b border-gray-300 pb-4 mb-6">
      <div
        className="category-header flex justify-between items-center cursor-pointer p-4 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-lg"
        onClick={onToggle}
      >
        <h2 className="text-xl font-semibold text-gray-800">
          {category.name} ({items.length})
        </h2>
        <span className="text-2xl text-gray-600">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="category-items mt-4">
          {items.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
