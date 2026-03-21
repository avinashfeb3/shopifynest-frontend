import React from "react";
import Layout from "../../components/layouts/layout";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Layout>
        {/* Register Section Start */}
        <div className="bg-gray-200 w-full min-h-[80vh] flex justify-center items-center py-10 px-4 md:py-20 mb-6">
          <div className="max-w-md w-full shadow-lg bg-white rounded-lg px-6 py-8 md:px-10 md:py-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
              Register
            </h1>
            <form className="space-y-5">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="px-4 py-3 border border-gray-300 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Enter Name"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="px-4 py-3 border border-gray-300 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Enter Email"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="px-4 py-3 border border-gray-300 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Enter Password"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  ConfirmPassword
                </label>
                <input
                  type="password"
                  className="px-4 py-3 border border-gray-300 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Enter Confirm Password"
                />
              </div>
              <div className="flex flex-col space-y-2 pt-4">
                <Link className="btn-account px-5 py-3 w-full text-lg rounded-lg text-center font-semibold shadow-md transition duration-300">
                  Register
                </Link>
              </div>
              <div className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition duration-200"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
        {/* Register Section end */}
      </Layout>
    </>
  );
};

export default Register;
