import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

// кнопка для теста ErrorBoundary
export const BugButton = () => {
	const [error, setError] = useState(false);

	useEffect(() => {
		if (error) {
			throw new Error('Bug button!!!!!!');
		}
	}, [error]);

	const onBugButton = () => {
		setError(true);
	};

	return (
		<Button onClick={onBugButton}>
			Bug!
		</Button>
	);
};
