import type { Readable } from "stream";

import { extname } from "path";
import { defaultValues } from "./constant";
import { highlightCode, validateFontPath } from "./helper";
import { generateHTML } from "./template/template";
import { getWindowControls } from "./template/windowControls";
import { Options } from "./types/types";
import { generate } from "wkhtmltoimage";
import { accumulateBuffer } from "./helper";
import { Themes } from "./template/cssTheme";
import { writeFileSync } from "fs";

export default async (
	code: string,
	options: Options = {}
): Promise<Buffer | Readable> => {
	const fontPath = await validateFontPath(options.fontPath);
	const templateOption = {
		fontSize: options.fontSize ?? defaultValues.fontSize,
		windowControl: getWindowControls(options.windowControl),
		borderColor: options.borderColor ?? defaultValues.borderColor,
		borderSize: options.borderSize ?? defaultValues.borderSize,
		fontFormat: extname(fontPath).slice(1),
		fontPath
	};
	const highlightedCode = highlightCode(code, options.language);
	const css = options.theme
		? Themes[options.theme]
		: Themes[defaultValues.theme];
	const returnType = options.type;

	const html = generateHTML(highlightedCode, css, templateOption);
	writeFileSync("output.html", html);
	const image = generate(html);
	return returnType === "stream" ? image : accumulateBuffer(image);
};
