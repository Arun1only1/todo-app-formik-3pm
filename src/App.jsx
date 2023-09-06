import React from "react";
import "./App.css";
import TodoForm from "./TodoForm";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TodoForm />
    </div>
  );
}

export default App;
