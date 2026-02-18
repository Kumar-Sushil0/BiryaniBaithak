"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import MenuItemCard from "@/components/MenuItemCard";
import { menuItems } from "@/data/menuItems";
import { useCart } from "@/context/CartContext";

export default function Menu() {
  const { getTotalItems, getTotalPrice } = useCart();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Get unique categories from menu items
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(menuItems.map(item => item.category)));
    return ["All", ...uniqueCategories];
  }, []);

  // Filter menu items based on selected category and search query
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#272727] font-[family-name:var(--font-body)] antialiased transition-colors duration-300 hero-pattern min-h-screen flex flex-col text-[#F2F2F2] pb-24 overflow-x-hidden">
      {/* Sticky Navigation */}
      <div className="sticky top-0 bg-[#272727]/95 backdrop-blur-sm border-b border-white/5 pb-4 z-10">
        <Navigation />
        <div className="container mx-auto px-12 md:px-20 lg:px-32">
          <div className="mt-6 flex flex-col gap-6">
            <div className="relative max-w-2xl mx-auto w-full px-2">
              <span className="absolute inset-y-0 left-4 flex items-center text-[#E8D595]">
                <span className="material-symbols-outlined">search</span>
              </span>
              <input
                className="w-full bg-[#333333] border border-[#E8D595]/30 text-[#F2F2F2] placeholder-gray-400 rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-[#E8D595] focus:border-transparent outline-none transition-all shadow-md shadow-black/20"
                placeholder="Search for dishes..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-3 px-2 py-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-6 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-[#E8D595] text-[#272727] font-bold shadow-md border border-[#E8D595]"
                      : "bg-transparent text-[#E8D595] hover:bg-[#E8D595]/10 border border-[#E8D595]/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu Grid */}
      <main className="container mx-auto px-12 md:px-20 lg:px-32 py-8 relative z-10 flex-grow">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
                type={item.type}
                bestseller={item.bestseller}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <span className="material-symbols-outlined text-6xl text-[#E8D595]/30 mb-4">
              search_off
            </span>
            <p className="text-xl text-gray-400">No items found</p>
            <p className="text-sm text-gray-500 mt-2">Try adjusting your search or filter</p>
          </div>
        )}
      </main>

      {/* Floating View Cart Button */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 w-full p-4 z-50">
          <div className="container mx-auto max-w-sm px-4">
            <Link
              href="/cart"
              className="w-full bg-[#E8D595] hover:bg-[#C9B675] text-[#272727] py-4 px-6 rounded-full shadow-2xl shadow-black/50 flex justify-between items-center transition-all transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-start">
                <span className="font-bold text-xs uppercase tracking-wider text-[#272727]/70">
                  {totalItems} {totalItems === 1 ? 'Item' : 'Items'} added
                </span>
                <span className="font-bold text-xl text-[#272727]">
                  ₹{totalPrice}
                </span>
              </div>
              <div className="flex items-center gap-2 font-bold uppercase tracking-wide text-sm">
                View Cart
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center py-8 text-sm bg-black/20 border-t border-white/5 pb-24">
        <p className="text-[#E8D595] font-[family-name:var(--font-display)] font-bold text-lg mb-2">
          The Biryani Baithak
        </p>
        <p className="text-gray-500">© 2024. All rights reserved.</p>
        <p className="mt-1 text-gray-600 text-xs tracking-widest uppercase">Taste of Home</p>
      </footer>
    </div>
  );
}
