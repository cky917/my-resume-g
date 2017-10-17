'use strict'
const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

const actions = {
  getYmlData () {
    return new Promise((resolve, reject) => {
      try {
        let fileData = fs.readFileSync(path.resolve(__dirname, '../resume/resumeData.yaml'), 'utf8')
        let data = yaml.load(fileData)
        resolve(data)
      } catch (e) {
        console.error(e)
        reject(e)
      }
    })
  },
  writeYmlToJson () {
    this.getYmlData().then(data => {
      try {
        fs.writeFileSync('./data/resumeData.json', JSON.stringify(data), 'utf8')
      } catch (err) {
        console.error(err)
      }
    })
  }
}

module.exports = actions.writeYmlToJson()
