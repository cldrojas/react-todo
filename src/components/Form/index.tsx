import React from 'react';
import Swal from 'sweetalert2';

import { Label } from './Label';

import './Form.css';

export function Form({ toggleModal, addTodo }: Form) {
	const [text, setText] = React.useState('');

	const inputRef = React.useRef<HTMLTextAreaElement>(null);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
		if (e.code === 'Escape') toggleModal();
		if (e.code === 'Enter' && !e.shiftKey) handleSubmit(e);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!text.trim())
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'Dont leave it blank!',
				showConfirmButton: false,
				timer: 1500,
			});
		if (text.trim()) addTodo(text);
	};

	React.useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<form onSubmit={(e) => handleSubmit(e)} className={'TodoForm'}>
			<Label>Create a new Todo</Label>
			<textarea
				ref={inputRef}
				name="todoInput"
				id="todoInput"
				placeholder="Write Something"
				onKeyDown={handleKeyDown}
			/>
			<div className="actions">
				<button type="button" onClick={toggleModal}>
					Cancel
				</button>
				<button type="submit">Add todo</button>
			</div>
		</form>
	);
}
