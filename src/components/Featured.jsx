import React, { useState, useEffect } from "react";
import axios from "axios";
import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Featured = () => {
  const [data, setData] = useState([]);

  useGSAP(() => {
    gsap.from(".h1-font", {
      opacity: 0,
      y: "100",
      duration: 1,
      scrollTrigger: {
        trigger: ".h1-font",
        start: "top 90%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className="min-width mx-auto md:py-20">
        <div className="mb-14 flex justify-center">
          <h1 className="h1-style h1-font">Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
          {data.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group hover:shadow-lg transition-shadow duration-200 h-full border border-gray-200 rounded-[8px] animate-fadeIn block"
            >
              <div className="p-4">
                <div className="relative aspect-square mb-4 bg-white rounded-lg overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="object-contain group-hover:scale-105 transition-transform duration-200 w-full h-full"
                    crossOrigin="anonymous"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-[#708DFA] transition-colors">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating.rate)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      ({product.rating.count})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#0171E3]">
                      ${product.price.toFixed(2)}
                    </span>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center my-8">
          <Link
            to="/products"
            className="px-10 py-[12px] bg-custom-blue text-white hover:bg-white hover:text-black hover:border border-black transition duration-300 rounded-full"
          >
            View
          </Link>
        </div>
      </div>
    </>
  );
};

export default Featured;
