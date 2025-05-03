import './App.css'
import { useTodos } from '~/hooks/useTodos'
import { Counter } from '~/components/Counter'
import { EmptyState } from '~/components/EmptyState'
import { Header } from '~/components/Header'
import { ListItem } from '~/components/ListItem'
import { LoadingTodos } from '~/components/LoadingTodos'
import { TodoList } from '~/components/TodoList'
import { ErrorTodos } from '~/components/ErrorTodos'
import { ChangeAlertWithStorageListener } from '~/components/ChangeAlert'
import NewTodoBar from '~/components/NewTodoBar'

export function App() {
	const {
		loading,
		error,
		totalTodos,
		filteredTodos,
		remainingTodos,
		completedTodos,
		addTodo,
		toggleTodo,
		removeTodo,
		removeCompleted,
		syncTodos,
	} = useTodos()

	return (
		<div className="App">
			<Header>
				<Counter
					totalTodos={totalTodos}
					totalCompleted={completedTodos.length}
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

			<ChangeAlertWithStorageListener syncTodos={syncTodos} />
		</div>
	)
}
