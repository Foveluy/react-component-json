const { parse, nodeComment } = require('./util')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const prettier = require('prettier')

String.prototype.replaceAll = function(s1, s2) {
  return this.replace(new RegExp(s1, 'gm'), s2)
}

module.exports = function(src) {
  const codes = []
  let index = -1

  const visitor = {
    VariableDeclaration: function({ node }) {
      const comment = nodeComment(node)
      if (/demo:/.test(comment)) index++
      if (!codes[index]) codes[index] = { description: '', code: '' }
      codes[index].description += comment
    },
    VariableDeclarator: function({ node, parent }) {
      const code = generate(node, { compact: true }).code + '\n'

      codes[index].code += `${parent.kind} ${code}`
    }
  }

  const ast = parse(src)

  traverse(ast, visitor)

  const merge = codes
    .map(c => {
      const format = prettier.format(c.code, {
        semi: true,
        parser: 'babylon',
        printWidth: 120,
        tabWidth: 2,
        jsxBracketSameLine: true
      })

      return `
### ${c.description}
\`\`\`js
${format}
\`\`\`
`
    })
    .join('\n')
  return merge
}
