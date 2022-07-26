import React from 'react';

export function useLocalSorage(itemName: string, initialValue: any) {
	const [item, setItem] = React.useState(initialValue);
	const [loading, setLoading] = React.useState<boolean>(true);
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
			} catch (error: any) {
				setError(error);
			}
		}, 2000);
	});

	const saveItem = (newItem: any) => {
		try {
			const itemValue = JSON.stringify(newItem);
			localStorage.setItem(itemName, itemValue);
			setItem(newItem);
		} catch (error: any) {
			setError(error);
		}
	};

	return { item, saveItem, loading, error };
}
