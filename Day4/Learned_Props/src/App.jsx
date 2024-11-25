import Items from "./components/items";
import ErrorMessage from "./components/errorMessage";
let items = ["Books", "Pen", "Copy", "Newspaper", "Novel"];
// items = [];

function App() {
  return (
    <>
      <h1>Lists</h1>
      <ErrorMessage items={items} />
      {/* Pass the items array to the Items component */}
      <Items items={items} />
    </>
  );
}

export default App;
