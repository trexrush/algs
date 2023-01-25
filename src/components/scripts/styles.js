// https://svelte.school/tutorials/how-to-use-variables-in-style-tags-in-svelte

export function styles(node, styles) {
	setCustomProperties(node, styles)
	
	return {
		update(styles) {
			setCustomProperties(node, styles)
		}
	};
}

function setCustomProperties(node, styles) {
	Object.entries(styles).forEach(([key, value]) => {
		node.style.setProperty(`--${key}`, value)
	})
}