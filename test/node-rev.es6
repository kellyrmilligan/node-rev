'use strict'
const Assert = require('assert')
const Lab = require('lab')
const Code = require('code')
const lab = exports.lab = Lab.script()
const expect = Code.expect
import fs from 'fs'
import nodeRev from '../lib/index'

lab.experiment('node-rev', function() {
  lab.test('generates a manifest without hashing', function(done) {
    nodeRev({
      files: 'fixtures/**/*.css',//glob to files you want in the manifest
      outputDir: 'tmp/',//where you want the files to be output that are part of the manifest
      file: 'tmp/assets.json',//optional, allows you to specify location of manifest file and name it, default is root of the project
      hash: false//if you are in dev mode, you can set this to false to just have it create the manifest with the same filenames
    })
    const file = fs.readFileSync('./tmp/assets.json', 'utf8')
    const manifest = JSON.parse(file)
    expect(manifest['test.css']).to.equal('test.css')
    done()
  })
  lab.test('generates a manifest with hashing', function(done) {
    nodeRev({
      files: 'fixtures/**/*.css',//glob to files you want in the manifest
      outputDir: 'tmp/',//where you want the files to be output that are part of the manifest
      file: 'tmp/assets.json',//optional, allows you to specify location of manifest file and name it, default is root of the project
      hash: true//if you are in dev mode, you can set this to false to just have it create the manifest with the same filenames
    })
    const file = fs.readFileSync('./tmp/assets.json', 'utf8')
    const manifest = JSON.parse(file)
    expect(manifest['test.css']).to.startWith('test-')
    done()
  })
  lab.test('takes multiple glob patterns separated by commas', function(done) {
    nodeRev({
      files: 'fixtures/**/*.css,fixtures/**/*.js',//glob to files you want in the manifest
      outputDir: 'tmp/',//where you want the files to be output that are part of the manifest
      file: 'tmp/assets.json',//optional, allows you to specify location of manifest file and name it, default is root of the project
      hash: true//if you are in dev mode, you can set this to false to just have it create the manifest with the same filenames
    })
    const file = fs.readFileSync('./tmp/assets.json', 'utf8')
    const manifest = JSON.parse(file)
    expect(manifest['test.css']).to.startWith('test-')
    done()
  })
  lab.test('keeps nested paths even if deeper than one', function(done) {
    nodeRev({
      files: 'fixtures/**/*.css',//glob to files you want in the manifest
      outputDir: 'tmp/',//where you want the files to be output that are part of the manifest
      file: 'tmp/assets.json',//optional, allows you to specify location of manifest file and name it, default is root of the project
      hash: true//if you are in dev mode, you can set this to false to just have it create the manifest with the same filenames
    })
    const file = fs.readFileSync('./tmp/assets.json', 'utf8')
    const manifest = JSON.parse(file)
    expect(manifest['first-dir/second-dir/another.css']).to.startWith('first-dir/second-dir/another-')
    expect(fs.existsSync('./tmp/first-dir/second-dir/another.css')).to.equal(true);
    done()
  })
})
