import { Themes } from "../template/cssTheme";

export interface Options {
	fontSize?: number;
	fontPath?: string;
	windowControl?: 0 | 1 | 2;
	type?: "stream" | "buffer";
	theme?: ThemesTyp;
	borderColor?: string;
	borderSize?: number;
	language?: string;
}

export type ThemesTyp = keyof typeof Themes;
export type ThemesType =
	| "3024-night"
	| "a11y-dark"
	| "blackboard"
	| "base16-dark"
	| "base16-light"
	| "cobalt"
	| "dracula"
	| "duotone-dark"
	| "hopscotch"
	| "lucario"
	| "material"
	| "monokai"
	| "night-owl"
	| "nord"
	| "oceanic-next"
	| "one-light"
	| "one-dark"
	| "panda-syntax"
	| "paraiso-dark"
	| "seti"
	| "shades-of-purple"
	| "solarized dark"
	| "solarized light"
	| "synthwave-84"
	| "twilight"
	| "verminal"
	| "vscode"
	| "yeti"
	| "zenburn";
