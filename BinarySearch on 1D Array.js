/*
1) Binary Search to find X in sorted array
Problem statement: You are given a sorted array of integers and a target, your task is to search for the target in the given array. Assume the given array does not contain any duplicate numbers.

Let’s say the given array is = {3, 4, 6, 7, 9, 12, 16, 17} and target = 6.
*/
/*
function binarySearch(nums, low, high, target) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (nums[mid] === target) {
    return mid;
  } else if (target > nums[mid]) {
    return binarySearch(nums, mid + 1, high, target);
  } else {
    return binarySearch(nums, low, mid - 1, target);
  }
}

function search(nums, target) {
  return binarySearch(nums, 0, nums.length - 1, target);
}

let a = [3, 4, 6, 7, 9, 12, 16, 17];
let target = 6;
let ind = search(a, target);
if (ind === -1) console.log("The target is not present.");
else console.log("The target is at index:", ind);
*/

/*
2) Implement Lower Bound
Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.
Example 1:
Input Format: N = 4, arr[] = {1,2,2,3}, x = 2
Result: 1
Explanation: Index 1 is the smallest index such that arr[1] >= x.

Example 2:
Input Format: N = 5, arr[] = {3,5,8,15,19}, x = 9
Result: 3
Explanation: Index 3 is the smallest index such that arr[3] >= x.

For a sorted array, the lower bound of x is: The first index where the element is >= x
*/
/*
function lowerBound(arr, n, x) {
  let low = 0,
    high = n - 1;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

let arr = [3, 5, 8, 15, 19];
let n = 5,
  x = 9;
let ind = lowerBound(arr, n, x);
console.log("The lower bound is the index:", ind);
*/

/*
3) Implement Upper Bound
Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the upper bound of x.
The upper bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than the given key i.e. x. arr[i] < x
*/
/*
function upperBound(arr, n, x) {
  let low = 0,
    high = n - 1;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

let arr = [3, 5, 8, 9, 15, 19];
let n = 6,
  x = 9;
let ind = upperBound(arr, n, x);
console.log("The upper bound is the index:", ind);
*/

/*
4) Search Insert Position
Problem Statement: You are given a sorted array arr of distinct values and a target value x. You need to search for the index of the target value in the array.
If the value is present in the array, then return its index. Otherwise, determine the index where it would be inserted in the array while maintaining the sorted order.

Example 1:
Input Format: arr[] = {1,2,4,7}, x = 6
Result: 3
Explanation: 6 is not present in the array. So, if we will insert 6 in the 3rd index(0-based indexing), the array will still be sorted. {1,2,4,6,7}.

Example 2:
Input Format: arr[] = {1,2,4,7}, x = 2
Result: 1
Explanation: 2 is present in the array and so we will return its index i.e. 1.
*/
/*
Same as Problem 2 soln. i.e Lower bound in an array finds the first occurence of x. If it does not find the element, it  
*/

/*
5) Floor/Ceil in Sorted Array
Problem Statement: You're given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in arr[0..n-1].
The floor of x is the largest element in the array which is smaller than or equal to x.
The ceiling of x is the smallest element in the array greater than or equal to x.

Example 1:
Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 5
Result: 4 7
Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

Example 2:
Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 8
Result: 8 8
Explanation: The floor of 8 in the array is 8, and the ceiling of 8 in the array is also 8.

Ceil -->Lower bound of x & Floor--> can use lower bound logic but change comaprison logic while doing binary search
*/
/*
function findFloor(arr, n, x) {
  let low = 0,
    high = n - 1;
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= x) {
      ans = arr[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

function findCeil(arr, n, x) {
  let low = 0,
    high = n - 1;
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      ans = arr[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function getFloorAndCeil(arr, n, x) {
  let f = findFloor(arr, n, x);
  let c = findCeil(arr, n, x);
  return [f, c];
}

let arr = [3, 4, 4, 7, 8, 10];
let n = arr.length,
  x = 5;
let ans = getFloorAndCeil(arr, n, x);
console.log("The floor and ceil are:", ans[0], ans[1]);
*/

/*
6) Find the first or last occurrence of a given number in a sorted array
Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key. If the target is not found then return -1.
Example 1:
Input: N = 7, target=13, array[] = {3,4,13,13,13,20,40}
Output: 4
Explanation: As the target value is 13 , it appears for the first time at index number 2.

Example 2:
Input: N = 7, target=60, array[] = {3,4,13,13,13,20,40}
Output: -1
Explanation: Target value 60 is not present in the array 
*/
/*
function lastOccurence(arr, key) {
  let res = -1;
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
      res = mid;
      low = mid + 1;
    } else if (key < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res;
}

let arr = [3, 4, 13, 13, 13, 20, 40];
let key = 13;
console.log("Index position: " + lastOccurence(arr, key));
*/

/*
7) Count occurrences of a number in a sorted array with duplicates
Problem Statement: You are given a sorted array containing N integers and a number X, you have to find the occurrences of X in the given array.
Example 1:
Input: N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
Output: 4
Explanation: 3 is occurring 4 times in 
the given array so it is our answer.

Example 2:
Input: N = 8,  X = 2 , array[] = {1, 1, 2, 2, 2, 2, 2, 3}
Output: 5
Explanation: 2 is occurring 5 times in the given array so it is our answer.
*/
/*
function firstOccurrence(arr, n, k) {
  let low = 0,
    high = n - 1;
  let first = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // maybe an answer
    if (arr[mid] === k) {
      first = mid;
      // look for smaller index on the left
      high = mid - 1;
    } else if (arr[mid] < k) {
      low = mid + 1; // look on the right
    } else {
      high = mid - 1; // look on the left
    }
  }
  return first;
}

function lastOccurrence(arr, n, k) {
  let low = 0,
    high = n - 1;
  let last = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    // maybe an answer
    if (arr[mid] === k) {
      last = mid;
      // look for larger index on the right
      low = mid + 1;
    } else if (arr[mid] < k) {
      low = mid + 1; // look on the right
    } else {
      high = mid - 1; // look on the left
    }
  }
  return last;
}
function firstAndLastPosition(arr, n, k) {
  let first = firstOccurrence(arr, n, k);
  if (first === -1) return [-1, -1];
  let last = lastOccurrence(arr, n, k);
  return [first, last];
}

function count(arr, n, x) {
  let [first, last] = firstAndLastPosition(arr, n, x);
  if (first === -1) return 0;
  return last - first + 1;
}

let arr = [2, 4, 6, 8, 8, 8, 11, 13];
let n = 8,
  x = 8;
let ans = count(arr, n, x);
console.log("The number of occurrences is:", ans);
*/

/*
8) Search in Rotated Sorted Array I
Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values) and a target value k. Now the array is rotated at some pivot point unknown to you. Find the index at which k is present and if k is not present return -1.
Example 1:
Input Format: arr = [4,5,6,7,0,1,2,3], k = 0
Result: 4
Explanation: Here, the target is 0. We can see that 0 is present in the given rotated sorted array, nums. Thus, we get output as 4, which is the index at which 0 is present in the array.

Example 2:
Input Format: arr = [4,5,6,7,0,1,2], k = 3
Result: -1
Explanation: Here, the target is 3. Since 3 is not present in the given rotated sorted array. Thus, we get the output as -1.
*/
/*
function search(arr, n, k) {
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === k) return mid;

    if (arr[low] <= arr[mid]) {
      if (arr[low] <= k && k <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= k && k <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

let arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
let n = 9,
  k = 1;
let ans = search(arr, n, k);
if (ans === -1) console.log("Target is not present.");
else console.log("The index is:", ans);
*/

/*
9) Search Element in Rotated Sorted Array II [Duplicates]
Problem Statement: Given an integer array arr of size N, sorted in ascending order (may contain duplicate values) and a target value k. Now the array is rotated at some pivot point unknown to you. Return True if k is present and otherwise, return False. 
Example 1:
Input Format: arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 3
Result: True
Explanation: The element 3 is present in the array. So, the answer is True.

Example 2:
Input Format: arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 10
Result: False
Explanation: The element 10 is not present in the array. So, the answer is False.
*/
/*
function searchInARotatedSortedArrayII(arr, k) {
  let n = arr.length; // size of the array.
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    //if mid points the target
    if (arr[mid] === k) return true;

    //Edge case:
    if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
      low = low + 1;
      high = high - 1;
      continue;
    }

    //if left part is sorted:
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= k && k <= arr[mid]) {
        //element exists:
        high = mid - 1;
      } else {
        //element does not exist:
        low = mid + 1;
      }
    } else {
      //if right part is sorted:
      if (arr[mid] <= k && k <= arr[high]) {
        //element exists:
        low = mid + 1;
      } else {
        //element does not exist:
        high = mid - 1;
      }
    }
  }
  return false;
}

let arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6];
let k = 3;
let ans = searchInARotatedSortedArrayII(arr, k);
if (!ans) {
  console.log("Target is not present.");
} else {
  console.log("Target is present in the array.");
}
*/

/*
10) Minimum in Rotated Sorted Array
Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). Now the array is rotated between 1 to N times which is unknown. Find the minimum element in the array. 
Example 1:
Input Format: arr = [4,5,6,7,0,1,2,3]
Result: 0
Explanation: Here, the element 0 is the minimum element in the array.

Example 2:
Input Format: arr = [3,4,5,1,2]
Result: 1
Explanation: Here, the element 1 is the minimum element in the array.

*/
/*
function findMin(arr) {
  let low = 0,
    high = arr.length - 1;
  let ans = Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[low] <= arr[high]) {
      ans = Math.min(ans, arr[low]);
      break;
    }

    if (arr[low] <= arr[mid]) {
      ans = Math.min(ans, arr[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, arr[mid]);
      high = mid - 1;
    }
  }
  return ans;
}

let arr = [4, 5, 6, 7, 0, 1, 2, 3];
let ans = findMin(arr);
console.log("The minimum element is: " + ans);
*/

/*
11) Find out how many times the array has been rotated
Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). Now the array is rotated between 1 to N times which is unknown. Find how many times the array has been rotated. 
Example 1:
Input Format: arr = [4,5,6,7,0,1,2,3]
Result: 4
Explanation: The original array should be [0,1,2,3,4,5,6,7]. So, we can notice that the array has been rotated 4 times.

Example 2:
Input Format: arr = [3,4,5,1,2]
Result: 3
Explanation: The original array should be [1,2,3,4,5]. So, we can notice that the array has been rotated 3 times.
*/
/*
function findKRotation(arr) {
  let low = 0,
    high = arr.length - 1;
  let index = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[low] <= arr[high]) {
      index = low;
      break;
    }
    if (arr[low] <= arr[mid]) {
      index = low;
      low = mid + 1;
    } else {
      index = mid;
      high = mid - 1;
    }
  }
  return index;
}

let arr = [4, 5, 6, 7, 0, 1, 2, 3];
let ans = findKRotation(arr);
console.log("The array is rotated " + ans + " times.");
*/

/*
12) Search Single Element in a sorted array
Problem Statement: Given an array of N integers. Every number in the array except one appears twice. Find the single number in the array.

Example 1:
Input Format: arr[] = {1,1,2,2,3,3,4,5,5,6,6}
Result: 4
Explanation: Only the number 4 appears once in the array.

Example 2:
Input Format: arr[] = {1,1,3,5,5}
Result: 3
Explanation: Only the number 3 appears once in the array.

*/
/*
function singleNonDuplicate(arr) {
  let n = arr.length;

  if (n === 1) return arr[0];
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

  let low = 1,
    high = n - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) {
      return arr[mid];
    }

    if (
      (mid % 2 === 1 && arr[mid] === arr[mid - 1]) ||
      (mid % 2 === 0 && arr[mid] === arr[mid + 1])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}

let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
let ans = singleNonDuplicate(arr);
console.log("The single element is:", ans);
*/

/*
13) Peak element in Array
Problem Statement: Given an array of length N. Peak element is defined as the element greater than both of its neighbors. Formally, if 'arr[i]' is the peak element, 'arr[i - 1]' < 'arr[i]' and 'arr[i + 1]' < 'arr[i]'. Find the index(0-based) of a peak element in the array. If there are multiple peak numbers, return the index of any peak number.

Example 1:
Input Format: arr[] = {1,2,3,4,5,6,7,8,5,1}
Result: 7
Explanation: In this example, there is only 1 peak that is at index 7.

Example 2:
Input Format: arr[] = {1,2,1,3,5,6,4}
Result: 1
Explanation: In this example, there are 2 peak numbers that are at indices 1 and 5. We can consider any of them.

Example 3:
Input Format: arr[] = {1, 2, 3, 4, 5}
Result: 4
Explanation: In this example, there is only 1 peak that is at the index 4.

Example 4:
Input Format: arr[] = {5, 4, 3, 2, 1}
Result: 0
Explanation: In this example, there is only 1 peak that is at the index 0.
*/
