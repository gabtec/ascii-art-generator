const art = require("ascii-art");
const fs = require("fs");

const destFolder = `assets`;
const destFile = `${destFolder}/banner.js`;

let defaultColor = undefined;
let bannerText = "ASCII ART GEN";
let fontName = "doom";

function generateStaticFile(color) {
  let file;

  if (!color) {
    file = `
   function print(suffix) {
     const append = suffix ? suffix : "";
     const fullBanner = banner + " " + append + "\\n";
     console.log(fullBanner);
   };
   
   module.exports = { print };
   `;
  } else {
    file = `
    function print(suffix) {
      const append = suffix ? suffix : "";
      const fullBanner = banner + " " + append + "\\n";
      console.log(fullBanner.${color});
    };
    
    module.exports = { print };
    `;
  }
  return file;
}

async function generateArt(args) {
  // create output dir
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder);
  }
  // create output file
  fs.writeFileSync(destFile, "");

  const count = args.length;

  // output file 1st line
  if (args.includes("-c")) {
    // use colors with default
    fs.appendFileSync(destFile, 'require("colors"); \n\n');
    defaultColor = "brightMagenta";
  }

  if (count > 1 && args[1] !== "-c") {
    // use colors with default
    fs.appendFileSync(destFile, 'require("colors"); \n');
    defaultColor = args[1];
  }

  bannerText = args[0];

  fs.appendFileSync(destFile, 'const banner = "\\n" + \n');

  try {
    let banner = await art.font(bannerText, fontName);
    const lines = banner.split(/\r?\n/);

    // search for letters taht go under base line
    const reg = /[fgjpqyz]/g;
    const found = bannerText.match(reg);

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

    fs.appendFileSync(destFile, generateStaticFile(defaultColor));
    console.log("--> Ascii Art Generated.");
    console.log(`--> Check your project '/${destFile}' file.`);
  } catch (err) {
    console.error(err);
  }
}

module.exports = generateArt;
