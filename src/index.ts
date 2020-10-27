import type { Readable } from "stream";

import { extname } from "path";
import { defaultValues } from "./constant";
import { generateHTML } from "./template/template";
import { getWindowControls } from "./template/windowControls";
import { Options } from "./types/types";
import { generateImage } from "./generateImage";
import { Themes } from "./template/cssTheme";
import {
	highlightCode,
	validateFontPath,
	accumulateBuffer,
	getImageFormat,
	findMaxLineWidth
} from "./helper";

export const generate = async (
	code: string,
	options: Options = {}
): Promise<Buffer | Readable> => {
	const fontPath = await validateFontPath(options.fontPath);
	const imageFormat = getImageFormat(options.format);
	const fontFormat = extname(fontPath).slice(1);
	const templateOption = {
		fontSize: defaultValues.fontSize,
		windowControl: getWindowControls(options.windowControl),
		borderColor: options.borderColor ?? defaultValues.borderColor,
		borderSize: options.borderSize ?? defaultValues.borderSize,
		fontFormat: fontFormat === "ttf" ? "truetype" : fontFormat,
		maxWidth: findMaxLineWidth(code) + 2,
		fontPath
	};
	const highlightedCode = highlightCode(code, options.language);
	const css = options.theme
		? Themes[options.theme]
		: Themes[defaultValues.theme];
	const html = generateHTML(highlightedCode, css, templateOption);
	const image = generateImage(html, { format: imageFormat, quality: 100 });
	return options.type === "stream" ? image : accumulateBuffer(image);
};
