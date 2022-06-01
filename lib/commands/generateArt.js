const art = require("ascii-art");
const fs = require("fs");
const isValidColor = require("./validator");

const destFolder = `assets`;
const destFile = `${destFolder}/banner.js`;

let defaultColor = "brightMagenta";
let defaultFont = "doom";
const params = {};

function parseArgs(args) {
  const size = args.length;

  params.text = args[0];

  // if size 0, cli.js file won't call this
  if (size < 2) return params;

  if (args[1] === "-c") {
    params.color = defaultColor;
    return params;
  }

  if (isValidColor(args[1])) {
    params.color = args[1];
    return params;
  } else {
    console.error(`ERROR: Invalid Color "${args[1]}".`);
    process.exit(1);
  }
}

function generateStaticFile() {
  const fileParts = [];

  fileParts[0] = `
  function print(suffix) {
    const append = suffix ? suffix : "";
    const fullBanner = banner + " " + append + "\\n";
  `;

  fileParts[1] = !params.color
    ? `  console.log(fullBanner);`
    : `  console.log(fullBanner.${params.color});`;

  fileParts[2] = `
   };
   
  module.exports = { print };
  `;

  return fileParts.join("");
}

async function generateArt(args) {
  parseArgs(args);

  // create output dir
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder);
  }
  // create output file
  fs.writeFileSync(destFile, "");

  const count = args.length;

  // output file 1st line
  // if (args.includes("-c")) {
  if (params.color) {
    fs.appendFileSync(destFile, 'require("colors"); \n\n');
  }

  fs.appendFileSync(destFile, 'const banner = "\\n" + \n');

  try {
    let banner = await art.font(params.text, defaultFont);
    const lines = banner.split(/\r?\n/);

    // search for letters taht go under base line
    const reg = /[fgjpqyz]/g;
    const found = params.text.match(reg);

    let loops;

    // in the output of art.fornt()...
    // last line is always empty --> remove 1 line
    // if no underline chars, it will have 2 more empty lines --> remove 3 lines
    loops = found ? lines.length - 1 : lines.length - 3;

    for (let index = 0; index < loops; index++) {
      const l = lines[index].replace(/\\/g, "\\\\");
      if (index === loops - 1) {
        // last line of this multi-line string, so close it with semi-colon
        fs.appendFileSync(destFile, '"' + l + '";' + "\n");
      } else {
        fs.appendFileSync(destFile, '"' + l + '     \\n" +' + "\n");
      }
    }

    fs.appendFileSync(destFile, generateStaticFile());
    console.log("--> Ascii Art Generated.");
    console.log(`--> Check your project '/${destFile}' file.`);
  } catch (err) {
    console.error(err);
  }
}

module.exports = generateArt;
