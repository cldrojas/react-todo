import './App.css';
import { useTodos } from '~/hooks/useTodos';

import { AddButton } from '~/components/AddButton';
import { Counter } from '~/components/Counter';
import { EmptyState } from '~/components/EmptyState';
import { Form } from '~/components/Form';
import { Header } from '~/components/Header';
import { ListItem } from '~/components/ListItem';
import { LoadingTodos } from '~/components/LoadingTodos';
import { Modal } from '~/components/Modal';
import { SearchBar } from '~/components/SearchBar';
import { TodoList } from '~/components/TodoList';
import { ErrorTodos } from '~/components/ErrorTodos';
import { ChangeAlertWithStorageListener } from '~/components/ChangeAlert';

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
		syncTodos,
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

			<TodoList
				error={error}
				loading={loading}
				totalTodos={totalTodos}
				filteredTodos={filteredTodos}
				remainingTodos={remainingTodos}
				completedTodos={completedTodos}
				onError={() => <ErrorTodos />}
				onLoading={() => <LoadingTodos />}
				onEmptyTodos={() => <EmptyState type="list" />}
				onEmptySearch={() => <EmptyState type="search" />}
				render={(todo: Todo) => (
					<ListItem
						key={todo.id}
						text={todo.text}
						done={todo.done}
						toggleComplete={() => toggleTodo(todo.id)}
						removeTodo={() => removeTodo(todo.id)}
					/>
				)}
			/>

			<AddButton onClick={toggleModal} isModalOpen={isModalOpen} />

			{isModalOpen && (
				<Modal>
					<Form toggleModal={toggleModal} addTodo={addTodo} />
				</Modal>
			)}

			<ChangeAlertWithStorageListener syncTodos={syncTodos} />
		</div>
	);
}
