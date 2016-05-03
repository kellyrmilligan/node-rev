#!/usr/bin/env node
import yargs from 'yargs'
import nodeRev from './index'

const argv = yargs
  .usage('Usage: $0 [glob] -o [dir]')
  .demand(['o'])
  .demand(1)
  .argv

const manifest = nodeRev({
  files: argv._[0],
  outputDir: argv.o,
  file: argv.file,
  hash: argv.hash
})

process.exit()
