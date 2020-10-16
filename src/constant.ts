import { Options } from "./types/types";
import { resolve } from "path";

type ignore = "type" | "language";
export const defaultValues: Required<Omit<Options, ignore>> = {
	fontPath: resolve("./resources/FiraCode.ttf"),
	windowControl: 1,
	fontSize: 15,
	theme: "material",
	borderColor: "yello",
	borderSize: 15
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
