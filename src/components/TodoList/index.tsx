import { List } from '../List'
import './TodoList.css'

export const TodoList = (props: any) => {
	const {
		error,
		loading,
		filteredTodos,
		remainingTodos,
		completedTodos,
		totalTodos,
		onError,
		onLoading,
		onEmptyTodos,
		onEmptySearch,
		removeCompleted,
		render,
	} = props

	return (
		<section className="TodoList">
			{error && onError()}
			{loading && onLoading()}
			{!loading && !totalTodos && onEmptyTodos()}
			{!loading && !filteredTodos.length && totalTodos > 0 && onEmptySearch()}

			{!loading && filteredTodos.length > 0 && (
				<>
					<List
						title="Pending"
						number={remainingTodos.length}>
						{remainingTodos.map(render)}
					</List>
					<List
						title="Completed"
						number={completedTodos.length}
						action={removeCompleted}>
						{completedTodos.map(render)}
					</List>
				</>
			)}
		</section>
	)
}
