const shell = require('shelljs')
const deployGit = require('./git')
const file = require('../file')

const deployType = 'git'

const deploy = {}

deploy.do = () => {
  file.writeYmlToJson().then(rs => {
    if (rs.success) {
      deploy.generate()
    } else {
      shell.exit(1)
    }
    if (deployType === 'git') {
      deployGit.deployTogit()
    }
  })
}

deploy.generate = () => {
  // Run external tool synchronously 
  if (shell.exec('nuxt generate').code !== 0) {
    shell.echo('Error: nuxt generate failed')
    shell.exit(1)
  }
}

module.exports = deploy.do()
