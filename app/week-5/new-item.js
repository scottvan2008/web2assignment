"use client";

import { useState } from "react";

export default function Counter() {
    const [name, setName] = useState(""); // 商品名称状态
    const [quantity, setQuantity] = useState(1); // 商品数量状态
    const [category, setCategory] = useState("produce"); // 商品分类状态

    // 减少数量
    const decrement = () => {
        setQuantity(quantity - 1);
    };

    // 增加数量
    const increment = () => {
        setQuantity(quantity + 1);
    };

    // 表单提交处理
    const handleSubmit = (event) => {
        event.preventDefault();
        let item = { name, quantity, category };
        console.log(item);
        alert(
            `Added item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
        );

        // 重置表单
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <main className="p-6 bg-white border rounded-lg shadow-lg mx-auto max-w-[240px] w-full space-y-4">
            {/* 商品名称输入 */}
            <div>
                <form onSubmit={handleSubmit} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Item Name:
                        <input
                            placeholder="Item name"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </label>
                </form>
            </div>

            {/* 数量控制 */}
            <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-800">
                    {quantity}
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={decrement}
                        disabled={quantity <= 1}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed active:bg-blue-700"
                    >
                        -
                    </button>
                    <button
                        onClick={increment}
                        disabled={quantity >= 20}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed active:bg-blue-700"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* 分类选择与提交按钮 */}
            <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Category:
                        <select
                            value={category}
                            onChange={(event) =>
                                setCategory(event.target.value)
                            }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen foods">Frozen Foods</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="dry goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors active:bg-blue-700"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </main>
    );
}
