import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function Menu() {
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
              />
            </div>

          <div className="flex overflow-x-auto no-scrollbar gap-3 px-2 py-2 max-w-full">
            <button className="whitespace-nowrap px-6 py-2 rounded-full bg-[#E8D595] text-[#272727] font-bold text-sm shadow-md border border-[#E8D595]">
              All
            </button>
            <button className="whitespace-nowrap px-6 py-2 rounded-full bg-transparent text-[#E8D595] hover:bg-[#E8D595]/10 border border-[#E8D595]/50 font-medium text-sm transition-all">
              Biryani Special
            </button>
            <button className="whitespace-nowrap px-6 py-2 rounded-full bg-transparent text-[#E8D595] hover:bg-[#E8D595]/10 border border-[#E8D595]/50 font-medium text-sm transition-all">
              Starters
            </button>
            <button className="whitespace-nowrap px-6 py-2 rounded-full bg-transparent text-[#E8D595] hover:bg-[#E8D595]/10 border border-[#E8D595]/50 font-medium text-sm transition-all">
              Kebabs
            </button>
            <button className="whitespace-nowrap px-6 py-2 rounded-full bg-transparent text-[#E8D595] hover:bg-[#E8D595]/10 border border-[#E8D595]/50 font-medium text-sm transition-all">
              Curries
            </button>
            <button className="whitespace-nowrap px-6 py-2 rounded-full bg-transparent text-[#E8D595] hover:bg-[#E8D595]/10 border border-[#E8D595]/50 font-medium text-sm transition-all">
              Breads &amp; Roti
            </button>
            <button className="whitespace-nowrap px-6 py-2 rounded-full bg-transparent text-[#E8D595] hover:bg-[#E8D595]/10 border border-[#E8D595]/50 font-medium text-sm transition-all">
              Desserts
            </button>
            <button className="whitespace-nowrap px-6 py-2 rounded-full bg-transparent text-[#E8D595] hover:bg-[#E8D595]/10 border border-[#E8D595]/50 font-medium text-sm transition-all">
              Beverages
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Main Menu Grid */}
      <main className="container mx-auto px-12 md:px-20 lg:px-32 py-8 relative z-10 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {/* Menu Item 1 - Chicken Dum Biryani */}
          <div className="bg-[#333333] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[#E8D595]/10 hover:border-[#E8D595]/30 transition-all duration-300 group flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                alt="Chicken Dum Biryani"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjrVWRtmg34Iqt56YQUJ1lFdLJ-JiOAwdKoWQFoQyf7Ii3iri2-CvWnJqyhe9VKhk34PWDswmF3xmApZIXOEl8v6wWtxNv8BXqSsBGUz1E4KtpuXFeLbuq5dk6MhF4LzqyP6EATtW0BC3tn4sNMMzautZZg9216_GzIt27TsmaYh81g6Tykevm6x7LaMLFRx9ZekuYzXAy4ckgnHIgNzBuLzz7BS3j6tttUmg3yIgkRO36RGt-lnjM1mnljzROtc15OwweSsWxykzL"
                width={400}
                height={300}
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md flex items-center gap-1">
                <span className="w-3 h-3 border border-red-600 flex items-center justify-center p-[1px]">
                  <span className="w-full h-full rounded-full bg-red-600"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">Non-Veg</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[#E8D595] leading-tight">
                  Chicken Dum Biryani
                </h3>
                <span className="font-bold text-white whitespace-nowrap ml-2">₹320</span>
              </div>
              <p className="text-sm text-gray-400 font-light mb-4 flex-grow line-clamp-2">
                Aromatic basmati rice cooked with tender chicken pieces and authentic spices in dum style.
              </p>
              <button className="w-full py-2.5 rounded-full bg-[#E8D595] hover:bg-white text-[#272727] font-bold text-sm uppercase tracking-wide transition-colors shadow-lg shadow-[#E8D595]/20">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Menu Item 2 - Paneer Tikka Masala */}
          <div className="bg-[#333333] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[#E8D595]/10 hover:border-[#E8D595]/30 transition-all duration-300 group flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                alt="Paneer Tikka Masala"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmIlIjsK6s40V3FoznzbAO1XAtNOyoHlfOf7mgb1cV4tiAXPtuk4-cxeGWV25cR9Q6ysx4TX2MA2jijjzmPxEuWITMbHTiwShye7j9t5AYjvKZt1PFEsC8Pj7jeqa0ZLoA_rI-CIt7ZU19PDTZo-TYBWD2vdc2PSvCf8kZc9Vp77wUfvITwg_O3hZ8UHpYmujjgYI2UcuJyT2aRv6GffE0AjAUfA-7XryaNPmQQaCEoGzAxQ3jC4giZ0NhHXRGinADHRBxRne0t-QE"
                width={400}
                height={300}
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md flex items-center gap-1">
                <span className="w-3 h-3 border border-green-600 flex items-center justify-center p-[1px]">
                  <span className="w-full h-full rounded-full bg-green-600"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">Veg</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[#E8D595] leading-tight">
                  Paneer Tikka Masala
                </h3>
                <span className="font-bold text-white whitespace-nowrap ml-2">₹280</span>
              </div>
              <p className="text-sm text-gray-400 font-light mb-4 flex-grow line-clamp-2">
                Char-grilled paneer cubes simmered in a rich, creamy tomato and onion gravy.
              </p>
              <button className="w-full py-2.5 rounded-full bg-[#E8D595] hover:bg-white text-[#272727] font-bold text-sm uppercase tracking-wide transition-colors shadow-lg shadow-[#E8D595]/20">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Menu Item 3 - Mutton Galouti Kebab */}
          <div className="bg-[#333333] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[#E8D595]/10 hover:border-[#E8D595]/30 transition-all duration-300 group flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                alt="Mutton Galouti Kebab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8HAJiFCNVTASUHArNA-Iu1ojB-TdVPSszfCyWkgSBqs1WUtCmsWTEIap5Wr5K3OjJcXNqhH3dG6RGdabj9d25-GjyMPoUaO9jA99xCVu5wZf-2-N7eFTStO6X5cwMsn_nuYwODwWww8aQGhBFfsN3yGWPLus-O-0gTqEcpLVeqhG7R5Qb1LoBQS3l2ROflciL0iWlCehly9wIlqVoEF9_3GP1HREGRF6Z1L21PH0lCyYG1XTuEnWysTtueR-E9luMWEIINnQAm9DM"
                width={400}
                height={300}
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md flex items-center gap-1">
                <span className="w-3 h-3 border border-red-600 flex items-center justify-center p-[1px]">
                  <span className="w-full h-full rounded-full bg-red-600"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">Non-Veg</span>
              </div>
              <div className="absolute top-3 right-3 bg-[#E8D595] text-[#272727] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                Bestseller
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[#E8D595] leading-tight">
                  Mutton Galouti Kebab
                </h3>
                <span className="font-bold text-white whitespace-nowrap ml-2">₹450</span>
              </div>
              <p className="text-sm text-gray-400 font-light mb-4 flex-grow line-clamp-2">
                Melt-in-mouth minced mutton kebabs, a royal delicacy from the kitchens of Lucknow.
              </p>
              <button className="w-full py-2.5 rounded-full bg-[#E8D595] hover:bg-white text-[#272727] font-bold text-sm uppercase tracking-wide transition-colors shadow-lg shadow-[#E8D595]/20">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Menu Item 4 - Dal Makhani */}
          <div className="bg-[#333333] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[#E8D595]/10 hover:border-[#E8D595]/30 transition-all duration-300 group flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                alt="Dal Makhani"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeH1bV0ygHd7upcquN7_Eyw5l0iWPi_uiQnSvwKyHoqapoCjzeQkxgYtYr6X2He4q_C-BeI6mus-mgM_NglXkcJEqoEpLpCsnEmk97WIPnPqv9cz_nCexiv5IGkuk_AJV2fJAIqg9pAqx9WbGkQY27iGknT1BYRx6__DihU9wONhhKw6YSqd8Ksccnav6HKjzWWdYLB-E_F2vsjK_u615xiKP_NPm0cOS-tqrDXNeKbPd3KF7I2HaA7X6vYj83p7eN6y3oRid87Kjb"
                width={400}
                height={300}
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md flex items-center gap-1">
                <span className="w-3 h-3 border border-green-600 flex items-center justify-center p-[1px]">
                  <span className="w-full h-full rounded-full bg-green-600"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">Veg</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[#E8D595] leading-tight">
                  Dal Makhani
                </h3>
                <span className="font-bold text-white whitespace-nowrap ml-2">₹240</span>
              </div>
              <p className="text-sm text-gray-400 font-light mb-4 flex-grow line-clamp-2">
                Slow-cooked black lentils simmered overnight with butter and cream.
              </p>
              <button className="w-full py-2.5 rounded-full bg-[#E8D595] hover:bg-white text-[#272727] font-bold text-sm uppercase tracking-wide transition-colors shadow-lg shadow-[#E8D595]/20">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Menu Item 5 - Garlic Butter Naan */}
          <div className="bg-[#333333] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[#E8D595]/10 hover:border-[#E8D595]/30 transition-all duration-300 group flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                alt="Garlic Butter Naan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPoP2B4BLfO4qDTTpk1dVNIYBBqfhzqwlzdoFBAV5If7OG9iyr6AkIVgpA9xXzVMsKWjlqRvgUuXhjmDsZpsWGiHrB46QrDSCcRMt7rs3AP9Xhhbq0rTmlUMZbagcYdqn_-UUrosA_hOvX-fxQ8nW7OaTuJmVs_E8UtsM2BzawC14IbBPlJ3ZeOiOyFVUhXlelEnLC_2aJ0LuBcbaSbds925vHv1AvBsocYD2a7EJIibhU1j_Aa3fNLBMaU5ckNhU45yoadrsSkhjG"
                width={400}
                height={300}
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md flex items-center gap-1">
                <span className="w-3 h-3 border border-green-600 flex items-center justify-center p-[1px]">
                  <span className="w-full h-full rounded-full bg-green-600"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">Veg</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[#E8D595] leading-tight">
                  Garlic Butter Naan
                </h3>
                <span className="font-bold text-white whitespace-nowrap ml-2">₹60</span>
              </div>
              <p className="text-sm text-gray-400 font-light mb-4 flex-grow line-clamp-2">
                Soft and fluffy Indian bread infused with garlic and brushed with butter.
              </p>
              <button className="w-full py-2.5 rounded-full bg-[#E8D595] hover:bg-white text-[#272727] font-bold text-sm uppercase tracking-wide transition-colors shadow-lg shadow-[#E8D595]/20">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Menu Item 6 - Gulab Jamun */}
          <div className="bg-[#333333] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[#E8D595]/10 hover:border-[#E8D595]/30 transition-all duration-300 group flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                alt="Gulab Jamun"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwsDYUm8haik_wyXDEvrpLi8X0OUPy0A5_qIzqGsjsMnGniFAnSFh7tL2QR8e6tngAXLdI-yX0dvsNha7YzKy-erYvFYe4rYn_93f02jNQ6uz7YtNOCJrYZs94WA7GxPn4GM5_NFWjnFSmLkHkxOCSIWMA2zThjpT7TdEPOIQ5iRna5Wm_RuEc8Igtdtbrl6fKDQzw0z65CCx82AFfv1GjLH0WhanjzRfn2ETwbElYaykmZT_8Gr7sx2y45sqSKDax5PCeWot6xtdG"
                width={400}
                height={300}
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md flex items-center gap-1">
                <span className="w-3 h-3 border border-green-600 flex items-center justify-center p-[1px]">
                  <span className="w-full h-full rounded-full bg-green-600"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">Veg</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[#E8D595] leading-tight">
                  Gulab Jamun
                </h3>
                <span className="font-bold text-white whitespace-nowrap ml-2">₹120</span>
              </div>
              <p className="text-sm text-gray-400 font-light mb-4 flex-grow line-clamp-2">
                Classic deep-fried milk dumplings soaked in rose-flavored sugar syrup.
              </p>
              <button className="w-full py-2.5 rounded-full bg-[#E8D595] hover:bg-white text-[#272727] font-bold text-sm uppercase tracking-wide transition-colors shadow-lg shadow-[#E8D595]/20">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Menu Item 7 - Hyderabadi Mutton Biryani */}
          <div className="bg-[#333333] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[#E8D595]/10 hover:border-[#E8D595]/30 transition-all duration-300 group flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                alt="Hyderabadi Mutton Biryani"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv7KJ4lNSadzRxMW0nKQ2RosfXkAdDv_Iw-XKw1xr_GyXKnBhStro2gGZiYIOeQLBDL-nkNNmRhgZeS8L3zOyTUF0oMSOB9rdwOOCKwwweAl0U8BdGpkUNyL50UHJH2fPyXjePhGS9O15zHv-1QSijM2BYILTfBXJ6W4ChWF_RA5ISdridEyr6Vv_HMRZvIRA6xidH8j-J-IbWdqnYHw9kbv-b60rmeAaCsY6hcPyUjGr30A7UGECq6mr1K4btyVyk2odoCraOExNM"
                width={400}
                height={300}
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md flex items-center gap-1">
                <span className="w-3 h-3 border border-red-600 flex items-center justify-center p-[1px]">
                  <span className="w-full h-full rounded-full bg-red-600"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">Non-Veg</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[#E8D595] leading-tight">
                  Hyderabadi Mutton Biryani
                </h3>
                <span className="font-bold text-white whitespace-nowrap ml-2">₹480</span>
              </div>
              <p className="text-sm text-gray-400 font-light mb-4 flex-grow line-clamp-2">
                Authentic Hyderabadi style biryani with spicy mutton pieces and saffron rice.
              </p>
              <button className="w-full py-2.5 rounded-full bg-[#E8D595] hover:bg-white text-[#272727] font-bold text-sm uppercase tracking-wide transition-colors shadow-lg shadow-[#E8D595]/20">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Menu Item 8 - Sweet Lassi */}
          <div className="bg-[#333333] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[#E8D595]/10 hover:border-[#E8D595]/30 transition-all duration-300 group flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <Image
                alt="Sweet Lassi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB58R09Ys1M12Z-KUUoaP31IesRH8GIjYoG2kDfKMxX4bN_9SlJurjUQEBMR_uY-6WZ4U79YL-Bilf4zvBNe33BKOkaDLuH7Vj5rHo_s0NhI4WjSRbnhh4-T7RU7rUPVRF_a--CuKMiUiWSDT_YbiOl962aQKrIF7sZTRDBzFY0JA-mXh_wEsUq6e0HTuftkj_nEdA9weYCUPJHfgrp0Sh1FsrAVXAQ_8W5Jc8Knjx6ZAKzBBynEvVquTpithbWk2xgIFme9Onh1-eP"
                width={400}
                height={300}
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md flex items-center gap-1">
                <span className="w-3 h-3 border border-green-600 flex items-center justify-center p-[1px]">
                  <span className="w-full h-full rounded-full bg-green-600"></span>
                </span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">Veg</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[#E8D595] leading-tight">
                  Sweet Lassi
                </h3>
                <span className="font-bold text-white whitespace-nowrap ml-2">₹90</span>
              </div>
              <p className="text-sm text-gray-400 font-light mb-4 flex-grow line-clamp-2">
                Traditional thick yogurt drink topped with malai and dry fruits.
              </p>
              <button className="w-full py-2.5 rounded-full bg-[#E8D595] hover:bg-white text-[#272727] font-bold text-sm uppercase tracking-wide transition-colors shadow-lg shadow-[#E8D595]/20">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Cart Button */}
      <div className="fixed bottom-0 left-0 w-full p-12 md:p-16 z-50">
        <div className="container mx-auto max-w-4xl">
          <button className="w-full bg-[#E8D595] hover:bg-[#C9B675] text-[#272727] py-4 px-6 rounded-xl shadow-2xl shadow-black/50 flex justify-between items-center transition-all transform hover:-translate-y-1">
            <div className="flex flex-col items-start">
              <span className="font-bold text-xs uppercase tracking-wider text-[#272727]/70">2 Items added</span>
              <span className="font-[family-name:var(--font-display)] font-black text-xl text-[#272727]">₹600</span>
            </div>
            <div className="flex items-center gap-2 font-bold uppercase tracking-wide text-sm">
              View Cart
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </div>
          </button>
        </div>
      </div>

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
