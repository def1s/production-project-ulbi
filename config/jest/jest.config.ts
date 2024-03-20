import type { Config } from 'jest';

const config: Config = {
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: [
		'\\\\node_modules\\\\',
	],
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node',
	],
	moduleDirectories: [
		'node_modules'
	],
	testMatch: [
		'<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
	],
	rootDir: '../../',
	modulePaths: [
		'<rootDir>src'
	],

	/* абсолютные импорты в тестах так и не заработали, не помог ни один способ решения, пока что буду без них */

	// moduleNameMapper: {
	// 	'^src/(.*)$': [
	// 		'<rootDir>/src/$1'
	// 	],
	// },
};

export default config;
