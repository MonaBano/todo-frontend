import axios from "axios"

type TodoType = {
  task: string;
  };

  const TODO_API_URL = import.meta.env.VITE_BASE_URL;


export const addTodo = async (todoData: TodoType) => {
 console.log(todoData)

    try {
      const res = await axios.post(TODO_API_URL, todoData);
      console.log("API POST RESPONSE", res.data)
      return res.data;
    } catch (err) {
      console.log("err", err);
      throw err;
    }
  };

  export const getTodos = async () => {
    try {
      return await axios.get(TODO_API_URL);
    } catch (err) {
      console.log(`err :: ${err}`);
      throw err;
    }
  };