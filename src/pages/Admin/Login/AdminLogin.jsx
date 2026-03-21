import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "../../../common/adminAxios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AdminAuthContext } from "../../../context/AdminAuth";

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { login } = useContext(AdminAuthContext);

  const onSubmit = async (formdata) => {
    try {
      const { message, success, data } = await axios.post(
        "/admin/auth/login",
        formdata,
      );
      if (success) {
        const token = data?.token;
        const adminInfo = {
          token,
        };
        localStorage.setItem(
          "shopifynest-admin-info",
          JSON.stringify(adminInfo),
        );
        login(token);
        toast.success(message || "Login successful");
        navigate("/admin/dashboard");
      }
    } catch (error) {
      const status = error?.response?.status;
      const serverMessage = error?.response?.data?.message;
      if (status === 401) {
        toast.error(
          serverMessage || "Invalid credentials",
        );
      } else {
        toast.error(
          serverMessage || "Server error while logging in. Please try again.",
        );
        console.log(error?.message || "Something went wrong. Please try again");
      }
    }
  };

  return (
    <>
      {/* Login Section Start */}
      <div className="bg-gray-200 w-full flex justify-center items-center py-8 px-4 md:py-20">
        <div className="max-w-md w-full shadow-lg bg-white rounded-lg px-6 py-8 md:px-10 md:py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
            Admin Login
          </h1>
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "The email field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="text"
                className="px-4 py-3 border border-gray-300 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                className="px-4 py-3 border border-gray-300 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Enter Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-2 pt-4">
              <button className="btn-account px-5 py-3 w-full text-lg rounded-lg text-center font-semibold shadow-md transition duration-300 cursor-pointer">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Login Section end */}
    </>
  );
};

export default AdminLogin;
