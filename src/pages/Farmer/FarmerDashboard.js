import React from "react";
import Layout from "../../components/Layout/Layout";
import FarmerMenu from "../../components/Layout/FarmerMenu";
import { useAuth } from "../../context/auth";
import Contact from "./../Contact";

export const FarmerDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"farm2fork-farmer"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <FarmerMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>Farmer Name : {auth?.user?.name}</h3>
              <h3>Farmer Email : {auth?.user?.email}</h3>
              <h3>Farmer Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
