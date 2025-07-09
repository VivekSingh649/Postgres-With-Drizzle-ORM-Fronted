import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createUser,
  deleteUser,
  fetchAllUsers,
  getSingleUser,
  updateUser,
} from "../api/usersApi";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export const useUsers = ({ page, limit }) =>
  useQuery({
    queryKey: ["users", { page, limit }],
    queryFn: () => fetchAllUsers({ page, limit }),
    keepPreviousData: true,
  });

export const useSingleUser = (id) =>
  useQuery({
    queryKey: ["user", id],
    queryFn: () => getSingleUser(id),
  });

export const useUpdateUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success(data?.message);
      navigate("/");
    },
    onError: (error) => {
      console.error("Update failed:", error);
      toast.error(error?.response?.data?.message);
    },
  });
};

export const useCreateUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      console.log(data);
      toast.success(data?.message);
      navigate("/");
    },
    onError: (error) => {
      console.error("Creation failed:", error);
      toast.error(error?.response?.data?.message);
    },
  });
};

export const useDeleteUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success(data?.message);
      navigate("/");
    },
    onError: (error) => {
      console.error("User Deleationv faield:", error);
      toast.error(error?.response?.data?.message);
    },
  });
};
