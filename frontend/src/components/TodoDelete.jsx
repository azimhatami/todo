import axios from 'axios'
import { MdDelete } from 'react-icons/md'


function TodoDelete({ todo_id, todos, setTodos }) {
	
	const handleDelete = async (todo_id) => {

		try {
			const response = await axios.delete(`http://localhost:8000/todos/delete/${todo_id}`);
			console.log(response)

			// Filter out the deleted todo from the todos array
			const updatedTodos = todos.filter(todo => todo._id !== todo_id);
			console.log(updatedTodos)
			setTodos(updatedTodos)

		} catch(error) {
			console.error(error)
		}
	};

	return(
		<>
			<MdDelete 
				className='text-[1.5rem] text-rose-500'
				onClick={() => handleDelete(todo_id)}
			/>
		</>
	);
}


export default TodoDelete
