const pkj = require("../../package.json");

function showVersion() {
  // return `Version: @gabtec/couchd-utils:v${pkj.version}`;
  const alias = Object.keys(pkj.bin)[0];
  console.log(`Version: @gabtec/${alias}:v${pkj.version}`);
}

module.exports = showVersion;
