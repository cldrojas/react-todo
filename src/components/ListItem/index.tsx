import './ListItem.css';

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
