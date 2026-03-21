import React from "react";
import headphones from "../../../assets/products/headphones.jpg";
import smartwatches from "../../../assets/products/smartwatches.jpg";
import yogaMat from "../../../assets/products/yoga_mat.jpg";
import backpack from "../../../assets/products/backpack.jpg";
import sunglasses from "../../../assets/products/sunglasses.jpg";
import { Link } from "react-router-dom";

const LatestProducts = () => {
    const products= [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 79.99,
            cross_price: 99.99,
            image: headphones
        },
        {
            id: 2,
            name: "Smart Watch Pro",
            price: 199.99,
            cross_price: 299.99,
            image: smartwatches
        },
        {
            id: 3,
            name: "Yoga Mat Premium",
            price: 34.99,
            cross_price: 49.99,
            image: yogaMat
        },
        {
            id: 4,
            name: "Backpack Travel",
            price: 69.99,
            cross_price: 89.99,
            image: backpack
        },
        {
            id: 5,
            name: "Sunglasses Classic",
            price: 39.99,
            cross_price: 59.99,
            image: sunglasses
        }
    ]
  return (
    <>
      <div className="max-w-360 mx-auto lg:px-8 px-4 sm:px-5 py-10">
        <h2 className="text-indigo-700 text-4xl font-medium pb-10">
          Latest <span className="text-gray-700"> Products</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {
                products && products.map(products => {
                    return (
                        <div key={products.id}>
                            <div className="bg-slate-100 overflow-hidden rounded-lg mb-3">
                                <img
                                    className="w-full h-100 object-cover duration-500 ease-in-out transition-transform hover:scale-110"
                                    src={products.image}
                                    alt={products.name}
                                />
                            </div>
                            <Link to={`/products`}>
                            <h3 className="text-lg text-gray-800 font-semibold hover:text-blue-600 transition-colors mb-1 line-clamp-2">
                                {products.name}
                            </h3>
                            </Link>
                            <p className="text-base text-gray-700 font-semibold">
                                ${products.price} {"   "}
                                <span className="line-through text-gray-500">
                                    ${products.cross_price}
                                </span>
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

export default LatestProducts;
