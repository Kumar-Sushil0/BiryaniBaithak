"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { useSearchParams } from "next/navigation";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const [total, setTotal] = useState("0");

  useEffect(() => {
    const totalParam = searchParams.get("total");
    if (totalParam) {
      setTotal(totalParam);
    }
  }, [searchParams]);

  return (
    <div className="bg-[#272727] font-[family-name:var(--font-body)] antialiased transition-colors duration-300 hero-pattern min-h-screen flex flex-col text-[#F2F2F2] overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="container mx-auto px-12 md:px-20 lg:px-32 py-12 flex-grow flex items-center justify-center">
        <div className="max-w-2xl w-full bg-[#333333] rounded-2xl p-8 border border-white/10 shadow-2xl text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="material-icons text-6xl text-green-500">check_circle</span>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#E8D595] mb-4">
            Order Sent!
          </h1>
          <p className="text-gray-400 mb-8">
            Your order details have been drafted on WhatsApp. Please send the message to confirm properly.
          </p>

          {/* Payment Section */}
          <div className="mb-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Scan to Pay Now
            </p>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-xl shadow-lg mb-4">
                <div className="w-96 h-96 flex items-center justify-center">
                  <Image
                    alt="Payment QR Code"
                    className="w-full h-full object-contain"
                    src="/qr.jpg"
                    width={384}
                    height={384}
                  />
                </div>
              </div>
              <div className="text-3xl font-bold text-green-500 mb-6">₹{total}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              href="/"
              className="w-full bg-[#E8D595] hover:bg-[#C9B675] text-[#272727] font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-sm bg-black/20 border-t border-white/5">
        <p className="text-[#E8D595] font-[family-name:var(--font-display)] font-bold text-lg mb-2">
          The Biryani Baithak
        </p>
        <p className="text-gray-500">© 2026. All rights reserved.</p>
        <p className="mt-1 text-gray-600 text-xs tracking-widest uppercase">Taste of Home</p>
      </footer>
    </div>
  );
}

export default function OrderSuccess() {
  return (
    <Suspense fallback={
      <div className="bg-[#272727] min-h-screen flex items-center justify-center">
        <div className="text-[#E8D595] text-xl">Loading...</div>
      </div>
    }>
      <OrderSuccessContent />
    </Suspense>
  );
}
