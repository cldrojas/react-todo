import { withStorageListener } from '~/hocs/withStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }: { show: boolean; toggleShow: any }) {
	if (show) {
		return (
			<div className="ChangeAlert">
				<div className="Alert">
					<p>Todo list is outdated</p>
					<button onClick={() => toggleShow(false)}>
						Sync changes
					</button>
				</div>
			</div>
		);
	}
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
