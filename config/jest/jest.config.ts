import path from 'path';

export default {
	// автоматическое очищение моков
	clearMocks: true,
	// среда для запуска тестов
	testEnvironment: 'jsdom',
	// игнорирование путей
	coveragePathIgnorePatterns: [
		'\\\\node_modules\\\\',
	],
	// файлы, которые jest будет обрабатывать
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node',
	],
	// директория с модулями
	moduleDirectories: [
		'node_modules'
	],
	// шаблон, по которому jest ищет файлы для теста
	testMatch: [
		'<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
	],
	// указание корневой директории
	rootDir: '../../',
	modulePaths: [
		'<rootDir>src'
	],
	// файлы, которые нужно включить в тестирование
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	// сопоставление файлов и моков
	moduleNameMapper: {
		'\\.(s?css)$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
	},
};
