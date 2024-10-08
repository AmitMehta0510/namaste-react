const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-info">
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
        <p>
          {item.rating} ⭐ ({item.totalRatings})
        </p>
        <p>{item.description}</p>
      </div>
      <div className="menu-item-image">
        <img src={item.imageUrl} alt={item.name} />
        <button>Add</button>
      </div>
    </div>
  );
};

export default MenuItem;
