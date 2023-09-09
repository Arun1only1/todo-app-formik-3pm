import { Typography } from "@mui/material";
import React from "react";

const PersonList = (props) => {
  const { persons, tutorName, year } = props;
  return (
    <div>
      {persons.map((item, index) => {
        // console.log(item);

        return <Typography key={index}>{item.name}</Typography>;
      })}
    </div>
  );
};

export default PersonList;
