import React from "react";
import { Link } from "react-router-dom";

const PersonalInfo = () => {
  return (
    <>
      <div className="shadow-lg rounded-md mb-10">
        <h2 className="bg-gray-100 px-5 py-3 rounded-t-md text-lg font-semibold">
          Personal Information
        </h2>
        <form className="space-y-4 py-3 px-5">
          <div className="flex flex-col pb-1 pt-1">
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input
              type="text"
              className="px-3 py-2 border border-gray-300 shadow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter Name"
            />
          </div>
          <div className="flex flex-col pb-1">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="text"
              className="px-3 py-2 border border-gray-300 shadow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2">
              Phone
            </label>
            <input
              type="tel"
              className="px-3 py-2 border border-gray-300 shadow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Enter Phone No."
            />
          </div>
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

export default PersonalInfo;
