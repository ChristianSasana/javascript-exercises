const reverseString = function(string) {
    let answer = "";
    let letter = "";
    let n = string.length;
    for (let i = 1; i <= n; i++) {
        letter = string.slice(-1);
        string = string.slice(0, -1);
        answer += letter;
    }
    
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
