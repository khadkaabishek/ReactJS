import { useState } from "react";
import { IoIosAdd } from "react-icons/io";

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
      <button onClick={handleAdd}>
        <IoIosAdd />
      </button>
    </div>
  );
};

export default Input_item;
