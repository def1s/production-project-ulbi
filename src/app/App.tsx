import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';


const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={`App ${theme}`}>
			<button onClick={toggleTheme}>Switch theme</button>
			App
		</div>
	);
};

export default App;
