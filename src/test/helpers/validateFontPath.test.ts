import chai from "chai";
import { validateFontPath } from "../../helper/validateFontPath";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);
const assert = chai.assert;
describe("validate font path", () => {
	it("Font should be either ttf, woff, or woff2", () => {
		return assert.isRejected(
			validateFontPath("hello"),
			"Font should be either ttf, woff, or woff2"
		);
	});
	it("FontPath should be absolute", () => {
		return assert.isRejected(
			validateFontPath("../../resources//Firacode.woff2"),
			"Font path should be absolute. Use path.resolve()"
		);
	});
	it("font file should exist", () => {
		return assert.isRejected(
			validateFontPath(
				"/home/darvesh/Projects/portray/src/resources/font.woff2"
			),
			/ENOENT: no such file or directory, access/
		);
	});
});
