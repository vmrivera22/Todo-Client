import { Datepicker, Button, Label, TextInput, Checkbox } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateTask } from "../utils/query/Mutations";

const NewTodo = () => {
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    dueDate: "",
    isCompleted: false,
  });

  const createTaskMutation = useCreateTask();

  const navigate = useNavigate();
  const CreateNewTask = async () => {
    await createTaskMutation.mutateAsync({
      name: newTask.name,
      description: newTask.description,
      dueDate: newTask.dueDate,
    });
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const handleDateChange = (date) => {
    const newDate = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    setNewTask((prevData) => {
      return { ...prevData, dueDate: newDate };
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="border w-[80%] max-w-[650px] h-full p-7 m-4 flex flex-col">
        <h1 className="font-bold text-3xl mb-5 self-center">
          Create a New Task
        </h1>
        <form>
          <div className="mb-1 block">
            <Label htmlFor="Name" value="Title" />
          </div>
          <TextInput
            id="Name"
            name="name"
            type="text"
            placeholder="Enter Task Name ..."
            className="mb-5"
            value={newTask.name}
            onChange={handleChange}
            required
          />
          <div className="mb-1 block">
            <Label htmlFor="Description" value="Description" />
          </div>
          <TextInput
            id="Description"
            name="description"
            type="text"
            placeholder="Enter Task Description ..."
            value={newTask.description}
            onChange={handleChange}
            className="mb-5"
          />
          <div className="mb-1 block">
            <Label htmlFor="Due" value="Due Date" />
          </div>
          <Datepicker
            id="Due"
            className=" mb-5"
            value={newTask.dueDate}
            onSelectedDateChanged={handleDateChange}
          />
          <div className="flex gap-4">
            <Button onClick={CreateNewTask}>Create Task</Button>
            <Button
              onClick={() => {
                navigate("/");
              }}
              className="bg-gray-400"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTodo;
