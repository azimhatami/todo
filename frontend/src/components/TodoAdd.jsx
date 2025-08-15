import { useState } from 'react'
import axios from 'axios'


function TodoAdd({ todos, setTodos }) {
	
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');


	const handleAddTodo = async (e) => {
		e.preventDefault();
		
		if (!title || !description) return null;

		try {
			const response = await axios.post('http://localhost:8000/todos/', { 'title': title, 'description': description })
			console.log('Todo added successfully:', response.data)
			setTodos([...todos, response.data])
			setTitle('')
			setDescription('')
		} catch(error) {
			console.error('Error adding todo: ', error)
		}
		
	}

	return(
		<>
			<div className='w-full flex flex-col gap-2' data-test='addtodo-form'>
				<input 
					type='text' 
					placeholder='Write Title' 
          data-test='addtodo-title'
					className='w-full h-[2.6rem] px-[0.5rem] py-[4px] rounded-lg outline-none bg-neutral-900' 
					value={title}
					onChange={e => setTitle(e.target.value)}
          dir='auto'
				/>
				<input 
					type='text' 
					placeholder='Write Description' 
          data-test='addtodo-desc'
					className='w-full h-[2.6rem] px-[0.5rem] py-[4px] rounded-lg outline-none bg-neutral-900' 
					value={description}
					onChange={e => setDescription(e.target.value)}
          dir='auto'
				/>
				<button 
					type='submit'
					className='w-full bg-blue-500 opacity-85 hover:opacity-100 w-[4.6rem] h-[2rem] rounded-md outline-none font-semibold mt-[1rem]'
          data-test='addtodo-btn'
					onClick={(e) => handleAddTodo(e)}
				>
					Add
				</button>
			</div>
		</>
	);
}


export default TodoAdd
