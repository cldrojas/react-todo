import { useState } from 'react';

export function withStorageListener(WrappedComponent: any) {
	return function WrappedComponentWithStorageListener(props: any) {
		const [show, setShow] = useState(false);

		window.addEventListener('storage', (change) => {
			console.log('there was changes');
			setShow(true);
		});

		const toggleShow = () => {
			props.syncTodos();
			setShow(false);
		};

		return <WrappedComponent show={show} toggleShow={toggleShow} />;
	};
}
