import React from "react";
import Layout from "../../components/layouts/layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import smartwatches from "../../assets/products/smartwatches.jpg";

const Cart = () => {
  return (
    <>
      <Layout>
        {/* Breadcrumbs Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-4 py-3 sm:py-5">
          <div className="flex gap-x-1 sm:gap-x-2 items-center text-xs sm:text-sm">
            <Link className="hover:text-blue-600 transition-colors whitespace-nowrap">
              Home
            </Link>
            <IoIosArrowForward className="shrink-0 text-xs sm:text-sm" />
            <Link className="font-bold whitespace-nowrap">Cart</Link>
          </div>
        </div>
        {/* Breadcrumbs Section End */}

        {/* Cart Title Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-4">
          <div className="flex text-blue-700 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Cart
          </div>
        </div>
        {/* Cart Title Section End */}

        {/* Cart Content Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-auto py-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-9 col-span-12">
              <div className="hidden lg:block">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left">Product</th>
                      <th className="px-6 py-3 text-center">Qty</th>
                      <th className="px-6 py-3 text-center">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-6 py-3 text-left">
                        <div className="flex gap-4">
                          <div className="bg-slate-50 p-2 rounded-md">
                            <img
                              src={smartwatches}
                              alt="smartwatch image"
                              className="w-20 h-20 object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h2 className="text-gray-800 font-semibold text-base">
                              Smart Watch Pro
                            </h2>
                            <div className="flex gap-3 items-center pt-2">
                              <div className="text-gray-500 font-semibold text-sm">
                                $199.99
                              </div>
                              <div className="bg-gray-300 flex jutify-center items-center px-2 py-1 rounded-md text-sm">
                                S
                              </div>
                            </div>
                            <Link className="text-red-500 text-sm mt-3">
                              Remove
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-center align-top">
                        <div className="flex rounded-md mx-auto w-25 items-center justify-center px-2 py-1 border border-gray-200">
                          <div className="w-5">-</div>
                          <div className="w-10">1</div>
                          <div className="w-5">+</div>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-center align-top font-semibold">$100</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile/Tablet Card View */}
              <div className="lg:hidden space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex gap-3 mb-4">
                    <div className="bg-slate-50 p-2 rounded-md flex-shrink-0">
                      <img
                        src={smartwatches}
                        alt="smartwatch image"
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-gray-800 font-semibold text-sm sm:text-base mb-1">
                        Smart Watch Pro
                      </h2>
                      <p className="text-gray-500 font-semibold text-xs sm:text-sm mb-2">
                        Size: <span className="text-gray-800">S</span>
                      </p>
                      <p className="text-gray-700 font-bold text-sm sm:text-base mb-2">
                        $199.99
                      </p>
                      <Link className="text-red-500 text-xs sm:text-sm">
                        Remove
                      </Link>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-3 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-gray-600 text-xs sm:text-sm mb-2">Quantity</p>
                      <div className="flex rounded-md items-center justify-center px-2 py-1 border border-gray-200">
                        <button className="w-5 text-center">-</button>
                        <div className="w-8 text-center">1</div>
                        <button className="w-5 text-center">+</button>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs sm:text-sm mb-2">Subtotal</p>
                      <p className="font-bold text-sm sm:text-base">$100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 col-span-12">
              <div className="bg-gray-50 rounded-md px-5 py-3">
                <h2 className="text-gray-800 font-semibold border-b border-gray-200 pb-3 mb-3">
                  Summary
                </h2>
                <div className="flex justify-between">
                  <div className="text-gray-800">Subtotal</div>
                  <div className="text-gray-800">$100</div>
                </div>
                <div className="flex pt-3">
                  <Link
                    to="/checkout"
                    className="btn-account px-3 py-1.5 w-full text-sm rounded-md text-center font-semibold shadow-md transition duration-300"
                  >
                    Procced to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cart Content Section End */}
      </Layout>
    </>
  );
};

export default Cart;
