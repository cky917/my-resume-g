const deployGit = require('./git')

const deployType = 'git'

const deploy = {}

deploy.do = () => {
  if (deployType === 'git') {
    deployGit.deployTogit()
  }
}

module.exports = deploy.do()
