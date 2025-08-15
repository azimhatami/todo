import axios from 'axios'
import { MdDelete } from 'react-icons/md'


function TodoDelete({ todo_id, todos, setTodos }) {
	
	const handleDelete = async (todo_id) => {

		try {
			const response = await axios.delete(`http://localhost:8000/todos/delete/${todo_id}`);

			// Filter out the deleted todo from the todos array
			const updatedTodos = todos.filter(todo => todo._id !== todo_id);
			setTodos(updatedTodos)

		} catch(error) {
			console.error(error)
		}
	};

	return(
		<>
			<MdDelete 
				className='text-[1.6rem] text-rose-800'
        data-test='delete-btn'
				onClick={() => handleDelete(todo_id)}
			/>
		</>
	);
}


export default TodoDelete
