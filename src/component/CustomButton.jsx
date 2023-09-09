import { Button } from "@mui/material";
import React from "react";

const CustomButton = (props) => {
  return (
    <Button
      startIcon={props.icon}
      sx={{ height: "3rem", background: props.backgroundColor }}
      variant={props.variant}
    >
      {props.label}
    </Button>
  );
};

export default CustomButton;
