const GetOne = async (props) => {
  try {
    const tasks = await fetch(
      `https://localhost:7036/api/Todo/-1/${props.id}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const fetchedTask = await tasks.json();
    return fetchedTask[0];
  } catch (e) {
    console.log(e.message);
    return {};
  }
};

export default GetOne;
