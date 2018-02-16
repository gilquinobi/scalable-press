/*
You must implement a randomNumber(n) function that generates a random 
number greater than or equal to 0, and less than input n.
n must be greater than 0
n must be less than 1,000,000
Your only source of randomness must be the provided flip() function
You cannot use Math.random in your implementation
You can use Google to figure out how to do this
*/

function flip() {
    return Math.random() >= 0.5;
}

function randomNumber(n) {

    if (isNaN(n)) throw new Error('Input must be a number');
    if (n <= 0) throw new Error('Input must be greater than 0');
    if (n > 1000000) throw new Error('Input must be less than 1000000');
    
    if (n == 1) return 0;
    if (n == 2) return 1;
    if (n == 3) return flip() ? 1 : 2;

    var randomResult = 0;
    var minValue = 1;
    var maxValue = n - 1;
    var maxBinarySize = maxValue.toString(2).length;

    var getRandomBinary = function (size) {
        var binaryValue = '';

        for (var i = 0; i < size; i++) {
            binaryValue += flip() ? '1' : '0';
        }

        return binaryValue;
    }

    while (randomResult > maxValue || randomResult <= 0) {
        var randomBinary = getRandomBinary(maxBinarySize);
        randomResult = parseInt(randomBinary, 2);
    }

    return randomResult;

}

//randomNumber(500) // returns 123
//randomNumber(1) // returns 0
//randomNumber(500) // returns 466
//randomNumber(1000001) // throw error





