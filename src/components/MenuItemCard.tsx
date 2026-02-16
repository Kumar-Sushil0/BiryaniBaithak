"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

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
    const { addToCart } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = () => {
        setIsAdding(true);
        addToCart({
            id,
            name,
            price,
            image,
            description,
            type,
        });

        // Reset animation after a short delay
        setTimeout(() => {
            setIsAdding(false);
        }, 300);
    };

    return (
        <div className="bg-[#333333] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[#E8D595]/10 hover:border-[#E8D595]/30 transition-all duration-300 group flex flex-col">
            <div className="relative h-48 overflow-hidden">
                <Image
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={image}
                    width={400}
                    height={300}
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-md flex items-center gap-1">
                    <span className={`w-3 h-3 border ${type === 'veg' ? 'border-green-600' : 'border-red-600'} flex items-center justify-center p-[1px]`}>
                        <span className={`w-full h-full rounded-full ${type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`}></span>
                    </span>
                    <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">
                        {type === 'veg' ? 'Veg' : 'Non-Veg'}
                    </span>
                </div>
                {bestseller && (
                    <div className="absolute top-3 right-3 bg-[#E8D595] text-[#272727] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                        Bestseller
                    </div>
                )}
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[#E8D595] leading-tight">
                        {name}
                    </h3>
                    <span className="font-bold text-white whitespace-nowrap ml-2">₹{price}</span>
                </div>
                <p className="text-sm text-gray-400 font-light mb-4 flex-grow line-clamp-2">
                    {description}
                </p>
                <button
                    onClick={handleAddToCart}
                    className={`w-full py-2.5 rounded-full bg-[#E8D595] hover:bg-white text-[#272727] font-bold text-sm uppercase tracking-wide transition-all shadow-lg shadow-[#E8D595]/20 ${isAdding ? 'scale-95' : 'scale-100'
                        }`}
                >
                    {isAdding ? 'Added!' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
}
