function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "10/04/2023";
  return (
    <div className="row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
export default TodoItem1;
