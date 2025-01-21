"use client";
import { useState } from "react";

// Challenge 4: Shopping List
/**
 * Challenge: Create a shopping list with these features
 * ✅ Initialize state for `items` as an array
 * ✅ Add ability to input new items
 * ✅ Add items to the list when form is submitted
 * ✅ Display total number of items
 * ✅ Add ability to remove items
 * ✅ Prevent empty submissions
 * ✅ Clear input after submission
 */
export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setItems((prevItems) => [...prevItems, inputValue]);
    setInputValue(""); // this should clear the input after form submission
  }
  function deleteItem(itemToDelete) {
    setItems(items.filter((item) => item !== itemToDelete));
  }
  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Shopping List ({items.length} items)
      </h1>

      <form className="flex gap-2 mb-6" onSubmit={onFormSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Add item..."
          className="flex-1 text-slate-700 p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {items.map((item, i) => {
          return (
            <li
              key={i}
              className="flex items-center justify-between p-3 bg-gray-50 text-slate-500 rounded-lg"
            >
              <span>{item}</span>
              <button
                onClick={() => deleteItem(item)}
                className="text-red-500 hover:text-red-600"
              >
                ✕
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
