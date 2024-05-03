const GetCount = async (props) => {
  try {
    const tasks = await fetch(`https://localhost:7036/api/Todo/`, {
      headers: {
        Accept: "application/json",
      },
    });
    const fetchedCount = await tasks.json();
    return fetchedCount;
  } catch (e) {
    console.log(e.message);
    return 0;
  }
};

export default GetCount;
