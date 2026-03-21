import React, { useEffect, useState, useContext } from "react";
import AdminLayout from "../../../../components/layouts/Admin/AdminLayout";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useForm } from "react-hook-form";
import axios from "../../../../common/adminAxios";
import toast from "react-hot-toast";
import { AdminAuthContext } from "../../../../context/AdminAuth";

const EditBrand = () => {
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
  const [brand, setBrand] = useState({});

  const saveBrand = async (formdata) => {
    setLoading(true);
    try {
      const { success, message, data } = await axios.put(
        `/admin/brands/update/${id}`,
        formdata,
      );
      if (success) {
        toast.success(message);
        navigate("/admin/brands");
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

  // Edit Brand
  const editBrand = async () => {
    try {
      const { success, message, data } = await axios.get(
        `/admin/brands/${id}`,
      );
      if (success) {
        const brandData = data?.brand || data;
        setBrand(brandData || {});
        reset({
          name: brandData?.name || "",
          status: brandData?.status || "",
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
    editBrand();
  }, [id]);

  return (
    <>
      <AdminLayout onLogout={logout}>
        <div className="rounded-md bg-white px-5 py-4 shadow-md">
          <div className="mb-4 flex justify-between border-b border-gray-200 pb-3 pt-2">
            <h2 className="text-xl font-semibold text-gray-700">
              Edit Brands
            </h2>
            <Link
              to={`/admin/brands`}
              className="inline-flex items-center gap-2 border border-slate-200 rounded-md px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
            >
              <IoArrowBack />
              Back
            </Link>
          </div>
          <div className="w-full">
            <div className="p-3">
              <form className="space-y-4" onSubmit={handleSubmit(saveBrand)}>
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
                    placeholder="Enter Brand Name.."
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
                  {loading ? "Updating..." : "Edit Brands"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default EditBrand;
