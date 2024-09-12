import React from "react";
import { NavLink } from "react-router-dom";

const FarmerMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Farmer Panel</h4>
          <NavLink
            to="/dashboard/farmer/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/farmer/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>

          <NavLink
            to="/dashboard/farmer/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>

          <NavLink
            to="/dashboard/farmer/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>

          <NavLink
            to="/dashboard/farmer/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default FarmerMenu;
