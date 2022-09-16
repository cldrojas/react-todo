import './AddButton.css';

export function AddButton({ onClick, isModalOpen }: AddButton) {
	return (
		<button className="AddButton" hidden={isModalOpen} onClick={onClick}>
			+
		</button>
	);
}
