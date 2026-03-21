import React, { useEffect, useState, useContext } from "react";
import AdminLayout from "../../../../components/layouts/Admin/AdminLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useForm } from "react-hook-form";
import axios from "../../../../common/adminAxios";
import toast from "react-hot-toast";
import { AdminAuthContext } from "../../../../context/AdminAuth";

const EditCategory = () => {
  const { logout } = useContext(AdminAuthContext);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({});

  const saveCategory = async (formdata) => {
    setLoading(true);
    try {
      const { success, message, data } = await axios.put(
        `/admin/categories/update/${id}`,
        formdata,
      );
      if (success) {
        toast.success(message);
        navigate("/admin/categories");
      }
    } catch (err) {
      if (err.status === 400) {
        toast.error(err?.response?.data?.message);
      } else {
        console.log(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  // Edit Category
  const editCategory = async () => {
    try {
      const { success, message, data } = await axios.get(
        `/admin/categories/${id}`,
      );
      if (success) {
        const categoryData = data?.category || data;
        setCategory(categoryData || {});
        reset({
          name: categoryData?.name || "",
          status: categoryData?.status || "",
        });
      }
    } catch (err) {
      if (err.status === 400) {
        toast.error(err?.response?.data?.message);
      } else {
        console.log(err.message || "Something went wrong");
      }
    }
  };

  useEffect(() => {
    editCategory();
  }, [id]);

  return (
    <>
      <AdminLayout onLogout={logout}>
        <div className="rounded-md bg-white px-5 py-4 shadow-md">
          <div className="mb-4 flex justify-between border-b border-gray-200 pb-3 pt-2">
            <h2 className="text-xl font-semibold text-gray-700">
              Edit Categories
            </h2>
            <Link
              to={`/admin/categories`}
              className="inline-flex items-center gap-2 border border-slate-200 rounded-md px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
            >
              <IoArrowBack />
              Back
            </Link>
          </div>
          <div className="w-full">
            <div className="p-3">
              <form className="space-y-4" onSubmit={handleSubmit(saveCategory)}>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    {...register("name", {
                      required: "Name field is required",
                    })}
                    type="text"
                    className="border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Enter Catgories Name.."
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors?.name?.message}</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm text-gray-900 mb-2">
                    Status
                  </label>
                  <select
                    {...register("status", {
                      required: "Status field is required",
                    })}
                    className="border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                  >
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  {errors.status && (
                    <p className="text-red-500">{errors?.status?.message}</p>
                  )}
                </div>
                <button
                  disabled={loading}
                  className="bg-yellow-500 text-white px-4 py-1.5 rounded-md mt-3 cursor-pointer"
                >
                  {loading ? "Updating..." : "Edit Categories"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default EditCategory;
