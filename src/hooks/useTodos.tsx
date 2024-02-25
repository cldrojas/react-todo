import React from 'react'
import { useLocalSorage } from './useLocalStorage'

export function useTodos() {
	const [searchTerm, setSearchTerm] = React.useState('')
	const [isModalOpen, setOpenModal] = React.useState(false)
	const [isSearchOpen, setIsSearchOpen] = React.useState(false)
	const {
		error,
		loading,
		item: todos,
		syncItem: syncTodos,
		saveItem: saveTodos,
	} = useLocalSorage('TODOS_V1', Array<Todo[]>())

	let filteredTodos = todos.filter((todo: { text: string }) =>
		todo.text.toLowerCase().includes(searchTerm.toLowerCase()),
	)

	if (!searchTerm.length) filteredTodos = todos

	const totalTodos: number = todos.length
	const totalCompleted: number = todos.filter((todo: Todo) => todo.done).length
	const remainingTodos: Todo[] = filteredTodos.filter((todo: Todo) => !todo.done)
	const completedTodos: Todo[] = filteredTodos.filter((todo: Todo) => todo.done)

	const toggleTodo = (id: number) => {
		saveTodos(
			todos.map((todo: Todo) => {
				if (todo.id === id) {
					return { ...todo, done: !todo.done }
				}
				return todo
			}),
		)
	}

	const removeTodo = (id: number) => {
		saveTodos(todos.filter((todo: Todo) => todo.id !== id))
	}

	const removeCompleted = () => {
		saveTodos(todos.filter((todo: Todo) => !todo.done))
	}

	const toggleModal = () => {
		setOpenModal(!isModalOpen)
	}

	const addTodo = (text: string) => {
		const newTodo: Todo = {
			id: todos.length + 1,
			done: false,
			text: text,
		}

		saveTodos([newTodo, ...todos])
		setOpenModal(false)
	}

	const openSearchBar = () => {
		setIsSearchOpen(!isSearchOpen)
	}

	return {
		error,
		loading,
		totalTodos,
		totalCompleted,
		remainingTodos,
		completedTodos,
		filteredTodos,
		searchTerm,
		isModalOpen,
		isSearchOpen,
		openSearchBar,
		setSearchTerm,
		toggleTodo,
		removeTodo,
		removeCompleted,
		addTodo,
		toggleModal,
		syncTodos,
	}
}
