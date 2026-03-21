import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts/layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Products = () => {
  const gallery = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dhlveqcny/image/upload/v1768490758/rendering-smart-home-device_udnqm1.jpg",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dhlveqcny/image/upload/v1768490765/levitating-music-headphones-display_x61krq.jpg",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dhlveqcny/image/upload/v1768491199/yoga_egrcch.jpg",
    },
  ];
  const [mainImage, setMainImage] = useState(null);
  const handleGallery = (item) => {
    setMainImage(item);
  };
  useEffect(() => {
    if (gallery) {
      setMainImage(gallery[0]);
    }
  }, []);

  return (
    <>
      <Layout>
        {/* Breadcrumbs Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-auto py-3 sm:py-5">
          <div className="flex gap-x-1 sm:gap-x-2 items-center text-xs sm:text-sm overflow-x-auto  mx-4 px-4 mt-2 mb-1 pt-2 pb-1">
            <Link className="hover:text-blue-600 transition-colors whitespace-nowrap">
              Shop
            </Link>
            <IoIosArrowForward className="shrink-0 text-xs sm:text-sm" />
            <Link className="font-bold whitespace-nowrap">Smart Watch Pro</Link>
          </div>
        </div>
        {/* Breadcrumbs Section End */}

        {/* Products Details Section Start */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-5 col-span-12">
              {/* Product Gallery Section Start */}
              <div className="flex flex-col gap-3">
                <div className="bg-slate-50">
                  {/* Main Images Section Start */}
                  <img
                    src={mainImage?.url}
                    alt="Product Main"
                    className="w-full rounded-md"
                  />
                  {/* Main Images Section End */}
                </div>
                {/* Thumbnail Images Section Start */}
                <div className="grid grid-cols-4 gap-2">
                  {gallery &&
                    gallery.map((item) => {
                      return (
                        <Link key={item.id}>
                          <img
                            src={item.url}
                            onClick={() => handleGallery(item)}
                            alt={`Thumbnail ${item.id}`}
                            className="w-full rounded-md cursor-pointer bg-slate-50 hover:opacity-70 transition-opacity"
                          />
                        </Link>
                      );
                    })}
                </div>
                {/* Thumbnail Images Section End */}
              </div>
              {/* Product Gallery Section End*/}
            </div>
            <div className="lg:col-span-7 col-span-12">
              {/* Product Section Start */}
              <h2 className="font-bold text-2xl text-orange-500">
                Smart Watch Pro
              </h2>

              {/* Price Section Start */}
              <div className="font-bold text-lg mt-3">
                $199.99{" "}
                <span className="text-gray-500 font-normal line-through">$299.99</span>
              </div>
              {/* Price Section end */}

              {/* Short Description Section Start */}
              <div className="text-base text-gray-500 mt-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  nesciunt odio, commodi voluptatem dicta eveniet ullam
                  expedita! Accusamus, alias itaque doloremque, rerum voluptatum
                  saepe illo reprehenderit facilis placeat excepturi beatae.
                </p>
              </div>
              {/* Short Description Section End */}

              {/* Size Section Start */}
              <div className="font-bold text-lg mt-3">Select Size</div>
              <div className="flex gap-x-2 mt-3">
                <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">
                  S
                </div>
                <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">
                  M
                </div>
                <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">
                  L
                </div>
                <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">
                  XL
                </div>
              </div>
              {/* Size Section End */}

              {/* Add to Cart Button Section Start */}
              <div className="mt-8 border-b border-gray-200 pb-8">
                <Link className="btn-account px-5 py-3 text-md rounded-md text-gray-800">
                  Add to Cart
                </Link>
              </div>
              {/* Add to Cart Button Section End */}

              <div className="flex flex-col text-gray-500 mt-5 mb-5 pb-3">
                <p>100% Cotton</p>
                <p>Money Back Guarantee</p>
                <p>Cash on Delivery is available on this product</p>      
              </div>

              {/* Product Section End */}
            </div>
          </div>
        </div>
        {/* Products Details Section End */}
      </Layout>
    </>
  );
};

export default Products;
