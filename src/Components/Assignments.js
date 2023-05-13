import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import BasicTextFields from "./BasicTextFields";
import BasicButtons from "./BasicButton";
import Task from "./Task";
import RemoveIcon from "@mui/icons-material/Remove";

function Assignments() {
  const [task, setTask] = useState("");
  const [wantsToAdd, setWantsToAdd] = useState(false);
  const [toDos, setToDos] = useState([]);
  const [description, setDescription] = useState("")

  const handleSubmit = () => {
    task !== "" && setToDos([...toDos, { task: task, checked: false, edited: false, description: description }]);
    setTask("");
    setDescription("")
  };

  const handleChange = (event, index) => {
    const newTodos = [...toDos];
    const [removed] = newTodos.splice(index, 1);
    removed.checked = !removed.checked;
    removed.checked ? newTodos.push(removed) : newTodos.unshift(removed);
    setToDos(newTodos)
  };
  
  const handleDelete = (index) => {
    const newTodos = [...toDos];
    newTodos.splice(index, 1);
    setToDos(newTodos);
  };
  const handleEdit = (index) => {
    const newTodos = [...toDos];
    newTodos[index].edited = !newTodos[index].edited;
    setToDos(newTodos);
  };
  const submitEdit = (index, editedTask) => {
    const newTodos = [...toDos];
    newTodos[index].task = editedTask;
    newTodos[index].edited = false;
    setToDos(newTodos);
  };
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  return (
    <div className="bg-blue-200 p-3 overflow-hidden">
      <div>
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Assignments</h1>
          {wantsToAdd ? (
            <RemoveIcon
              className=" cursor-pointer"
              onClick={() => setWantsToAdd(false)}
            />
          ) : (
            <AddIcon
              className=" cursor-pointer"
              onClick={() => setWantsToAdd(true)}
            />
          )}
        </div>
      </div>
      {wantsToAdd && (
        <div className="lg:flex justify-center items-center flex-column lg:flex-row " >
          <BasicTextFields
            label="Task"
            value={task}
            setValue={setTask}
            width="20ch"
            focused={true}
          />
          <BasicTextFields
            label="Description"
            value={description}
            setValue={setDescription}
            width="30ch"
          />
          <BasicButtons
            className="ml-4"
            label="add task"
            onClick={handleSubmit}
          />
        </div>
      )}
      {toDos.map((todo, index) => {
        return (
          <Task
            task={todo.task}
            description={todo.description}
            checked={todo.checked}
            handleDelete={() => handleDelete(index)}
            handleChange={(event) => handleChange(event, index)}
            edited={todo.edited}
            handleEdit={() => handleEdit(index)}
            submitEdit={(editedTask) => submitEdit(index, editedTask)}
          />
        );
      })}
    </div>
  );
}

export default Assignments;
