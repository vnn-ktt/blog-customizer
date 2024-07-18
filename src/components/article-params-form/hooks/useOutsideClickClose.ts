import { useEffect } from 'react';

type UseOutsideClickClose = {
	isMenuOpen: boolean;
	onClose: () => void;
	rootRef: React.RefObject<HTMLElement>;
};

export const useOutsideClickClose = ({
	isMenuOpen,
	rootRef,
	onClose,
}: UseOutsideClickClose) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				isMenuOpen && onClose?.();
			}
		};

		window.addEventListener('mousedown', handleClick);

		return () => {
			window.removeEventListener('mousedown', handleClick);
		};
	}, [onClose, isMenuOpen]);
};
