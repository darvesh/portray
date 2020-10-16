import { Themes } from "../template/cssTheme";

export interface Options {
	fontSize?: number;
	fontPath?: string;
	windowControl?: 0 | 1 | 2;
	type?: "stream" | "buffer";
	theme?: ThemesType;
	borderColor?: string;
	borderSize?: number;
	language?: string;
}

export type ThemesType = keyof typeof Themes;
