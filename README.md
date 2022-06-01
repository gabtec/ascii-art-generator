# ASCII ART Generator

This cli tool will generate a javascript file that exports a ascii-art banner string.
I use it a lot to create "motd" for my REST API servers, like this example:

<img src="https://github.com/gabtec/ascii-art-generator/blob/main/assets/example.png">

Behind the scenes it uses 'ascii-art' npm packages.
credits: https://github.com/khrome/ascii-art

## Usage

```js
$ npm install -g https://github.com/gabtec/ascii-art-generator

$ asciigen 'my message' // just message. No color included
$ asciigen 'my message' -c // message with default color (brigthMagenta)
$ asciigen 'my message' red // message with red color
```

## Note About colors

This tool generates a javascript file.
The color that we may select in this tool, is just to generate the code.
To really see the color in action, in the project where you will include the generated file you will have to install colors@1.4.0 package.

## More fonts

If you want to use other fonts, clone this repo.
Copy your \*.flf font files to node_modules/ascii-art-font.
Change the defaultFont variable, in 'commands/generateArt.js', to the name of your font.
