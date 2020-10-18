import chai, { expect } from "chai";
import { validateFontPath } from "../helper";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);
const assert = chai.assert;

import { cleanKey, addPrefix, serializeOptions } from "../generateImage";

describe("wkhtmltoimage wrapper", () => {
	describe("cleanKey", () => {
		it("convert key camelCase to normal form", () => {
			expect(cleanKey("enableJavascript")).to.equal("enable-javascript");
			expect(cleanKey("allow")).to.equal("allow");
			expect(cleanKey("disableLocalFileAccess")).to.equal(
				"disable-local-file-access"
			);
		});
	});
	describe("addPrefix", () => {
		it("Add -- prefix", () => {
			expect(addPrefix("quality")).to.equal("--quality");
		});
	});
	describe("serializeOptions", () => {
		const options = {
			quality: 100,
			allowJavascript: true,
			disableLocalFileAccess: true
		};
		it("convert options to array of arguments", () => {
			expect(serializeOptions(options)).to.deep.eq([
				"--quality",
				"100",
				"--allow-javascript",
				"--disable-local-file-access"
			]);
		});
	});
});
