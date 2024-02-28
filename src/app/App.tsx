import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { AppRouter } from 'app/providers/router';


const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('App', {}, [theme])}>
			<button onClick={toggleTheme}>Switch theme</button>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>Page</Link>
			<AppRouter/>
		</div>
	);
};

export default App;
