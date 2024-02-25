import './List.css'

export function List({ children, title, number, action }: List) {
	return (
		<section className="List flex flex-col">
			<h4 className="flex w-full justify-between">
				{title} - {number}
				{number > 0 && action && (
					<button
						className="text-xs bg-slate-600 rounded-3xl px-2 outline-none"
						onClick={action}>
						Remove Completed
					</button>
				)}
			</h4>
			<ul>{children}</ul>
		</section>
	)
}
