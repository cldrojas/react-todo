import React from 'react'
import './SearchBar.css'
import searchIcon from '~/assets/search.svg'

export function SearchBar({ searchTerm, setSearchTerm }: SearchBar) {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return (
		<div className="SearchBar">
			<label htmlFor="search">
				<img
					src={searchIcon}
					alt="search icon"
				/>
			</label>
			<input
				id="search"
				type="search"
				className="text-[#2c3641]  rounded-lg font-medium p-1.5 pl-4 outline-none resize-none max-h-10 mt-2"
				placeholder="Search task"
				value={searchTerm}
				onChange={onChange}
			/>
		</div>
	)
}
