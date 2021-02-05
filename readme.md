# Description
* Built on Preact.
* Uses esbuild as builder, with sass integration. 
* Uses jest and enzyme for testing.

## For Development:
* Nodemon is used to monitor source files and rebuild them to build folder. 
* Browser-sync can be started (npm run dev) to auto-refresh page, on changes to build folder.
* (see package.json scripts)

## Setup
```npm run setup```

## Run Dev:
```npm run dev```
* Starts watching ./app/**/* for any changes and rebuilds.
* Also starts a browser-sync session and watcher, which reloads with any changes to the build folder.
* Open http://localhost:7000 for the hot ./build.

## Run Tests:
```npm run test```

## Just view the site:
```npm run serve```
* Will serve the files in ./build (```npm run build``` to re-build/update them).