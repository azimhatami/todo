import { MdRadioButtonUnchecked } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { PiNotepadBold } from "react-icons/pi";
import { useState, useEffect } from 'react'
import TodoAdd from './TodoAdd'
import TodoDelete from './TodoDelete'
import TodoItem from './TodoItem'
import axios from 'axios'


function TodoListView({ isLoading, error, todos, setTodos }) {

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
                  <TodoItem todo={todo} key={todo._id} todos={todos} setTodos={setTodos} />
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
