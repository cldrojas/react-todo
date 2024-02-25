/// <reference types="vite/client" />
interface Todo {
	id: number
	text: string
	done: boolean
}

interface Counter {
	totalTodos: number
	totalCompleted: number
}

interface SearchBar {
	searchTerm: string
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

interface Form {
	toggleModal: () => void
	addTodo: (text: string) => void
}

interface List {
	children: any
	title: string
	number: number
	action?: () => void
}

interface ListItem {
	text: string
	done: boolean
	toggleComplete: () => void
	removeTodo: () => void
}

interface AddButton {
	onClick: () => void
	isModalOpen: boolean
}

interface NewTodoBar {
	addTodo: (text: string) => void
}

interface SearchButton {
	onClick: () => void
}

interface OpenableSearchBar {
	searchTerm: string
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>
	isOpen: boolean
}
