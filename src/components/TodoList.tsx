import { useEffect, useState } from "react";
import { getTodos } from "../api/Todo";

type TodoType = {
  _id: string;
  task: string;
};
export const TodoList = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodosData = async () => {
    await getTodos()
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTodosData();
    console.log(todos);
  }, [todos]);

  return (
    <>
      <ul className="bg-gray-200 min-w-24 min-h-10  inline-block p-24 mt-4">
        {todos?.map((todo) => <li key={todo._id}>{todo.task}</li>)}
      </ul>
    </>
  );
};
