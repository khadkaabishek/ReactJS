import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    textInput: "",
    emailInput: "",
    numberInput: "",
    dateInput: "",
    checkboxInput: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="form-container">
      <h1>React Form with CSS</h1>
      <form onSubmit={handleSubmit}>
        {/* Text Input */}
        <label>
          Name:
          <input
            type="text"
            name="textInput"
            value={formData.textInput}
            onChange={handleChange}
            required
          />
        </label>

        {/* Email Input */}
        <label>
          Email:
          <input
            type="email"
            name="emailInput"
            value={formData.emailInput}
            onChange={handleChange}
            required
          />
        </label>

        {/* Number Input */}
        <label>
          Age:
          <input
            type="number"
            name="numberInput"
            value={formData.numberInput}
            onChange={handleChange}
            required
          />
        </label>

        {/* Date Input */}
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateInput"
            value={formData.dateInput}
            onChange={handleChange}
            required
          />
        </label>

        {/* Checkbox Input */}
        <label className="checkbox-label">
          Accept Terms:
          <input
            type="checkbox"
            name="checkboxInput"
            checked={formData.checkboxInput}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
