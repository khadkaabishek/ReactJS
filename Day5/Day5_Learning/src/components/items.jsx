import Content from "./content";

const Items = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Content key={item} item={item} />
      ))}
    </ul>
  );
};

export default Items;
