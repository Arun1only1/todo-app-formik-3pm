import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineDeleteOutline } from "react-icons/md";
import TodoCheckbox from "./TodoCheckbox";

const TodoForm = () => {
  const [todoList, setTodoList] = useState([]);

  const filterTask = (taskId) => {
    const newTodoList = todoList.filter((item) => item.id !== taskId);

    setTodoList(newTodoList);
  };

  return (
    <Box>
      <Formik
        initialValues={{ title: "", date: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required."),
          date: Yup.string().required("Date is required."),
        })}
        onSubmit={(values) => {
          values = { ...values, id: uuidv4() };
          setTodoList([...todoList, values]);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              //   border: "1px solid grey",
              boxShadow:
                " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              padding: "2rem",
              minWidth: "30vw",
              margin: "2rem",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h5">Add todo form</Typography>
            <TextField
              required
              label="Title"
              placeholder="Go to gym"
              {...formik.getFieldProps("title")}
            />

            {formik.touched.title && formik.errors.title ? (
              <div style={{ color: "red" }}>{formik.errors.title}</div>
            ) : null}

            <TextField
              required
              label="Date"
              placeholder="2023/01/01"
              {...formik.getFieldProps("date")}
            />

            {formik.touched.date && formik.errors.date ? (
              <div style={{ color: "red" }}>{formik.errors.date}</div>
            ) : null}

            <Button
              variant="contained"
              color="success"
              type="submit"
              sx={{ marginTop: "2rem" }}
            >
              Add task
            </Button>
          </form>
        )}
      </Formik>

      <Divider />
      <ul>
        {todoList.map((item) => {
          return (
            <li
              key={item.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <TodoCheckbox />

              <Typography variant="h6" sx={{ padding: "1rem" }}>
                {`${item.title} at ${item.date}`}
              </Typography>
              <Button
                sx={{ width: "150px", color: "red" }}
                onClick={() => filterTask(item.id)}
              >
                <MdOutlineDeleteOutline size={30} />
              </Button>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default TodoForm;
