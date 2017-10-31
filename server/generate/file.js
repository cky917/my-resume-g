'use strict'
const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const config = require('../../config')
const gitHubHttpUrl = `https://${config.githubUserName}.github.io/${config.githubProjectName}`

if (process.argv[2] === '--dev') {
  process.env.NODE_ENV = 'dev'
} else {
  process.env.NODE_ENV = 'production'
}

const actions = {
  getYmlData () {
    return new Promise((resolve, reject) => {
      try {
        console.log('getting yml data...')
        let fileData = fs.readFileSync(path.resolve(__dirname, '../../resume/resumeData.yaml'), 'utf8')
        let data = yaml.load(fileData)
        resolve(data)
      } catch (e) {
        console.error(e)
        reject(Error('getYMLData failed' + e))
      }
    })
  },
  /**
   * 将yml文件转换为json文件
   */
  writeYmlToJson () {
    return new Promise((resolve, reject) => {
      this.getYmlData().then(data => {
        console.log('writing yml data to json file...')
        this.formatData(data)
        fs.writeFileSync(path.resolve(__dirname, `../../data/resumeData.json`), JSON.stringify(data), 'utf8', 'w+')
        resolve({success: true})
      }).catch(error => {
        console.error('writeYmlToJson failed' + error)
        resolve({success: false})
      })
    })
  },
  formatData (data) {
    let autoUrlTest = /^%\//

    for (let key in data) {
      if (typeof data[key] === 'object') {
        this.formatData(data[key])
      } else if (autoUrlTest.test(data[key])) {
        let origin = data[key].substr(1)
        if (process.env.NODE_ENV !== 'production') {
          data[key] = origin
        } else {
          data[key] = `${gitHubHttpUrl}${origin}`
        }
      }
    }
  }
}

module.exports = actions
