import { MdRadioButtonUnchecked } from "react-icons/md";
import { useState, useEffect } from 'react'
import TodoAdd from './TodoAdd'
import TodoDelete from './TodoDelete'
import axios from 'axios'


function TodoListView({ isLoading, error, todos, setTodos }) {

	return(
		<>
			<h2 className='font-bold text-[5rem] font-mono mb-[1rem]'>Todo List</h2>
			<div className='w-[60%] m-auto'>
				<TodoAdd todos={ todos } setTodos={ setTodos } />
				<div>
					{ 
					  isLoading ? (
					    <p>Loading...</p>
					) : error ? (
					    <p>Error: {error}</p>
					) : (
					  	  <ul className='flex flex-col gap-2 mt-[1rem]'>
					  		{todos.map((todo) => {
								return(
									<li 
										key={todo._id} 
										className='bg-zinc-900 hover:bg-zinc-800 h-[3rem] rounded-lg flex flex-row items-center justify-between px-4 font-semibold'
									>
										<MdRadioButtonUnchecked className='text-[1.3rem]'/>
										<div>{todo.title}</div>
										<TodoDelete todo_id={ todo._id } todos={ todos } setTodos={ setTodos } />
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
