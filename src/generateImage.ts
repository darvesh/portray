import { spawn } from "child_process";
import type { SupportedImageFormat } from "./types/types";

type Options = {
	quality: number;
	disableJavascript: boolean;
	javascriptDelay: number;
	disableLocalFileAccess: boolean;
	format: SupportedImageFormat;
};

export const addPrefix = (key: string): string => `--${key}`;
export const cleanKey = (value: string): string =>
	value
		.replace(/\W+/g, "-")
		.replace(/([a-z\d])([A-Z])/g, "$1-$2")
		.toLowerCase();

export const cleanValue = (value: string | number | boolean): string =>
	typeof value === "string"
		? `"${value.replace(/(["\\$`])/g, "\\$1")}"`
		: typeof value === "number" && !Number.isNaN(value)
		? String(value)
		: "";

export const serializeOptions = (options: Partial<Options>): Array<string> => {
	return Object.entries(options)
		.reduce<Array<string>>((flags, [oKey, oValue = ""]) => {
			const prop = addPrefix(cleanKey(oKey).trim());
			const value = cleanValue(oValue).trim();
			return [...flags, prop, value];
		}, [])
		.filter(Boolean);
};

export const generateImage = (
	input: string,
	options: Partial<Options>
): Readable => {
	const imageOptions = serializeOptions(options);
	const child =
		process.platform == "win32"
			? spawn("wkhtmltoimage", imageOptions)
			: spawn("/bin/sh", [
					"-c",
					["wkhtmltoimage", ...imageOptions, "- -"].join(" ")
			  ]);
	child.stdin.end(input);
	return child.stdout;
};
