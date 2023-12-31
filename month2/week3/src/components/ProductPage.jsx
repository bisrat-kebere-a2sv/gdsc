import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const name = useParams().name;
  return (
    <div>
      <h1>
        Page for Product <span style={{ color: "red" }}>{name}</span>
      </h1>
    </div>
  );
};

export default ProductPage;
