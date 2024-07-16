import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { clsx } from 'clsx';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	isOpen: boolean;
	toggleForm: () => void;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const { isOpen, toggleForm } = props;

	const formStyles = clsx(styles.container, {
		[styles.container_open]: isOpen,
	});

	return (
		<>
			<ArrowButton isOpen={isOpen} toggleForm={toggleForm} />
			<aside className={formStyles}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
