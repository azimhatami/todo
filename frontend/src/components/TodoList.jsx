import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdDelete } from "react-icons/md";


function TodoList({ isLoading, error, todos }) {
	return(
		<>
			<h2 className='font-bold text-[5rem] font-mono mb-[1rem]'>Todo List</h2>
			<div className='w-[60%] m-auto'>
				<div className='w-full'>
					<input 
						type='text' 
						placeholder='Write anything and hit enter to add' 
						className='w-full h-[2.6rem] px-[0.5rem] py-[4px] border-solid border-[1px] border-slate-500 rounded-lg outline-none' 
					/>
					<button className='absolute bg-purple-800 left-[78.1rem] top-[10.6rem] w-[4.6rem] h-[2.4rem] rounded-md outline-none font-semibold'>Add</button>
				</div>
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
										<MdDelete className='text-[1.5rem] text-rose-500'/>
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


export default TodoList
