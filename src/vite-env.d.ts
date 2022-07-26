/// <reference types="vite/client" />
interface Todo {
	id: number;
	text: string;
	done: boolean;
}

interface Counter {
	total: number;
	completed: number;
}

interface List {
	children: any;
	title: string;
	number: number;
}

interface ListItem {
	text: string;
	done: boolean;
	toggleComplete: () => void;
	removeTodo: () => void;
}

interface searchItem {
	searchTerm: string;
	setSearchTerm: (e: string) => void;
}
