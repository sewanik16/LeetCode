// 326. Power of Three
// Easy

// 1203

// 144

// Add to List

// Share
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

 

// Example 1:

// Input: n = 27
// Output: true
// Example 2:

// Input: n = 0
// Output: false
// Example 3:

// Input: n = 9
// Output: true
 

// Constraints:

// -231 <= n <= 231 - 1

// 27>=3 --- 27%3 !=0 --- 9=27/3 -->  9>=3 --- 9%3 !=0 --- 3=9/3  --> 3>=3 --- 3%3 !=0 --- 1=3/3
// n==1 true

// Accepted
// var isPowerOfThree = function(n) {
//    while(n>=3){
//     if(n%3 !=0) return false
//     n=n/3
//    }
//    return n==1
// };
// let n = 0
// console.log(isPowerOfThree(n))

// Accepted
var isPowerOfThree = function(n) {
    for(let i=0;i<Math.sqrt(n);i++){
        let x = 3 ** i

        if(x == n)
        return true
    }
    return false
 };
 let n = 0
 console.log(isPowerOfThree(n))