import styles from "./TodoItemsAll.module.css";
import ItemList from "./ItemList.jsx";

function TodoItemsAll({ todoItems, onDeleteItem }) {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {todoItems.map((item) => (
        <ItemList items={item} onDeleteItem={onDeleteItem} />
      ))}
    </div>
  );
}

export default TodoItemsAll;
