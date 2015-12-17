// JavaScript source code

//constants
var sfTable = new Array('J', 'Z', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'); // if prefix is 'S' or 'F'
var tgTable = new Array('X', 'W', 'U', 'T', 'R', 'Q', 'P', 'N', 'M', 'L', 'K'); // if prefix is 'T or 'G'
var multMatrix = [2, 7, 6, 5, 4, 3, 2]

function generateChecksum(prefix, nric) {
    if (typeof prefix != "string" || typeof nric != "string") { //checks if entries are string
        return "Please only input strings into the function"
    }
    if (nric.length != 7) { //checks that numerical length is 7
        return "The number length is not 7";
    }
    if (!/^\d+$/.test(nric)) { //checks if NRIC number is made up of only digits (0-9)
        return "The NRIC can only contain numbers";
    }
    if (['S', 'F', 'T', 'G', 's', 'f', 't', 'g'].indexOf(prefix) <= -1) { //checks if prefix letter is one of S,T,F or G
        return "the prefix letter can only be on of the following : S,T,F or G";
    }
    else {
        var nricArray = nric.split('').map(function (item) { //parse string array and make it into an int array 
            return parseInt(item, 10);
        });
        var product = 0;
        for (var i = 0; i < 7; i++) {
            product += multMatrix[i] * nricArray[i];
        }
        if (['T', 't', 'G', 'g'].indexOf(prefix) > -1) {
            product += 4;
            index = product % 11;
            return tgTable[index];
        }
        else {
            index = product % 11;
            return sfTable[index];
        }
    }
};

function validateChecksum(prefix, nric, suffix) {
    checkSum = generateChecksum(prefix, nric);
    if (typeof suffix != "string" || (sfTable.indexOf(suffix) <= -1 && tgTable.indexOf(suffix) <= -1) || suffix != checkSum) {
        return false;
    }
    else {
        return true;
    }
};