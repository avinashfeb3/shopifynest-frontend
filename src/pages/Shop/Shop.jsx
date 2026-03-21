import React, { useState } from "react";
import Layout from "../../components/layouts/layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { FiFilter } from "react-icons/fi";

const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

      const products= [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 79.99,
            cross_price: 99.99,
            image: "https://res.cloudinary.com/dhlveqcny/image/upload/v1768490765/levitating-music-headphones-display_x61krq.jpg"
        },
        {
            id: 2,
            name: "Smart Watch Pro",
            price: 199.99,
            cross_price: 299.99,
            image: "https://res.cloudinary.com/dhlveqcny/image/upload/v1768490758/rendering-smart-home-device_udnqm1.jpg"
        },
        {
            id: 3,
            name: "Yoga Mat Premium",
            price: 34.99,
            cross_price: 49.99,
            image: "https://res.cloudinary.com/dhlveqcny/image/upload/v1768491199/yoga_egrcch.jpg"
        },
        {
            id: 4,
            name: "Backpack Travel",
            price: 69.99,
            cross_price: 89.99,
            image: "https://res.cloudinary.com/dhlveqcny/image/upload/v1768491200/backpack_txpmni.jpg"
        },
        {
            id: 5,
            name: "Sunglasses Classic",
            price: 39.99,
            cross_price: 59.99,
            image: "https://res.cloudinary.com/dhlveqcny/image/upload/v1768491200/sunglasses_mckyei.jpg"
        },
        {
            id: 6,
            name: "Backpack Travel",
            price: 69.99,
            cross_price: 89.99,
            image: "https://res.cloudinary.com/dhlveqcny/image/upload/v1768491200/backpack_txpmni.jpg"
        },
        {
            id: 7,
            name: "Sunglasses Classic",
            price: 39.99,
            cross_price: 59.99,
            image: "https://res.cloudinary.com/dhlveqcny/image/upload/v1768491200/sunglasses_mckyei.jpg"
        },       
         {
            id: 8,
            name: "Sunglasses Classic",
            price: 39.99,
            cross_price: 59.99,
            image: "https://res.cloudinary.com/dhlveqcny/image/upload/v1768491200/sunglasses_mckyei.jpg"
        }
    ]

  return (
    <>
      <Layout>
        {/* Breadcrumbs Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-4 py-3 sm:py-5">
          <div className="flex gap-x-1 sm:gap-x-2 items-center text-xs sm:text-sm overflow-x-auto">
            <Link className="hover:text-blue-600 transition-colors whitespace-nowrap">Home</Link>
            <IoIosArrowForward className="shrink-0 text-xs sm:text-sm" />
            <Link className="font-bold whitespace-nowrap">Shop</Link>
          </div>
        </div>
        {/* Breadcrumbs Section End */}

        {/* Title Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-4">
          <div className="flex text-blue-700 text-2xl sm:text-3xl lg:text-4xl font-bold">Shop</div>
        </div>
        {/* Title Section End */}

        {/* Main content Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-4 mt-4 sm:mt-5">
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FiFilter className="text-lg" />
              <span>Filters</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Sidebar Section Start */}
            <div className="hidden lg:block lg:col-span-3 pb-5">
              <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-3">
                <span className="text-xl lg:text-2xl font-bold">Filters</span>
                <span className="text-sm cursor-pointer hover:text-blue-600 transition-colors">Clear</span>
              </div>

              {/* Category Filter Section Start */}
              <div className="font-bold pt-2 mb-2">Category</div>
              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                />{" "}
                <span className="text-sm">Top Wear</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                />{" "}
                <span className="text-sm">Bottom Wear</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                />{" "}
                <span className="text-sm">Accessories</span>
              </div>
              {/* Category Filter Section End */}

              {/* Brands Filter Section Start */}
              <div className="font-bold pt-4 mb-2">Brands</div>
              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                />{" "}
                <span className="text-sm">Allen Solly</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                />{" "}
                <span className="text-sm">Zara</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                />{" "}
                <span className="text-sm">Adidas</span>
              </div>
               <div className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                />{" "}
                <span className="text-sm">Jockey</span>
              </div>
              {/* Brands Filter Section End */}

              {/* Price Filter Section Start */}
              <div className="font-bold pt-4 mb-2">Price Range</div>
              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="radio"
                  name="price"
                  className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                />{" "}
                <span className="text-sm">Under $50</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="radio"
                  name="price"
                  className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                />{" "}
                <span className="text-sm">$50 - $100</span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="radio"
                  name="price"
                  className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                />{" "}
                <span className="text-sm">Above $100</span>
              </div>
              {/* Price Filter Section End */}
            </div>
            {/* Sidebar Section End */}

            {/* Product Section Start */}
            <div className="lg:col-span-9 mb-6 sm:mb-8 lg:mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3x sm:gap-4 lg:gap-5">
            {
                products && products.map(products => {
                    return (
                        <div key={products.id} className="group">
                            <div className="bg-gray-100 overflow-hidden rounded-lg mb-2 sm:mb-3  cursor-pointer">
                                <img
                                    className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover duration-500 ease-in-out transition-transform group-hover:scale-110"
                                    src={products.image}
                                    alt={products.name}
                                />
                            </div>
                            <Link to={`/products`} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                            <h3 className="text-sm sm:text-base lg:text-lg text-gray-800 font-semibold mb-1 line-clamp-2 hover:text-blue-600 transition-colors">
                                {products.name}
                            </h3>
                            </Link>
                            <p className="text-sm sm:text-base text-gray-700 font-semibold">
                                ${products.price} {"   "}
                                <span className="line-through text-gray-500 text-xs sm:text-sm">
                                    ${products.cross_price}
                                </span>
                            </p>
                        </div>
                    )
                })
            }
        </div>
            </div>
            {/* Product Section End */}
          </div>
        </div>

        {/* Main content Section End */}

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={() => setIsFilterOpen(false)}
            />
            
            {/* Drawer */}
            <div className="fixed inset-y-0 left-0 w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <span className="text-xl font-bold">Filters</span>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <IoMdClose className="text-xl" />
                  </button>
                </div>
                
                {/* Drawer Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  {/* Category Filter Section Start */}
                  <div className="font-bold mb-3">Category</div>
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                    />{" "}
                    <span className="text-sm">Top Wear</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                    />{" "}
                    <span className="text-sm">Bottom Wear</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                    />{" "}
                    <span className="text-sm">Accessories</span>
                  </div>
                  {/* Category Filter Section End */}

                  {/* Brands Filter Section Start */}
                  <div className="font-bold mb-3">Brands</div>
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                    />{" "}
                    <span className="text-sm">Allen Solly</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                    />{" "}
                    <span className="text-sm">Zara</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                    />{" "}
                    <span className="text-sm">Adidas</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                    />{" "}
                    <span className="text-sm">Jockey</span>
                  </div>
                  {/* Brands Filter Section End */}

                  {/* Price Filter Section Start */}
                  <div className="font-bold mb-3">Price Range</div>
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="radio"
                      name="mobile-price"
                      className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                    />{" "}
                    <span className="text-sm">Under $50</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="radio"
                      name="mobile-price"
                      className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                    />{" "}
                    <span className="text-sm">$50 - $100</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <input
                      type="radio"
                      name="mobile-price"
                      className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                    />{" "}
                    <span className="text-sm">Above $100</span>
                  </div>
                  {/* Price Filter Section End */}
                </div>
                
                {/* Drawer Footer */}
                <div className="p-4 border-t border-gray-200">
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Shop;
