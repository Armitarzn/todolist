import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import BasicTextFields from "./BasicTextFields";
import BasicButtons from "./BasicButton";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Task({
  task,
  edited,
  checked,
  description,
  handleDelete,
  handleChange,
  handleEdit,
  submitEdit,
}) {
  const [editedTask, setTask] = useState(task);

  return (
    <div
      className="max-h-32 flex justify-between border rounded m-2 p-4 overflow-hidden"
      style={{
        opacity: checked && 0.7,
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
          <div className="flex w-1">
            <BasicButtons
              label="ok"
              width={2}
              onClick={() => submitEdit(editedTask)}
            />
          </div>
        </div>
      ) : (
        <div>
          <p
            style={{
              textDecoration: checked && "line-through",
            }}
          >
            {task}
          </p>
          <p
            className="text-xs"
            style={{
              opacity: 0.5,
            }}
          >
            {description}
          </p>
        </div>
      )}
      <div className="flex items-center">
        <div onClick={handleEdit} className="mr-2">
          <EditIcon className="cursor-pointer" />
        </div>
        {!edited && (
          <Checkbox
            {...label}
            checked={checked}
            onChange={(event) => handleChange(event)}
          />
        )}
        <div onClick={handleDelete}>
          <DeleteIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Task;
