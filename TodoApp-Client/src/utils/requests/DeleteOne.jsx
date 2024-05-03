const DeleteOne = async (props) => {
  try {
    await fetch(`https://localhost:7036/api/Todo/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return;
  } catch (e) {
    console.log(e.message);
    return;
  }
};

export default DeleteOne;
