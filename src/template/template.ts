import { resolve } from "path";
import { pathToFileURL } from "url";

type Options = {
	fontPath: string;
	borderColor: string;
	borderSize: number;
	fontFormat: string;
	fontSize: number;
	windowControl: string;
	maxWidth: number;
};
export const generateHTML = (
	code: string,
	css: string,
	options: Options
): string => `
<!DOCTYPE html>
<html>
    <head>
        <style>
            @font-face {
                font-family: CustomFont;
                src: url("${pathToFileURL(options.fontPath).href}") format("${
	options.fontFormat
}");
            }
            @font-face {
                font-family: FiraCode;
                src: url("${
					pathToFileURL(
						resolve(__dirname + "/../../resources/Firacode.ttf")
					).href
				}") format("truetype"); 
            }
            body {
                padding: 0;
                display: inline-block;
                /* workaround for wkhtmltoimage adding a weird vertical bar right side */ 
                margin: 0 0 0 5px;
                background: ${options.borderColor};
            }
            .container {
                background: ${options.borderColor};
                margin: 0;
                padding: 0;
                display: inherit;
            }
            .preview {
                margin: ${options.borderSize}px;
                border-radius: 5px;
                box-shadow: rgba(0, 0, 0, 0.55) 0px 20px 68px;
                padding: 1rem;
            }
            .preview div {
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            pre {
                font-family: CustomFont, FiraCode, monospace;
                line-height: 1.5em;
                white-space: pre-wrap;
                width: ${options.maxWidth}ch;
                max-width: 130ch;
                min-width: 70ch;
                padding-left: 3ch;
                word-break: break-all;
            }
            ${css}
        </style>
    </head>
    <body>
	    <div class="container">
            <div class="preview hljs-background">
                <div>
                    ${options.windowControl}
                </div>
                <code>
                    <pre style="font-size: ${
						options.fontSize
					}px;" class="hljs-text">${code}</pre>
                </code>
            </div>
        </div>
    </body>
</html>`;
