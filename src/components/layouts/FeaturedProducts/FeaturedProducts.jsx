import React from "react";
import classicCottonTshirt from "../../../assets/products/classic-cotton-tshirt.jpg";
import jeans from "../../../assets/products/jeans.avif";
import leatherJacket from "../../../assets/products/leather-jacket.jpg";
import sportShoes from "../../../assets/products/sport-shoes.jpg";
import casualSummerDress from "../../../assets/products/casual-summer-dress.avif";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
    const products= [
        {
            id: 1,
            name: "Classic Cotton T-Shirt",
            price: 29.99,
            cross_price: 39.99,
            image: classicCottonTshirt
        },
        {
            id: 2,
            name: "Slim Fit Denim Jeans",
            price: 59.99,
            cross_price: 79.99,
            image: jeans
        },
        {
            id: 3,
            name: "Leather Jacket",
            price: 189.99,
            cross_price: 249.99,
            image: leatherJacket
        },
        {
            id: 4,
            name: "Running Sports Shoes",
            price: 89.99,
            cross_price: 119.99,
            image: sportShoes
        },
        {
            id: 5,
            name: "Casual Summer Dress",
            price: 45.99,
            cross_price: 65.99,
            image: casualSummerDress
        }
    ]
  return (
    <>
      <div className="max-w-360 mx-auto lg:px-8 px-4 sm:px-5 py-10">
        <h2 className="text-orange-500 text-4xl font-medium pb-10">
          Featured <span className="text-gray-700">Products</span>
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

export default FeaturedProducts;
