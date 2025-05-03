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
					{completedTodos.length > 0 && (
						<button
							className="text-xs bg-slate-600 rounded-3xl px-2 outline-none"
							onClick={removeCompleted}>
							Remove completed
						</button>
					)}
					{remainingTodos.length > 0 ? (
						<List
							title="Pending"
							number={remainingTodos.length}>
							{remainingTodos.map(render)}
						</List>
					) : (
						<span className="flex w-4/5 justify-start">you have completed all your tasks!</span>
					)}
					<List
						title="Completed"
						number={completedTodos.length}
						collapsible>
						{completedTodos.map(render)}
					</List>
				</>
			)}
		</section>
	)
}
