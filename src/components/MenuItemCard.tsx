"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface MenuItemCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    type: 'veg' | 'non-veg';
    bestseller?: boolean;
}

export default function MenuItemCard({
    id,
    name,
    price,
    image,
    description,
    type,
    bestseller = false,
}: MenuItemCardProps) {
    const { cart, addToCart, updateQuantity } = useCart();
    
    // Find if this item is already in the cart
    const cartItem = cart.find((item) => item.id === id);
    const quantity = cartItem?.quantity || 0;

    const handleAddToCart = () => {
        addToCart({
            id,
            name,
            price,
            image,
            description,
            type,
        });
    };

    const handleIncrement = () => {
        updateQuantity(id, quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            updateQuantity(id, quantity - 1);
        } else {
            updateQuantity(id, 0); // This will remove the item
        }
    };

    return (
        <div className="bg-[#333333] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[#E8D595]/10 hover:border-[#E8D595]/30 transition-all duration-300 group flex flex-col">
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start gap-3 mb-3">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md flex items-center gap-1 shrink-0">
                        <span className={`w-3 h-3 border ${type === 'veg' ? 'border-green-600' : 'border-red-600'} flex items-center justify-center p-[1px]`}>
                            <span className={`w-full h-full rounded-full ${type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`}></span>
                        </span>
                        <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">
                            {type === 'veg' ? 'Veg' : 'Non-Veg'}
                        </span>
                    </div>
                    {bestseller && (
                        <div className="bg-[#E8D595] text-[#272727] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                            Bestseller
                        </div>
                    )}
                </div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[#E8D595] leading-tight">
                        {name}
                    </h3>
                    <span className="font-bold text-white whitespace-nowrap ml-2">₹{price}</span>
                </div>
                <p className="text-sm text-gray-400 font-light mb-4 flex-grow line-clamp-2">
                    {description}
                </p>
                
                {quantity === 0 ? (
                    <button
                        onClick={handleAddToCart}
                        className="w-full py-2.5 rounded-full bg-[#E8D595] hover:bg-white text-[#272727] font-bold text-sm uppercase tracking-wide transition-all shadow-lg shadow-[#E8D595]/20"
                    >
                        Add to Cart
                    </button>
                ) : (
                    <div className="w-full py-2 rounded-full bg-[#E8D595] text-[#272727] font-bold text-sm flex items-center justify-between px-4 shadow-lg shadow-[#E8D595]/20">
                        <button
                            onClick={handleDecrement}
                            className="w-8 h-8 rounded-full hover:bg-white/30 flex items-center justify-center transition-colors"
                        >
                            <span className="material-icons text-lg">remove</span>
                        </button>
                        <span className="text-lg font-bold">{quantity}</span>
                        <button
                            onClick={handleIncrement}
                            className="w-8 h-8 rounded-full hover:bg-white/30 flex items-center justify-center transition-colors"
                        >
                            <span className="material-icons text-lg">add</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
