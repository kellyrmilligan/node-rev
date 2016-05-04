# cli for generating asset manifests. based on gulp-rev, and uses the rev- modules for the hashing algo.

[![Dependency Status](https://david-dm.org/kellyrmilligan/node-rev.svg)](https://david-dm.org/kellyrmilligan/node-rev)
[![Build Status](https://travis-ci.org/kellyrmilligan/node-rev.svg?branch=master)](https://travis-ci.org/kellyrmilligan/node-rev)
[![Coverage Status](https://coveralls.io/repos/github/kellyrmilligan/node-rev/badge.svg?branch=master)](https://coveralls.io/github/kellyrmilligan/node-rev?branch=master)

### why?
`gulp-rev` and `grunt-rev` are great, but what if you want to just use package.json scripts for your dev and build?

### node api
```
import nodeRev from 'node-rev'

nodeRev({
  files: 'dist/styles/**/*.css',//glob to files you want in the manifest
  outputDir: 'dist/styles',//where you want the files to be output that are part of the manifest
  file: 'dist/css-assets.json',//optional, allows you to specify location of manifest file and name it, default is root of the project
  hash: true//if you are in dev mode, you can set this to false to just have it create the manifest with the same filenames
})
```

### cli
The cli is installed as node-rev in the .bin directory of your projects node_modules folder
```
nodeRev 'dist/styles/**/*.css' --hash -o 'dist/styles' --file 'dist/css-assets.json'
```
