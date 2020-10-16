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
                font-family: "CustomFont";
                src: url("${options.fontPath}") format("${options.fontFormat}");
            }
            @font-face {
                font-family: "FiraCode";
                src: url("${options.fontPath}") format("woff2"); 
            }
            body {
                border: ${options.borderSize}px solid ${options.borderColor};
            }
            pre {
                font-size: 20px;
                font-family: CustomFont, FiraCode;
                white-space: pre-line;
                text-align: left;
                margin-left: 30px;
            }
            ${css}
        </style>
    </head>
    <body class="hljs-background">
        <div style="padding-left: 15px; padding-top: 15px;">
            ${options.windowControl}
        </div>
        <code>
            <pre class="hljs-text">
                ${code}
            </pre>
        </code>
    </body>
</html>`;
