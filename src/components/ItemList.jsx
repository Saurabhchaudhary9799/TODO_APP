import styles from "./ItemList.module.css";

function ItemList({ items, onDeleteItem }) {
  return (
    <>
      <div className={styles.itemName}>{items}</div>
      <button
        type="button"
        className={`${styles.button} btn btn-danger mx-3 `}
        onClick={() => onDeleteItem(items)}
      >
        Delete
      </button>
    </>
  );
}

export default ItemList;
