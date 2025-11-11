import { loadCSS, loadJS } from "markmap-common";
import { Transformer } from "markmap-lib";
import * as markmap from "markmap-view";

export const transformer = new Transformer();

// Only load assets on the client side
if (typeof window !== "undefined") {
	const { scripts, styles } = transformer.getAssets();
	loadCSS(styles ?? []);
	loadJS(scripts ?? [], { getMarkmap: () => markmap });
}
