import './Counter.css';

export function Counter({
	total,
	completed,
}: {
	total: number;
	completed: boolean;
}) {
	return (
		<h4>
			You&apos;ve completed {completed} of {total} TODOs
		</h4>
	);
}
