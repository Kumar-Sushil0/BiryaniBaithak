export interface MenuItem {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    type: 'veg' | 'non-veg';
    bestseller?: boolean;
    category: string;
}

export const menuItems: MenuItem[] = [
    {
        id: 'chicken-dum-biryani',
        name: 'Chicken Dum Biryani',
        price: 320,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjrVWRtmg34Iqt56YQUJ1lFdLJ-JiOAwdKoWQFoQyf7Ii3iri2-CvWnJqyhe9VKhk34PWDswmF3xmApZIXOEl8v6wWtxNv8BXqSsBGUz1E4KtpuXFeLbuq5dk6MhF4LzqyP6EATtW0BC3tn4sNMMzautZZg9216_GzIt27TsmaYh81g6Tykevm6x7LaMLFRx9ZekuYzXAy4ckgnHIgNzBuLzz7BS3j6tttUmg3yIgkRO36RGt-lnjM1mnljzROtc15OwweSsWxykzL',
        description: 'Aromatic basmati rice cooked with tender chicken pieces and authentic spices in dum style.',
        type: 'non-veg',
        category: 'Biryani Special',
    },
    {
        id: 'paneer-tikka-masala',
        name: 'Paneer Tikka Masala',
        price: 280,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmIlIjsK6s40V3FoznzbAO1XAtNOyoHlfOf7mgb1cV4tiAXPtuk4-cxeGWV25cR9Q6ysx4TX2MA2jijjzmPxEuWITMbHTiwShye7j9t5AYjvKZt1PFEsC8Pj7jeqa0ZLoA_rI-CIt7ZU19PDTZo-TYBWD2vdc2PSvCf8kZc9Vp77wUfvITwg_O3hZ8UHpYmujjgYI2UcuJyT2aRv6GffE0AjAUfA-7XryaNPmQQaCEoGzAxQ3jC4giZ0NhHXRGinADHRBxRne0t-QE',
        description: 'Char-grilled paneer cubes simmered in a rich, creamy tomato and onion gravy.',
        type: 'veg',
        category: 'Curries',
    },
    {
        id: 'mutton-galouti-kebab',
        name: 'Mutton Galouti Kebab',
        price: 450,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8HAJiFCNVTASUHArNA-Iu1ojB-TdVPSszfCyWkgSBqs1WUtCmsWTEIap5Wr5K3OjJcXNqhH3dG6RGdabj9d25-GjyMPoUaO9jA99xCVu5wZf-2-N7eFTStO6X5cwMsn_nuYwODwWww8aQGhBFfsN3yGWPLus-O-0gTqEcpLVeqhG7R5Qb1LoBQS3l2ROflciL0iWlCehly9wIlqVoEF9_3GP1HREGRF6Z1L21PH0lCyYG1XTuEnWysTtueR-E9luMWEIINnQAm9DM',
        description: 'Melt-in-mouth minced mutton kebabs, a royal delicacy from the kitchens of Lucknow.',
        type: 'non-veg',
        bestseller: true,
        category: 'Kebabs',
    },
    {
        id: 'dal-makhani',
        name: 'Dal Makhani',
        price: 240,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeH1bV0ygHd7upcquN7_Eyw5l0iWPi_uiQnSvwKyHoqapoCjzeQkxgYtYr6X2He4q_C-BeI6mus-mgM_NglXkcJEqoEpLpCsnEmk97WIPnPqv9cz_nCexiv5IGkuk_AJV2fJAIqg9pAqx9WbGkQY27iGknT1BYRx6__DihU9wONhhKw6YSqd8Ksccnav6HKjzWWdYLB-E_F2vsjK_u615xiKP_NPm0cOS-tqrDXNeKbPd3KF7I2HaA7X6vYj83p7eN6y3oRid87Kjb',
        description: 'Slow-cooked black lentils simmered overnight with butter and cream.',
        type: 'veg',
        category: 'Curries',
    },
    {
        id: 'garlic-butter-naan',
        name: 'Garlic Butter Naan',
        price: 60,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPoP2B4BLfO4qDTTpk1dVNIYBBqfhzqwlzdoFBAV5If7OG9iyr6AkIVgpA9xXzVMsKWjlqRvgUuXhjmDsZpsWGiHrB46QrDSCcRMt7rs3AP9Xhhbq0rTmlUMZbagcYdqn_-UUrosA_hOvX-fxQ8nW7OaTuJmVs_E8UtsM2BzawC14IbBPlJ3ZeOiOyFVUhXlelEnLC_2aJ0LuBcbaSbds925vHv1AvBsocYD2a7EJIibhU1j_Aa3fNLBMaU5ckNhU45yoadrsSkhjG',
        description: 'Soft and fluffy Indian bread infused with garlic and brushed with butter.',
        type: 'veg',
        category: 'Breads & Roti',
    },
    {
        id: 'gulab-jamun',
        name: 'Gulab Jamun',
        price: 120,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwsDYUm8haik_wyXDEvrpLi8X0OUPy0A5_qIzqGsjsMnGniFAnSFh7tL2QR8e6tngAXLdI-yX0dvsNha7YzKy-erYvFYe4rYn_93f02jNQ6uz7YtNOCJrYZs94WA7GxPn4GM5_NFWjnFSmLkHkxOCSIWMA2zThjpT7TdEPOIQ5iRna5Wm_RuEc8Igtdtbrl6fKDQzw0z65CCx82AFfv1GjLH0WhanjzRfn2ETwbElYaykmZT_8Gr7sx2y45sqSKDax5PCeWot6xtdG',
        description: 'Classic deep-fried milk dumplings soaked in rose-flavored sugar syrup.',
        type: 'veg',
        category: 'Desserts',
    },
    {
        id: 'hyderabadi-mutton-biryani',
        name: 'Hyderabadi Mutton Biryani',
        price: 480,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv7KJ4lNSadzRxMW0nKQ2RosfXkAdDv_Iw-XKw1xr_GyXKnBhStro2gGZiYIOeQLBDL-nkNNmRhgZeS8L3zOyTUF0oMSOB9rdwOOCKwwweAl0U8BdGpkUNyL50UHJH2fPyXjePhGS9O15zHv-1QSijM2BYILTfBXJ6W4ChWF_RA5ISdridEyr6Vv_HMRZvIRA6xidH8j-J-IbWdqnYHw9kbv-b60rmeAaCsY6hcPyUjGr30A7UGECq6mr1K4btyVyk2odoCraOExNM',
        description: 'Authentic Hyderabadi style biryani with spicy mutton pieces and saffron rice.',
        type: 'non-veg',
        category: 'Biryani Special',
    },
    {
        id: 'sweet-lassi',
        name: 'Sweet Lassi',
        price: 90,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB58R09Ys1M12Z-KUUoaP31IesRH8GIjYoG2kDfKMxX4bN_9SlJurjUQEBMR_uY-6WZ4U79YL-Bilf4zvBNe33BKOkaDLuH7Vj5rHo_s0NhI4WjSRbnhh4-T7RU7rUPVRF_a--CuKMiUiWSDT_YbiOl962aQKrIF7sZTRDBzFY0JA-mXh_wEsUq6e0HTuftkj_nEdA9weYCUPJHfgrp0Sh1FsrAVXAQ_8W5Jc8Knjx6ZAKzBBynEvVquTpithbWk2xgIFme9Onh1-eP',
        description: 'Traditional thick yogurt drink topped with malai and dry fruits.',
        type: 'veg',
        category: 'Beverages',
    },
];
