import './Counter.css';

export function Counter({ total, completed }: Counter) {
	return (
		<h4>
			You&apos;ve completed {completed} of {total} TODOs
		</h4>
	);
}
