import { Options } from "./types/types";
import { resolve } from "path";

type ignore = "type" | "language";
export const defaultValues: Required<Omit<Options, ignore>> = {
	fontPath: resolve("./resources/Firacode.ttf"),
	windowControl: 0,
	fontSize: 15,
	theme: "material",
	format: "png"
};

export const keywordTypes = [
	"background",
	"text",
	"variable",
	"variable2",
	"attribute",
	"definition",
	"keyword",
	"operator",
	"property",
	"number",
	"string",
	"comment",
	"meta",
	"tag",
	"variable3"
];

export const supportedImageFormat = <const>["jpeg", "png"];
