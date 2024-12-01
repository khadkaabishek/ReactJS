import { useState } from "react";
import Items from "./components/items";
import ErrorMessage from "./components/errorMessage";
import Input_item from "./components/input";
import Container from "./components/container";

function App() {
  // State to manage items
  const [items, setItems] = useState([
    "Books",
    "Pen",
    "Copy",
    "Newspaper",
    "Novel",
  ]);

  // Function to add a new item
  const addItem = (newItem) => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]); // Update the items array
    }
  };

  return (
    <>
      <Container>
        <h1>Lists</h1>
        <ErrorMessage items={items} />
        <Input_item onAddItem={addItem} />
        <Items items={items} />
      </Container>
      <Container>
        <p>Above is the lists of things for learner</p>
      </Container>
    </>
  );
}

export default App;
