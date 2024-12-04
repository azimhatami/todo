import { MdRadioButtonUnchecked } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { PiNotepadBold } from "react-icons/pi";
import { useState, useEffect } from 'react'
import TodoAdd from './TodoAdd'
import TodoDelete from './TodoDelete'
import axios from 'axios'


function TodoListView({ isLoading, error, todos, setTodos }) {

	const [completed, setCompleted] = useState(false);

	const handleCompleted = (e, todoId) => {
		e.preventDefault();
		setTodos(prevTodos => prevTodos.map((todo) => todo._id === todoId ? { ...todo, completed: !todo.completed } : todo))
	};

	return(
		<>
			<div className='flex flex-row items-center justify-between text-slate-400'>
				<h2 className='font-bold text-[5rem] font-mono mb-[1rem] text-start'>Todo List</h2>
				<PiNotepadBold className='text-[3.5rem]'/>
			</div>
			<div className='w-full grid grid-cols-3'>
				<TodoAdd todos={ todos } setTodos={ setTodos } />
				<div className='col-span-2 w-[42rem] justify-self-end'>
					{ 
					  isLoading ? (
					    <p>Loading...</p>
					) : error ? (
					    <p>Error: {error}</p>
					) : (
					  	  <ul className='flex flex-col gap-3'>
					  		{todos.map((todo) => {
								return(
									<li 
										key={todo._id} 
										className={
											`${
												todo.completed ? (
													'bg-zinc-800 line-through') : (
														'')
											} bg-zinc-900 h-[3rem] rounded-lg flex flex-row items-center justify-between px-4 h-[4.5rem]`}
									>
										<div className='flex flex-col text-start gap-1'>
											<div className='text-lg font-bold'>{todo.title}</div>
											<div className='text-sm text-slate-400 font-semibold'>{todo.description}</div>
										</div>
										<div className='flex flex-row items-center gap-4'>
											<button onClick={(e) => handleCompleted(e, todo._id)} className='text-sky-400 outline-none'>
												{
													todo.completed ?
													<IoMdCheckmarkCircle
														className='text-[1.5rem]'
													/> :
													<MdRadioButtonUnchecked 
														className='text-[1.5rem]'
													/>
												}
											</button>
											<TodoDelete todo_id={ todo._id } todos={ todos } setTodos={ setTodos } />
										</div>
									</li>
								)
							})}
					  	  </ul>
					)
					}
				</div>
			</div>
		</>
	);
}


export default TodoListView
