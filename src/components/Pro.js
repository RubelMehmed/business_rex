import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, addProduct } from "../redux/actions";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [product, setProduct] = useState({
    product_name: "",
    category: "",
    img_url: "",
    price: "",
    quantity: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct(product));
    setProduct({
      product_name: "",
      category: "",
      img_url: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <div>
      <h2>Products</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          name="product_name"
          value={product.product_name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={product.category}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="img_url"
          value={product.img_url}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleInputChange}
        />
        <button type="submit">Add Product</button>
      </form>
      {products.map((product, index) => (
    <div key={index}>
        <h3>{product.product_name}</h3>
        <img src={product.img_url} alt={product.product_name} />
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <button onClick={() => dispatch(addCart(product))}>Add to Cart</button>
  </div>
))}
    </div>
  );
};

export default Products;
