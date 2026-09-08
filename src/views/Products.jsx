import { useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../utils/products";
import "./Products.css";
function Products({ addToCart, wishlist,toggleWishlist
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const categories = [ "All", "Makeup", "Skincare", "Nails", "Fragrance"  ];
  const filteredProducts = products.filter((product) => {
      const matchesSearch = product.name
          .toLowerCase()
          .includes( search.toLowerCase() );
      const matchesCategory =  category === "All" || product.category === category;
      return ( matchesSearch && matchesCategory
      ); });

  return (
    <section className="products-page">
      <h1> Beauty Products </h1>
      <div className="filters">
        <input type="text" placeholder="Search products..."  value={search} onChange={(event) => setSearch( event.target.value)} />

        <select value={category}  onChange={(event) => setCategory( event.target.value) }>
          {categories.map(
            (item) => (
              <option key={item}  value={item} > {item} </option>  ) )}
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <h2 className="no-products"> No products found.</h2>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={ addToCart }
                wishlist={ wishlist }
                toggleWishlist={ toggleWishlist
                }/>
            ) )}
        </div>
      )}
    </section> );
}
export default Products;