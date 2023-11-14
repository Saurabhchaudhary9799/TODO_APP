import { useState } from "react";
import styles from "./App.module.css";
import AddTodo from "./components/AddTodo";
import Logo from "./components/Logo";
import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItemsAll from "./components/TodoItemsAll.jsx";

function App() {
  const [TodoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName) => {
    console.log(`New Item is added : ${itemName}`);
    const newTodoItems = [...TodoItems, itemName];
    setTodoItems(newTodoItems);
    console.log(TodoItems);
  };

  const handleDeleteItem = (itemName) => {
    const newTodoItems = TodoItems.filter((item) => item !== itemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className={styles.todoContainer}>
      <Logo />
      <AddTodo onNewitem={handleNewItem} />
      {TodoItems.length == 0 && <Welcome />}
      <TodoItemsAll todoItems={TodoItems} onDeleteItem={handleDeleteItem} />
    </center>
  );
}

export default App;
