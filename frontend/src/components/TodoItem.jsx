import { MdRadioButtonUnchecked } from 'react-icons/md';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { useState } from 'react';
import TodoDelete from './TodoDelete';
import axios from 'axios';

const TodoItem = ({ todo, todos, setTodos }) => {
  const [completed, setCompleted] = useState(todo.completed);

  const handleCompleted = async (todo_id) => {
    // Optimistic update: update the UI first
    setCompleted((prevCompleted) => !prevCompleted);

    try {
      // Send the update request to the server
      const response = await axios.put(
        `http://localhost:8000/todos/update/${todo_id}`,
        {
          title: todo.title,
          description: todo.description,
          completed: !completed,
        }
      );

      // If the request is successful, update the todos list
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t._id === todo_id ? (response.ok ? response.data : t) : t))
      );
    } catch (error) {
      console.error('Error updating todo:', error.response?.data?.message || error.message);

      // If the update fails, revert the local state to the previous value
      setCompleted(todo.completed);
    }
  };

  return (
    <>
      <li
        className={`${
          completed ? 'bg-zinc-800 line-through' : ''
        } bg-zinc-900 h-[3rem] rounded-lg flex flex-row items-center justify-between px-4 h-[4.5rem]`}
      >
        <div className="flex flex-col text-start gap-1">
          <div className="text-lg font-bold">{todo.title}</div>
          <div className="text-sm text-slate-400 font-semibold">{todo.description}</div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <button onClick={() => handleCompleted(todo._id)} className="text-sky-400 outline-none">
            {completed ? (
              <IoMdCheckmarkCircle className="text-[1.5rem]" />
            ) : (
              <MdRadioButtonUnchecked className="text-[1.5rem]" />
            )}
          </button>
          <TodoDelete todo_id={todo._id} todos={todos} setTodos={setTodos} />
        </div>
      </li>
    </>
  );
};

export default TodoItem;
