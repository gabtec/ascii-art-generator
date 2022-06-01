const banner = "\n" + 
" _____         _            _        _      \n" +
"|  __ \\       | |          (_)      | |     \n" +
"| |  \\/  __ _ | |__   _ __  _   ___ | |     \n" +
"| | __  / _` || '_ \\ | '__|| | / _ \\| |     \n" +
"| |_\\ \\| (_| || |_) || |   | ||  __/| |     \n" +
" \\____/ \\__,_||_.__/ |_|   |_| \\___||_|";

   function print(suffix) {
     const append = suffix ? suffix : "";
     const fullBanner = banner + " " + append + "\n";
     console.log(fullBanner);
   };
   
   module.exports = { print };
   