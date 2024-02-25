export function ListItem({ text, done, toggleComplete, removeTodo }: ListItem) {
	return (
		<li className="flex justify-around items-center list-none mx-0 my-2 px-2 py-0 rounded-lg border border-[#ccc]">
			<span
				onClick={toggleComplete}
				aria-hidden="true"
				className={`hover:cursor-pointer text-base flex items-center justify-center min-w-[64px] min-h-10 ${
					done && 'text-[rgb(4,196,4)]'
				}`}>
				✔
			</span>
			<span
				className={`flex w-4/5 [justify-content:left] ${
					done && 'line-through decoration-2'
				}`}>
				{text}
			</span>
			<span
				className="hover:text-red-600 cursor-pointer text-base flex items-center justify-center min-w-16 min-h-10"
				onClick={removeTodo}
				aria-hidden="true">
				✖
			</span>
		</li>
	)
}
