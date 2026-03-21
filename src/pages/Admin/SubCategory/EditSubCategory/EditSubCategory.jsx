import React, { useEffect, useState, useContext } from "react";
import AdminLayout from "../../../../components/layouts/Admin/AdminLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useForm } from "react-hook-form";
import axios from "../../../../common/adminAxios";
import toast from "react-hot-toast";
import { AdminAuthContext } from "../../../../context/AdminAuth";

const EditSubCategory = () => {
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
  const [categories, setCategories] = useState([]);
  const [subcategory, setSubCategory] = useState({});

  const saveSubCategory = async (formdata) => {
    setLoading(true);
    try {
      const { success, message, data } = await axios.put(
        `/admin/sub-categories/update/${id}`,
        formdata,
      );
      if (success) {
        toast.success(message);
        navigate("/admin/sub-categories");
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

  // Get all categories for dropdown
  const getCategories = async () => {
    try {
      const { success, message, data } = await axios.get("/admin/categories");
      if (success && data) {
        const categoryList = Array.isArray(data) ? data : data.categories || [];
        console.log("Categories:", categoryList); // Debug log
        setCategories(categoryList);
      }
    } catch (err) {
      console.log(err.message || "Something went wrong");
      setCategories([]);
    }
  };

  // Edit SubCategory - fetch current data
  const editSubCategory = async () => {
    try {
      const { success, message, data } = await axios.get(
        `/admin/sub-categories/${id}`,
      );
      if (success) {
        const subCategoryData = data?.subcategory || data;
        setSubCategory(subCategoryData || {});

        // Get the category ID from different possible locations
        const categoryId =
          subCategoryData?.category?._id ||
          subCategoryData?.categoryId ||
          subCategoryData?.category ||
          "";

        reset({
          category: categoryId,
          name: subCategoryData?.name || "",
          status: subCategoryData?.status || "",
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
    getCategories();
    editSubCategory();
  }, [id]);

  return (
    <>
      <AdminLayout onLogout={logout}>
        <div className="rounded-md bg-white px-5 py-4 shadow-md max-w-5xl mx-auto">
          <div className="mb-4 flex justify-between border-b border-gray-200 pb-3 pt-2">
            <h2 className="text-xl font-semibold text-gray-700">
              Edit Sub Category
            </h2>
            <Link
              to={`/admin/sub-categories`}
              className="inline-flex items-center gap-2 border border-slate-200 rounded-md px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
            >
              <IoArrowBack />
              Back
            </Link>
          </div>
          <div className="w-full">
            <div className="p-3">
              <form
                className="space-y-4"
                onSubmit={handleSubmit(saveSubCategory)}
              >
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm text-gray-900 mb-2">
                    Select Category
                  </label>
                  <select
                    {...register("category", {
                      required: "Category field is required",
                    })}
                    className="border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                  >
                    <option value="">Select a Category</option>
                    {Array.isArray(categories) &&
                      categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500">{errors?.category?.message}</p>
                  )}
                </div>
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
                    placeholder="Enter Sub Category Name.."
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
                  {loading ? "Updating..." : "Update Sub Category"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default EditSubCategory;
