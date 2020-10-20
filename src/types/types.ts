import { Themes } from "../template/cssTheme";


export type SupportedImageFormat = typeof supportedImageFormat[number];
export interface Options {
	fontSize?: number;
	fontPath?: string;
	windowControl?: 0 | 1 | 2;
	type?: "stream" | "buffer";
	theme?: ThemesType;
	borderColor?: string;
	borderSize?: number;
	language?: string;
	format?: SupportedImageFormat;
}

export type ThemesType = keyof typeof Themes;
