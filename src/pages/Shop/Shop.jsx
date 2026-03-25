import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts/layout";
import { Link, useLocation, useParams } from "react-router-dom";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { FiFilter, FiPackage } from "react-icons/fi";
import axios from "../../common/userAxios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesIfNeeded } from "../../redux/slices/categorySlice";

const Shop = () => {
  const location = useLocation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const selectedCategoryId = new URLSearchParams(location.search).get("category");
  const [subcategories, setSubcategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [subCategoryChecked, setSubCategoryChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const categoryId = id || selectedCategoryId;
  const category =
    categories.find((item) => String(item._id || item.id) === String(categoryId)) || {};

  const priceRanges = [
    { id: "under-500", label: "Under Rs 500", min: 0, max: 500 },
    { id: "500-1000", label: "Rs 500 - Rs 1000", min: 500, max: 1000 },
    { id: "1000-above", label: "Above Rs 1000", min: 1000, max: Infinity },
  ];

  const visibleProducts = products.filter((product) => {
    const productCategoryId = product?.category?._id || product?.category || product?.categoryId || product?.category_id;
    const productSubCategoryId =
      product?.subcategory?._id ||
      product?.subCategory?._id ||
      product?.subcategory ||
      product?.subCategory ||
      product?.sub_category ||
      product?.subcategoryId ||
      product?.sub_category_id;
    const productBrandId =
      product?.brand?._id ||
      product?.brand ||
      product?.brandId ||
      product?.brand_id;
    const rawProductPrice =
      product?.price ??
      product?.sellingPrice ??
      product?.selling_price ??
      product?.finalPrice ??
      product?.final_price;
    const productPrice = Number(String(rawProductPrice ?? "").replace(/[^\d.]/g, ""));

    const matchesCategory = selectedCategoryId ? String(productCategoryId) === String(selectedCategoryId) : true;
    const matchesSubCategory =
      subCategoryChecked.length > 0
        ? subCategoryChecked.some((selectedId) => String(selectedId) === String(productSubCategoryId))
        : true;
    const matchesBrand =
      brandChecked.length > 0
        ? brandChecked.some((selectedId) => String(selectedId) === String(productBrandId))
        : true;
    const selectedRange = priceRanges.find((range) => range.id === selectedPriceRange);
    const matchesPrice =
      !selectedRange || Number.isNaN(productPrice)
        ? !selectedRange
        : productPrice >= selectedRange.min && productPrice < selectedRange.max;

    return matchesCategory && matchesSubCategory && matchesBrand && matchesPrice;
  });

  // Fetch Featured Products from API Section Start
  const getProducts = async () => {
    setLoading(true);
    try {
      let searchParams = "";
      if (id) {
        searchParams = new URLSearchParams({ category: id }).toString();
      }
      if (subCategoryChecked.length > 0) {
        searchParams += `${searchParams ? "&" : ""}subcategories=${subCategoryChecked.join(",")}`;
      }
      if (brandChecked.length > 0) {
        searchParams += `${searchParams ? "&" : ""}brands=${brandChecked.join(",")}`;
      }

      const { success, data } = await axios.get(`/home/get-products${searchParams ? `?${searchParams}` : ""}`);
      if (success && data) {
        setProducts(Array.isArray(data) ? data : data.products || data.featuredProducts || []);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.log(error.message || "Failed to fetch featured products");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }
  // Fetch Featured Products from API Section End

  
  const getSubCategories = async () => {
    try {
      if (!categoryId) {
        setSubcategories([]);
        return;
      }
      const { success, data } = await axios.get("/home/get-subcategories", {
        params: {
          category_id: categoryId
        }
      });
      if (success && data) {
        setSubcategories(Array.isArray(data) ? data : []);
      } else {
        setSubcategories([]);
      }
    } catch (error) {
      console.log(error.message || "Failed to fetch subcategories");
      setSubcategories([]);
    }
  }

  const getbrands = async () => {
    try {
      const { success, data } = await axios.get("/home/get-brands");
      if (success && data) {
        setBrands(Array.isArray(data) ? data : []);
      } else {
        setBrands([]);
      }
    } catch (error) {
      console.log(error.message || "Failed to fetch brands");
      setBrands([]);
    }
  }

  useEffect(() => {
    dispatch(fetchCategoriesIfNeeded());
  }, [dispatch]);


  useEffect(() => {
    getSubCategories();
    getbrands();
    setSubCategoryChecked([]);
    setBrandChecked([]);
    setSelectedPriceRange("");
  }, [categoryId]);


  // Fetch featured products on component mount Section Start
  useEffect(() => {
    getProducts();
  }, [id, subCategoryChecked, brandChecked, selectedPriceRange]);
  // Fetch featured products on component mount Section End

  const handleSubCategory = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSubCategoryChecked(prev => [...prev, value]);
    } else {
      setSubCategoryChecked(prev => prev.filter(item => item !== value));
    }
  }

  const handleBrand = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setBrandChecked(prev => [...prev, value]);
    } else {
      setBrandChecked(prev => prev.filter(item => item !== value));
    }
  }

  const handlePriceChange = (e) => {
    setSelectedPriceRange(e.target.value);
  }

  const resetFilters = () => {
    setSubCategoryChecked([]);
    setBrandChecked([]);
    setSelectedPriceRange("");
  }

  return (
    <>
      <Layout>
        {/* Breadcrumbs Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-4 py-3 sm:py-5">
          <div className="flex gap-x-1 sm:gap-x-2 items-center text-xs sm:text-sm overflow-x-auto">
            <Link className="hover:text-blue-600 transition-colors whitespace-nowrap">Home</Link>
            <IoIosArrowForward className="shrink-0 text-xs sm:text-sm" />
            <Link className="font-bold whitespace-nowrap">{category.name}</Link>
          </div>
        </div>
        {/* Breadcrumbs Section End */}

        {/* Title Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-4">
          <div className="flex text-blue-700 text-2xl sm:text-3xl lg:text-4xl font-bold">{category.name}</div>
        </div>
        {/* Title Section End */}

        {/* Main content Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-4 mt-4 sm:mt-5">
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FiFilter className="text-lg" />
              <span>Filters</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Sidebar Section Start */}
            <div className="hidden lg:block lg:col-span-3 pb-5">
              <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-3">
                <span className="text-xl lg:text-2xl font-bold">Filters</span>
                <span className="text-sm  font-semibold cursor-pointer hover:text-blue-600 transition-colors" onClick={() => resetFilters()}>Clear</span>
              </div>

              {/* Category Filter Section Start */}
              <div className="font-bold pt-2 mb-2">Sub Category</div>
              {
                subcategories && subcategories.map((subcategory) => {
                  return (
                    <div
                      key={subcategory._id || subcategory.id}
                      className="flex items-center space-x-2 mb-1"
                    >
                      <input
                        type="checkbox"
                        id={subcategory._id || subcategory.id}
                        value={subcategory._id}
                        onChange={(e) => handleSubCategory(e)}
                        checked={subCategoryChecked.includes(subcategory._id)}
                        className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm">{subcategory.name}</span>
                    </div>
                  );
                })
              }
              {/* Category Filter Section End */}

              {/* Brands Filter Section Start */}
              <div className="font-bold pt-4 mb-2">Brands</div>
              {
                brands && brands.map((brand) => {
                  return (
                    <div key={brand._id || brand.id} className="flex items-center space-x-2 mb-1">
                      <input
                        type="checkbox"
                        id={brand._id || brand.id}
                        value={brand._id}
                        onChange={(e) => handleBrand(e)}
                        checked={brandChecked.includes(brand._id)}
                        className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm">{brand.name}</span>
                    </div>
                  )
                })
              }
              {/* Brands Filter Section End */}

              {/* Price Filter Section Start */}
              <div className="font-bold pt-4 mb-2">Price Range</div>
              {
                priceRanges.map((priceRange) => {
                  return (
                    <div key={priceRange.id} className="flex items-center space-x-2 mb-1">
                      <input
                        type="radio"
                        name="price"
                        value={priceRange.id}
                        onChange={handlePriceChange}
                        checked={selectedPriceRange === priceRange.id}
                        className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                      />{" "}
                      <span className="text-sm">{priceRange.label}</span>
                    </div>
                  )
                })
              }
              {/* Price Filter Section End */}
            </div>
            {/* Sidebar Section End */}

            {/* Product Section Start */}
            <div className="lg:col-span-9 mb-6 sm:mb-8 lg:mb-10">
              {loading ? (
                <div className="flex items-center justify-center py-16">
                  <div className="h-10 w-10 rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin" />
                </div>
              ) : visibleProducts && visibleProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3x sm:gap-4 lg:gap-5">
                  {visibleProducts.map((product) => {
                    const firstImageUrl = product?.gallery?.[0]?.url;
                    const discountPrice = product?.discountPrice ?? product?.discount_price ?? product?.cross_price;

                    return (
                      <div key={product._id || product.id} className="group">
                        <div className="bg-gray-100 overflow-hidden rounded-lg mb-2 sm:mb-3  cursor-pointer">
                          {
                            firstImageUrl ? (
                              <img src={firstImageUrl} alt={product.name} className="w-full h-100 object-cover duration-500 ease-in-out transition-transform hover:scale-110" />
                            ) : (
                              <div className="w-full h-100 flex items-center justify-center object-cover duration-500 ease-in-out transition-transform hover:scale-110">
                                <span className="text-gray-500 text-xs text-center font-medium">No Image</span>
                              </div>
                            )
                          }
                        </div>
                        <Link to={`/products`} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                          <h3 className="text-sm sm:text-base lg:text-lg text-gray-800 font-semibold mb-1 line-clamp-2 hover:text-blue-600 transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-base text-gray-700 font-semibold">
                          ₹{product.price}
                          {discountPrice !== undefined && discountPrice !== null && (
                            <span className="line-through text-gray-500 ml-2">
                              ₹{discountPrice}
                            </span>
                          )}
                        </p>
                      </div>
                    )
                  })}
                </div>
              ) : selectedPriceRange ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <FiPackage className="text-5xl text-gray-400 mb-4" />

                    <h2 className="text-xl font-semibold text-gray-700">
                      No Products Found
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Sorry, we couldn't find any products matching your selection.
                    </p>

                    <a href="/shop"
                      className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Continue Shopping
                    </a>
                </div>
              ) : null}
            </div>
            {/* Product Section End */}
          </div>
        </div>

        {/* Main content Section End */}

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={() => setIsFilterOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed inset-y-0 left-0 w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <span className="text-xl font-bold">Filters</span>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <IoMdClose className="text-xl" />
                  </button>
                </div>

                {/* Drawer Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  {/* Category Filter Section Start */}
                  <div className="font-bold mb-3">Sub Category</div>
                  {
                    subcategories && subcategories.map((subcategory) => {
                      return (
                        <div
                          key={subcategory._id || subcategory.id}
                          className="flex items-center space-x-2 mb-1"
                        >
                          <input
                            type="checkbox"
                            id={subcategory._id || subcategory.id}
                            value={subcategory._id}
                            onChange={(e) => handleSubCategory(e)}
                            checked={subCategoryChecked.includes(subcategory._id)}
                            className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                          />
                          <span className="text-sm">{subcategory.name}</span>
                        </div>
                      );
                    })
                  }
                  {/* Category Filter Section End */}

                  {/* Brands Filter Section Start */}
                  <div className="font-bold mb-3">Brands</div>
                  {
                    brands && brands.map((brand) => {
                      return (
                        <div key={brand._id || brand.id} className="flex items-center space-x-2 mb-2">
                          <input
                            type="checkbox"
                            id={brand._id || brand.id}
                            value={brand._id}
                            onChange={(e) => handleBrand(e)}
                            checked={brandChecked.includes(brand._id)}
                            className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                          />{" "}
                          <span className="text-sm">{brand.name}</span>
                        </div>
                      )
                    })
                  }
                  {/* Brands Filter Section End */}

                  {/* Price Filter Section Start */}
                  <div className="font-bold mb-3">Price Range</div>
                  {
                    priceRanges.map((range) => {
                      return (
                        <div key={range.id} className="flex items-center space-x-2 mb-1">
                          <input
                            type="radio"
                            name="price"
                            value={range.id}
                            onChange={handlePriceChange}
                            checked={selectedPriceRange === range.id}
                            className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500"
                          />{" "}
                          <span className="text-sm">{range.label}</span>
                        </div>
                      )
                    })
                  }
                  {/* Price Filter Section End */}
                </div>

                {/* Drawer Footer */}
                <div className="p-4 border-t border-gray-200 flex items-center gap-4">
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Apply Filters
                  </button>

                  <span
                    className="text-sm font-semibold cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => resetFilters()}
                  >
                    Clear
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Shop;
