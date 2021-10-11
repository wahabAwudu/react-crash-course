import React from "react";

const AddProduct = (props) => {
  return (
    <React.Fragment>
      <h1>Hello this is the AddProduct page</h1>
      <form>
        Name
        <input type="text" />
        <br />
        Description <input type="text" />
        <br />
        Price <input type="number" />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </React.Fragment>
  );
};

export default AddProduct;
