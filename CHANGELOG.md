# Change Log

### 1.1.0
* added support for comma separated glob patterns
```
import nodeRev from 'node-rev'

nodeRev({
  files: 'dist/styles/**/*.css, dist/scripts/**/*.js',//glob to files you want in the manifest
  outputDir: 'dist/styles',//where you want the files to be output that are part of the manifest
  file: 'dist/css-assets.json',//optional, allows you to specify location of manifest file and name it, default is root of the project
  hash: true//if you are in dev mode, you can set this to false to just have it create the manifest with the same filenames
})
```
