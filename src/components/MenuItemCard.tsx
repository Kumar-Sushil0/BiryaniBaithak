"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { PriceVariant } from "@/data/menuItems";

interface MenuItemCardProps {
    id: string;
    name: string;
    price: number;
    priceVariants?: PriceVariant[];
    image: string;
    description: string;
    type: 'veg' | 'non-veg';
    bestseller?: boolean;
}

export default function MenuItemCard({
    id,
    name,
    price,
    priceVariants,
    image,
    description,
    type,
    bestseller = false,
}: MenuItemCardProps) {
    const { cart, addToCart, updateQuantity } = useCart();
    const [selectedVariant, setSelectedVariant] = useState<string>(
        priceVariants ? priceVariants[0].label : ''
    );
    
    // Get current price based on selected variant
    const currentPrice = priceVariants 
        ? priceVariants.find(v => v.label === selectedVariant)?.price || price
        : price;
    
    // Find if this item with this variant is in cart
    const cartKey = priceVariants ? `${id}-${selectedVariant}` : id;
    const cartItem = cart.find((item) => {
        const itemKey = item.variant ? `${item.id}-${item.variant}` : item.id;
        return itemKey === cartKey;
    });
    const quantity = cartItem?.quantity || 0;

    const handleAddToCart = () => {
        addToCart({
            id,
            name,
            price: currentPrice,
            image,
            description,
            type,
            variant: priceVariants ? selectedVariant : undefined,
        });
    };

    const handleIncrement = () => {
        updateQuantity(id, quantity + 1, priceVariants ? selectedVariant : undefined);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            updateQuantity(id, quantity - 1, priceVariants ? selectedVariant : undefined);
        } else {
            updateQuantity(id, 0, priceVariants ? selectedVariant : undefined);
        }
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
                    <span className="font-bold text-white whitespace-nowrap ml-2">₹{currentPrice}</span>
                </div>
                <p className="text-sm text-gray-400 font-light mb-4 flex-grow line-clamp-2">
                    {description}
                </p>
                
                {/* Variant Selection */}
                {priceVariants && priceVariants.length > 1 && (
                    <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                            {priceVariants.map((variant) => (
                                <button
                                    key={variant.label}
                                    onClick={() => setSelectedVariant(variant.label)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                        selectedVariant === variant.label
                                            ? 'bg-[#E8D595] text-[#272727]'
                                            : 'bg-[#272727] text-[#E8D595] border border-[#E8D595]/30 hover:border-[#E8D595]'
                                    }`}
                                >
                                    {variant.label} - ₹{variant.price}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                
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
