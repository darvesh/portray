import highlight from "highlight.js";
import { isAbsolute } from "path";
import { defaultValues } from "./constant";
import { promises as fsPromise, constants } from "fs";

highlight.configure({
	useBR: true
});

export const highlightCode = (code: string, language?: string): string => {
	if (language) {
		return highlight.highlight(language, code).value;
	}
	return highlight.highlightAuto(code).value;
};

export const validateFontPath = async (fontPath?: string): Promise<string> => {
	if (!fontPath) return defaultValues.fontPath;
	if (![".ttf", ".woff", ".woff2"].some(ext => fontPath.endsWith(ext)))
		throw new Error("Font should be either ttf, woff, or woff2");
	if (!isAbsolute(fontPath))
		throw new Error("Font path should be absolute. Use path.resolve()");
	await fsPromise.access(fontPath, constants.F_OK);
	return fontPath;
};

const reduceHelper = async <T, U>(
	init: T,
	reducer: (acc: T, x: U) => T,
	list: AsyncIterator<U>
): Promise<T> => {
	const result = await list.next();
	return result.done
		? init
		: reduceHelper(reducer(init, result.value), reducer, list);
};

const reduce = async <T, U>(
	init: T,
	reducer: (acc: T, x: U) => T,
	list: AsyncIterable<U>
): Promise<T> => reduceHelper(init, reducer, list[Symbol.asyncIterator]());

export const accumulateBuffer = (x: AsyncIterable<Buffer>) =>
	reduce(Buffer.from([]), (a, b) => Buffer.concat([a, b]), x);
