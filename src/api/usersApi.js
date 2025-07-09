import axios from "axios";

const instance = axios.create({
  baseURL: "https://postgres-with-drizzle-orm-backend.vercel.app/api",
});

const withDelay = async (promise) => {
  if (!ENABLE_API_DELAY) return promise;
  await new Promise((resolve) => setTimeout(resolve, API_DELAY_MS));
  return promise;
};

// Fetch all users
export const fetchAllUsers = async ({ page, limit }) =>
  instance.get(`/users?page=${page}&limit=${limit}`).then((res) => res.data);

// Get single user by ID
export const getSingleUser = async (id) =>
  instance.get(`/user/${id}`).then((res) => res.data);

// Update a user
export const updateUser = async (data) =>
  instance.put(`/update/${data.id}`, data).then((res) => res.data);

// Create a new user
export const createUser = async (data) =>
  instance.post("/create", data).then((res) => res.data);

// Delete user
export const deleteUser = async (id) =>
  instance.delete(`/delete/${id}`).then((res) => res.data);
