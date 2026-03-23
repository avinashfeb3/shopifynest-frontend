import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../../assets/banner/banner.jpg";

const Hero = () => {
  return (
    <>
      <div className="bg-slate-50">
        <div className="max-w-360 mx-auto lg:px-8 px-4 sm:px-5">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:py-20 py-12 lg:gap-8 gap-6">
            {/* Left Box Section Start  */}
            <div className="space-y-6 lg:py-10 py-0 lg:pr-20 pr-0 order-2 lg:order-1">
              <h2 className="lg:text-5xl text-3xl sm:text-4xl text-gray-700 font-bold lg:leading-14 leading-10">
                Discover Your Style with Our Collections
              </h2>
              <p className="text-gray-800 text-base sm:text-lg">
                Explore our curated selection of premium products designed to
                elevate your lifestyle. Quality meets style in every piece.
              </p>
              <Link to="/shop" className="btn-account px-8 py-2.5 text-sm sm:text-md rounded-md text-gray-800 inline-block">
                Shop Now
              </Link>
            </div>
            {/* Left Box Section End */}

            {/* Right Box Section Start  */}
            <div className="relative order-1 lg:order-2">
              <img
                src={HeroImg}
                alt="Banner Image"
                className="rounded-2xl object-cover lg:h-75 h-56 sm:h-80 w-full"
              />
            </div>
            {/* Right Box Section End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
