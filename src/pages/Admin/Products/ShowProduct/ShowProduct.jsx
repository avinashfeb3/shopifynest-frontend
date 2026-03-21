import React, { useState, useContext, useEffect } from "react";
import AdminLayout from "../../../../components/layouts/Admin/AdminLayout";
import { Link } from "react-router-dom";
import axios from "../../../../common/adminAxios";
import { AdminAuthContext } from "../../../../context/AdminAuth";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import toast from "react-hot-toast";

const ShowProduct = () => {
  const { logout } = useContext(AdminAuthContext);
  const [products, setProducts] = useState([]);

  // Show All Products API Section Start
  const getProducts = async () => {
    try {
      const { success, message, data } = await axios.get("/admin/products/all");
      if (success && data) {
        setProducts(Array.isArray(data) ? data : data.products || []);
      }
    } catch (err) {
      if (err.status === 400) {
        toast.error(err?.response?.data?.message);
      } else {
        console.log(err.message || "Something went wrong");
      }
    }
  };
  // Show All Products API Section End

  // Delete Products API Section Start
  const deletedProducts = async (productId) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        const { success, message, data } = await axios.delete(
          `/admin/products/${productId}`,
        );
        if (success) {
          toast.success(message);
          getProducts();
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
  // Delete Products API Section End

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <AdminLayout onLogout={logout}>
        <div className="rounded-md bg-white px-5 py-5 shadow-md">
          <div className="flex justify-between border-b border-gray-200 pb-3 pt-1 items-center">
            <h2 className="text-xl font-semibold text-gray-700">
              All Products
            </h2>
            <Link
              to={`/admin/products/create`}
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
                  <th className="px-3 py-2 text-left">Image</th>
                  <th className="px-3 py-2 text-left">Name</th>
                  <th className="px-3 py-2 text-left">Category</th>
                  <th className="px-3 py-2 text-left">Price</th>
                  <th className="px-3 py-2 text-left">Qty</th>
                  <th className="px-3 py-2 text-left">Featured</th>
                  <th className="px-3 py-2 text-left">Status</th>
                  <th className="px-3 py-2 text-center" width="100">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product) => {
                    return (
                      <tr
                        key={`${product._id}`}
                        className="bg-white border-b border-gray-300"
                      >
                        <td className="px-3 py-2 text-left">
                          <div className="flex">
                            {
                              product.gallery && product.gallery.length > 0 ? (
                                <img src={product.gallery[0].url} alt={product.name} className="w-16 h-16 object-cover rounded mr-4" />
                              ) : (
                                <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded mr-4">
                                  <span className="text-gray-500 text-xs text-center font-medium">No Image</span>
                                </div>
                              )
                            }
                          </div>

                        </td>
                        <td className="px-3 py-2 text-left">{product.name}</td>
                        <td className="px-3 py-2 text-left">
                          {product.category?.name}
                        </td>
                        <td className="px-3 py-2 text-left">
                          ${product.price}
                        </td>
                        <td className="px-3 py-2 text-left">
                          {product.quantity}
                        </td>
                        <td className="px-3 py-2 text-left">
                          {product.isFeatured.toLowerCase() ===
                            "yes" ? (
                            <p className="text-green-500">Yes</p>
                          ) : (
                            <p className="text-red-500">No</p>
                          )}
                        </td>
                        <td className="px-3 py-2 text-left">
                          <span
                            className={`inline-block rounded-md px-3 py-1 ${product.status.toLowerCase() === "active"
                              ? "bg-green-600"
                              : "bg-red-600"
                              }`}
                          >
                            <p className="text-white text-sm">
                              {product.status.toLowerCase() === "active"
                                ? "Active"
                                : "Inactive"}
                            </p>
                          </span>
                        </td>
                        <td className="px-3 py-2 text-left">
                          <div className="flex justify-center space-x-1">
                            <Link
                              to={`/admin/products/edit/${product._id}`}
                              className="text-yellow-500"
                              title="Edit"
                            >
                              <BsPencilSquare />
                            </Link>{" "}
                            <Link
                              onClick={() => deletedProducts(product._id)}
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
  );
};

export default ShowProduct;
