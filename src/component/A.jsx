import React, { useState } from "react";
import B from "./B";
import { TextField } from "@mui/material";

const A = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ margin: "4rem" }}>
      <TextField
        label="Enter your name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <B userName={name} />
    </div>
  );
};

export default A;
