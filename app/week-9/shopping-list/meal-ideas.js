"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null); // Track selected meal

    // Fetch meal ideas based on ingredient
    useEffect(() => {
        if (!ingredient) return;

        fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        )
            .then((response) => response.json())
            .then((data) => setMeals(data.meals || []));
    }, [ingredient]);

    // Fetch full meal details when a meal is clicked
    const handleMealClick = (mealId) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then((response) => response.json())
            .then((data) => setSelectedMeal(data.meals[0] || null));
    };

    return (
        <div className="p-4 bg-gray-100 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">
                Meal Ideas for "{ingredient}"
            </h2>

            {/* Display meal list */}
            <ul className="grid grid-cols-2 gap-4">
                {meals.map((meal) => (
                    <li
                        key={meal.idMeal}
                        className="cursor-pointer border p-2 rounded hover:bg-gray-200"
                        onClick={() => handleMealClick(meal.idMeal)}
                    >
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="w-full rounded"
                        />
                        <p className="text-center mt-2 font-semibold">
                            {meal.strMeal}
                        </p>
                    </li>
                ))}
            </ul>

            {/* Display selected meal details */}
            {selectedMeal && (
                <div className="mt-6 p-4 border rounded bg-white">
                    <h3 className="text-lg font-bold">
                        {selectedMeal.strMeal}
                    </h3>
                    <img
                        src={selectedMeal.strMealThumb}
                        alt={selectedMeal.strMeal}
                        className="w-full rounded mt-2"
                    />

                    {/* Display Ingredients */}
                    <h4 className="mt-4 font-semibold">Ingredients:</h4>
                    <ul className="list-disc pl-5">
                        {Array.from({ length: 20 }, (_, i) => i + 1)
                            .map((num) => ({
                                ingredient: selectedMeal[`strIngredient${num}`],
                                measure: selectedMeal[`strMeasure${num}`],
                            }))
                            .filter((item) => item.ingredient) // Remove empty ingredients
                            .map((item, index) => (
                                <li
                                    key={index}
                                >{`${item.ingredient} - ${item.measure}`}</li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
