require("colors"); 

const banner = "\n" + 
" _____         _      _                  ___  ______  _____           \n" +
"|  __ \\       | |    | |                / _ \\ | ___ \\|_   _|          \n" +
"| |  \\/  __ _ | |__  | |_   ___   ___  / /_\\ \\| |_/ /  | |   ___      \n" +
"| | __  / _` || '_ \\ | __| / _ \\ / __| |  _  ||  __/   | |  / __|     \n" +
"| |_\\ \\| (_| || |_) || |_ |  __/| (__  | | | || |     _| |_ \\__ \\     \n" +
" \\____/ \\__,_||_.__/  \\__| \\___| \\___| \\_| |_/\\_|     \\___/ |___/";

  function print(suffix) {
    const append = suffix ? suffix : "";
    const fullBanner = banner + " " + append + "\n";
    console.log(fullBanner.blue);
   };
   
  module.exports = { print };
  