import { useState } from 'react'
import chevronUp from '~/assets/chevron-up.svg'
import chevronDown from '~/assets/chevron-down.svg'
import './List.css'

export function List({ children, title, number, collapsible = false }: List) {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<section className="List flex flex-col">
			<h4 className="flex w-full justify-between">
				{title} - {number}{' '}
				{collapsible && number > 0 && (
					<button
						className="text-xs text-gray-50"
						onClick={() => setIsVisible(!isVisible)}>
						<img
							src={isVisible ? chevronUp : chevronDown}
							alt="chevron"
							color="red"
							className="w-3 h-3 mr-2"
						/>
					</button>
				)}
			</h4>

			<div>
				{collapsible ? (
					<div
						className={`overflow-hidden transition-all duration-200 ease ${
							isVisible ? 'max-h-96' : 'max-h-0'
						}`}>
						{children}
					</div>
				) : (
					<ul>{children}</ul>
				)}
			</div>
		</section>
	)
}
