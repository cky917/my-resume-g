'use strict'
const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

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
        fs.writeFileSync(path.resolve(__dirname, `../../data/resumeData.json`), JSON.stringify(data), 'utf8', 'w+')
        resolve({success: true})
      }).catch(error => {
        console.error('writeYmlToJson failed' + error)
        resolve({success: false})
      })
    })
  }
}

module.exports = actions
