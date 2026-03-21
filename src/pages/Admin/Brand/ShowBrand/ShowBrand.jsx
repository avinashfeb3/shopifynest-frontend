import React, { useEffect, useState, useContext } from "react";
import AdminLayout from "../../../../components/layouts/Admin/AdminLayout";
import { Link } from "react-router-dom";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import axios from "../../../../common/adminAxios";
import { BsPencilSquare } from "react-icons/bs";
import toast from "react-hot-toast";
import { AdminAuthContext } from "../../../../context/AdminAuth";

const ShowBrand = () => {
   const { logout } = useContext(AdminAuthContext);
    const [brands, setBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

      // Show All Brands API Section Start
  const getBrands = async () => {
    setIsLoading(true);
    try {
      const { success, message, data } = await axios.get("/admin/brands");
      if (success && data) {
        setBrands(Array.isArray(data) ? data : data.brands || []);
      }
    } catch (err) {
      if (err.status === 400) {
        toast.error(err?.response?.data?.message);
      } else {
        console.log(err.message || "Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };
  // Show All Brands API Section End

  // Delete Brands API Section Start
  const deletedBrands = async (brandId) => {
    if (confirm("Are you sure you want to delete this brand?")) {
      try {
        const { success, message, data } = await axios.delete(
          `/admin/brands/${brandId}`,
        );
        if (success) {
          toast.success(message);
          getBrands();
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
    getBrands();
  }, []);
  return (
    <>
      <AdminLayout onLogout={logout}>
        <div className="rounded-md bg-white px-5 py-5 shadow-md">
          <div className="flex justify-between border-b border-gray-200 pb-3 pt-1 items-center">
            <h2 className="text-xl font-semibold text-gray-700">
              All Brands
            </h2>
            <Link
              to={`/admin/brands/create`}
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
                  <th className="px-3 py-2 text-left">Brands Name</th>
                  <th className="px-3 py-2 text-left">Status</th>
                  <th className="px-3 py-2 text-center" width="100">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="3" className="px-3 py-8 text-center text-gray-500">
                      Loading brands...
                    </td>
                  </tr>
                ) : brands && brands.length > 0 ? (
                  brands.map((brand) => {
                    return (
                      <tr
                        key={`${brand._id}`}
                        className="bg-white border-b border-gray-300"
                      >
                        <td className="px-3 py-2 text-left">{brand.name}</td>
                        <td className="px-3 py-2 text-left">
                          <span className={`inline-block rounded-md px-3 py-1 ${
                            brand.status === "active" 
                              ? "bg-green-600" 
                              : "bg-red-600"
                          }`}>
                            <p className="text-white text-sm">
                              {brand.status === "active" ? "Active" : "Inactive"}
                            </p>
                          </span>
                        </td>
                        <td className="px-3 py-2 text-left">
                          <div className="flex justify-center space-x-1">
                            <Link
                              to={`/admin/brands/edit/${brand._id}`}
                              className="text-yellow-500"
                              title="Edit"
                            >
                              <BsPencilSquare />
                            </Link>{" "}
                            <Link
                              onClick={() => deletedBrands(brand._id)}
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
                  })
                ) : (
                  <tr>
                    <td colSpan="3" className="px-3 py-8 text-center text-gray-500">
                      No brands found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    
    </>
  )
}

export default ShowBrand;