import { TodoProvider } from '~/hooks/useTodos';
import { AppUI } from './AppUI';

export function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}
