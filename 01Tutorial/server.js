console.log('Hello World')
console.log(global);

const os = require('os')
const path = require('path')
const math = require('./math')

console.log('math.add(2,3)=' + math.add(2,3))

const {add, subtract, multiply, divide } = require('./math')

console.log('add(2,3)=' + add(2,3))
console.log('subtract(2,3)=' + subtract(2,3))
console.log('multiply(2,3)=' + multiply(2,3))
console.log('divide(2,3)=' + divide(2,3))

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))