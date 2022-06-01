#!/usr/bin/env node
const [, , ...args] = process.argv;

const cmds = require("./commands/index.js");

// ----- cli arguments parser ----------------
if (args.length === 0) {
  cmds.showUsage();
  process.exit(0);
}

async function init() {
  // 1st arg must be "-s || sync", "-e || extract", "-v || version" , "-h || help"
  // args.forEach((arg, index) => {
  switch (args[0]) {
    case "-v":
    case "version":
      cmds.showVersion();
      process.exit(0);
      break;
    case "-h":
    case "help":
      cmds.showUsage();
      process.exit(0);
      break;
    default:
      await cmds.generateArt(args);
      process.exit(0);
  }
}
// });
// -END---- cli arguments parser ----------------
init();
