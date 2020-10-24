type Options = {
	fontPath: string;
	borderColor: string;
	borderSize: number;
	fontFormat: string;
	fontSize: number;
	windowControl: string;
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
            * {
              margin: 0;
              padding: 0;  
            }
            body {
                background: #bbb;
                margin: 0;
                padding: 0;
                display: inline-block;
            }
            .container {
                margin: ${options.borderSize}px;
                border-radius: 5px;
                box-shadow: rgba(0, 0, 0, 0.55) 0px 20px 68px;
                padding: 1rem 1.5rem;
                background: ${options.borderColor};
            }
            pre {
                font-size: 20px;
                font-family: CustomFont, FiraCode, monospace;
                line-height: 1.5rem;
                white-space: pre;
            }

            /*body {
                border:  solid 
                padding: 0;
                margin: 0;
                text-rendering: optimizeLegibility;
            }
             .container{
                box-shadow: rgba(0, 0, 0, 0.55) 0px 20px 68px;
                padding: 1em;
                border-radius: 10px;
                display:flex;
                flex-direction: column;
                flex-basis: content;
            }
            pre {
                font-size: ${options.fontSize}px;
                font-family: CustomFont, FiraCode;
                margin-left: 30px;
                line-height: 1.5em;
                white-space: pre;
            }*/
            ${css}
        </style>
    </head>
   <body>
	    <div class="container hljs-background">
                <div>
                    ${options.windowControl}
                </div>
                <code>
                    <pre class="hljs-text">${code}</pre>
                </code>
	    </div>
    </body>
</html>`;
