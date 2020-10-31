<p align="center">
  <img src="./logo.png" alt="Portray"/>
</p>


> Generate beautiful image from your source code :night_with_stars :night_with_stars:

<br/>

## Dependency

  You need to have wkhtmltopdf installed on your system to use this package. 
  
  Download it from here https://wkhtmltopdf.org/downloads.html#stable or
  ```sh
  $ apt install wkhtmltopdf #debian #ubuntu #mint
  $ pacman -S wkhtmltopdf #archlinux
  $ dnf install wkhtmltopdf #fedora, centos, opensuse
  ```
  If you are on windows, download the binary the above mentioned website, install it, and add it to PATH.


## Install

```sh
$ npm install <yet-to-decide>
```

## Usage

```TypeScript
import { generate } from "portray";

generate(testOnecontent)
  .then(buffer => fs.promises.writeFile("./image.jpeg", buffer))
  .then(() => console.log("Image saved"))
  .catch(console.error)

```

```TypeScript
import { generate } from "portray";

const options = {
  borderColor: "#90FE13",
  fontSize: 18,
  format: "png",
  theme: "nord",
  stream: true,
  windowControl: 1
}

generate(testOnecontent, options)
  .then(stream => {
    const image = fs.createWriteStream("./image.png");
    stream.pipe(image); 
  })
  .catch(console.error)

```

## Options

**`fontSize?: number;`**
> **Default**: 25  (in px)

**`fontPath?: string;`**
> **Default**: FiraCode Regular\
> **Supported Font Format**: `ttf`, `woff`, and `woff2`\
> **Condition**: Provide absolute path of font file. Use `path.resolve(__dirname, "/path/to/font")`

**`stream?: true`**
> **Default**: false\
> Pass `true` to return `Stream.Readable` instead of `Buffer`

**`borderColor?: string`**
> **Default**: `"#ABB8C3"`\
> **Example Values**: `"yellow"`, `"#000000"`


**`theme?: ThemesType`**
> **Default**: `"dracula"`\
> **Refer**: [ThemesType](https://github.com/darvesh/portray/blob/master/src/template/cssTheme.ts)