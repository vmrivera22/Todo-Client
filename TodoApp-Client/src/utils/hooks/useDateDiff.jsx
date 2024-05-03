const useDateDiff = (props) => {
  const array = props.date.split("/");
  const date = new Date();
  const currYear = date.getFullYear();
  const currMonth = date.getMonth() + 1;
  const currDay = date.getDate();

  const monthGreater = currYear == array[2] && currMonth > array[0];
  const yearGreater = currYear > array[2];
  const dayGreater =
    currYear == array[2] && currMonth == array[0] && currDay > array[1];
  if (yearGreater || monthGreater || dayGreater) {
    return true;
  } else {
    return false;
  }
};

export default useDateDiff;
