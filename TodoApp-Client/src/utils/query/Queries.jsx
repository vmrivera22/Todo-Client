import { keepPreviousData, useQuery } from "@tanstack/react-query";
import GetTasks from "../requests/GetTasks";
import GetOne from "../requests/GetOne";
import GetCount from "../requests/GetCount";

export const useGetTasks = (page) => {
  return useQuery({
    queryKey: ["tasks", page],
    queryFn: () => GetTasks({ page: page }),
    placeholderData: keepPreviousData,
  });
};

export const useGetTask = (id) => {
  return useQuery({
    queryKey: ["task", `${id}`],
    queryFn: () => GetOne({ id: id }),
  });
};

export const useGetCount = () => {
  return useQuery({
    queryKey: ["task", "count"],
    queryFn: () => GetCount(),
  });
};
