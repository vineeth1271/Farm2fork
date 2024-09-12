import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-3 mt-4 mb-4" key={c._id}>
              <Link
                to={`/category/${c.slug}`}
                className="btn w-100"
                style={{ backgroundColor: "#28a745", color: "#fff" }}
              >
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
