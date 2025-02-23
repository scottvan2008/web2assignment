"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    //Create an event handler function (e.g., handleAddItem) that adds a new item to items.
    const handleAddItem = (item) => {
        setItems([...items, item]);
    };
    return (
        <main>
            {/* Pass the handleAddItem event handler to the NewItem component as a prop called onAddItem. */}
            <NewItem onAddItem={handleAddItem} />
            {/* Pass the items state to the ItemList component as a prop. */}
            <ItemList items={items} />
        </main>
    );
}
