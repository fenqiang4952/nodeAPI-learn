const fs = require('fs')
const path = require('path')
const db = require('./db')

let files = fs.readdirSync(path.join(__dirname, '/models'))

let js_files = files.filter((f) => {
  return f.endsWith('.js')
}, files)

module.exports = {}

for (let f of js_files) {
  console.log(`import model from file ${f}...`)
  let name = f.substring(0, f.length - 3)
  module.exports[name] = require(path.join(__dirname, '/models', f))
}

module.exports.sync = () => {
  db.sync()
}
