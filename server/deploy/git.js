'use strict'

const shell = require('shelljs')
const path = require('path')
const fs = require('fs')
const myConfig = require('../../my.config')
const deployFolderName = myConfig.deployFolderName
const deployDir = path.resolve(__dirname, '../../' + deployFolderName)
const releaseDir = path.resolve(__dirname, '../../dist')
const gitConfig = require('../../config')

const deployGit = {}

deployGit.deployTogit = () => {
  // 判断是否安装了git
  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git')
    shell.exit(1)
  }
  fs.access(deployDir, (err) => {
    if (err) { // 文件夹不存在
      deployGit.setup()
    }
    // Copy files to release dir 
    console.info(`clear ${deployFolderName}...`)
    shell.rm('-rf', `${deployFolderName}/*`)

    console.info(`copy ${releaseDir} to ${deployFolderName}...`)
    shell.cp('-R', `${releaseDir}/*`, `${deployFolderName}`)

    deployGit.push()
  })
}

deployGit.setup = () => {
  // Create a placeholder for the first commit
  shell.mkdir(deployDir)
  shell.cd(deployDir)
  shell.exec('git init')
  shell.exec('git add -A')
  shell.exec('git commit -m "First commit"')
  console.info('setup seccess!')
}

deployGit.push = (repo) => {
  let time = deployGit.getTime()

  shell.cd(deployDir)
  shell.exec('git add -A')
  shell.exec(`git commit -m "${time}"`)
  console.log('commited')
  shell.exec(`git push -u git@github.com:${gitConfig.githubUserName}/${gitConfig.githubProjectName}.git HEAD:gh-pages --force`)
}

deployGit.getTime = () => {
  function add0 (m) {
    return m < 10 ? '0' + m : m
  }
  let time = new Date()
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let day = time.getDate()
  let hour = time.getHours()
  let minute = time.getMinutes()
  let second = time.getSeconds()

  return `server update: ${year}-${add0(month)}-${add0(day)} ${add0(hour)}:${add0(minute)}:${add0(second)}`
}

module.exports = deployGit
