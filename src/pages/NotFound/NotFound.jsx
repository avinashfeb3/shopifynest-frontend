import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layouts/layout";
import NotFoundImage from "../../assets/not-found/not-found.png";

const NotFound = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-orange-50 via-white to-blue-50" />
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-orange-100 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />

        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-0 max-w-7xl mx-4 py-12 sm:py-16">
          <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <img src={NotFoundImage} alt="404 Not Found" className="h-80 w-auto sm:h-80 sm:w-auto" />
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              We cannot find that page
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl">
              The page you are looking for slipped out of the cart. Check the
              URL or explore the latest arrivals instead.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
