import './AddButton.css';

export function AddButton({ callBack }: { callBack: () => void }) {
	return (
		<button className="AddButton" onClick={callBack}>
			Add new TODO
		</button>
	);
}
