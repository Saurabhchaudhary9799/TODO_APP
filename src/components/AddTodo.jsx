import { useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewitem }) {
  const [ItemName, setItemName] = useState();

  function handleOnChange(e) {
    setItemName(e.target.value);
  }
  function handleOnClick(e) {
    onNewitem(ItemName);
    setItemName("");
  }

  return (
    <div className="d-flex justify-content-around">
      <input
        type="text"
        className={styles.additem}
        placeholder="Enter Item"
        value={ItemName}
        onChange={handleOnChange}
      />
      <button
        type="button"
        onClick={handleOnClick}
        className={`${styles.button} btn btn-success mx-3 `}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
