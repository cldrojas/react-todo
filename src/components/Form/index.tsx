import React from 'react'
import Swal from 'sweetalert2'

import { Label } from './Label'

export function Form({ toggleModal, addTodo }: Form) {
	const [text, setText] = React.useState('')

	const inputRef = React.useRef<HTMLTextAreaElement>(null)

	const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		setText(e.currentTarget.value)
		if (e.code === 'Escape') toggleModal()
		if (e.code === 'Enter' && !e.shiftKey) handleSubmit(e)
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
		if (text.trim()) addTodo(text)
	}

	React.useEffect(() => {
		inputRef.current?.focus()
	}, [])

	return (
		<form
			onSubmit={(e) => handleSubmit(e)}
			className="flex flex-col max-h-[860px] rounded-[0.7em] mt-0 px-[2em] pb-[10em] p-[20px] w-full bg-[#2b2b2b]">
			<Label>Create a new Todo</Label>
			<textarea
				className="rounded-[10px] font-semibold p-[1em] outline-none text-[#2b3c2b]"
				ref={inputRef}
				name="todoInput"
				id="todoInput"
				placeholder="Write Something"
				onKeyUp={handleKeyUp}
			/>

			<div className="grid grid-cols-[repeat(2,1fr)] gap-[20px]">
				<button
					className="rounded-[0.5em] border-none p-[1rem 0] text-[#00d8ff] 
				cursor-pointer rounded-lg mt-[16px]"
					type="button"
					onClick={toggleModal}>
					Cancel
				</button>
				<button
					type="submit"
					className="bg-[#28a745] hover:bg-[#46b365] rounded-lg">
					Add todo
				</button>
			</div>
		</form>
	)
}
