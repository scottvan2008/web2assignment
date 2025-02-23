"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");
    const [groupByCategory, setGroupByCategory] = useState(false);

    // Create a copy of items and sort based on the current value of sortBy
    const sortedItems = [...items].sort((a, b) => {
        return sortBy === "name"
            ? a.name.localeCompare(b.name)
            : a.category.localeCompare(b.category);
    });

    // Group items by category if groupByCategory is true
    const groupedItems = sortedItems.reduce((acc, item) => {
        const { category } = item;
        if (!acc[category]) acc[category] = [];
        acc[category].push({ ...item }); // Push a copy of the item
        return acc;
    }, {});

    // Sort categories alphabetically
    const sortedCategories = Object.keys(groupedItems).sort();

    // Helper function to determine button styling
    const getButtonClass = (condition) =>
        `px-4 py-2 rounded ${
            condition ? "bg-blue-500 text-white" : "bg-gray-200"
        }`;

    return (
        <main className="p-4">
            <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

            {/* Sort and Group Buttons */}
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => {
                        setSortBy("name");
                        setGroupByCategory(false);
                    }}
                    className={getButtonClass(
                        sortBy === "name" && !groupByCategory
                    )}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => {
                        setSortBy("category");
                        setGroupByCategory(false);
                    }}
                    className={getButtonClass(
                        sortBy === "category" && !groupByCategory
                    )}
                >
                    Sort by Category
                </button>
                <button
                    onClick={() => setGroupByCategory(!groupByCategory)}
                    className={getButtonClass(groupByCategory)}
                >
                    Group by Category
                </button>
            </div>

            {/* Item List */}
            {groupByCategory ? (
                // Render grouped items
                <div>
                    {sortedCategories.map((category) => (
                        <div key={category} className="mb-8">
                            <h2 className="text-xl font-bold capitalize mb-4">
                                {category}
                            </h2>
                            <ul>
                                {groupedItems[category]
                                    .sort((a, b) =>
                                        a.name.localeCompare(b.name)
                                    )
                                    .map((item) => (
                                        <Item
                                            key={item.id}
                                            name={item.name}
                                            quantity={item.quantity}
                                            category={item.category}
                                            onSelect={() => onItemSelect(item)} // Pass item to onSelect
                                        />
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                // Render regular sorted items
                <ul>
                    {sortedItems.map((item) => (
                        <Item
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                            onSelect={() => onItemSelect(item)} // Pass item to onSelect
                        />
                    ))}
                </ul>
            )}
        </main>
    );
}
