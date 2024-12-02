import { useState } from 'react'
import axios from 'axios'


function TodoAdd({ todos, setTodos }) {
	
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleAddTodo = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8000/todos/', { 'title': title, 'description': title })
			console.log('Todo added successfully:', response.data)
			setTodos([...todos, response.data])
			setTitle('')
		} catch(error) {
			console.error('Error adding todo: ', error)
		}
		
	}

	return(
		<>
			<div className='w-full'>
				<input 
					type='text' 
					placeholder='Write anything and hit enter to add' 
					className='w-full h-[2.6rem] px-[0.5rem] py-[4px] border-solid border-[1px] border-slate-500 rounded-lg outline-none' 
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<button 
					type='submit'
					className='absolute bg-purple-800 left-[78.1rem] top-[10.6rem] w-[4.6rem] h-[2.4rem] rounded-md outline-none font-semibold'
					onClick={(e) => handleAddTodo(e)}
				>
					Add
				</button>
			</div>
			
		</>
	);
}


export default TodoAdd
