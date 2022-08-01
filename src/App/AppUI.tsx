import './App.css';

import { Header } from '~/components/Header';
import { Counter } from '~/components/Counter';
import { SearchBar } from '~/components/SearchBar';
import { List } from '~/components/List';
import { ListItem } from '~/components/ListItem';
import { AddButton } from '~/components/AddButton';
import { useTodos } from '~/hooks/useTodos';

function AppUI() {
	const {
		loading,
		error,
		filteredTodos,
		remainingTodos,
		completedTodos,
		toggleTodo,
		removeTodo,
	} = useTodos();

	return (
		<div className="App">
			<Header />
			<Counter />
			<SearchBar />
			{error && <p>Hubo un error...</p>}
			{loading && <p>Cargando...</p>}
			{!loading && !filteredTodos.length && <h3>Add your first Todo</h3>}
			{!loading && filteredTodos.length > 0 && (
				<div>
					<List title="Pending" number={remainingTodos.length}>
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
				</div>
			)}
			<AddButton
				callBack={() => alert('TODO: Open modal to add todos')}
			/>
		</div>
	);
}

export { AppUI };
