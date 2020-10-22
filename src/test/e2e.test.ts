import { readFileSync } from "fs";
import { resolve } from "path";
import { generate } from "../index";
import { testOnecontent } from "./files/content";

describe("integration tests", () => {
	describe("Integration: generateImage", () => {
		it("match image 1", async () => {
			const originalImage = readFileSync(
				resolve(__dirname + "/files/original.jpeg")
			);
			const image = await generate(testOnecontent, {
				fontPath: resolve(__dirname + "/../resources/Firacode.ttf"),
				theme: "dracula",
				windowControl: 0,
				language: "javascript",
				format: "jpeg"
			});
			if (Buffer.compare(originalImage, image as Buffer) !== 0) {
				throw new Error("images don't match");
			}
		});
	});
});
