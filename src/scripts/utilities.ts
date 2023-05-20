// import YAML from "yaml"

export namespace importUtility {
    export const importJSON = (s: string): Object => {
        return JSON.parse(s)
    }

    // export const asString = (s: string): Object => {
    //     return YAML.parse(s)
    // }
}

// https://svelte.school/tutorials/how-to-use-variables-in-style-tags-in-svelte
export const styles = (node: any, styles: any) => {
	setCustomProperties(node, styles)
	
	return {
		update(styles: any) {
			setCustomProperties(node, styles)
		}
	};
}

function setCustomProperties(node: { style: { setProperty: (arg0: string, arg1: unknown) => void } }, styles: { [s: string]: unknown } | ArrayLike<unknown>) {
	Object.entries(styles).forEach(([key, value]) => {
		node.style.setProperty(`--${key}`, value)
	})
}