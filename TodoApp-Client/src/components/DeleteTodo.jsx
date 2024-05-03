import { Button, Modal } from "flowbite-react";
import { useDeleteTask } from "../utils/query/Mutations";

const DeleteTodo = (props) => {
  const deleteTaskMutation = useDeleteTask(props.page);
  const handleDelete = async () => {
    await deleteTaskMutation.mutateAsync({ id: props.id });
    props.handleModal();
  };
  return (
    <Modal show={props.openModal} onClose={() => props.handleModal()}>
      <Modal.Header>Delete Task</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Are you sure you want to delete the task "{props.name}".
          </p>
        </div>
        <div className="space-y-6 mt-3">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            This action cannot be undone.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleDelete}>Delete</Button>
        <Button color="gray" onClick={() => props.handleModal()}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTodo;
