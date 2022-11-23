import React from "react";

const Products = () => {
  //   const productsList = ["Mobile", "Laptop", "TV", "Television", "Car"];
  const productsList = [
    { id: 1, name: "Mobile", price: 250 },
    { id: 2, name: "Laptop", price: 500 },
    { id: 3, name: "TV", price: 1500 },
    { id: 4, name: "Car", price: 450400 },
    { id: 5, name: "Television", price: 2800 },
  ];
  const product = productsList.map((singleProduct) => (
    <h3 key={singleProduct.id}>
      {singleProduct.name}:{singleProduct.price} $
    </h3>
  ));
  ///################################################
  return (
    <div>
      <h1>Products List</h1>
      <hr />
      {product}
    </div>
  );
};

export default Products;
