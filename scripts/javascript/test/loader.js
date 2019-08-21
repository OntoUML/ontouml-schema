const fs = require('fs');
const path = require('path');

exports.loadJSONFiles = (files) => {
  return files.map( file => {
    return JSON.parse(fs.readFileSync(file, 'utf8'))
  })
}

exports.loadJSONFile = (file) => {
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}

exports.readJSONFiles = (dir) => {
  const files = fs.readdirSync(dir);
  return files.filter(file => path.extname(file)===".json")
}
