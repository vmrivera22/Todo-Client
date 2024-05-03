import DeleteTodo from "./DeleteTodo";
import useDateDiff from "../utils/hooks/useDateDiff";
import { Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TodoRow = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleModal = () => {
    return setOpenModal(false);
  };

  const todoNav = () => {
    navigate(`/todo/${props.task.id}`);
  };
  let rowStyle = "bg-white cursor-pointer border";
  if (props.task.isCompleted) {
    rowStyle = "bg-white cursor-pointer border-green-400 bg-green-200 border";
  } else if (useDateDiff({ date: props.task.dueDate })) {
    rowStyle = "bg-white cursor-pointer border-red-400 bg-red-200 border";
  }
  return (
    <Table.Row key={props.task.id} className={rowStyle}>
      <Table.Cell onClick={todoNav}>{props.task.name}</Table.Cell>
      <Table.Cell onClick={todoNav}>{props.task.dueDate}</Table.Cell>
      <Table.Cell onClick={todoNav}>
        {props.task.isCompleted ? "True" : "False"}
      </Table.Cell>

      <Table.Cell>
        <button
          onClick={() => {
            return setOpenModal(true);
          }}
          className="text-red-400 hover:underline"
        >
          Delete
        </button>
        <DeleteTodo
          handleModal={handleModal}
          openModal={openModal}
          name={props.task.name}
          id={props.task.id}
          page={props.currPage}
        />
      </Table.Cell>
    </Table.Row>
  );
};

export default TodoRow;
