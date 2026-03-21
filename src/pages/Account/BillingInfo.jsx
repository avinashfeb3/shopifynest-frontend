import React from "react";
import { Link } from "react-router-dom";

const BillingInfo = () => {
  return (
    <>
      <div className="shadow-lg rounded-md">
        <h2 className="bg-gray-100 px-5 py-3 rounded-t-md text-lg font-semibold">
          Billing Address
        </h2>
        <form className="space-y-4 py-3 px-5">
        {/* Name & Email Section Start */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                className="px-3 py-2 border border-gray-300 shadow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg mb-2">
                Email
              </label>
              <input
                type="text"
                className="px-3 py-2 border border-gray-300 shadow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter Email"
              />
            </div>
          </div>
          {/* Name & Email Section End */}

          {/* Phone Section Start */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="px-3 py-2 border border-gray-300 shadow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter Phone No."
              />
            </div>
          </div>
          {/* Phone Section End */}

          {/* Address Section Start */}
            <div className="flex flex-col pb-1">
            <label htmlFor="address" className="mb-2">
              Address
            </label>
            <textarea
              type="text"
              className="px-3 py-2 border border-gray-300 shadow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter Address" rows={3} cols={10}
            ></textarea>
          </div>
            {/* Address Section End */}

            {/* City & State Section Start */}
            <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="city" className="mb-2">
                City
              </label>
              <input
                type="text"
                className="px-3 py-2 border border-gray-300 shadow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter City"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="state" className="mb-2">
                State
              </label>
              <input
                type="text"
                className="px-3 py-2 border border-gray-300 shadow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter State"
              />
            </div>
          </div>
            {/* City & State Section End */}

            {/* Zip Code Section Start */}
            <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2">
                Zip Code
              </label>
              <input
                type="text"
                className="px-3 py-2 border border-gray-300 shadow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter Zip Code"
              />
            </div>
          </div>
            {/* Zip Code Section End */}

            
          <div className="pt-2 pb-3">
            <Link className="btn-account px-5 py-1.5 text-lg rounded-md text-center font-semibold shadow-md transition duration-300">
              Update
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default BillingInfo;
