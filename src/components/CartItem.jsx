import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../features/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.cost * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Coming Soon! Thank you for shopping with Paradise Nursery.");
  };

  return (

    <div className="cart-container">

      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (

        <div>
          <h2>Your cart is empty!</h2>
          <p>Add some beautiful plants to your shopping cart.</p>

          <Link to="/plants" className="continue-btn">
            Continue Shopping
          </Link>
        </div>

      ) : (

        <>

          {cart.map((item) => (

            <div className="cart-item" key={item.name}>

              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Unit Price: ₹{item.cost}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Item Total: ₹{item.cost * item.quantity}
                </p>
              </div>

              <div className="quantity-controls">

                <button onClick={() => handleDecrement(item)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => handleIncrement(item)}>
                  +
                </button>

              </div>

              <button
                className="delete-btn"
                onClick={() => handleDelete(item)}
              >
                Delete
              </button>

            </div>

          ))}

          <div className="cart-summary">

            <h2>Total Amount: ₹{totalAmount}</h2>

            <button
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Checkout
            </button>

            <Link to="/plants" className="continue-btn">
              Continue Shopping
            </Link>

          </div>

        </>

      )}

    </div>

  );
}

export default CartItem;
