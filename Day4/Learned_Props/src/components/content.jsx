const Content = (props) => {
  let { item } = props; // add Destructuring
  return <li className="list-group-item">{item}</li>;
};
export default Content;
