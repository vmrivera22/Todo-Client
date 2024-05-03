const UpdateTasks = async (props) => {
  try {
    return await fetch(`https://localhost:7036/api/Todo`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: props.id,
        name: props.name,
        description: props.description,
        isCompleted: props.isCompleted,
        dueDate: props.dueDate,
      }),
    });
  } catch (e) {
    console.log(e.message);
  }
};

export default UpdateTasks;
