import React from 'react';
import './SearchBar.css';
import searchIcon from '~/assets/search.svg';
import { useTodos } from '~/hooks/useTodos';

export function SearchBar() {
	const { searchTerm, setSearchTerm } = useTodos();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className="SearchBar">
			<label htmlFor="search">
				<img src={searchIcon} alt="search icon" />
			</label>
			<input
				id="search"
				type="text"
				placeholder="Search task"
				value={searchTerm}
				onChange={onChange}
			/>
		</div>
	);
}
