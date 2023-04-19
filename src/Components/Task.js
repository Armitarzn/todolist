import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import BasicTextFields from "./BasicTextFields";

const label = { inputProps: { "aria-label": "Checkbox demo" } };


function Task({task, edited, checked, handleDelete, handleChange, handleEdit}) {
    const [editedTask, setTask] = useState("")
    return (
  <div
    className="max-h-32 flex justify-between border rounded m-2 p-4 overflow-hidden"
    style={{
      opacity:checked && 0.7,
    }}
  >
    {edited ? (
        <div className="flex items-center">
            <BasicTextFields 
            label="Edit"
            value={editedTask}
            setValue={setTask}
            width={"10inch"}
            />
        </div>
    ) : (
    
        <p
        style={{
            textDecoration: checked && "line-through",
        }}
        >
        {task}
        </p>
    )}
    <div className="flex items-center">
      <div onClick={handleEdit} className="mr-2">
        <EditIcon />
      </div>
      <Checkbox
        {...label}
        checked={checked}
        onChange={(event) => handleChange(event)}
      />
      <div onClick={handleDelete}>
        <DeleteIcon className="cursor-pointer" />
      </div>
    </div>
  </div>
);
}

export default Task;
