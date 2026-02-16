"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Navigation() {
  const pathname = usePathname();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <div className="container mx-auto px-12 md:px-20 lg:px-32 py-6 relative z-10">
      <nav className="bg-[#333333] rounded-full shadow-lg shadow-black/20 px-12 md:px-16 py-3 flex justify-between items-center transition-colors duration-300 border border-[#E8D595]/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-[#E8D595] flex items-center justify-center text-[#E8D595] font-bold font-[family-name:var(--font-display)] text-lg">
            BB
          </div>
          <span className="text-xl font-[family-name:var(--font-display)] font-bold text-[#E8D595] tracking-wide uppercase">
            The Biryani Baithak
          </span>
          <span className="hidden sm:inline-block text-[10px] bg-[#E8D595]/10 text-[#E8D595] px-2 py-0.5 rounded-full font-bold tracking-wider ml-1 uppercase border border-[#E8D595]/20">
            • Open Now
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            className={`font-medium transition-colors tracking-wide text-sm ${pathname === "/" ? "text-[#E8D595] font-bold" : "text-[#F2F2F2] hover:text-[#E8D595]"
              }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`font-medium transition-colors tracking-wide text-sm ${pathname === "/menu" ? "text-[#E8D595] font-bold" : "text-[#F2F2F2] hover:text-[#E8D595]"
              }`}
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className={`font-medium transition-colors tracking-wide text-sm ${pathname === "/cart" ? "text-[#E8D595] font-bold" : "text-[#F2F2F2] hover:text-[#E8D595]"
              }`}
            href="/cart"
          >
            Cart
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link className="relative text-[#E8D595] hover:text-white transition-colors" href="/cart">
            <span className="material-icons">shopping_bag</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-[#272727] text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
}
