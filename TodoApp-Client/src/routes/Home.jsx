import { Button, Pagination } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Todo from "../components/Todo";
import { useState } from "react";
import { useGetCount } from "../utils/query/Queries";

const Home = () => {
  const navigate = useNavigate();
  const taskGetCount = useGetCount();
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  const totalTasks = taskGetCount.data;
  const totalPages = Math.ceil(totalTasks / 10);

  return (
    <div>
      <Todo currPage={currentPage} />
      <Button
        onClick={() => {
          navigate("/newtodo");
        }}
        className="ml-5"
      >
        New Task
      </Button>
      {totalPages > 1 && (
        <div className="flex justify-center my-10">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      )}
    </div>
  );
};

export default Home;
