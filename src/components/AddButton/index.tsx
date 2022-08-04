import { useTodos } from '~/hooks/useTodos';

import './AddButton.css';

export function AddButton({ onClick }: { onClick: () => void }) {
	const { isModalOpen } = useTodos();
	return (
		<button className="AddButton" hidden={isModalOpen} onClick={onClick}>
			+
		</button>
	);
}
