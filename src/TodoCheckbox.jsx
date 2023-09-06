import { Checkbox } from "@mui/material";
import React, { useState } from "react";

const TodoCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onClick={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default TodoCheckbox;
