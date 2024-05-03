const CreateTasks = async (props) => {
  try {
    return await fetch(`https://localhost:7036/api/Todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: props.name,
        description: props.description,
        dueDate: props.dueDate,
      }),
    });
  } catch (e) {
    console.log(e.message);
  }
};

export default CreateTasks;
