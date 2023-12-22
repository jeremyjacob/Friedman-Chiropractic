import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export function height(
	node: Element,
	{ delay = 0, duration = 200, easing = cubicOut, fade = false } = {}
): TransitionConfig {
	const style = getComputedStyle(node);
	const styleOpacity = parseFloat(style.opacity);

	return {
		delay,
		duration,
		easing,
		css: (t, u) => {
			return `height: calc(${style.height}*${t});
        ${fade ? `opacity: ${styleOpacity * t};` : ''}
        overflow-y: hidden;
    `;
		}
	};
}
