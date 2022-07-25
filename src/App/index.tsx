import { useState } from 'react';
import './App.css';

import { Header } from '~/components/Header';
import { Counter } from '~/components/Counter';
import { SearchBar } from '~/components/SearchBar';
import { List } from '~/components/List';
import { ListItem } from '~/components/ListItem';
import { AddButton } from '~/components/AddButton';

interface Todo {
	id: number;
	text: string;
	done: boolean;
}

export function App() {
	const storedTodos = localStorage.getItem('TODOS_V1');
	let parsedTodos;

	if (!storedTodos) {
		localStorage.setItem('TODOS_V1', '[]');
	} else {
		parsedTodos = JSON.parse(storedTodos);
	}

	const [searchTerm, setSearchTerm] = useState('');
	const [todos, setTodos] = useState(parsedTodos);

	let filteredTodos = todos.filter((todo: { text: string }) =>
		todo.text.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
	);

	if (!searchTerm.length) filteredTodos = todos;

	const remainingTodos = filteredTodos.filter((todo: Todo) => !todo.done);
	const completedTodos = filteredTodos.filter((todo: Todo) => todo.done);

	const addTodo = (text: string) => {
		const newTodo = { id: todos.length, text, done: false };
		setTodos([...todos, newTodo]);
	};

	const toggleTodo = (id: number) => {
		setTodos(
			todos.map((todo: Todo) => {
				if (todo.id === id) {
					return { ...todo, done: !todo.done };
				}
				return todo;
			}),
		);
	};

	const removeTodo = (id: number) => {
		setTodos(todos.filter((todo: Todo) => todo.id !== id));
	};

	return (
		<div className="App">
			<Header />
			<Counter
				total={filteredTodos.length}
				completed={completedTodos.length}
			/>
			<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
			<AddButton callBack={() => addTodo('new')} />
		</div>
	);
}
