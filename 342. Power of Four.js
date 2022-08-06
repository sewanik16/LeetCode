// 342. Power of Four
// Easy

// 1668

// 290

// Add to List

// Share
// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

 

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true
 

// Constraints:

// -231 <= n <= 231 - 1
//Accepted
// var isPowerOfFour = function(n) {
//     for(let i=0;i<Math.sqrt(n);i++){
//         let x = 4 ** i

//         if(x == n)
//         return true
//     }
//     return false
//  };
//  let n = 1
//  console.log(isPowerOfFour(n))

 var isPowerOfFour = function(n) {
    while(n>=4){
        if(n%4 !=0)
        return false

        n=n/4
    }
    return n==1
 };
 let n = 16
 console.log(isPowerOfFour(n))