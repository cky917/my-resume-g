'use strict'

const shell = require('shelljs')
const path = require('path')
const fs = require('fs')
const myConfig = require('../../my.config')
const deployFolderName = myConfig.deployFolderName
const deployDir = path.resolve(__dirname, deployFolderName)
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
    shell.rm('-f', `${deployFolderName}/*`)

    console.info(`copy dist/ to ${deployFolderName}...`)
    shell.cp('-R', 'dist/*', `${deployFolderName}/`)

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
}

deployGit.push = (repo) => {
  let time = deployGit.getTime()

  shell.exec('git add -A')
  shell.exec(`git commit -m "server-commit:${time}"`)
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

  return `server updata: ${year}-${add0(month)}-${add0(day)}`
}

module.exports = deployGit
