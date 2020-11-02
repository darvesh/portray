import { readFileSync } from "fs";
import { resolve } from "path";
import { Readable } from "stream";
import { accumulateBuffer } from "../src/helper";
import { generate } from "../src/index";
import { testOnecontent } from "./files/content";

describe("E2E: compare images with previously generated images", () => {
	it("default values", async () => {
		const originalImage = readFileSync(
			resolve(__dirname + "/files/default.jpeg")
		);
		const image = await generate(testOnecontent);
		if (Buffer.compare(originalImage, image as Buffer) !== 0) {
			throw new Error("images don't match");
		}
	});
	it("custom font", async () => {
		const originalImage = readFileSync(
			resolve(__dirname + "/files/font.jpeg")
		);
		const image = await generate(testOnecontent, {
			fontPath: resolve(__dirname + "/files/iosevka.ttf")
		});
		if (Buffer.compare(originalImage, image as Buffer) !== 0) {
			throw new Error("images don't match");
		}
	});
	it("border", async () => {
		const originalImage = readFileSync(
			resolve(__dirname + "/files/border.jpeg")
		);
		const image = await generate(testOnecontent, {
			borderSize: 100
		});
		if (Buffer.compare(originalImage, image as Buffer) !== 0) {
			throw new Error("images don't match");
		}
	});
	it("return type stream", async () => {
		const image = await generate(testOnecontent, {
			stream: true
		});
		if (!(image instanceof Readable)) {
			throw new Error("doesn't returm stream");
		}
	});

	it("all options", async () => {
		const originalImage = readFileSync(
			resolve(__dirname + "/files/allOptions.png")
		);
		const stream = await generate(testOnecontent, {
			borderColor: "#90FE13",
			borderSize: 70,
			fontPath: resolve(__dirname + "/files/iosevka.ttf"),
			fontSize: 18,
			format: "png",
			language: "javascript",
			theme: "nord",
			stream: true,
			windowControl: 2
		});
		const buffer = await accumulateBuffer(stream as Readable);
		if (Buffer.compare(originalImage, buffer) !== 0) {
			throw new Error("images don't match");
		}
	});
});
