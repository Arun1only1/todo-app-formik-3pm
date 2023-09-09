import React from "react";
import "./App.css";
import TodoForm from "./component/TodoForm";
import HomePage from "./pages/HomePage";
import TodoList from "./component/TodoList";
import A from "./component/A";
import CustomButton from "./component/CustomButton";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import ProductCard from "./component/ProductCard";

const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const animalList = [
  {
    image:
      "https://www.nyc.gov/assets/wildlifenyc/images/content/pages/Stag_On_A_Hill.jpg",
    name: "Deer",
    description,
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/tiger-portrait-horizontal-11392212.jpg",

    name: "Tiger",
    description,
  },
  {
    image:
      "https://cdn.britannica.com/72/272-050-E1965E27/African-elephant-Kenya.jpg",
    name: "Elephant",
    description,
  },
];
function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        margin: "2rem",
        gap: "2rem",
      }}
    >
      {animalList.map((item, index) => {
        return (
          <ProductCard
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        );
      })}

      {/* <CustomButton
        icon={<AiOutlinePlus />}
        label="Add user"
        variant="contained"
        backgroundColor="red"
      />
      <CustomButton
        icon={<AiOutlineDelete />}
        label="Delete user"
        variant="outlined"
      /> */}
    </div>
  );
}

export default App;
