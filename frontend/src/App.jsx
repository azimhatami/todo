import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoListView';
import './App.css'


function App() {

	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchTodos = async () => {
			setIsLoading(true)
			try {
				const response = await axios.get('http://localhost:8000/todos/')
				setTodos(response.data)
			} catch(error) {
				setError(error.message)
			} finally {
				setIsLoading(false)
			}
		};

		fetchTodos()
	}, [])


  return (
    <>
		<TodoList todos={todos} setTodos={setTodos} isLoading={isLoading} error={error} />
    </>
  )
}

export default App
