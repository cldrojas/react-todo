import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ children }: any) => {
	return ReactDOM.createPortal(
		<div className="Modal">{children}</div>,
		document.getElementById('modal')!,
	);
};

export { Modal };
