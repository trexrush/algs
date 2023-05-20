// import YAML from "yaml"

export namespace importUtility {
    export const importJSON = (s: string): Object => {
        return JSON.parse(s)
    }

    // export const asString = (s: string): Object => {
    //     return YAML.parse(s)
    // }
}

// https://medium.com/@frog1014/a-port-of-kotlins-scope-functions-to-javascript-e58fa7270df6
// https://stackoverflow.com/questions/16813118/extending-object-prototype-with-typescript
Object.defineProperty(Object.prototype, 'let', (callback: any) => {
    return callback.apply(this, [filterPrimitive(this)])
})

Object.defineProperty(Object.prototype, 'apply', (callback: any) => {
    callback.apply(this, [filterPrimitive(this)])
    return this
})

// a transformer for getting the primitive value
function filterPrimitive(obj: any) {
    return ( obj instanceof Boolean || obj instanceof Number || obj instanceof String )
    ? obj.valueOf()
    : obj
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