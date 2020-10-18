import { spawn } from "child_process";
import { Readable } from "stream";

type Options = {
	quality: number;
	disableJavascript: boolean;
	javascriptDelay: number;
	disableLocalFileAccess: boolean;
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
		: typeof value === "number"
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
	const inputValue = `"${input}"`;
	if (process.platform === "win32")
		return spawn("wkhtmltoimage", [...imageOptions, inputValue]).stdout;

	return spawn("/bin/sh", [
		"-c",
		"wkhtmltoimage".concat([...imageOptions, inputValue].join(" "))
	]).stdout;
};
