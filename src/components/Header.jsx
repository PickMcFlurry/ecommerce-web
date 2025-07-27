import React from "react";
import { backgroundimg } from "../utils/utils";
import { ArrowRight } from "lucide-react";
import SplitText from "../Ui/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

const Header = () => {
  useGSAP(() => {
    gsap.from(".box", {
      opacity: 0,
      y: "100",
      stagger: 0.2,
    });
  }, []);
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        {/* Hero Section */}
        <section
          className="relative h-screen bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${backgroundimg})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="inset-0 flex items-center justify-center">
            <SplitText
              text="Welcome"
              className="text-[120px] font-semibold text-center text-custom-black mt-60 glow-text"
              delay={30}
              duration={2.5}
              ease="elastic.out(3,0.4)"
              splitType="chars"
              from={{ opacity: 0, y: -40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <div className=" absolute inset-0 flex items-center justify-center mt-36">
            <div className="text-center text-custom-gray max-w-4xl mx-auto px-4">
              <p className="box text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover our curated collection of premium fashion pieces
                designed for the modern trendsetter.
              </p>
              <div className="box flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/products"
                  className="flex gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
