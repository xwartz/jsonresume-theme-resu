let fs = require('fs')
let path = require('path')
let Handlebars = require('handlebars')

function render (resume) {
  let i18n = resume.i18n || []
  let css = fs.readFileSync(path.join(__dirname, '/style.css'), 'utf-8')
  let template = fs.readFileSync(path.join(__dirname, '/resume.hbs'), 'utf-8')
  let print = fs.readFileSync(path.join(__dirname, '/print.css'), 'utf-8')

  Handlebars.registerHelper('i18n', function (value) {
    return i18n[value] || value
  })

  return Handlebars.compile(template)({
    css: css,
    print: print,
    resume: resume
  })
}

module.exports = {
  render: render
}
