import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Toast from "./components/Toast/Toast";
import Home from "./views/Home";
import Products from "./views/Products";
import Cart from "./views/Cart";
import Wishlist from "./views/Wishlist";
import About from "./views/About";
import Contact from "./views/Contact";
import "./App.css";
function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem( "beautyCart");
    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });
  const [wishlist, setWishlist] = useState(() => {
      const savedWishlist = localStorage.getItem( "beautyWishlist" );
      return savedWishlist
        ? JSON.parse(savedWishlist)
        : [];
    });
  const [toast, setToast] = useState({ message: "", type: "success" });
  useEffect(() => {
    localStorage.setItem("beautyCart",
      JSON.stringify(cart) );
    console.log("Cart Updated:",cart);
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("beautyWishlist",
      JSON.stringify( wishlist ) );
    console.log(  "Wishlist Updated:",  wishlist );
  }, [wishlist]);
  const showToast = ( message, type = "success"
  ) => {
    setToast({ message: message,  type: type });
    setTimeout(() => {
      setToast({   message: "", type: "success" });
    }, 2500);
};
  const addToCart = ( product, quantity ) => {
    setCart( (previousCart) => {
        const existingProduct = previousCart.find(
            (item) =>
              item.id === product.id );

        if (existingProduct) {
          return previousCart.map(
            (item) =>  item.id === product.id
                ? { ...item,
                    quantity:  item.quantity + quantity
                  }
                : item  );
        }
        return [ ...previousCart,
          {  ...product, quantity: quantity
          }  ];
      } );
    showToast(  `${product.name} added to cart!`  ); };
  const updateQuantity = ( id, change ) => {
    setCart( (previousCart) =>
        previousCart
          .map((item) =>
            item.id === id
              ? {  ...item,
                  quantity: item.quantity + change
                }  : item  )
          .filter( (item) => item.quantity > 0 ) );
  };
  const removeFromCart = (id) => {
    const product = cart.find( (item) => item.id === id );
    setCart( (previousCart) => previousCart.filter( (item) =>  item.id !== id   ) );
    if (product) {
      showToast( `${product.name} removed from cart.` ); }
  };
  const toggleWishlist = ( product  ) => {
    setWishlist( (previousWishlist) => {
        const exists = previousWishlist.some( (item) =>  item.id === product.id );
        if (exists) {
          showToast(  `${product.name} removed from wishlist.` );
          return previousWishlist.filter( (item) => item.id !== product.id
          );}
        showToast( `${product.name} added to wishlist!` );
        return [ ...previousWishlist, product ];
      }
    );
  };
  const cartCount =  cart.reduce(  (total, item) => total + item.quantity, 0 );
  const wishlistCount = wishlist.length;
  return ( <>
      <Navbar cartCount={cartCount} wishlistCount={ wishlistCount
        }   />
      {toast.message && (
        <Toast message={toast.message}  type={toast.type}/> )}
      <Routes>
        <Route path="/"element={ <Home /> }/>
        <Route path="/products"
          element={  <Products addToCart={ addToCart }
              wishlist={ wishlist }
              toggleWishlist={toggleWishlist} />
          }/>
        <Route path="/wishlist"
          element={ <Wishlist wishlist={ wishlist  }
              toggleWishlist={ toggleWishlist }
              addToCart={  addToCart }
              showToast={ showToast } />
          }/>
        <Route path="/cart" element={
            <Cart cart={cart}
              updateQuantity={ updateQuantity }
              removeFromCart={removeFromCart }
              showToast={ showToast}/>
          }/>
        <Route path="/about" element={ <About /> }  />
        <Route path="/contact"  element={
            <Contact showToast={ showToast} />
          } />
      </Routes>
      <Footer />
    </> );
}
export default App;