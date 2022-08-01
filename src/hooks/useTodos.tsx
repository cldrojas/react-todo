import React from 'react';
import { useLocalSorage } from './useLocalStorage';

const TodoContext = React.createContext<any>({});

const TodoProvider = ({ children }: any) => {
	const [searchTerm, setSearchTerm] = React.useState('');
	const {
		error,
		loading,
		item: todos,
		saveItem: saveTodos,
	} = useLocalSorage('TODOS_V1', Array<Todo[]>);

	let filteredTodos = todos.filter((todo: { text: string }) =>
		todo.text.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	if (!searchTerm.length) filteredTodos = todos;

	const totalTodos: number = todos.length;
	const totalCompleted: number = todos.filter(
		(todo: Todo) => todo.done,
	).length;
	const remainingTodos: Todo[] = filteredTodos.filter(
		(todo: Todo) => !todo.done,
	);
	const completedTodos: Todo[] = filteredTodos.filter(
		(todo: Todo) => todo.done,
	);

	const toggleTodo = (id: number) => {
		saveTodos(
			todos.map((todo: Todo) => {
				if (todo.id === id) {
					return { ...todo, done: !todo.done };
				}
				return todo;
			}),
		);
	};

	const removeTodo = (id: number) => {
		saveTodos(todos.filter((todo: Todo) => todo.id !== id));
	};

	return (
		<TodoContext.Provider
			value={{
				error,
				loading,
				totalTodos,
				totalCompleted,
				remainingTodos,
				completedTodos,
				filteredTodos,
				searchTerm,
				setSearchTerm,
				toggleTodo,
				removeTodo,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

function useTodos() {
	const {
		error,
		loading,
		totalTodos,
		totalCompleted,
		remainingTodos,
		completedTodos,
		filteredTodos,
		searchTerm,
		setSearchTerm,
		toggleTodo,
		removeTodo,
	} = React.useContext(TodoContext);
	return {
		error,
		loading,
		totalTodos,
		totalCompleted,
		remainingTodos,
		completedTodos,
		filteredTodos,
		searchTerm,
		setSearchTerm,
		toggleTodo,
		removeTodo,
	};
}

export { TodoProvider, TodoContext, useTodos };
