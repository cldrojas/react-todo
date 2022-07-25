import './List.css';

export function List({
	children,
	title,
	number,
}: {
	children: any;
	title: string;
	number: number;
}) {
	return (
		<section className="TodoList">
			<h4>
				{title} - {number}
			</h4>
			<ul>{children}</ul>
		</section>
	);
}
