# ASCII ART Generator

This cli tool will generate a javascript file that exports a ascii-art banner string.
I use it a lot to create motd for my REST API services

Behind the scenes it uses 'gluegun' and 'ascii-art' npm packages.

## Usage

Copy /Fonts/\* to node_modules/ascii-art-font/Fonts

$ asciigen 'my message' [-c red] [-a append non formated text]

I used 'npm link' and now globally I've
$ asciigen someText -c
