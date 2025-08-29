// const isPalindrome = (z)=>{
//     return z=== +z.toString().split("").reverse().join("");
// }

// isPalindrome(121);
// console.log(isPalindrome(121));

// var fib=(n)=>{
//     const ar =[0,1]
//     for(let i=2;i<=n;i++){
//         ar.push(ar[i-1]+ar[i-2])
//     }
// return ar[n]
// }

// fib(7);

// ======= recursion ==========

// var fib = (n) => {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(7));

// ANAGRAM number of pairs

// const anagram = (s, t) => {
//   return (s.split("").sort().join("")) === (t.split("").sort().join(""));
// };

// console.log(anagram("listen", "silent"));


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function(nums, target) {
    const res = []
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                res.push(i,j)
                return res
            }
        }
    }
};

nums = [2,7,11,15], target = 9