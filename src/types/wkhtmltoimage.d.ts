/// <reference types="node" />
declare module "wkhtmltoimage" {
	import { Readable } from "stream";
	export function generate(input: string): Readable;
}
