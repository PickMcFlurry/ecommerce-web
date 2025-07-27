import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Star, ShoppingCart, Search, ScanQrCode } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = Array.from(new Set(data.map((p) => p.category)));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filtereddata = data
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      selectedCategory === "all" ? true : product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating.rate - a.rating.rate;
      return 0;
    });
  useGSAP(() => {
    gsap.from("#trigger", {
      opacity: 0,
      y: "100",
      duration: 1,
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full mt-40">
        {loading && (
          <div className="w-full h-screen flex justify-center items-center">
            <h1 className="text-[30px]">.....Loading!</h1>
          </div>
        )}

        <div className="flex justify-center mb-8">
          <h1 id="trigger" className="text-[40px] font-bold h1-font ">
            All Products
          </h1>
        </div>
        <div className="min-width mx-auto mb-40">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search for the Products here...."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-48 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              {/* Sort Filter */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full md:w-48 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <p className="text-gray-600">
              Showing {filtereddata.length} of {data.length} products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {!loading &&
              filtereddata.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group hover:shadow-lg transition-shadow duration-200 h-full border border-gray-200 rounded-[8px] block"
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
                      <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-purple-600 transition-colors">
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
        </div>
      </div>
    </>
  );
};

export default Products;
