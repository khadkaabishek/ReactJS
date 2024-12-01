import styles from "./content.module.css";
import { GiLookAt } from "react-icons/gi";


const Content = ({ item, see, HandleByButton }) => {
  // const { item } = props; // Destructuring
  // const seeButtonClick = (event) => {
  //   console.log(event);
  //   console.log(`its ${item} `);

  return (
    <li className={` ${styles.mine_items}  list-group-item ${see && "active"}`}>
      <span>{item}</span>{" "}
      <button
        className={`${styles.buttons} btn btn-info`}
        onClick={HandleByButton}
      >
        <GiLookAt />
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
