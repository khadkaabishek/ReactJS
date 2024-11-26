import Items from "./components/items";
import ErrorMessage from "./components/errorMessage";
let items = ["Books", "Pen", "Copy", "Newspaper", "Novel"];
// items = [];
import Container from "./components/container";

function App() {
  return (
    <>
      <Container>
        <h1>Lists</h1>
        <ErrorMessage items={items} />
        {/* Pass the items array to the Items component */}
        <Items items={items} />
      </Container>
      <Container>
        <p>Above is the lists of things for learner</p>
      </Container>
    </>
  );
}

export default App;
