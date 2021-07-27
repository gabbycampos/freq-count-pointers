// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    const lettFreq = {};
    const msgFreq = {};

    for (let val of letters) {
        lettFreq[val] = lettFreq[val] + 1 || 0;
    }
    //console.log(frequencies)
    for (let val of msg) {
        msgFreq[val] = msgFreq[val] + 1 || 0;
    }
    
    for (let char in msgFreq) {
        if (!lettFreq[char]) {
            return false;
        }
        if (msgFreq[char] > lettFreq[char]) {
            return false;
        }
    }
    return true;
}
constructNote('hello', 'abcdee');

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters