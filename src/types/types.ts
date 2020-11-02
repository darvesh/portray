import type { supportedImageFormat } from "../constant";
import type { Themes } from "../template/cssTheme";

export type ThemesType = keyof typeof Themes;

export type SupportedImageFormat = typeof supportedImageFormat[number];
export interface Options {
	fontSize?: number;
	fontPath?: string;
	windowControl?: 0 | 1 | 2 | 3;
	stream?: boolean;
	theme?: ThemesType;
	borderColor?: string;
	borderSize?: number;
	language?: string;
	format?: SupportedImageFormat;
}
