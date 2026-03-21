import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Profile from "./pages/Account/Profile";
import Orders from "./pages/Account/Orders";
import ChangePassword from "./pages/Account/ChangePassword";
import AdminLogin from "./pages/Admin/Login/AdminLogin";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import { Toaster } from "react-hot-toast";
import RequireAdminAuth from "./common/RequireAdminAuth";
import AdminGuest from "./common/AdminGuest";
import CreateCategory from "./pages/Admin/Category/CreateCategory/CreateCategory";
import EditCategory from "./pages/Admin/Category/EditCategory/EditCategory";
import ShowCategory from "./pages/Admin/Category/ShowCategory/ShowCategory";
import ShowSubCategory from "./pages/Admin/SubCategory/ShowSubCategory/ShowSubCategory";
import CreateSubCategory from "./pages/Admin/SubCategory/CreateSubCategory/CreateSubCategory";
import EditSubCategory from "./pages/Admin/SubCategory/EditSubCategory/EditSubCategory";
import ShowBrand from "./pages/Admin/Brand/ShowBrand/ShowBrand";
import CreateBrand from "./pages/Admin/Brand/CreateBrand/CreateBrand";
import EditBrand from "./pages/Admin/Brand/EditBrand/EditBrand";
import ShowProduct from "./pages/Admin/Products/ShowProduct/ShowProduct";
import CreateProduct from "./pages/Admin/Products/CreateProduct/CreateProduct";
import EditProduct from "./pages/Admin/Products/EditProduct/EditProduct";

const App = () => {
  return (
    <Router>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/orders" element={<Orders />} />
        <Route path="/account/change-password" element={<ChangePassword />} />
        {/* Admin Login Routes */}
        <Route
          path="/admin/login"
          element={
            <AdminGuest>
              <AdminLogin />
            </AdminGuest>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <RequireAdminAuth>
              <Dashboard />
            </RequireAdminAuth>
          }
        />

        {/* Categories Routes Section Start */}
        <Route
          path="/admin/categories"
          element={
            <RequireAdminAuth>
              <ShowCategory />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/admin/categories/create"
          element={
            <RequireAdminAuth>
              <CreateCategory />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/admin/categories/edit/:id"
          element={
            <RequireAdminAuth>
              <EditCategory />
            </RequireAdminAuth>
          }
        />
        {/* Categories Routes Section End */}

        {/* Sub Categories Routes Section Start */}
        <Route
          path="/admin/sub-categories"
          element={
            <RequireAdminAuth>
              <ShowSubCategory />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/admin/sub-categories/create"
          element={
            <RequireAdminAuth>
              <CreateSubCategory />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/admin/sub-categories/edit/:id"
          element={
            <RequireAdminAuth>
              <EditSubCategory />
            </RequireAdminAuth>
          }
        />
        {/* Sub Categories Routes Section End */}

        {/* Brand Routes Section Start */}
        <Route
          path="/admin/brands"
          element={
            <RequireAdminAuth>
              <ShowBrand />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/admin/brands/create"
          element={
            <RequireAdminAuth>
              <CreateBrand />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/admin/brands/edit/:id"
          element={
            <RequireAdminAuth>
              <EditBrand />
            </RequireAdminAuth>
          }
        />
        {/* Brand Routes Section End */}

        {/* Product Routes Section Start */}
        <Route
          path="/admin/products"
          element={
            <RequireAdminAuth>
              <ShowProduct />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/admin/products/create"
          element={
            <RequireAdminAuth>
              <CreateProduct/>
            </RequireAdminAuth>
          }
        />
        <Route
          path="/admin/products/edit/:id"
          element={
            <RequireAdminAuth>
              <EditProduct />
            </RequireAdminAuth>
          }
        />
        {/* Product Routes Section End */}

        {/* Other routes for your application */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
