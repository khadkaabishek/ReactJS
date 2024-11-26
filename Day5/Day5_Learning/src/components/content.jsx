import styles from "./content.module.css";

const Content = (props) => {
  const { item } = props; // Destructuring
  return (
    <li className={` ${styles.mine_items}  list-group-item `}>
      <span>{item}</span>
    </li>
  );
};

export default Content;
