import { useEffect, useState } from "react";
import GetOne from "../utils/requests/GetOne";
import { Link, useParams } from "react-router-dom";

const TodoPage = (props) => {
  const [task, setTask] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getTask = async () => {
      const fetchedTask = await GetOne({ id: id });
      setTask(fetchedTask);
    };
    getTask();
  }, []);
  return (
    <div className="flex justify-center mt-10">
      <div className="w-[80%] max-w-[500px]">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl mb-1">{task.name}</h1>
          <span>Due: {task.dueDate}</span>
        </div>
        <p className="text-lg text-gray-700 mt-6">{task.description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-400">
            Status: {task.isCompleted ? "Complete" : "Incomplete"}
          </p>
          <Link
            className="hover:underline hover:text-black text-gray-500"
            to={`/edit/${id}`}
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
