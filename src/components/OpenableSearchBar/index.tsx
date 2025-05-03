import React from 'react'

import searchIcon from '~/assets/search.svg'

export function OpenableSearchBar({ searchTerm, setSearchTerm, isOpen }: OpenableSearchBar) {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	if (!isOpen) return null
	return (
		<div className="SearchBar">
			<label htmlFor="search">
				<img
					src={searchIcon}
					alt="search icon"
				/>
			</label>
			<input
				className="flex rounded-lg border-none px-2 py-20 text-md outline-none"
				id="search"
				type="text"
				placeholder="Search task"
				value={searchTerm}
				onChange={onChange}
			/>
		</div>
	)
}
