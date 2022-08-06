import './App.css';

import { Header } from '~/components/Header';
import { Counter } from '~/components/Counter';
import { SearchBar } from '~/components/SearchBar';
import { List } from '~/components/List';
import { ListItem } from '~/components/ListItem';
import { AddButton } from '~/components/AddButton';
import { Modal } from '~/components/Modal';
import { useTodos } from '~/hooks/useTodos';
import { Form } from '~/components/Form';
import { LoadingTodos } from '~/components/LoadingTodos';
import { EmptyState } from '~/components/EmptyState';

function AppUI() {
	const {
		loading,
		error,
		totalTodos,
		filteredTodos,
		remainingTodos,
		completedTodos,
		isModalOpen,
		toggleTodo,
		toggleModal,
		removeTodo,
	} = useTodos();

	return (
		<div className="App">
			<Header />
			<Counter />
			<SearchBar />
			{error && <p>Hubo un error...</p>}
			{loading && <LoadingTodos />}
			{!loading && !totalTodos.length && <EmptyState type="list" />}
			{!loading && totalTodos.length > 0 && !filteredTodos.length && (
				<EmptyState type="search" />
			)}
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
			{isModalOpen && (
				<Modal>
					<Form />
				</Modal>
			)}
			<AddButton onClick={toggleModal} />
		</div>
	);
}

export { AppUI };
