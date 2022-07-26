import React from 'react';
import './App.css';

import { Header } from '~/components/Header';
import { Counter } from '~/components/Counter';
import { SearchBar } from '~/components/SearchBar';
import { List } from '~/components/List';
import { ListItem } from '~/components/ListItem';
import { AddButton } from '~/components/AddButton';
import { useLocalSorage } from '~/hooks/useLocalStorage';

export function App() {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalSorage('TODOS_V1', Array<Todo>());
	const [searchTerm, setSearchTerm] = React.useState<string>('');

	let filteredTodos = todos.filter((todo: { text: string }) =>
		todo.text.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
	);

	if (!searchTerm.length) filteredTodos = todos;

	const totalTodos = todos.length;
	const totalCompleted = todos.filter((todo: Todo) => todo.done).length;
	const remainingTodos = filteredTodos.filter((todo: Todo) => !todo.done);
	const completedTodos = filteredTodos.filter((todo: Todo) => todo.done);

	// const initialTodos = [{id:0, text: 'Agregar proyecto al portfolio', done: false}, {id:1, text:'Agregar datos a localStorage', done: false}, {id:2, text:'Terminar el proyecto', done: false},{id:3, text:'Persistir datos en firebase', done: false}];

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
		<div className="App">
			<Header />
			<Counter total={totalTodos} completed={totalCompleted} />
			<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			{error && <p>Hubo un error...</p>}
			{loading && <p>Cargando...</p>}
			{!loading && !filteredTodos.length && <h3>Add your first Todo</h3>}
			{!loading && filteredTodos.length > 0 && (
				<>
					<List title="Tasks" number={remainingTodos.length}>
						{remainingTodos.map((todo: Todo) => (
							<ListItem
								key={todo.id}
								text={todo.text}
								done={todo.done}
								toggleComplete={() => toggleTodo(todo.id)}
								removeTodo={() => removeTodo(todo.id)}
							/>
						))}
					</List>
					<List title="Completed" number={completedTodos.length}>
						{completedTodos.map((todo: Todo) => (
							<ListItem
								key={todo.id}
								text={todo.text}
								done={todo.done}
								toggleComplete={() => toggleTodo(todo.id)}
								removeTodo={() => removeTodo(todo.id)}
							/>
						))}
					</List>
				</>
			)}
			<AddButton
				callBack={() => alert('TODO: Open modal to add todos')}
			/>
		</div>
	);
}
