import reactLogo from '~/assets/react.svg';
import './Header.css';

export function Header() {
	return (
		<div className="Header">
			<img src={reactLogo} alt="React Logo" />
			<h2>React TO-DO list</h2>
		</div>
	);
}
