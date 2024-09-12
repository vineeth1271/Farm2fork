import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

export const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "farm2fork",
  description: "where farmer and customer gets best price",
  keywords: "farm2fork,Farmer,Customer,Best Golcery",
  auther: "farm2fork",
};
export default Layout;
