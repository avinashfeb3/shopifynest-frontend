import React, { useEffect, useState, useContext } from "react";
import AdminLayout from '../../../../components/layouts/Admin/AdminLayout';
import { Link } from "react-router-dom";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import axios from "../../../../common/adminAxios";
import { BsPencilSquare } from "react-icons/bs";
import toast from "react-hot-toast";
import { AdminAuthContext } from "../../../../context/AdminAuth";


const ShowSubCategory = () => {
    const { logout } = useContext(AdminAuthContext);
    const [subcategories, setSubCategories] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categoriesLoading, setCategoriesLoading] = useState(false);

  // Get all categories for mapping
  const getCategories = async () => {
    setCategoriesLoading(true);
    try {
      const { success, message, data } = await axios.get("/admin/categories");
      if (success && data) {
        const categoryList = Array.isArray(data) ? data : data.categories || [];
        setCategories(categoryList);
      }
    } catch (err) {
      console.log(err.message || "Something went wrong");
    } finally {
      setCategoriesLoading(false);
    }
  };

  // Helper function to get category name by ID
  const getCategoryName = (categoryId) => {
       const category = categories.find(cat => cat._id === categoryId);
    return category?.name || 'N/A';
  };

  // Show All Categories API Section Start
  const getSubCategories = async () => {
    try {
      const { success, message, data } = await axios.get("/admin/sub-categories");
      if (success && data) {
        const subCatList = Array.isArray(data) ? data : data.subcategories || [];
        setSubCategories(subCatList);
      }
    } catch (err) {
      if (err.status === 400) {
        toast.error(err?.response?.data?.message);
      } else {
        console.log(err.message || "Something went wrong");
      }
    }
  };
  // Show All Categories API Section End

    // Delete Categories API Section Start
  const deletedSubCategories = async (categoryId) => {
    if (confirm("Are you sure you want to delete this category?")) {
      try {
        const { success, message, data } = await axios.delete(
          `/admin/sub-categories/${categoryId}`,
        );
        if (success) {
          toast.success(message);
          getSubCategories();
        }
      } catch (err) {
        if (err.status === 400) {
          toast.error(err?.response?.data?.message);
        } else {
          console.log(err.message || "Something went wrong");
        }
      }
    }
  };
  // Delete Categories API Section End

  useEffect(() => {
    getCategories();
    getSubCategories();
  }, []);

  return (
    <>
      <AdminLayout onLogout={logout}>
        <div className="rounded-md bg-white px-5 py-5 shadow-md">
          <div className="flex justify-between border-b border-gray-200 pb-3 pt-1 items-center">
            <h2 className="text-xl font-semibold text-gray-700">
              All Sub Categories
            </h2>
            <Link
              to={`/admin/sub-categories/create`}
              className="inline-flex items-center gap-2 rounded bg-green-600 px-4 py-1.5 text-white"
            >
              <FaPlus />
              Create
            </Link>
          </div>
          <div className="w-full overflow-x-auto my-3 py-3">
            <table className="border border-gray-300 w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-3 py-2 text-left">Category</th>
                  <th className="px-3 py-2 text-left">Sub Category</th>
                  <th className="px-3 py-2 text-left">Status</th>
                  <th className="px-3 py-2 text-center" width="100">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {subcategories &&
                  subcategories.map((subcategory) => {
                    return (
                      <tr
                        key={`${subcategory._id}`}
                        className="bg-white border-b border-gray-300"
                      >
                        <td className="px-3 py-2 text-left">
                          {subcategory.category?.name || 
                           (subcategory.categoryId && getCategoryName(subcategory.categoryId)) || 
                           (subcategory.category && typeof subcategory.category === 'string' && getCategoryName(subcategory.category)) ||
                           'N/A'}
                        </td>
                        <td className="px-3 py-2 text-left">{subcategory.name}</td>
                        <td className="px-3 py-2 text-left">
                          <span className={`inline-block rounded-md px-3 py-1 ${
                            subcategory.status === "active" 
                              ? "bg-green-600" 
                              : "bg-red-600"
                          }`}>
                            <p className="text-white text-sm">
                              {subcategory.status === "active" ? "Active" : "Inactive"}
                            </p>
                          </span>
                        </td>
                        <td className="px-3 py-2 text-left">
                          <div className="flex justify-center space-x-1">
                            <Link
                              to={`/admin/sub-categories/edit/${subcategory._id}`}
                              className="text-yellow-500"
                              title="Edit"
                            >
                              <BsPencilSquare />
                            </Link>{" "}
                            <Link
                              onClick={() => deletedSubCategories(subcategory._id)}
                              className="text-red-500 ml-4"
                              title="Delete"
                            >
                              {" "}
                              <FaRegTrashAlt />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    
    </>
  )
}

export default ShowSubCategory;