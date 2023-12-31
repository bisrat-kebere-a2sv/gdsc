import React from "react";

const Product = () => {
  const [product, setProduct] = React.useState("");
  return (
    <div>
      <h1>Product</h1>
      <input
        type="text"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder="Write Poduct Name"
      />
      <p>Product: {product}</p>
      <a href={`/product/${product}`}>
        Go to {product} product page (write a name and click me)
      </a>{" "}
      <br />
      <a href="/">Back to home</a>
    </div>
  );
};

export default Product;
