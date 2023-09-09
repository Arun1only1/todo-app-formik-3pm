import React from "react";
import C from "./C";

const B = (props) => {
  return (
    <div style={{ margin: "2rem" }}>
      <img
        src="https://pbs.twimg.com/media/DYFUwAVXcAElZOj.jpg"
        alt="goto image"
      />

      <C user={props.userName} />
      <C user="Rohan" />
    </div>
  );
};

export default B;
