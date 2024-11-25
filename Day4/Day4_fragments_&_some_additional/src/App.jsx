function App() {
  let List = ["Books", "Pen", "Copy", "Newspaper", "Novel"];
  List = [];
  // if (List.length == 0) {
  //   return <p>There is nothing </p>; //can implement if else here in the same way
  // }
  return (
    <>
      <h1>Lists</h1>
      {List.length === 0 ? <p>There is nothing </p> : null}
      <ul className="list-group">
        {List.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
