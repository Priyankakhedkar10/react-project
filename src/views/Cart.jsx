import "./Cart.css";
function Cart({ cart, updateQuantity, removeFromCart, showToast
}) {
  const total = cart.reduce(  (sum, item) =>  sum + item.price * item.quantity, 0 );
  const handleCheckout = () => {
    showToast( "Checkout feature coming soon.");
  };
  return ( <section className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (

        <div className="empty-cart">
          <h2>Your cart is empty </h2>
          <p> Add some beauty products to your cart.</p>
        </div> ) : ( <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id} >
                <img src={item.image} alt={item.name} />
                <div>
                  <h3> {item.name} </h3>
                  <p> ₹{item.price} </p>
                  <div className="cart-quantity">
                    <button onClick={() =>
                        updateQuantity( item.id,-1 ) }> - </button>
                    <span> {item.quantity} </span>
                    <button onClick={() =>
                        updateQuantity( item.id, 1  ) } > + </button>
                  </div>
                  <p> Subtotal: ₹ {item.price * item.quantity} </p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id) } > Remove </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2> Total: ₹{total} </h2>
            <button className="checkout-btn" onClick={handleCheckout} > Checkout </button>
          </div>
        </> )}
    </section> );
}
export default Cart;