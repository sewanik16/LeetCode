// 1512. Number of Good Pairs
// Easy

// 2776

// 152

// Add to List

// Share
// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100



var numIdenticalPairs = function(nums) {
    let count = 0
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j])
            count++
        }
    }
    // return count;
    console.log(count)

    // second approach------------
    // const res =new Array(101)         
    // res.fill(0)
    // for(let i=0;i<nums.length;i++){
    //     count = count + res[nums[i]]
    //     res[nums[i]]++
    // }
    // console.log(count)    
};

let nums = [1,2,3,1,1,3]
numIdenticalPairs(nums)