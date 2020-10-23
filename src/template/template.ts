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
): string => `\
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
                border: ${options.borderSize}rem solid ${options.borderColor};
                margin: 0;
                padding: 1em;
                display: inline-block;
            }
            
            pre {
                font-size: ${options.fontSize}px;
                font-family: CustomFont, FiraCode;
                margin-left: 30px;
                
                line-height: 1.5em;
                /* width: ${options.maxWidth + 15}ch;*/
                white-space: pre;
            }
            ${css}
        </style>
    </head>
    <body class="hljs-background">
        <div>
            ${options.windowControl}
        </div>
        <code>
            <pre class="hljs-text">${code}</pre>
        </code>
    </body>
</html>`;
