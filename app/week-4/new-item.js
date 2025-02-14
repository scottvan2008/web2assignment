"use client";

import { useState } from "react";

export default function Counter() {
    const [quantity, setQuantity] = useState(1);

    const decrement = () => {
        setQuantity(quantity - 1);
    };

    const increment = () => {
        setQuantity(quantity + 1);
    };

    return (
        <main className="p-4 bg-white border rounded-lg shadow-md mx-auto max-w-[200px] w-full">
            <div className="flex justify-between items-center">
                <p>{quantity}</p>

                <button
                    onClick={decrement}
                    disabled={quantity <= 1}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300 active:bg-yellow-700"
                >
                    -
                </button>
                <button
                    onClick={increment}
                    disabled={quantity >= 20}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300 active:bg-yellow-700"
                >
                    +
                </button>
            </div>
        </main>
    );
}
