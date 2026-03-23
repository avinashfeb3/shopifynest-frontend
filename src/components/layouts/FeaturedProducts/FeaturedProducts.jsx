import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../common/userAxios";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    // Fetch Featured Products from API Section Start
    const getFeaturedProducts = async () => {
        try {
            const { success, data } = await axios.get("/home/featured-products");
            if (success && data) {
                setProducts(Array.isArray(data) ? data : data.products || data.featuredProducts || []);
            } else {
                setProducts([]);
            }
        } catch (error) {
            console.log(error.message || "Failed to fetch featured products");
            setProducts([]);
        }
    }
    // Fetch Featured Products from API Section End

    // Fetch featured products on component mount Section Start
    useEffect(() => {
        getFeaturedProducts();
    }, []);
    // Fetch featured products on component mount Section End

    return (
        <>
            <div className="max-w-360 mx-auto lg:px-8 px-4 sm:px-5 py-10">
                <h2 className="text-orange-500 text-4xl font-medium pb-10">
                    Featured <span className="text-gray-700">Products</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {
                        products.map((product) => {
                            const firstImageUrl = product?.gallery?.[0]?.url;
                            const discountPrice = product?.discountPrice ?? product?.discount_price ?? product?.cross_price;

                            return (
                                <div key={product._id || product.id}>
                                    <div className="bg-slate-100 overflow-hidden rounded-lg mb-3">
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
                                    <Link to={`/products`}>
                                        <h3 className="text-lg text-gray-800 font-semibold hover:text-blue-600 transition-colors mb-1 line-clamp-2">
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
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default FeaturedProducts;
