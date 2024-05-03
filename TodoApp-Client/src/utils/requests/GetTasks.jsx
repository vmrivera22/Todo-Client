const GetTasks = async (props) => {
  try {
    const tasks = await fetch(
      `https://localhost:7036/api/Todo/${props.page}/-1`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const fetchedTask = await tasks.json();
    return fetchedTask;
  } catch (e) {
    console.log(e.message);
    return [];
  }
};

export default GetTasks;
