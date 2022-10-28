import React, { FormEvent, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

import { Label } from './Label';

import './Form.css';

export function Form({ toggleModal, addTodo }: Form) {
	const [text, setText] = React.useState('');

	const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: FormEvent) => {
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

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<form onSubmit={(e) => handleSubmit(e)} className={'TodoForm'}>
			<Label>Create a new Todo</Label>
			<input
				ref={inputRef}
				name="todoInput"
				id="todoInput"
				placeholder="Write Something"
				onChange={(e) => setText(e.target.value)}
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
