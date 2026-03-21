import React from "react";
import Layout from "../../components/layouts/layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import AccountSidebar from "./AccountSidebar";
import PersonalInfo from "./PersonalInfo";
import BillingInfo from "./BillingInfo";

const Profile = () => {
  return (
    <>
      <Layout>
        {/* Breadcrumbs Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-6 py-3 sm:py-5">
          <div className="flex gap-x-1 sm:gap-x-2 items-center text-xs sm:text-sm overflow-x-auto">
            <Link
              to="/account"
              className="hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Account
            </Link>
            <IoIosArrowForward className="shrink-0 text-xs sm:text-sm" />
            <Link className="font-bold whitespace-nowrap">Profile</Link>
          </div>
        </div>
        {/* Breadcrumbs Section End */}

        {/* Profile Title Section Start */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-6 pb-5">
          <div className="flex text-blue-700 text-2xl sm:text-3xl lg:text-4xl font-bold">
            Profile
          </div>
        </div>
        {/* Profile Title Section End */}

        {/* Profile Content Section Start */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto pt-5 pb-10">
          <div className="grid grid-cols-12 gap-5">
            {/* Sidebar */}
            <div className="col-span-3">
              <AccountSidebar />
            </div>

            {/* Profile Details */}
            <div className="col-span-9">
              <PersonalInfo/>
              <BillingInfo/>
            </div>
          </div>
        </div>
        {/* Profile Content Section End */}
      </Layout>
    </>
  );
};

export default Profile;
