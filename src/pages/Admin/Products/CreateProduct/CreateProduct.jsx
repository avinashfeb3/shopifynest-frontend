import React, { useState, useContext, useEffect } from "react";
import AdminLayout from "../../../../components/layouts/Admin/AdminLayout";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useForm } from "react-hook-form";
import axios from "../../../../common/adminAxios";
import toast from "react-hot-toast";
import { AdminAuthContext } from "../../../../context/AdminAuth";
import { FaTrashAlt } from "react-icons/fa";

const CreateProduct = () => {
  const { logout } = useContext(AdminAuthContext);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [preview, setPreview] = useState([]);
  const [images, setImages] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // Handle Category Change

  const handleCategoryChange = async (categoryId) => {
    if (!categoryId) {
      setSubCategories([]);
      return;
    }
    await getSubCategories(categoryId);
  };

  // Handle Image Change
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previewURLs = files.map((file) => URL.createObjectURL(file));
    setImages(pre => [...pre, ...files]);
    setPreview(pre => [...pre, ...previewURLs]);
    e.target.value = "";
  };

  // Handle Delete Image
  const handleDelete = (index) => {
    setImages(pre => pre.filter((_, i) => i !== index));
    setPreview(pre => pre.filter((_, i) => i !== index));
  };
  
  // save product
  const saveProduct = async (frmData) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", frmData.name);
      formData.append("description", frmData.description || "");
      formData.append("price", frmData.price);
      formData.append("discount_price", frmData.discount_price || "");
      formData.append("qty", frmData.qty);
      formData.append("sku", frmData.sku);
      formData.append("status", frmData.status || "inactive");
      formData.append("category", frmData.category);
      formData.append("subcategory", frmData.subcategory || "");
      formData.append("brand", frmData.brand || "");
      formData.append("is_featured", frmData.is_featured || "no");
      formData.append("sizes", frmData.sizes || "");

      images.forEach((image) => {
        formData.append("images", image, image.name);
      });

      const { message, success, data } = await axios.post(
        "/admin/products/create",
        formData,
      );
      if (success) {
        toast.success(message);
        navigate("/admin/products");
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error(error.message || "Failed to create product");
      }
    }
  };

  // Get Categories API Section Start
  const getCategories = async () => {
    try {
      const response = await axios.get("/admin/categories");
      if (response.success && response.data) {
        setCategories(
          Array.isArray(response.data)
            ? response.data
            : response.data.categories || [],
        );
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error(err.message || "Failed to load categories");
      }
    }
  };
  // Get Categories API Section End

  // Sub Categories API Section Start
  const getSubCategories = async (category_id) => {
    try {
      const response = await axios.get(
        `/admin/sub-categories?category_id=${category_id}`,
      );
      if (response.success && response.data) {
        setSubCategories(
          Array.isArray(response.data)
            ? response.data
            : response.data.subCategories || [],
        );
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        toast.error(err?.response?.data?.message);
      } else {
        toast.error(err.message || "Failed to load subcategories");
      }
    }
  };
  // Sub Categories API Section End

  // Brand API Section Start
  const getBrands = async () => {
    try {
      const response = await axios.get("/admin/brands");
      if (response.success && response.data) {
        setBrands(
          Array.isArray(response.data)
            ? response.data
            : response.data.brands || [],
        );
      }
    } catch (err) {
      if (err?.response?.status === 400) {
        toast.error(err?.response?.data?.message);
      } else {
        toast.error(err.message || "Failed to load brands");
      }
    }
  };
  // Brand API Section End

  // useEffect to fetch categories and brands
  useEffect(() => {
    getCategories();
    getBrands();
  }, []);

  return (
    <>
      <AdminLayout onLogout={logout}>
        <div className="px-5 py-4">
          <div className="mb-4 flex justify-between border-b bg-white rounded-md px-5 py-3 border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700">
              Create Product
            </h2>
            <Link
              to={`/admin/products`}
              className="inline-flex items-center gap-2 border border-slate-200 rounded-md px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
            >
              <IoArrowBack />
              Back
            </Link>
          </div>
          <form onSubmit={handleSubmit(saveProduct)}>
            <div className="grid grid-cols-12 gap-4">
              <div className="md:col-span-9 col-span-12">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="space-y-4">
                    {/* Product Name */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="name"
                        className="text-sm text-gray-900 mb-2"
                      >
                        Product Name
                      </label>
                      <input
                        {...register("name", {
                          required: "Product Name field is required",
                        })}
                        type="text"
                        className="border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Enter Product Name.."
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="description"
                        className="text-sm text-gray-900 mb-2"
                      >
                        Description
                      </label>
                      <textarea
                        type="text"
                        className="border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Enter Product Description.."
                        rows={4}
                        {...register("description")}
                      ></textarea>
                    </div>

                    {/* Price & Discount Price */}
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-6">
                        <div className="flex flex-col">
                          <label
                            htmlFor="price"
                            className="text-sm text-gray-900 mb-2"
                          >
                            Price
                          </label>
                          <input
                            type="number"
                            step="0.01"
                            {...register("price", {
                              required: "Price field is required",
                            })}
                            className="border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                            placeholder="Enter Product Price.."
                          />
                          {errors.price && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.price.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="flex flex-col">
                          <label
                            htmlFor="discount_price"
                            className="text-sm text-gray-900 mb-2"
                          >
                            Discount Price
                          </label>
                          <input
                            type="number"
                            step="0.01"
                            className="border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                            placeholder="Enter Discount Price.."
                            {...register("discount_price")}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Qty & SKU */}
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-6">
                        <div className="flex flex-col">
                          <label
                            htmlFor="qty"
                            className="text-sm text-gray-900 mb-2"
                          >
                            Qty
                          </label>
                          <input
                            type="number"
                            step="1"
                            {...register("qty", {
                              required: "Quantity field is required",
                            })}
                            className="border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                            placeholder="Enter Quantity.."
                          />
                          {errors.qty && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.qty.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="flex flex-col">
                          <label
                            htmlFor="sku"
                            className="text-sm text-gray-900 mb-2"
                          >
                            SKU
                          </label>
                          <input
                            type="text"
                            {...register("sku", {
                              required: "SKU field is required",
                            })}
                            className="border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                            placeholder="Enter SKU.."
                          />
                          {errors.sku && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.sku.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Sizes */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="sizes"
                        className="text-sm text-gray-900 mb-2"
                      >
                        Sizes <span className="text-red-500">*</span>
                        <span className="text-gray-400 text-xs ml-1">
                          (comma separated, e.g. S,M,L,XL)
                        </span>
                      </label>
                      <input
                        type="text"
                        {...register("sizes", {
                          required: "Sizes field is required",
                        })}
                        className="border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="e.g. S,M,L,XL"
                      />
                      {errors.sizes && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.sizes.message}
                        </p>
                      )}
                    </div>
                    {/* Status */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="status"
                        className="text-sm text-gray-900 mb-2"
                      >
                        Status
                      </label>
                      <select
                        {...register("status")}
                        className="border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                      >
                        <option value="">Select Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                    {/* Product Gallery */}
                    <div className="flex flex-col">
                      <label htmlFor="images" className="text-sm text-gray-900 mb-2">
                        Product Gallery
                      </label>

                      <div className="flex flex-col">
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageChange}
                          className="border border-gray-200 p-2 rounded"
                        />

                        <div className="grid grid-cols-5 gap-2 mt-3">
                          {preview.map((image, index) => (
                            <div
                              key={index}
                              className="bg-gray-100 h-40 rounded-lg flex justify-center items-center overflow-hidden relative"
                            >
                              <img
                                src={image}
                                alt="preview"
                                className="w-full h-full object-cover"
                              />

                              <button
                                type="button"
                                onClick={() => handleDelete(index)}
                                className="absolute text-red-500 right-2 top-2 bg-white p-1 rounded-full shadow cursor-pointer hover:text-red-700"
                              >
                                <FaTrashAlt />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-green-500 text-white px-4 py-1.5 rounded-md mt-3 cursor-pointer"
                    >
                      {loading ? "Creating..." : "Create"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 col-span-12 space-y-3">
                {/* Category */}
                <div className="shadow-md bg-white px-5 py-4 rounded-md">
                  <h2 className="text-lg font-bold mb-4">Product Category</h2>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="category"
                        className="text-sm text-gray-900 mb-2 inline-block"
                      >
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register("category", {
                          required: "Category field is required",
                          onChange: (event) =>
                            handleCategoryChange(event.target.value),
                        })}
                        className="w-full border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                      >
                        <option value="">Select Category</option>
                        {categories &&
                          categories.map((category) => (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          ))}
                      </select>
                      {errors.category && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.category.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="subCategory"
                        className="text-sm text-gray-900 mb-2 inline-block"
                      >
                        Sub Category
                      </label>
                      <select
                        {...register("subcategory")}
                        className="w-full border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                      >
                        <option value="">Select a Sub Category</option>
                        {subCategories &&
                          subCategories.map((subCategory) => (
                            <option
                              key={subCategory._id}
                              value={subCategory._id}
                            >
                              {subCategory.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Brand */}
                <div className="shadow-md bg-white px-5 py-4 rounded-md">
                  <h2 className="text-lg font-bold mb-2">Product Brand</h2>
                  <div>
                    <label
                      htmlFor="brand"
                      className="text-sm text-gray-900 mb-2 inline-block"
                    >
                      Brand
                    </label>
                    <select
                      {...register("brand")}
                      className="w-full border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    >
                      <option value="">Select a Brand</option>
                      {brands &&
                        brands.map((brand) => (
                          <option key={brand._id} value={brand._id}>
                            {brand.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                {/* Featured */}
                <div className="shadow-md bg-white px-5 py-4 rounded-md">
                  <h2 className="text-lg font-bold mb-2">Featured Product</h2>
                  <div>
                    <select
                      {...register("is_featured")}
                      className="w-full border border-gray-200 px-3 py-2 mt-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    >
                      <option value="">Select a Featured Product</option>
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </AdminLayout>
    </>
  );
};

export default CreateProduct;
