import React, { useState, useEffect } from "react";
import "../App.css";
import Todo from "./Todo";

const TodoList = () => {
  const [listDropdown, setListDropdown] = useState("Gaming");

  const [todoLists, setTodoLists] = useState([
    [
      { text: "Learn Python", completed: true, list: "Coding" },
      { text: "Learn Javascript", completed: false, list: "Coding" },
      { text: "Learn C#", completed: false, list: "Coding" },
    ],
    [
      { text: "Take out trash", completed: false, list: "IRL" },
      { text: "Wash Car", completed: false, list: "IRL" },
      { text: "Find missing hat", completed: true, list: "IRL" },
    ],
    [
      { text: "Learn to double jump", completed: false, list: "Gaming" },
      { text: "rank up", completed: false, list: "Gaming" },
      { text: "buy sniper", completed: true, list: "Gaming" },
    ],
  ]);

  const [textArea, setTextArea] = useState({ text: "" });

  const handleTextAreaChange = (e) => {
    const { name, value } = e.target;
    setTextArea({ ...textArea.text, [name]: value });
  };

  const handleListDropdownChange = (e) => {
    const { name, value } = e.target;
    setListDropdown(value);
  };

  const handleAdd = (e) => {
    const dropDown = listDropdown;
    const text = textArea.textArea;
    console.log(text);

    const newTodoLists = todoLists.map((todoList) => {
      if (todoList[0].list === dropDown) {
        todoList.push({
          text: text,
          completed: false,
          list: dropDown,
        });
      }
    });
    //setting text area refreshes the dom for new list to be visible
    //forceUpdate() another possible solution
    setTextArea({ textArea, text: "" });

    return newTodoLists;
  };

  const handleTodos = (text) => (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      console.log(todoLists);
      const newData = todoLists.map((todoList) => {
        const newList = todoList.map((todo) => {
          if (todo.text === text) {
            todo = {
              ...todo,
              completed: !todo.completed,
            };
            return todo;
          }
          return todo;
        });
        return newList;
      });
      setTodoLists(newData);
    }
  };

  return (
    <div className="App">
      <select
        name="listDropdown"
        value={listDropdown}
        style={{ margin: "10px" }}
        onChange={handleListDropdownChange}
      >
        <option value={"Coding"}>Coding</option>
        <option value={"IRL"}>IRL</option>
        <option value={"Gaming"}>Gaming</option>
      </select>
      <div className="TodoList">
        {todoLists.map((todoList) => {
          const singleList = todoList.map((todo) => {
            if (todo.list === listDropdown) {
              return (
                <Todo todo={todo} handleTodos={handleTodos} key={todo.text} />
              );
            }
          });
          return singleList;
        })}
      </div>
      <div style={{ margin: "10px" }}>
        <textarea
          name="textArea"
          value={textArea.text}
          onChange={handleTextAreaChange}
          placeholder="Enter new Todo list item"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default TodoList;
