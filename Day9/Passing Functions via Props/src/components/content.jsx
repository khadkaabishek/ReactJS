import styles from "./content.module.css";

const Content = ({ item, HandleByButton }) => {
  // const { item } = props; // Destructuring
  // const seeButtonClick = (event) => {
  //   console.log(event);
  //   console.log(`its ${item} `);

  return (
    <li className={` ${styles.mine_items}  list-group-item `}>
      <span>{item}</span>{" "}
      <button
        className={`${styles.buttons} btn btn-info`}
        onClick={HandleByButton}
      >
        See
      </button>
    </li>
  );
};

export default Content;

// import styles from "./content.module.css";

// const Content = ({ item }) => {
//   // const { item } = props; // Destructuring
//   const seeButtonClick = () => {
//     console.log(`its ${item} `);
//   };

//   return (
//     <li className={` ${styles.mine_items}  list-group-item `}>
//       <span>{item}</span>{" "}
//       <button
//         className={`${styles.buttons} btn btn-info`}
//         onClick={seeButtonClick}
//       >
//         See
//       </button>
//     </li>
//   );
// };

// export default Content;
