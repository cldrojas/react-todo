import './Counter.css'

export function Counter({ totalTodos, totalCompleted }: Counter) {
	return (
		<h4 className="CounterText">
			{totalTodos > 0 && `You've completed ${totalCompleted} of ${totalTodos} TODOs`}
		</h4>
	)
}
