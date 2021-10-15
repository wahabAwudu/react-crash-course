import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">List of all products</h1>
      <br />
      <Link to="/shop/add-new">Add new product</Link>
      <br />
      <br />
      <div className="row">
        {products.map((prod) => (
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }} key={prod.id}>
              <img
                src={prod.thumbnailUrl}
                className="card-img-top"
                alt="profile"
                width="200"
                height="200"
              />
              <div className="card-body">
                <h5 className="card-title">{prod.title}</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
