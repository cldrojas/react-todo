import { useEffect, useState } from 'react';

export function withStorageListener(WrappedComponent: any) {
	return function WrappedComponentWithStorageListener(props: any) {
		const [show, setShow] = useState(false);

		useEffect(() => {
			const onChange = (change: StorageEvent) => {
				if (change.key === 'TODOS_V1') setShow(true);
			};

			window.addEventListener('storage', onChange);
			return () => window.removeEventListener('storage', onChange);
		}, []);

		const toggleShow = () => {
			props.syncTodos();
			setShow(false);
		};

		return <WrappedComponent show={show} toggleShow={toggleShow} />;
	};
}
