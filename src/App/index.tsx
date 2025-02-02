import './App.css'
import { useTodos } from '~/hooks/useTodos'
 import { AddButton } from '~/components/AddButton'
import { Counter } from '~/components/Counter'
import { EmptyState } from '~/components/EmptyState'
import { Form } from '~/components/Form'
import { Header } from '~/components/Header'
import { ListItem } from '~/components/ListItem'
import { LoadingTodos } from '~/components/LoadingTodos'
import { Modal } from '~/components/Modal'
import { SearchBar } from '~/components/SearchBar'
import { TodoList } from '~/components/TodoList'
import { ErrorTodos } from '~/components/ErrorTodos'
import { ChangeAlertWithStorageListener } from '~/components/ChangeAlert'
import NewTodoBar from '~/components/NewTodoBar'
import { SearchButton } from '~/components/SearchButton'
import { OpenableSearchBar } from '~/components/OpenableSearchBar'

export function App() {
	const {
		loading,
		error,
		totalTodos,
		filteredTodos,
		remainingTodos,
		completedTodos,
		isModalOpen,
		isSearchOpen,
		searchTerm,
		openSearchBar,
		addTodo,
		toggleTodo,
		toggleModal,
		removeTodo,
		removeCompleted,
		setSearchTerm,
		syncTodos,
	} = useTodos()

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
				<NewTodoBar addTodo={addTodo} />
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
				removeCompleted={removeCompleted}
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

			<AddButton
				onClick={toggleModal}
				isModalOpen={isModalOpen}
			/>

			<SearchButton onClick={openSearchBar} />

			{isModalOpen && (
				<Modal>
					<Form
						toggleModal={toggleModal}
						addTodo={addTodo}
					/>
				</Modal>
			)}
			<OpenableSearchBar
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				isOpen={isSearchOpen}
			/>
			<ChangeAlertWithStorageListener syncTodos={syncTodos} />
		</div>
	)
}
