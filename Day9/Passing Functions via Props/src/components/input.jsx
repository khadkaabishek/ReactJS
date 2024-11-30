import { useState } from "react";

const Input_item = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle adding the item
  const handleAdd = () => {
    onAddItem(inputValue); // Pass input value to the parent
    setInputValue(""); // Clear the input field
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add an item..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Input_item;
