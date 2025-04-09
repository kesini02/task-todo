import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const getUsers = () => API.get("/users");
export const getTodos = (user_id) =>
    API.get("/todos", {
      params: { user_id },
    });
export const createTodo = (todo) => API.post("/todos", todo);
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
export const updateTodo = (id, todo) => API.put(`/todos/${id}`, todo);