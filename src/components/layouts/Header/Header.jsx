import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import Logo from "../../../assets/logo/logo.png";
import axios from "../../../common/userAxios";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    // Fetch Featured Products from API Section Start
    const getCategories = async () => {
        try {
            const { success, data } = await axios.get("/home/get-categories");
            if (success && data) {
                setCategories(Array.isArray(data) ? data : []);
            } else {
                setCategories([]);
            }
        } catch (error) {
            console.log(error.message || "Failed to fetch categories");
            setCategories([]);
        }
    }
    // Fetch Featured Products from API Section End

    // Fetch featured products on component mount Section Start
    useEffect(() => {
        getCategories();
    }, []);
    // Fetch featured products on component mount Section End
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="bg-orange-300 hidden md:block">
          <div className="text-sm max-w-360 mx-auto py-1.5 lg:px-8 px-5">
            Free Delivery on Your First Order!
          </div>
        </div>
        <div className="max-w-360 mx-auto lg:py-3 py-3 lg:px-8 px-5 flex justify-between items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-32 h-10 lg:w-40 lg:h-13"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex text-lg text-gray-800 space-x-5 items-center">
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>
            {categories.map((category) => {
              return (
                <Link key={category._id || category.id} to={`/shop?category=${category._id}`} className="hover:text-orange-500">
                  {category.name}
                </Link>
              );
            })}
            <Link to="/cart" className="relative">
              <span className="bg-red-400 text-sm rounded-[50%] flex justify-center items-center text-white absolute left-2 w-6 h-6 -top-4.5">
                0
              </span>
              <IoCartOutline className="mt-1" size={20} />
            </Link>
            <Link
              to="/login"
              className="btn-account px-3 py-1.5 ms-3 text-sm rounded-md text-gray-800"
            >
              {" "}
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-800 hover:text-orange-500"
          >
            {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden text-center bg-white border-t border-gray-200">
            <nav className="flex flex-col px-5 py-4 space-y-4">
              <Link
                to="/"
                className="text-lg text-gray-800 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
                 {categories.map((category) => {
              return (
                <Link key={category._id || category.id} to={`/shop?category=${category._id}`} className="hover:text-orange-500">
                  {category.name}
                </Link>
              );
            })}
            
              <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                <Link className="relative" onClick={() => setIsMenuOpen(false)}>
                  <span className="bg-red-400 text-sm rounded-[50%] flex justify-center items-center text-white absolute left-2 w-6 h-6 -top-4.5">
                    0
                  </span>
                  <IoCartOutline className="mt-1" size={20} />
                </Link>
                <Link
                  className="btn-account px-3 py-1.5 text-sm rounded-md text-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {" "}
                  Login
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
