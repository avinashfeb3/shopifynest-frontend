import React from "react";
import Layout from "../../components/layouts/layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import AccountSidebar from "./AccountSidebar";

const ChangePassword = () => {
  return (
    <>
      <Layout>
        {/* Breadcrumbs Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-6 py-3 sm:py-5">
          <div className="flex gap-x-1 sm:gap-x-2 items-center text-xs sm:text-sm overflow-x-auto">
            <Link
              to="/account"
              className="hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Account
            </Link>
            <IoIosArrowForward className="shrink-0 text-xs sm:text-sm" />
            <Link className="font-bold whitespace-nowrap">Change Password</Link>
          </div>
        </div>
        {/* Breadcrumbs Section End */}

        {/* Change Password Title Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-6 pb-5">
          <div className="flex text-blue-700 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Change Password
          </div>
        </div>
        {/* Change Password Title Section End */}

        {/* Change Password Content Section Start */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto pt-5 pb-10">
          <div className="grid grid-cols-12 gap-5">
            {/* Sidebar */}
            <div className="col-span-3">
              <AccountSidebar />
            </div>

            {/* Change Password Details */}
            <div className="col-span-9">
              <div className="shadow-lg rounded-md mb-10">
                <h2 className="bg-gray-100 px-5 py-3 rounded-t-md text-lg font-semibold mb-3">
                  Change Password
                </h2>
                <form className="space-y-4 py-3 px-5">
                  <div className="flex flex-col pb-1 pt-1">
                    <label htmlFor="oldpassword" className="mb-2">
                      Old Password
                    </label>
                    <input
                      type="password"
                      className="px-3 py-2 border border-gray-300 shadow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="Enter Old Password"
                    />
                  </div>
                  <div className="flex flex-col pb-1">
                    <label htmlFor="newpassword" className="mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="px-3 py-2 border border-gray-300 shadow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="Enter New Password"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="confirmpassword" className="mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="px-3 py-2 border border-gray-300 shadow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="Enter Confirm Password"
                    />
                  </div>
                  <div className="pt-2 pb-3">
                    <Link className="btn-account px-5 py-1.5 text-lg rounded-md text-center font-semibold shadow-md transition duration-300">
                      Update
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Change Password Content Section End */}
      </Layout>
    </>
  );
};

export default ChangePassword;
