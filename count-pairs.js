// add whatever parameters you deem necessary
function countPairs(arr, num) {
    arr.sort((a, b) => a - b);
    let count = 0;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum === num) {
            count++;
            start++;
            end--;
        } else if (sum < num) {
            start++;
        } else {
            end--;
        }
    }
    return count;
}

// Constraints

// Time Complexity - O(N * log(N))

// or

// Time Complexity - O(N)

countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)