import React from 'react'
import Swal from 'sweetalert2'

const NewTodoBar = ({ addTodo }: NewTodoBar) => {
	const [text, setText] = React.useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.currentTarget.value)
		// if (e.code === 'Escape') toggleModal(); // maybe change this for a clear text or something like that
		// if (( e.code === 'Enter') && !e.shiftKey)
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') handleSubmit(e)
		if (e.code === 'Escape') setText('')
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!text.trim())
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'Dont leave it blank!',
				showConfirmButton: false,
				timer: 1500,
			})
		if (text.trim()) {
			addTodo(text)
			setText('')
		}
	}

	return (
		<form
			onSubmit={(e) => handleSubmit(e)}
			className="flex flex-col rounded-xl w-full bg-[#2b2b2b] my-4">
			<input
				type="text"
				className="rounded-lg font-medium p-1.5 pl-4 outline-none text-[#2c3641]"
				name="todoInput"
				id="todoInput"
				placeholder="SomeThing to do..."
				value={text}
				onKeyDown={handleKeyDown}
				onChange={handleChange}
			/>
		</form>
	)
}

export default NewTodoBar
