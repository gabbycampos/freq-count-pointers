// add whatever parameters you deem necessary
function separatePositive(nums) {
    let start = 0;
    let end = nums.length - 1;
  
    while (start < end) {
      if (nums[start] < 0 && nums[end] > 0) {
        var temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
  
        start++;
        end--;
      } else {
        if (nums[start] > 0) start++;
        else end--;
      }
    }
    return nums;
  }

separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
//Time Complexity: O(N)