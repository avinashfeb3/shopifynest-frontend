import React from "react";
import Layout from "../../components/layouts/layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import smartwatches from "../../assets/products/smartwatches.jpg";

const Checkout = () => {
  return (
    <>
      <Layout>
        {/* Breadcrumbs Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-5 py-3 sm:py-5">
          <div className="flex gap-x-1 sm:gap-x-2 items-center text-xs sm:text-sm">
            <Link className="hover:text-blue-600 transition-colors whitespace-nowrap">
              Home
            </Link>
            <IoIosArrowForward className="shrink-0 text-xs sm:text-sm" />
            <Link className="font-bold whitespace-nowrap">Checkout</Link>
          </div>
        </div>
        {/* Breadcrumbs Section End */}

        {/* Checkout Title Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-5 pb-5">
          <div className="flex text-blue-700 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Checkout
          </div>
        </div>
        {/* Checkout Title Section End */}

        {/* Checkout Form Section Start */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto pb-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-8 col-span-12">
              {/* Billing Form Section Start */}
              <div className="shadow-lg rounded-md px-6 py-5 border border-gray-100">
                <h2 className="text-2xl text-gray-800 font-semibold pb-3 border-b border-gray-200 mb-3">
                  Billing Details
                </h2>
                <form className="space-y-3">
                  <div>
                    <input
                      type="text"
                      className="border border-gray-200 px-3 py-3 rounded-md w-full"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        type="email"
                        className="border border-gray-200 px-3 py-3 rounded-md w-full"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="border border-gray-200 px-3 py-3 rounded-md w-full"
                        placeholder="Enter Phone No"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      className="border border-gray-200 px-3 py-3 rounded-md w-full"
                      placeholder="Enter Address"
                      rows={3}
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        className="border border-gray-200 px-3 py-3 rounded-md w-full"
                        placeholder="Enter City"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="border border-gray-200 px-3 py-3 rounded-md w-full"
                        placeholder="Enter State"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="border border-gray-200 px-3 py-3 rounded-md w-full"
                      placeholder="Enter Zip Code"
                    />
                  </div>
                </form>
              </div>
              {/* Billing Form Section End */}
            </div>
            <div className="lg:col-span-4 col-span-12 mt-5 lg:mt-0">
              {/* Order Summary Section Start */}
              <div className="bg-gray-50 rounded-md p-5 sm:p-8 lg:p-5 shadow-md">
                <h2 className="text-2xl text-gray-800 font-semibold pb-3 border-b border-gray-200 mb-3">
                  Order Summary
                </h2>
                <div className="grid grid-cols-12 gap-3 sm:gap-5 mb-3 pb-3">
                  {/* Image */}
                  <div className="col-span-3 sm:col-span-2">
                    <img
                      src={smartwatches}
                      alt="smartwatch image"
                      className="w-full h-20 sm:h-24 rounded-md bg-slate-50 object-cover"
                    />
                  </div>

                  {/* Title, size, qty */}
                  <div className="col-span-7 sm:col-span-8">
                    {/* title */}
                    <h3 className="text-gray-700 text-xs sm:text-sm font-semibold">
                      Smart Watch Pro
                    </h3>
                    {/* size */}
                    <div className="flex gap-2 sm:gap-5 text-xs sm:text-sm">
                      <div className="text-gray-600 font-semibold">
                        Size: <span className="text-gray-800">L</span>
                      </div>
                      <div className="text-gray-600 font-semibold">
                        Qty: <span className="text-gray-800">1</span>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 text-xs sm:text-sm font-semibold text-right">
                    $100
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-3 sm:gap-5 mb-3 pb-3">
                  {/* Image */}
                  <div className="col-span-3 sm:col-span-2">
                    <img
                      src={smartwatches}
                      alt="smartwatch image"
                      className="w-full h-20 sm:h-24 rounded-md bg-slate-50 object-cover"
                    />
                  </div>

                  {/* Title, size, qty */}
                  <div className="col-span-7 sm:col-span-8">
                    {/* title */}
                    <h3 className="text-gray-700 text-xs sm:text-sm font-semibold">
                      Smart Watch Pro
                    </h3>
                    {/* size */}
                    <div className="flex gap-2 sm:gap-5 text-xs sm:text-sm">
                      <div className="text-gray-600 font-semibold">
                        Size: <span className="text-gray-800">L</span>
                      </div>
                      <div className="text-gray-600 font-semibold">
                        Qty: <span className="text-gray-800">1</span>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 text-xs sm:text-sm font-semibold text-right">
                    $100
                  </div>
                </div>
                {/* Subtotal */}
                <div className="flex py-3 justify-between text-sm text-gray-500 font-semibold">
                  <div>Subtotal</div>
                  <div className="text-right">$200</div>
                </div>

                {/* Total */}
                <div className="flex border-b border-gray-300 pb-5 justify-between text-sm text-gray-900 font-semibold">
                  <div>Total</div>
                  <div className="text-right">$200</div>
                </div>

                {/* Payment Method Section Start */}
                <div className="text-lg text-gray-900 font-bold mt-5">
                  Payment Method
                </div>
                <div className="flex items-center text-gray-800 space-x-5 mt-3">
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="payment" id="cod" checked />
                    <label htmlFor="cod">COD</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="payment" id="stripe" />
                    <label htmlFor="stripe">Stripe</label>
                  </div>
                </div>
                {/* Payment Method Section End */}

                {/* Place Order Button Section Start */}
                <div className="mt-5">
                  <button className="btn-account px-3 py-1.5 w-full text-sm rounded-md text-center font-semibold shadow-md transition duration-300">
                    Place Order Securely
                  </button>
                </div>
                <div className="text-gray-400 text-sm text-center pt-3 pb-0">
                  Secure payment and encrypted checkout
                </div>
                {/* Place Order Button Section End */}
              </div>
              {/* Order Summary Section End */}
            </div>
          </div>
        </div>
        {/* Checkout Form Section End */}
      </Layout>
    </>
  );
};

export default Checkout;
