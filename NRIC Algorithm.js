// JavaScript source code
module.exports = class Lib {
  //constants
  constructor() {
    this.sfTable = new Array('J', 'Z', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A') // if prefix is 'S' or 'F'
    this.tgTable = new Array('X', 'W', 'U', 'T', 'R', 'Q', 'P', 'N', 'M', 'L', 'K') // if prefix is 'T or 'G'
    this.multMatrix = [2, 7, 6, 5, 4, 3, 2] 
  }

  generateChecksum(prefix, nric) {
    if (typeof prefix != 'string' || typeof nric != 'string') { //checks if entries are string
      return 'Please only input strings into the function'
    }
    if (nric.length != 7) { //checks that numerical length is 7
      return 'The number length is not 7'
    }
    if (!/^\d+$/.test(nric)) { //checks if NRIC number is made up of only digits (0-9)
      return 'The NRIC can only contain numbers'
    }
    if (['S', 'F', 'T', 'G', 's', 'f', 't', 'g'].indexOf(prefix) <= -1) { //checks if prefix letter is one of S,T,F or G
      return 'the prefix letter can only be on of the following : S,T,F or G'
    } else {
      var nricArray = nric.split('').map(function (item) { //parse string array and make it into an int array 
        return parseInt(item, 10)
      })
      var product = 0
      for (var i = 0; i < 7; i++) {
        product += this.multMatrix[i] * nricArray[i]
      }
      let index = 0
      if (['T', 't', 'G', 'g'].indexOf(prefix) > -1) {
        product += 4
        index = product % 11
        return this.tgTable[index]
      } else {
        index = product % 11
        return this.sfTable[index]
      }
    }
  }

  validateChecksum(prefix, nric, suffix) {
    const checkSum = this.generateChecksum(prefix, nric)
    if (typeof suffix != 'string' || (this.sfTable.indexOf(suffix) <= -1 && this.tgTable.indexOf(suffix) <= -1) || suffix != checkSum) {
      return false
    } else {
      return true
    }
  }
}
