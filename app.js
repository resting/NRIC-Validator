var Lib = require('./NRIC Algorithm')

var libi = new Lib()
const nric = process.argv.slice(2).toString()
console.log('S'+nric+libi.generateChecksum('S', nric))

