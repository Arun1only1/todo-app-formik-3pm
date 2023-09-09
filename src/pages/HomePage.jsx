import React from "react";
import PersonList from "./PersonList";
import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";

const persons = [
  {
    id: "1",
    title: "Prasanna",
    college: "Lord buddha",
  },
  {
    id: "2",
    title: "Rohan",
    college: "Islington",
  },
  {
    id: "3",
    title: "Aakash",
    college: "NCIT",
  },
  {
    id: "4",
    title: "Sanjam",
    college: "Liverpool",
  },
];

const HomePage = (props) => {
  return (
    <div>
      {/* <TodoForm /> */}
      <TodoList todos={persons} />
    </div>
  );
};

export default HomePage;
