"use client";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(""); // State for selected ingredient

    // Function to add a new item to the list
    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    // Function to handle selecting an item from the shopping list
    const handleItemSelect = (item) => {
        // Clean up the item name (remove quantity, emojis, etc.)
        const cleanedName = item.name
            .split(",")[0] // Remove quantity and other details after a comma
            .replace(/[^\w\s]/gi, "") // Remove emojis and special characters
            .trim(); // Trim any extra spaces

        setSelectedItemName(cleanedName); // Update state with cleaned name
    };

    return (
        <main className="flex gap-8 p-4">
            {/* Left Side: NewItem & ItemList */}
            <div className="w-1/2">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>

            {/* Right Side: Meal Ideas */}
            <div className="w-1/2">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}
