function Hi() {
  let myName = "Abishek";
  let fullName = () => {
    return "Abishek Khadka";
  };
  let num = 1;
  return (
    <p>
      {num}. This is {fullName()} speaking, inshort {myName}
    </p>
  );
}
export default Hi;
