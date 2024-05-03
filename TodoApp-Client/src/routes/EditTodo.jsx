import { Datepicker, Button, Label, TextInput, Checkbox } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTask } from "../utils/query/Queries";
import { useUpdateTask } from "../utils/query/Mutations";

const EditTodo = (props) => {
  const { id } = useParams();
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    dueDate: "",
    isCompleted: false,
  });

  const getTaskQuery = useGetTask(id);
  if (String(getTaskQuery.status) === "error")
    return <h1>{JSON.stringify(getTaskQuery.error)}</h1>;
  if (String(getTaskQuery.status) === "loading") return <h1>Loading ...</h1>;

  useEffect(() => {
    if (String(getTaskQuery.status) === "success") {
      setNewTask(getTaskQuery.data);
    }
  }, [getTaskQuery.status, getTaskQuery.data]);

  const updateTaskMutation = useUpdateTask();
  const navigate = useNavigate();
  const EditTask = async () => {
    await updateTaskMutation.mutateAsync({
      id: id,
      name: String(newTask.name),
      description: newTask.description,
      dueDate: newTask.dueDate,
      isCompleted: newTask.isCompleted,
    });
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewTask((prevData) => {
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
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

  const handleSubmit = () => {};
  return (
    <div className="flex items-center justify-center">
      <div className="border w-[80%] max-w-[650px] h-full p-7 m-4 flex flex-col">
        <h1 className="font-bold text-3xl mb-5 self-center">Edit Task</h1>
        <form onSubmit={handleSubmit}>
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
          <div className="mb-5">
            <div className="mb-1 inline mr-5">
              <Label htmlFor="Completed" value="Completed:" />
            </div>
            <Checkbox
              id="Completed"
              name="isCompleted"
              checked={newTask.isCompleted}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-4">
            <Button onClick={EditTask}>Submit</Button>
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

export default EditTodo;
