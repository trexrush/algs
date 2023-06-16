import merge from "ts-deepmerge";
import { DefaultOptions, IOptions } from "./types";
import tippy from 'tippy.js';
import 'tippy.js/animations/scale-subtle.css';
import '../../public/basic-tooltip.css'

export namespace importUtility {
    export const importJSON = (s: string): Object => {
        return JSON.parse(s)
    }
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

// https://dev.to/danawoodman/svelte-quick-tip-using-actions-to-integrate-with-javascript-libraries-tippy-tooltips-2m94
export function tooltip(node: HTMLElement, params: any = {}) {
  // Determine the title to show. We want to prefer the custom content passed in first, then the
  // HTML title attribute then the aria-label in that order.
  const custom = params.content;
  const title = node.title;
  const label = node.getAttribute("aria-label");
  const content = custom || title || label;

  // Let's make sure the "aria-label" attribute is set so our element is accessible:
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
  if (!label) node.setAttribute("aria-label", content);

  // Clear out the HTML title attribute since we don't want the default behavior of it showing up on hover.
  node.title = "";

  // Support any of the Tippy props by forwarding all "params":
  // https://atomiks.github.io/tippyjs/v6/all-props/
  const tip = tippy(node, {
		animation: 'scale-subtle',
		placement: 'right',
		delay: 0,
		duration: 150,
		touch: 'hold',
		theme: 'basic',
		// onShow() {
		// 	if (/iPhone|iPad|iPod/.test(navigator.platform)) {
		// 		node.click();
		// 	}
		// },
	})
	tip.setProps({ content, ...params });

  return {
    // If the props change, let's update the Tippy instance:
    update: (newParams: any) => tip.setProps({ content, ...newParams }),

    // Clean up the Tippy instance on unmount:
    destroy: () => tip.destroy(),
  };
};

export const createOptions = (o: IOptions): IOptions => { return merge(DefaultOptions, o) }