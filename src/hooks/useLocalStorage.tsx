import React from 'react';

export function useLocalSorage(itemName: string, initialValue: any) {
	const [item, setItem] = React.useState(initialValue);
	const [loading, setLoading] = React.useState<boolean>(true);
	const [sync, setSync] = React.useState(true);
	const [error, setError] = React.useState<string>('');

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const storedItem = localStorage.getItem(itemName);
				let parsedItem;

				if (!storedItem) {
					localStorage.setItem(
						itemName,
						JSON.stringify(initialValue),
					);
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(storedItem);
				}
				setItem(parsedItem);
				setLoading(false);
				setSync(true);
			} catch (error: any) {
				setError(error);
			}
		}, 1501);
	}, [sync]);

	const saveItem = (newItem: any) => {
		try {
			const itemValue = JSON.stringify(newItem);
			localStorage.setItem(itemName, itemValue);
			setItem(newItem);
		} catch (error: any) {
			setError(error);
		}
	};

	const syncItem = () => {
		setLoading(true);
		setSync(false);
	};

	return { item, saveItem, loading, error, syncItem };
}
