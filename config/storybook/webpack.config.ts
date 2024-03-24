import webpack from 'webpack';
import { buildScssLoader } from '../build/loaders/buildScssLoader';
import { BuildPaths } from '../build/types/config';
import path from 'path';

export default ({ config }: {config: webpack.Configuration}) => {
	// для работы абсолютных путей
	const paths: BuildPaths = {
		src: path.resolve(__dirname, '..', '..', 'src'),
		html: '',
		build: '',
		entry: ''
	};

	config.resolve.modules.push(paths.src);
	config.resolve.extensions.push('.ts', '.tsx');

	// для работы scss
	config.module.rules.push(buildScssLoader(true));

	return config;
};
