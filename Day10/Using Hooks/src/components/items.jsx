import Content from "./content";

const Items = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Content
          key={item}
          item={item}
          HandleByButton={() => {
            console.log(`${item} clicked`);
          }}
        />
      ))}
    </ul>
  );
};

export default Items;
