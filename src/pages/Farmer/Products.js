import React, { useState, useEffect } from "react";
import FarmerMenu from "../../components/Layout/FarmerMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "./Product.css"; // Import the CSS file

const Products = () => {
  const [products, setProducts] = useState([]);

  // Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="row products-page">
        <div className="col-md-3">
          <FarmerMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products List</h1>
          <div className="products-container">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/farmer/product/${p.slug}`}
                className="product-link"
              >
                <div className="card product-card">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
