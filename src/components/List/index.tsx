import './List.css';

export function List({ children, title, number }: List) {
	return (
		<section className="List">
			<h4>
				{title} - {number}
			</h4>
			<ul>{children}</ul>
		</section>
	);
}
