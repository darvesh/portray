type Options = {
	fontPath: string;
	borderColor: string;
	borderSize: number;
	fontFormat: string;
	fontSize: number;
	windowControl: string;
};
export const generateHTML = (code: string, css: string, options: Options): string => `\
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
                border: ${options.borderSize}px solid ${options.borderColor};
                margin: 0;
                padding: 1em;
                text-rendering: optimizeLegibility
                position: absolute;
            }
             .container{
                margin: auto;
                padding:0;
                border-radius: 5px;
                box-shadow: rgba(0, 0, 0, 0.55) 0px 20px 68px;
                padding: 1em;
            }
            
            pre {
                font-size: ${options.fontSize}px;
                font-family: CustomFont, FiraCode;
                margin-left: 30px;
                line-height: 1.5em;
                white-space: pre;
                width: 100%;
            }
            ${css}
        </style>
    </head>
    <body style="background:#ABB8C3;">
        <div class="container hljs-background">
            <div style="padding:10px;">
                ${options.windowControl}
            </div>
            <code>
                <pre class="hljs-text">${code}</pre>
            </code>
        </div>
    </body>
</html>`;
