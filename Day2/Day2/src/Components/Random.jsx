function Random() {
  let number = Math.random() * 100;
  let numupdate = Math.round(number);
  return (
    <p style={{ "background-color": "#776691" }}>Random Number: {numupdate}</p>
  );
}

export default Random;
