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
                src: url("${options.fontPath}") format("${options.fontFormat}");
            }
            @font-face {
                font-family: FiraCode;
                src: url("${options.fontPath}") format("truetype"); 
            }
            body {
                padding: 0;
                margin: 0;
                display: inline-block;
              
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
                padding-left: 0.5rem;
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
                    <pre style="font-size: ${options.fontSize}px;" class="hljs-text">${code}</pre>
                </code>
            </div>
        </div>
    </body>
</html>`;
