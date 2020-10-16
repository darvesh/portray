type Options = {
	fontPath: string;
	borderColor: string;
	borderSize: number;
	fontFormat: string;
	fontSize: number;
	windowControl: string;
};
export const generateHTML = (code: string, css: string, options: Options) => `\
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
                src: url("${options.fontPath}") format("woff2"); 
            }
            body {
                border: ${options.borderSize}rem solid ${options.borderColor};
                padding-bottom: 15px;
            }
            pre {
                font-size: 15px;
                font-family: CustomFont, FiraCode;
                white-space: pre-wrap;
                text-align: left;
                margin-left: 30px;
                width: min-content;
                line-height: 1.7em;
            }
            ${css}
        </style>
    </head>
    <body class="hljs-background">
        <div style="padding-left: 15px; padding-top: 15px;">
            ${options.windowControl}
        </div>
        <code>
            <pre class="hljs-text">${code}</pre>
        </code>
    </body>
</html>`;
