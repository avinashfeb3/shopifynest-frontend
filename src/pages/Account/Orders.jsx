import React from "react";
import Layout from "../../components/layouts/layout";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import AccountSidebar from "./AccountSidebar";

const Orders = () => {
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
            <Link className="font-bold whitespace-nowrap">Orders</Link>
          </div>
        </div>
        {/* Breadcrumbs Section End */}

        {/* Orders Title Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-6 pb-5">
          <div className="flex text-blue-700 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Orders
          </div>
        </div>
        {/* Orders Title Section End */}

        {/* Orders Content Section Start */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto pt-5 pb-10">
          <div className="grid grid-cols-12 gap-5">
            {/* Sidebar */}
            <div className="col-span-3">
              <AccountSidebar />
            </div>

            {/* Profile Details */}
            <div className="col-span-9">
              <div className="shadow-lg rounded-md mb-10">
                <h2 className="bg-gray-100 px-5 py-3 rounded-t-md text-lg font-semibold">
                  Orders
                </h2>
                <div className="overflow-auto pt-2">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b border-gray-200 text-gray-600">
                        <th className="px-5 py-2">Customer</th>
                        <th className="px-5 py-2">Email</th>
                        <th className="px-5 py-2">Phone</th>
                        <th className="px-5 py-2">Amount</th>
                        <th className="px-5 py-2">Status</th>
                        <th className="px-5 py-2">Date</th>
                        <th className="px-5 py-2">Action</th>
                      </tr>
                    </thead>
                      <tbody>
                      <tr className="text-left border-b border-gray-200">
                        <td className="px-5 py-2 font-bold">Avinash</td>
                        <td className="px-5 py-2">avinash@example.com</td>
                        <td className="px-5 py-2">9868330149</td>
                        <td className="px-5 py-2 font-bold">$100</td>
                        <td className="px-5 py-2">Pending</td>
                        <td className="px-5 py-2">20 Jan 2025</td>
                        <td className="px-5 py-2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Orders Content Section End */}
      </Layout>
    </>
  );
};

export default Orders;
