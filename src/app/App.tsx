import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar/ui/Navbar';


const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('App', {}, [theme])}>
			<Navbar/>
			<button onClick={toggleTheme}>Switch theme</button>
			<AppRouter/>
		</div>
	);
};

export default App;
