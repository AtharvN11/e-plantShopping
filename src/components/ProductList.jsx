import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/CartSlice";

const plants = [
  {
    category: "Air Purifying Plants",
    items: [
      { name: "Snake Plant", cost: 250, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400" },
      { name: "Peace Lily", cost: 300, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
      { name: "Spider Plant", cost: 200, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400" },
      { name: "Areca Palm", cost: 450, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" },
      { name: "Rubber Plant", cost: 350, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { name: "Aloe Vera", cost: 180, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" }
    ]
  },
  {
    category: "Aromatic Fragrant Plants",
    items: [
      { name: "Lavender", cost: 220, image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400" },
      { name: "Jasmine", cost: 180, image: "https://images.unsplash.com/photo-1597055181300-afa9f5f6d9d3?w=400" },
      { name: "Rosemary", cost: 150, image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=400" },
      { name: "Mint", cost: 100, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400" },
      { name: "Basil", cost: 120, image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400" },
      { name: "Lemon Balm", cost: 160, image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400" }
    ]
  },
  {
    category: "Medicinal Plants",
    items: [
      { name: "Tulsi", cost: 100, image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=400" },
      { name: "Neem", cost: 180, image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400" },
      { name: "Giloy", cost: 130, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
      { name: "Amla", cost: 250, image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=400" },
      { name: "Turmeric Plant", cost: 170, image: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=400" },
      { name: "Lemongrass", cost: 140, image: "https://images.unsplash.com/photo-1599909533730-f9d6b4d6e2d0?w=400" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const addedToCart = {};

  cart.forEach((plant) => {
    addedToCart[plant.name] = true;
  });

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">

      <h1>Our Beautiful Plant Collection</h1>

      {plants.map((category) => (
        <section className="category-section" key={category.category}>

          <h2>{category.category}</h2>

          <div className="products-grid">

            {category.items.map((plant) => (

              <div className="product-card" key={plant.name}>

                <img src={plant.image} alt={plant.name} />

                <h3>{plant.name}</h3>

                <p>Price: ₹{plant.cost}</p>

                <button
                  className="add-cart-btn"
                  disabled={!!addedToCart[plant.name]}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                </button>

              </div>

            ))}

          </div>

        </section>
      ))}

    </div>
  );
}

export default ProductList;
