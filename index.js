// Code your solution here!
function printString(myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString)
    } else {
        return true;
    }
}

function reverseString(string) {
    if(string.length === 1) {
       return string
    } else {
        let subString = string.substring(1, string.length)
        return reverseString(subString) + string[0]
    }
}

function isPalindrome(string) {
    if(string.length === 1) {
        return true
    }

    if(string[0] !== string[string.length - 1]) {
        return false
    } else {
        let subString = string.substring(1, string.length - 1)
        return isPalindrome(subString)
    }   
}

function addUpTo(array, idx) {
    if(array.length === 1) {
        return array[0]
    } else {
        let subArr = array.slice(0, idx)
        let ele = array[idx]
        idx -= 1
        return addUpTo(subArr, idx) + ele
    }
}

function maxOf(array) {
    if(array.length === 1) {
        return array[0]
    } else {
        if(array[0] > array[array.length - 1]) {
            array.pop()
        } else {
            array.shift()
        }

        return maxOf(array)
    }
}

function includesNumber(array, ele) {
    if(array.length === 0) {
        return false
    } else {
        if(array[0] === ele) {
            return true
        } else {
            array.shift()
            return includesNumber(array, ele)  
        }
    }
}
