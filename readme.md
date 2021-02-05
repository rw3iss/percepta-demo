# Description
* Built on Preact.
* Uses ebuild as builder, with sass integration. 

## For Development:
* Nodemon is used to monitor source files and rebuild them to build folder. 
* Browser-sync can be started (npm run dev) to auto-refresh page, on changes to build folder.
* (see package.json scripts)

## Setup
```npm run setup```

## Run Dev:
```npm run dev```
* Starts watching ./src/**/* for any changes and rebuilds.
* Also starts a browser-sync session and watcher, which reloads with any changes to the build folder.
* Open http://localhost:7000 for the hot ./build.

## Just view the site:
```npm run serve```
* Will serve the files in ./build (```npm run build``` to re-build/update them).