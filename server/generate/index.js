const shell = require('shelljs')
const file = require('./file')

const generate = {}

generate.do = () => {
  file.writeYmlToJson().then(rs => {
    if (rs.success) {
      if (shell.exec('nuxt generate').code !== 0) {
        shell.echo('Error: nuxt generate failed')
        shell.exit(1)
      }
    } else {
      shell.exit(1)
    }
  })
}

module.exports = generate.do()
