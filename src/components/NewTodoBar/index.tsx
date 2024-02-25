import React from 'react'
import Swal from 'sweetalert2'

const NewTodoBar = ({ addTodo }: NewTodoBar) => {
	const [text, setText] = React.useState('')

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.currentTarget.value)
		// if (e.code === 'Escape') toggleModal(); // maybe change this for a clear text or something like that
		// if (( e.code === 'Enter') && !e.shiftKey)
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.code === 'Enter') handleSubmit(e)
		if (e.code === 'Escape') setText('')
	}

	const handleSubmit = (e: React.FormEvent) => {
		console.log(`text: ${text}`)
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
			console.log(`adding text: ${text}`)
			addTodo(text)
			setText('')
		}
	}

	return (
		<form
			onSubmit={(e) => handleSubmit(e)}
			className="flex flex-col max-h-[460px] rounded-xl  w-full bg-[#2b2b2b]">
			<textarea
				className="rounded-lg font-medium p-1.5 pl-4 outline-none text-[#2c3641] resize-none max-h-10 mt-2"
				name="todoInput"
				id="todoInput"
				placeholder="Write Something"
				value={text}
				onKeyDown={handleKeyDown}
				onChange={handleChange}
			/>
		</form>
	)
}

export default NewTodoBar
