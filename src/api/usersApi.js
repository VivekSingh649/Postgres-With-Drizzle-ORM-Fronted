import axios from "axios";

const instance = axios.create({
  baseURL: "https://postgres-with-drizzle-orm-backend.vercel.app/api/",
});

export const fetchAllUsers = instance.get("/users").then((res) => res.data);
