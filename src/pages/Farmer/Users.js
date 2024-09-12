import React from "react";
import Layout from "../../components/Layout/Layout";
import FarmerMenu from "../../components/Layout/FarmerMenu";

const Users = () => {
  return (
    <Layout title={"dashboard-all users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <FarmerMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
