require("colors"); 

const banner = "\n" + 
" _____         _      _                 _____                _      \n" +
"|  __ \\       | |    | |               |_   _|              | |     \n" +
"| |  \\/  __ _ | |__  | |_   ___   ___    | |    ___    ___  | |     \n" +
"| | __  / _` || '_ \\ | __| / _ \\ / __|   | |   / _ \\  / _ \\ | |     \n" +
"| |_\\ \\| (_| || |_) || |_ |  __/| (__    | |  | (_) || (_) || |     \n" +
" \\____/ \\__,_||_.__/  \\__| \\___| \\___|   \\_/   \\___/  \\___/ |_|";

    function print(suffix) {
      const append = suffix ? suffix : "";
      const fullBanner = banner + " " + append + "\n";
      console.log(fullBanner.red);
    };
    
    module.exports = { print };
    