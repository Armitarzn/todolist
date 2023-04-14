import React, {useState, useEffect} from "react";
import AddIcon from "@mui/icons-material/Add";
import BasicTextFields from "./BasicTextFields";
import DeleteIcon from "@mui/icons-material/Delete";
import BasicButtons from "./BasicButton";
import Checkbox from "@mui/material/Checkbox";

function Assignments() {
  const [task, setTask] = useState("");
  const [wantsToAdd, setWantsToAdd] = useState(false);
  const [toDos, setToDos] = useState([]);
  const [description, setdescription] = useState("")
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleSubmit = () => {
    setToDos([...toDos, { task: task, checked: false }]);
    setTask("")
  };

  const handleChange = (index) => {
    const newTodos = [...toDos];
    const [removed] = newTodos.splice(index, 1);
    removed.checked = !removed.checked;
    removed.checked ? newTodos.push(removed) : newTodos.unshift(removed);
    setToDos(newTodos);
  };
  const handleDelete = (index) => {
    const newTodos = [...toDos];
    newTodos.splice(index, 1);
    setToDos(newTodos);
  };

  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div className="bg-orange-200 p-3 overflow-hidden">
      <div>
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Assignments</h1>
          <AddIcon
            className=" cursor-pointer"
            onClick={() => setWantsToAdd(true)}
          />
        </div>
      </div>
      {wantsToAdd && (
        <div className="flex justify-center items-center">
          <BasicTextFields label="Task" value={task} setValue={setTask} width="20ch" />
          <BasicTextFields label="Description" value={description} setValue={setdescription} width="30ch" />
          <BasicButtons label="add task" onClick={handleSubmit} />
        </div>
      )}
      {toDos.map((todo, index) => {
        return (
          <div
            className="flex justify-between border-spacing-7 rounded m-2 p-4"
            style={{
              opacity: todo.checked && 0.7,
            }}
          >
            {console.log(todo.checked)}
            <p
            style={{
              textDecoration: todo.checked && "line-through",
            }}
            >{todo.task}</p>
            <div className="flex items-center">
              <Checkbox
                {...label}
                checked={todo.checked}
                onChange={(event) => handleChange(event, index)}
              />
              <div onClick={() => handleDelete(index)}>
                <DeleteIcon className="cursor-pointer" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Assignments;
