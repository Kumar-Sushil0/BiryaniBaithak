import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="bg-[#272727] font-[family-name:var(--font-body)] antialiased transition-colors duration-300 hero-pattern min-h-screen flex flex-col justify-between text-[#F2F2F2] overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Main Hero Section */}
      <main className="container mx-auto px-12 md:px-20 lg:px-32 flex-grow flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-8 lg:py-12 relative z-10">
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#E8D595]/30 text-[#E8D595] font-semibold text-sm tracking-widest uppercase mb-2">
            Royal Flavors of India
          </div>
          <h1 className="text-5xl lg:text-7xl font-[family-name:var(--font-display)] font-black text-white leading-tight">
            Authentic <span className="text-[#E8D595]">Biryani</span> <br className="hidden lg:block" /> For Every Soul
          </h1>
          <p className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            Experience the rich heritage of slow-cooked perfection. From the royal kitchens to your table, savor the taste of home with our signature handi biryanis.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a className="bg-[#E8D595] hover:bg-white text-[#272727] font-bold py-4 px-8 rounded-full shadow-lg shadow-[#E8D595]/10 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2" href="#">
              <span className="material-icons text-sm">restaurant_menu</span>
              Order Now
            </a>
            <a className="group flex items-center gap-3 px-6 py-4 rounded-full border border-gray-600 hover:border-[#E8D595] bg-transparent text-white transition-all duration-300" href="#">
              <div className="w-8 h-8 rounded-full bg-[#333333] group-hover:bg-[#E8D595] text-[#E8D595] group-hover:text-[#272727] flex items-center justify-center transition-colors border border-gray-700 group-hover:border-[#E8D595]">
                <span className="material-icons text-sm">play_arrow</span>
              </div>
              <span className="font-semibold group-hover:text-[#E8D595] transition-colors">See Our Story</span>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E8D595]/20 rounded-full blur-3xl -z-10"></div>
          <div className="relative bg-[#333333] p-3 rounded-2xl shadow-2xl shadow-black/50 transform rotate-1 hover:rotate-0 transition-transform duration-500 ease-out border border-gray-800">
            <Image
              alt="Delicious Chicken Biryani in a clay pot with spices"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-xl opacity-90 hover:opacity-100 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCATCa99ul1fuYRjjIPBL1k1-rv5cZC2MZgzVbF5sptggaBdNabBZnPm5jJdSb6uVHc2pJf8gloUiW-GlxXDrK5Ee_TK3nH8h3N9o8IhMMqHnrv7PAD74MJqE0XJexOqGoLbtKNxZ4oIP5Rio6QEgeFPb7prQdPqC7NY4NEU_62F-m5saiZNZ52wZxPs1_3oqUy9urG0jnOTaqgdipbt6I65KkUG0zBKorQZ1Fe8iUKGjaXa153smMt9pwdb0LbgQya0TVn7hLGdWt2"
              width={600}
              height={500}
              priority
            />
            <div className="absolute bottom-8 left-0 lg:-left-6 bg-[#333333]/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-700 flex items-center gap-4 max-w-xs animate-bounce-slow">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute top-0 right-0"></div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-[#E8D595] border border-gray-700">
                  <span className="material-icons">access_time</span>
                </div>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-display)] font-bold text-white text-sm">Open for Delivery</h4>
                <p className="text-xs text-gray-400">Delivering hot & fresh in 30 mins.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <div className="mt-12 mx-12 md:mx-20 lg:mx-32 mb-4">
        <div className="container mx-auto bg-[#E8D595] rounded-2xl shadow-2xl overflow-hidden relative border border-[#E8D595]/50">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply"></div>
          <div className="relative z-10 px-6 py-12 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#272727] mb-4">
              Craving Perfection? We&apos;ve got it.
            </h2>
            <p className="text-[#272727]/80 mb-8 font-medium max-w-2xl mx-auto">
              Browse our royal catalog featuring Hyderabadi, Lucknowi, and Kolkata style biryanis made with authentic spices.
            </p>
            <a className="inline-block bg-[#272727] text-[#E8D595] hover:bg-black font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 border border-transparent hover:border-[#E8D595]/50" href="#">
              Explore Full Menu
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-sm bg-black/20 border-t border-white/5">
        <p className="text-[#E8D595] font-[family-name:var(--font-display)] font-bold text-lg mb-2">The Biryani Baithak</p>
        <p className="text-gray-500">© 2024. All rights reserved.</p>
        <p className="mt-1 text-gray-600 text-xs tracking-widest uppercase">Taste of Home</p>
      </footer>
    </div>
  );
}
