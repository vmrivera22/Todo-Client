import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useGetTasks } from "../utils/query/Queries";
import TodoRow from "./TodoRow";

const Todo = (props) => {
  const [tasks, setTasks] = useState([]);
  const getTasksQuery = useGetTasks(props.currPage);
  if (String(getTasksQuery.status) === "error")
    return <h1>{JSON.stringify(getTasksQuery.error)}</h1>;
  if (String(getTasksQuery.status) === "loading") return <h1>Loading ...</h1>;

  useEffect(() => {
    if (String(getTasksQuery.status) === "success") {
      setTasks(getTasksQuery.data);
    }
  }, [props.currPage, getTasksQuery.status, getTasksQuery.data]);

  const taskRows = tasks.map((task) => {
    return <TodoRow key={task.id} task={task} currPage={props.currPage} />;
  });
  return (
    <div className="m-5">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Task</Table.HeadCell>
          <Table.HeadCell>Due Date</Table.HeadCell>
          <Table.HeadCell>Completed</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">{taskRows}</Table.Body>
      </Table>
    </div>
  );
};

export default Todo;
