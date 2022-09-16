import './App.css';
import { useTodos } from '~/hooks/useTodos';

import { AddButton } from '~/components/AddButton';
import { Counter } from '~/components/Counter';
import { EmptyState } from '~/components/EmptyState';
import { Form } from '~/components/Form';
import { Header } from '~/components/Header';
import { List } from '~/components/List';
import { ListItem } from '~/components/ListItem';
import { LoadingTodos } from '~/components/LoadingTodos';
import { Modal } from '~/components/Modal';
import { SearchBar } from '~/components/SearchBar';

export function App() {
	const {
		loading,
		error,
		totalTodos,
		filteredTodos,
		remainingTodos,
		completedTodos,
		isModalOpen,
		searchTerm,
		addTodo,
		toggleTodo,
		toggleModal,
		removeTodo,
		setSearchTerm,
	} = useTodos();

	return (
		<div className="App">
			<Header>
				<Counter
					totalTodos={totalTodos}
					totalCompleted={completedTodos.length}
				/>
				<SearchBar
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>
			</Header>

			{error && <p>Hubo un error...</p>}
			{loading && <LoadingTodos />}
			{!loading && !totalTodos && <EmptyState type="list" />}
			{!loading && totalTodos > 0 && !filteredTodos.length && (
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
					<Form toggleModal={toggleModal} addTodo={addTodo} />
				</Modal>
			)}
			<AddButton onClick={toggleModal} isModalOpen={isModalOpen} />
		</div>
	);
}
