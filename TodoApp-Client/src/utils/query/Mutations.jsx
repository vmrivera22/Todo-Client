import { useMutation, useQueryClient } from "@tanstack/react-query";
import CreateTask from "../requests/CreateTask";
import DeleteOne from "../requests/DeleteOne";
import UpdateTask from "../requests/UpdateTask";

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: CreateTask,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["tasks"],
        refetchType: "all",
      });
      await queryClient.invalidateQueries({
        queryKey: ["tasks", "count"],
        refetchType: "all",
      });
      return;
    },
  });
};

export const useDeleteTask = (page) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: DeleteOne,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["tasks", page],
        refetchType: "all",
      });
      await queryClient.invalidateQueries({
        queryKey: ["tasks", "count"],
        refetchType: "all",
      });
      return;
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: UpdateTask,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["tasks"],
        refetchType: "all",
      });
      return;
    },
  });
};
