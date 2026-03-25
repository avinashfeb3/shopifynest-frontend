import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FooterLogo from "../../../assets/logo/footerlogo.png";
import { fetchCategoriesIfNeeded } from "../../../redux/slices/categorySlice";

const Footer = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);

  useEffect(() => {
    dispatch(fetchCategoriesIfNeeded());
  }, [dispatch]);

  return (
    <>
      <div className="max-w-360 mx-auto bg-blue-800 text-white lg:px-8 px-5 py-10 rounded-t-sm">
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-3">
          <div className="lg:pr-20 space-y-4">
            <Link to="/">
              <img
                src={FooterLogo}
                alt="ShopifyNest logo"
                className="w-36 h-auto lg:w-44 drop-shadow-md"
              />
            </Link>
            <p className="text-sm text-blue-100 leading-relaxed mt-2 pt-2 mb-1 pb-1">
              ShopifyNest Hub is your curated stop for fresh fashion finds, fast delivery, and a smooth shopping experience every time.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl text-white font-bold mb-3">
              Quick Links
            </h2>
            <Link to="/" className="hover:underline mb-2">Home</Link>
            {categories.map((category) => {
              return (
                <Link key={category._id || category.id} to={`/shop?category=${category._id}`} className="hover:text-orange-500">
                  {category.name}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl text-white font-bold mb-3">
             Contact Us
            </h2>
            <p className="mb-2">Address: 123 Southhold america</p>
            <Link to="tel:123-456-7890" className="mb-2">Phone: 123-456-7890</Link>
            <Link to="mailto:info@example.com" className="mb-2">Email: info@example.com</Link>
          </div>
        </div>
        <div className="border-t text-gray-400 mt-2 pt-2 mb-1 pb-1"></div>
        <div className="text-sm text-center pt-2">
          Copyright &copy; {new Date().getFullYear()} ShopifyNest | Designed & Developed By Avinash Singh | All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
