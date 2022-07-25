import './ListItem.css';

interface ListItem {
	text: string;
	done: boolean;
	toggleComplete: () => void;
	removeTodo: () => void;
}

export function ListItem({ text, done, toggleComplete, removeTodo }: ListItem) {
	return (
		<li className="TodoItem">
			<span
				onClick={toggleComplete}
				aria-hidden="true"
				className={`${done && 'checked'}`}
			>
				✔
			</span>
			<span className={`${done && 'scratched'}`}>{text}</span>
			<span onClick={removeTodo} aria-hidden="true">
				✖
			</span>
		</li>
	);
}
