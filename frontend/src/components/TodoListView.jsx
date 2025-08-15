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
		<div className='md:w-[100%] lg:w-[90%] m-auto w-full h-screen'>
			<div className='flex flex-row items-center justify-between text-slate-400 md:mb-[1rem] mb-[2rem]'>
				<h2 data-test='test-header' className='font-bold md:text-[4rem] text-[2rem] font-mono text-start'>Todo List</h2>
				<PiNotepadBold className='md:text-[3rem] text-[2rem]'/>
			</div>
			<div className='w-full grid md:grid-cols-3 grid-rows-2'>
        <div className='row-span-1'>
				  <TodoAdd todos={ todos } setTodos={ setTodos } />
        </div>
				<div className='md:col-span-2 row-span-1 md:w-[30rem] lg:w-[38rem] w-full justify-self-end'>
					{ 
					  isLoading ? (
					    <p>Loading...</p>
					) : error ? (
					    <p>Error: {error}</p>
					) : (
					  	  <ul className='flex flex-col gap-3' data-test='todos-list'>
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
		</div>
	);
}


export default TodoListView
