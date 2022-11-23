import React, { useState } from "react";
import ListItem from "./ListItem";
import styles from "./css/style.module.css";
const styleTable = {
  width: "100%",
  fontSize: "20px",
};
const styleDiv = {
  width: "50%",
  margin: "auto",
  border: "3px solid black",
  padding: "15px",
};
const Todo = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    if (event.target.name === "todo") {
      setTodoItem(event.target.value);
    }
    //  else if (event.target.name === "LName") {
    //   setLastName(event.target.value);
    // } else if (event.target.name === "age") {
    //   setAge(event.target.value);
    // }
  };
  //################################
  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    // console.log({
    //   todo: todoItem,
    // });
    let tempList = todoList;
    tempList.push(todoItem);
    setTodoList(tempList);
    setTodoItem("");
    console.log("todoList");
    console.log(todoList);
  };
  return (
    <div style={styleDiv}>
      <h1> Todo App </h1>
      <hr /> <br />{" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Todo Text"
          name="todo"
          value={todoItem}
        ></input>

        <br />
        <br />
        <button type="submit">Submit Todo</button>
      </form>
      <br />
      <br />
      <table style={styleTable}>
        <tr>
          <th className={styles.headerTest}>Id</th>
          <th>Name</th>
        </tr>
        {todoList.map((item, index) => (
          <ListItem key={index} id={index} name={item}></ListItem>
        ))}
      </table>
    </div>
  );
};

export default Todo;
