import React from "react";

const Todo = (props) => {
  const classes = props.todo.completed === true ? "Crossthrough" : "";

  return (
    <div>
      <label className={classes}>
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={props.handleTodos(props.todo.text)}
        />
        {props.todo.text}
      </label>
    </div>
  );
};

export default Todo;
