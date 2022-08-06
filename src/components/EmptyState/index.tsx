import list from '~/assets/EmptyList.png';
import search from '~/assets/EmptyResults.png';
import './EmptyState.css';

const types = {
	list: {
		image: list,
		text: 'Your Todos list is empty, add your first Todo',
		alt: 'Empty list of todos',
	},
	search: {
		image: search,
		text: 'Theres no todos matching your search',
		alt: 'No todos found',
	},
};

export const EmptyState = ({ type }: { type: 'list' | 'search' }) => {
	return (
		<div className="EmptyState">
			{<img src={types[type].image} alt={types[type].alt} />}
			<h3>{types[type].text}</h3>
		</div>
	);
};
