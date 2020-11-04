<p align="center">
  <img src="https://img.techpowerup.org/201102/logo402.png" alt="Portray"/>
</p>


> Generate beautiful image from your source code :night_with_stars:

<br/>

## This project is in alpha stage!
<br/>

## Dependency

  You need to have wkhtmltopdf installed on your system to use this package. 
  
  Download it from here https://wkhtmltopdf.org/downloads.html#stable or
  ```sh
  $ apt install wkhtmltopdf #debian #ubuntu #mint
  $ pacman -S wkhtmltopdf #archlinux
  $ dnf install wkhtmltopdf #fedora, centos, opensuse
  ```
  If you are on windows, download the binary from aforementioned website, install it, and add it to PATH.


## Install

```sh
$ npm install @darvesh/portray
```

## Usage

```TypeScript
import { generate } from "@darvesh/portray";

generate(code)
  .then(buffer => {
    if(buffer instanceof Buffer) 
      return fs.promises.writeFile("./image.jpeg", buffer);
  })
  .then(() => console.log("Image saved"))
  .catch(console.error)

```

```TypeScript
import { generate } from "@darvesh/portray";
import { Readable } from "stream";

const options = {
  borderColor: "#90FE13",
  fontSize: 18,
  format: "png",
  theme: "nord",
  stream: true,
  windowControl: 1
}

generate(code, options)
  .then(stream => {
    if(stream instanceof Readable){
      const image = fs.createWriteStream("./image.png");
      stream.pipe(image); 
    }
  })
  .catch(console.error)

```
## Output
<img src="https://img.techpowerup.org/201102/default.jpg"/>
<br /><br />

## Options

**`fontSize?: number;`**
> **Default**: 25  (in px)

**`fontPath?: string;`**
> **Default**: FiraCode Regular\
> **Supported Font Format**: `ttf`, `woff`, and `woff2`\
> **Condition**: Provide absolute path of font file. Use `path.resolve(__dirname, "/path/to/font")`

**`stream?: true`**
> **Default**: false\
> `true` to return `Stream.Readable` instead of `Buffer`

**`borderColor?: string`**
> **Default**: `"#ABB8C3"`\
> **Example**: `"yellow"`, `"#000000"`

**`borderSize?: number`**
> **Default**: `25` (in px)

**`language?: string`**
> **Example**: `"javascript"`, `"rust"`

**`theme?: ThemesType`**
> **Default**: `"dracula"`\
> **Refer**: [ThemesType](https://github.com/darvesh/portray/blob/master/src/template/cssTheme.ts)

**`windowControl?: 0 | 1 | 2 | 3`**
> **Default**: 1\
> 0 if you don't want windowControl 
<div style="display: flex;">
  <span style="margin-left: 10px;"> 
    1. <img src="https://img.techpowerup.org/201102/windowcontrol1.png" height="25px" width="50px" alt="1"/> 
  </span>
  <span style="margin-left: 10px;"> 
    2. <img src="https://img.techpowerup.org/201102/windowcontrol2.png" height="25px" width="50px" alt="2"/>
  </span>
  <span style="margin-left: 10px;"> 
    3. <img src="https://img.techpowerup.org/201102/windowcontrol3.png" height="25px" width="50px" alt="3"/> 
  </span>
</div>
<br/>
<hr/>

## Credits
Thanks to [Muthu](https://github.com/mkrhere), [Thomas](https://github.com/trgwii) and [Ceda](https://github.com/ceda-ei)
