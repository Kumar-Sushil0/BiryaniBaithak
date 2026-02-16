"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const subtotal = getTotalPrice();
  const taxRate = 0.05;
  const tax = Math.round(subtotal * taxRate);
  const total = subtotal + tax;

  return (
    <div className="bg-[#272727] font-[family-name:var(--font-body)] antialiased transition-colors duration-300 hero-pattern min-h-screen flex flex-col text-[#F2F2F2] pb-24 overflow-x-hidden">
      {/* Sticky Navigation */}
      <div className="sticky top-0 bg-[#272727]/95 backdrop-blur-sm border-b border-white/5 pb-4 z-10">
        <Navigation />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-12 md:px-20 lg:px-32 py-8 relative z-10 flex-grow">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
            <div className="text-6xl">🛒</div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#E8D595]">
              Your Cart is Empty
            </h2>
            <p className="text-gray-400 text-center max-w-md">
              Looks like you haven't added any delicious items to your cart yet. Browse our menu and discover amazing dishes!
            </p>
            <Link
              href="/menu"
              className="bg-[#E8D595] hover:bg-[#C9B675] text-[#272727] font-bold py-3 px-8 rounded-xl shadow-lg transition-all"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Cart Items Section */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#E8D595]">
                Your <span className="text-white">Selection</span>
              </h2>

              <div className="bg-[#333333] rounded-2xl p-6 border border-white/10 shadow-lg">
                <div className="flex flex-col gap-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 border-b border-white/5 pb-6 last:border-b-0 last:pb-0">
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/10">
                        <Image
                          alt={item.name}
                          className="w-full h-full object-cover"
                          src={item.image}
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="grow">
                        <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-[#E8D595] leading-tight mb-1">
                          {item.name}
                        </h3>
                        <div className="text-sm font-bold text-white mb-2">₹{item.price}</div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full border border-[#E8D595]/50 text-[#E8D595] hover:bg-[#E8D595] hover:text-[#272727] flex items-center justify-center transition-colors"
                          >
                            <span className="material-icons text-sm">remove</span>
                          </button>
                          <span className="text-white font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full border border-[#E8D595]/50 text-[#E8D595] hover:bg-[#E8D595] hover:text-[#272727] flex items-center justify-center transition-colors"
                          >
                            <span className="material-icons text-sm">add</span>
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-red-400 hover:text-red-300 transition-colors"
                          >
                            <span className="material-icons text-sm">delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Summary */}
                <div className="mt-6 pt-4 space-y-3">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Subtotal</span>
                    <span className="font-bold text-white">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Taxes &amp; Charges (5%)</span>
                    <span className="font-bold text-white">₹{tax}</span>
                  </div>
                  <div className="flex justify-between text-xl font-[family-name:var(--font-display)] font-bold pt-4 border-t border-white/10 mt-4">
                    <span className="text-[#E8D595]">Total</span>
                    <span className="text-[#E8D595]">₹{total}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Details Section */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#E8D595]">
                Order <span className="text-white">Details</span>
              </h2>

              <div className="bg-[#333333] rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg">
                <form className="space-y-6">
                  {/* Name and Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-wide">
                        Full Name <span className="text-[#E8D595]">*</span>
                      </label>
                      <input
                        className="w-full bg-[#272727]/50 border border-white/10 focus:border-[#E8D595] text-white rounded-lg px-4 py-3 outline-none transition-all placeholder-gray-600"
                        placeholder="Ex. Rahul Kumar"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-wide">
                        Mobile Number <span className="text-[#E8D595]">*</span>
                      </label>
                      <input
                        className="w-full bg-[#272727]/50 border border-white/10 focus:border-[#E8D595] text-white rounded-lg px-4 py-3 outline-none transition-all placeholder-gray-600"
                        placeholder="Ex. 9876543210"
                        type="tel"
                      />
                    </div>
                  </div>

                  {/* Order Type */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wide">Order Type</label>
                    <div className="relative">
                      <select className="w-full bg-[#272727]/50 border border-white/10 focus:border-[#E8D595] text-white rounded-lg px-4 py-3 outline-none transition-all appearance-none cursor-pointer">
                        <option>Home Delivery</option>
                        <option>Takeaway</option>
                      </select>
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#E8D595] pointer-events-none material-symbols-outlined">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wide">Delivery Address</label>
                    <textarea
                      className="w-full bg-[#272727]/50 border border-white/10 focus:border-[#E8D595] text-white rounded-lg px-4 py-3 outline-none transition-all placeholder-gray-600 resize-none"
                      placeholder="Street name, House no, Landmark"
                      rows={3}
                    ></textarea>
                  </div>

                  {/* Payment Section */}
                  <div className="pt-6 border-t border-white/5">
                    <div className="flex flex-col items-center gap-6">
                      <div className="text-center space-y-2">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Scan to Pay</p>
                        <div className="p-4 bg-white rounded-xl shadow-lg inline-block">
                          <div className="w-32 h-32 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                            <Image
                              alt="Payment QR Code"
                              className="w-full h-full object-contain mix-blend-multiply"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc-0L8Z-KPkiXRaTq6rs0QJzuVcyd-8AL_MXHq0-IT--8OgJxXB9rgchYHU26uVXrZgcftFQQ2oNKiuoUyOz19lsZj6U-1l4ohST6W9iUA8BF_TR-jmOVH_troyvycRw_mKuNGBKJOqDNVyVayIfXZHzy8QkuFu1kl3jXYns5qi6fUlUIaGkUhSeTyiLMraqPtuHnJbJRaLppIImPD2myxjwo0kcsM6QdNsds7-TTmxKDRgFKDZ_x3t3aNv-ndVVQ-G5lg7xfr60J0"
                              width={128}
                              height={128}
                            />
                          </div>
                          <div className="mt-2 text-center font-bold text-[#272727] text-lg">₹{total}</div>
                        </div>
                        <p className="text-xs text-gray-500">You can pay by scanning this QR code</p>
                      </div>
                      <button
                        className="w-full md:max-w-md bg-[#E8D595] hover:bg-[#C9B675] text-[#272727] font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-[#E8D595]/20 transition-all flex items-center justify-center gap-2 transform active:scale-95"
                        type="button"
                      >
                        <span className="material-symbols-outlined">account_balance_wallet</span>
                        Pay via UPI App
                      </button>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="bg-[#272727]/30 border border-dashed border-[#E8D595]/30 rounded-xl p-4 mt-6">
                    <h4 className="flex items-center gap-2 text-[#E8D595] font-bold text-sm mb-3">
                      <span className="material-symbols-outlined text-lg">verified</span>
                      How to complete order?
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                      <li className="flex gap-2">
                        <span className="bg-[#E8D595] text-[#272727] rounded-full w-4 h-4 flex items-center justify-center font-bold shrink-0">
                          1
                        </span>
                        <span>Scan the QR code above or use the Pay button.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="bg-[#E8D595] text-[#272727] rounded-full w-4 h-4 flex items-center justify-center font-bold shrink-0">
                          2
                        </span>
                        <span>
                          Complete payment of <strong>₹{total}</strong>.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="bg-[#E8D595] text-[#272727] rounded-full w-4 h-4 flex items-center justify-center font-bold shrink-0">
                          3
                        </span>
                        <span>Your order will be confirmed automatically once payment is received.</span>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-sm bg-black/20 border-t border-white/5 mt-auto">
        <p className="text-[#E8D595] font-[family-name:var(--font-display)] font-bold text-lg mb-2">
          The Biryani Baithak
        </p>
        <p className="text-gray-500">© 2024. All rights reserved.</p>
        <p className="mt-1 text-gray-600 text-xs tracking-widest uppercase">Taste of Home</p>
      </footer>
    </div>
  );
}
