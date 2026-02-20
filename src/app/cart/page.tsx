"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Cart() {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    orderType: "Home Delivery",
    address: "",
    tableNo: "",
  });

  const subtotal = getTotalPrice();
  const taxRate = 0.05;
  const tax = Math.round(subtotal * taxRate);
  const packagingCharges = 10;
  const deliveryCharges = subtotal < 600 ? 50 : 0;
  const total = subtotal + tax + packagingCharges + deliveryCharges;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    // Validate form
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number");
      return;
    }

    if (formData.orderType === "Home Delivery" && !formData.address) {
      alert("Please provide your delivery address");
      return;
    }

    if (formData.orderType === "Dining" && !formData.tableNo) {
      alert("Please provide your table number");
      return;
    }

    // Build order items
    const orderItems = cart
      .map((item) => {
        const variantText = item.variant ? ` (${item.variant})` : '';
        return `- ${item.quantity}x ${item.name}${variantText} (Rs. ${item.price * item.quantity})`;
      })
      .join("%0A");

    // Build order details based on type
    let orderDetails = `Hello The Biryani Baithak, I would like to place an order!%0A%0A- CUSTOMER DETAILS -%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AOrder Type: ${encodeURIComponent(formData.orderType)}%0A`;
    
    if (formData.orderType === "Home Delivery") {
      orderDetails += `Address: ${encodeURIComponent(formData.address)}%0A`;
    } else if (formData.orderType === "Dining") {
      orderDetails += `Table No: ${encodeURIComponent(formData.tableNo)}%0A`;
    }

    // Build WhatsApp message
    const message = `${orderDetails}%0A- ORDER SUMMARY -%0A${orderItems}%0A%0A--------------------------%0ATOTAL AMOUNT: Rs. ${total}%0A--------------------------%0A%0A- PAYMENT VIA UPI -%0Aupi://pay?pa=ashokatiles1951-1@okaxis&pn=Ashok%20Ahuja&am=${total}&cu=INR%0A%0APlease confirm my order once you receive the payment. Thank you!`;

    // Open WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=918318426533&text=${message}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");

    // Clear the cart
    clearCart();

    // Redirect to success page
    router.push(`/order-success?total=${total}`);
  };

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
                  {cart.map((item) => {
                    const itemKey = item.variant ? `${item.id}-${item.variant}` : item.id;
                    return (
                    <div key={itemKey} className="flex items-center gap-4 border-b border-white/5 pb-6 last:border-b-0 last:pb-0">
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
                          {item.variant && <span className="text-sm text-gray-400 ml-2">({item.variant})</span>}
                        </h3>
                        <div className="text-sm font-bold text-white mb-2">₹{item.price}</div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                            className="w-6 h-6 rounded-full border border-[#E8D595]/50 text-[#E8D595] hover:bg-[#E8D595] hover:text-[#272727] flex items-center justify-center transition-colors"
                          >
                            <span className="material-icons text-sm">remove</span>
                          </button>
                          <span className="text-white font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                            className="w-6 h-6 rounded-full border border-[#E8D595]/50 text-[#E8D595] hover:bg-[#E8D595] hover:text-[#272727] flex items-center justify-center transition-colors"
                          >
                            <span className="material-icons text-sm">add</span>
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id, item.variant)}
                            className="ml-auto text-red-400 hover:text-red-300 transition-colors"
                          >
                            <span className="material-icons text-sm">delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )})}

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
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Packaging Charges</span>
                    <span className="font-bold text-white">₹{packagingCharges}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Delivery Charges</span>
                    {deliveryCharges === 0 ? (
                      <span className="font-bold text-green-500">FREE</span>
                    ) : (
                      <span className="font-bold text-white">₹{deliveryCharges}</span>
                    )}
                  </div>
                  {subtotal < 600 && (
                    <div className="text-xs text-[#E8D595] bg-[#E8D595]/10 px-3 py-2 rounded-lg border border-[#E8D595]/20">
                      Add ₹{600 - subtotal} more for free delivery!
                    </div>
                  )}
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
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
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
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
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
                      <select
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleInputChange}
                        className="w-full bg-[#272727]/50 border border-white/10 focus:border-[#E8D595] text-white rounded-lg px-4 py-3 outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option>Home Delivery</option>
                        <option>Takeaway</option>
                        <option>Dining</option>
                      </select>
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#E8D595] pointer-events-none material-symbols-outlined">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Delivery Address - Only show for Home Delivery */}
                  {formData.orderType === "Home Delivery" && (
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-wide">
                        Delivery Address <span className="text-[#E8D595]">*</span>
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full bg-[#272727]/50 border border-white/10 focus:border-[#E8D595] text-white rounded-lg px-4 py-3 outline-none transition-all placeholder-gray-600 resize-none"
                        placeholder="Street name, House no, Landmark"
                        rows={3}
                      ></textarea>
                    </div>
                  )}

                  {/* Table Number - Only show for Dining */}
                  {formData.orderType === "Dining" && (
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-wide">
                        Table Number <span className="text-[#E8D595]">*</span>
                      </label>
                      <input
                        name="tableNo"
                        value={formData.tableNo}
                        onChange={handleInputChange}
                        className="w-full bg-[#272727]/50 border border-white/10 focus:border-[#E8D595] text-white rounded-lg px-4 py-3 outline-none transition-all placeholder-gray-600"
                        placeholder="Ex. Table 5"
                        type="text"
                      />
                    </div>
                  )}

                  {/* Place Order Button */}
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full bg-[#E8D595] hover:bg-[#C9B675] text-[#272727] font-bold py-4 px-6 rounded-xl shadow-lg shadow-[#E8D595]/20 transition-all flex items-center justify-center gap-2 transform active:scale-95"
                    type="button"
                  >
                    <span className="material-symbols-outlined">send</span>
                    Place Order via WhatsApp
                  </button>

                  {/* Payment Section */}
                  <div className="pt-6 border-t border-white/5">
                    <div className="flex flex-col items-center gap-6">
                      <div className="text-center space-y-2">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Scan to Pay</p>
                        <div className="p-4 bg-white rounded-xl shadow-lg">
                          <div className="w-96 h-96 flex items-center justify-center">
                            <Image
                              alt="Payment QR Code"
                              className="w-full h-full object-contain"
                              src="/qr.jpg"
                              width={384}
                              height={384}
                            />
                          </div>
                          <div className="mt-2 text-center font-bold text-[#272727] text-lg">₹{total}</div>
                        </div>
                        <p className="text-xs text-gray-500">You can pay by scanning this QR code</p>
                      </div>
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
        <p className="text-gray-500">© 2026. All rights reserved.</p>
        <p className="mt-1 text-gray-600 text-xs tracking-widest uppercase">Taste of Home</p>
      </footer>
    </div>
  );
}
