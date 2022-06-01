const pkj = require("../../package.json");

const alias = Object.keys(pkj.bin)[0];

function showUsage() {
  console.log(`Package: @gabtec/${alias}:v${pkj.version}`);
  console.log(`Usage: ${alias} <text to convert> [OPTIONS]`);
  console.log("Mode:");
  console.log(
    " <text>   The text to create the ascii art, from. Must be the 1st param"
  );
  console.log("Options:");
  console.log(
    "  -c | <color>  (Optional) The color name to colorize the ascii art. If only '-c' default magenta will be used."
  );
  console.log("  -h | help      Help");
  console.log("  -v | version   Script version");
}

module.exports = showUsage;
