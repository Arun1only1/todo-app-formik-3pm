import { Typography } from "@mui/material";
import React from "react";

const TodoList = (props) => {
  const todoList = props.todos;
  console.log(todoList);
  return (
    <div>
      {todoList.map((item, index) => {
        return <Typography key={index}>{item.title}</Typography>;
      })}
    </div>
  );
};

export default TodoList;
