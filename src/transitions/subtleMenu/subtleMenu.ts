import { cubicInOut } from 'svelte/easing';

export const subtleMenu = (node: Node, { duration = 200 }) => {
	return {
		duration,
		css: (t: number) => {
			const eased = cubicInOut(t);
			return `
              opacity: ${eased};
              transform: scale(calc(.95 + ${eased * 0.05}));
            `;
		}
	};
};
