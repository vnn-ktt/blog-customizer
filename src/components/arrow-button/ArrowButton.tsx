import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import { clsx } from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type ArrowButtonProps = {
	isMenuOpen: boolean;
	toggleForm: OnClick;
};

export const ArrowButton = ({ isMenuOpen, toggleForm }: ArrowButtonProps) => {
	const arrowStyles = clsx(styles.container, {
		[styles.container_open]: isMenuOpen,
	});

	const arrowIconStyles = clsx(styles.arrow, {
		[styles.arrow_open]: isMenuOpen,
	});
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={arrowStyles}
			onClick={toggleForm}>
			<img src={arrow} alt='иконка стрелочки' className={arrowIconStyles} />
		</div>
	);
};
