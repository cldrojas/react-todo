import { withStorageListener } from '~/hocs/withStorageListener';

function ChangeAlert({ show, toggleShow }: { show: boolean; toggleShow: any }) {
	if (show) {
		return (
			<div>
				<p>Todo list has unsync changes</p>
				<button onClick={() => toggleShow(false)}>Sync changes</button>
			</div>
		);
	}
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
