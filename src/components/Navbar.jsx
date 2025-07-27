import React from "react";
import { Link, useLocation } from "react-router-dom";
import { logoimg } from "../utils/utils";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-[27rem]">
            <div className="flex items-center">
              <img src={logoimg} alt="" width={100} height={100} />
            </div>
            <div className="flex items-center gap-8">
              <Link to="/" className="link">
                Home
              </Link>
              <Link to="/products" className="link">
                Products
              </Link>
            </div>
            <div>
              <Link
                to="/login"
                className="px-10 py-[12px] bg-black text-white hover:bg-white hover:text-black transition duration-300 rounded-full border border-black"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
