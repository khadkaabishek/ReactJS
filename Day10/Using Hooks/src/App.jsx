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

  // let textStateArr = useState("Food Item Entered by user ");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // console.log(`Current Value of text value ${textToShow}`);

  // this can also be done by array destructuring
  let [texttoShow, setTextState] = useState("Item entered BY user ");
  console.log(`Current Value of text value ${textToShow}`);

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

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
        <p>{textToShow}</p>
        <Items items={items} />
      </Container>
      <Container>
        <p>Above is the lists of things for learner</p>
      </Container>
    </>
  );
}

export default App;
