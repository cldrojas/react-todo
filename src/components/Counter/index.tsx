import { useTodos } from '~/hooks/useTodos';
import './Counter.css';

export function Counter() {
	const { totalTodos, totalCompleted } = useTodos();
	return (
		<h4>
			{totalTodos > 0 &&
				`You've completed ${totalCompleted} of ${totalTodos} TODOs`}
		</h4>
	);
}
