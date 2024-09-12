import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import FarmerRoute from "./components/Routes/FarmerRoute";
import { FarmerDashboard } from "./pages/Farmer/FarmerDashboard";
import CreateCategory from "./pages/Farmer/CreateCategory";
import CreateProduct from "./pages/Farmer/CreateProduct";
import Users from "./pages/Farmer/Users";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import Products from "./pages/Farmer/Products";
import UpdateProduct from "./pages/Farmer/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import FarmerOrders from "./pages/Farmer/FarmerOrders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<FarmerRoute />}>
          <Route path="farmer" element={<FarmerDashboard />} />
          <Route path="farmer/create-category" element={<CreateCategory />} />
          <Route path="farmer/create-product" element={<CreateProduct />} />
          <Route path="farmer/product/:slug" element={<UpdateProduct />} />
          <Route path="farmer/products" element={<Products />} />
          <Route path="farmer/users" element={<Users />} />
          <Route path="farmer/orders" element={<FarmerOrders />} />
        </Route>

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
