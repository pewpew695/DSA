/* 
1) Largest Element in an Array
Problem Statement: Given an array, we have to find the largest element in the array.

Example 1:
Input: arr[] = {2,5,1,3,0};
Output: 5
Explanation: 5 is the largest element in the array. 

Example2: 
Input: arr[] = {8,10,5,7,9};
Output: 10
Explanation: 10 is the largest element in the array. 

*/
/*
const arr = [2, 5, 1, 3, 1, 0];
let max = arr[0];
for (const elem of arr) {
  if (elem > max) {
    max = elem;
  }
}
console.log(max + " is the largest element in the array.");

*/

/*
2) Second Largest Element in an Array without sorting
Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

Example 1:
Input: [1,2,4,7,7,5]
Output: Second Smallest : 2
	Second Largest : 5
Explanation: The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

Example 2:
Input: [1]
Output: Second Smallest : -1
	Second Largest : -1
Explanation: Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.

*/
/*
const arr = [1, 2, 4, 7, 7, 5];
let smallest = Infinity,
  second_smallest = Infinity,
  largest = -Infinity,
  second_largest = -Infinity;
if (arr.length < 2) {
  console.log(-1);
} else {
  for (const elem of arr) {
    if (elem > largest) {
      second_largest = largest;
      largest = elem;
    } else if (elem > second_largest && elem !== largest) {
      second_largest = elem;
    }
    if (elem < smallest) {
      second_smallest = smallest;
      smallest = elem;
    } else if (elem < second_smallest && elem !== smallest) {
      second_smallest = elem;
    }
  }

  console.log(
    "The elements are as follows " +
      arr +
      " and hence second largest of these is " +
      second_largest +
      " and second smallest is " +
      second_smallest
  );
}
*/

/*
3) Check if an Array is Sorted
Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.

Note: Two consecutive equal values are considered to be sorted.

Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: True.
Explanation: The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.

Example 2:
Input: N = 5, array[] = {5,4,6,7,8}
Output: False.
Explanation: The given array is Not sorted i.e Every element in the array is not smaller than or equal to its next values, So the answer is False.

Here element 5 is not smaller than or equal to its future elements.

*/
/*
function isSorted(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

const arr = [4, 2, 3, 4, 5];
const sort = isSorted(arr);
sort ? console.log("Array is Sorted") : console.log("Array is not sorted");

*/

/*
4) Remove Duplicates in-place from Sorted Array

Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.

If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.

Note: Return k after placing the final result in the first k slots of the array.

Example 1: 

Input: arr[1,1,2,2,2,3,3]
Output: arr[1,2,3,_,_,_,_]
Explanation: Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array.

Example 2: 

Input: arr[1,1,1,2,2,3,3,3,3,4,4]
Output: arr[1,2,3,4,_,_,_,_,_,_,_]
Explanation: Total number of unique elements are 4, i.e[1,2,3,4] and Therefore return 4 after assigning [1,2,3,4] in the beginning of the array.

*/
/*
arr = [1, 2, 3, 2, 1, 4];
let hash = {};
let uniqueArr = [];

function uniqueArray(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (hash[arr[i]]) {
      hash[arr[i]]++;
    } else {
      hash[arr[i]] = 1;
      uniqueArr.push(arr[i]);
    }
  }
}

uniqueArray(arr);
console.log(uniqueArr);
console.log(uniqueArr.length);
*/

/*
5) Left Rotate an array by one place

Problem Statement: Given an array of N integers, left rotate the array by one place.
Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: 2,3,4,5,1
Explanation: 
Since all the elements in array will be shifted 
toward left by one so ‘2’ will now become the 
first index and and ‘1’ which was present at 
first index will be shifted at last.


Example 2:
Input: N = 1, array[] = {3}
Output: 3
Explanation: Here only element is present and so 
the element at first index will be shifted to 
last index which is also by the way the first index.
*/
/*
let arr = [1, 2, 3];
let n = arr.length;
let temp = arr[0];
console.log(arr);
for (let i = 0; i <= n - 2; i++) {
  arr[i] = arr[i + 1];
}

arr[n - 1] = temp;
console.log(arr);
*/

/*
6) Rotate array by K elements
Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.
Example 1:
Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
Output: 6 7 1 2 3 4 5
Explanation: array is rotated to right by 2 position .

Example 2:
Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left 
Output: 9 10 11 3 7 8
Explanation: Array is rotated to right by 3 position.
*/
/*
let arr = [3, 7, 8, 9, 10, 11];

function rotateArray(arr, shift, direction) {
  let n = arr.length;
  if (direction == "right") {
    return arr.slice(-shift).concat(arr.slice(0, n - shift));
  } else if (direction == "left") {
    return arr.slice(shift).concat(arr.slice(0, shift));
  } else {
    console.log("Invalid Direction");
  }
}

console.log(rotateArray(arr, 2, "right"));
console.log(rotateArray(arr, 3, "left"));
*/

/*
7) Move all Zeros to the end of the array
In this article we will learn how to solve the most asked coding interview problem: "Move all Zeros to the end of the array"

Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.
Example 1:
Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

Example 2:
Input: 1,2,0,1,0,4,0
Output: 1,2,1,4,0,0,0
Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order
*/
/*
function moveZeros(arr) {
  let n = arr.length;
  let j = -1;
  for (let i = 0; i <= n - 1; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }
  if (j === -1) return arr;

  for (let i = j + 1; i <= n - 1; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
console.log(moveZeros(arr));
*/

/*
8) Linear Search
Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.
Example 1:
Input: arr[]= 1 2 3 4 5, num = 3
Output: 2
Explanation: 3 is present in the 2nd index

Example 2:
Input: arr[]= 5 4 3 2 1, num = 5
Output: 0
Explanation: 5 is present in the 0th index
*/
/*
function arrayPos(arr, num) {
  let n = arr.length;
  for (let i = 0; i <= n - 1; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
}

let arr = [1, 2, 3, 4, 5];
console.log(arrayPos(arr, 3));
*/

/*
9) Union of Two Sorted Arrays
Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.
Example 1:
Input:
n = 5,m = 5.
arr1[] = {1,2,3,4,5}  
arr2[] = {2,3,4,4,5}
Output:
 {1,2,3,4,5}

Explanation: 
Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1
Distnict Elemennts in arr2 are : No distinct elements.
Union of arr1 and arr2 is {1,2,3,4,5} 
*/
/*
let arrUnion = [],
  arr1 = [1, 2, 3, 4, 5],
  arr2 = [2, 3, 4, 4, 5];
let i = 0,
  j = 0,
  n = arr1.length,
  m = arr2.length;
while (i < n && j < m) {
  if (arr1[i] <= arr2[j]) {
    if (arrUnion.length === 0 || arrUnion[arrUnion.length - 1] !== arr1[i]) {
      arrUnion.push(arr1[i]);
    }
    i++;
  } else {
    if (arrUnion.length === 0 || arrUnion[arrUnion.length - 1] !== arr2[j]) {
      arrUnion.push(arr2[j]);
    }
    j++;
  }
}
while (i < n) {
  if (arrUnion[arrUnion.length - 1] !== arr1[i]) {
    arrUnion.push(arr1[i]);
  }
  i++;
}
while (j < m) {
  if (arrUnion[arrUnion.length - 1] !== arr2[j]) {
    arrUnion.push(arr2[j]);
  }
  j++;
}
console.log(arrUnion);
*/

/*
10) Find the missing number in an array 
Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.
*/
/*
function missingNumber(arr, N) {
  let xor1 = 0;
  let xor2 = 0;
  for (let i = 0; i <= N - 2; i++) {
    xor2 = xor2 ^ arr[i]; // XOR for Missing No
    xor1 = xor1 ^ (i + 1); // XOR for 1 to N-1 value
    console.log(i);
    console.log("xor2: " + xor2);
    console.log("xor1: " + xor1);
  }
  xor1 = xor1 ^ N; //XOR for 1 to N
  console.log("xor1: " + xor1);
  return xor1 ^ xor2;
}

let arr = [1, 2, 3, 5];
let N = 5;
const ans = missingNumber(arr, N);
console.log("The missing number is:", ans);
*/

/*
11) Count Maximum Consecutive One's in the array
Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.
Example 1:
Input: prices = {1, 1, 0, 1, 1, 1}
Output: 3

*/
/*
let arr = [1, 1, 0, 1, 1, 1];
let hash = {};
let counter = 0,
  maxCounter = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] === 1) {
    counter++;
    maxCounter = Math.max(counter, maxCounter);
  } else {
    maxCounter = counter;
    counter = 0;
  }
}

console.log(maxCounter);
*/

/*
12) Find the number that appears once, and the other numbers twice
Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.
Example 1:
Input Format: arr[] = {2,2,1}
Result: 1
Explanation: In this array, only the element 1 appear once and so it is the answer.
*/
/*
function repeatOnce(arr) {
  let xor = 0;
  for (let i = 0; i <= arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}

let arr = [4, 1, 2, 1, 2];
let ans = repeatOnce(arr);
console.log("The non-repeating array value is: " + ans);
*/

/*
13) Longest Subarray with given Sum K(Positives)
Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.
Example 1:
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.
*/
/*
function getLongestSubarray(a, k) {
  let left = 0,
    right = 0;
  let sum = a[0];
  let maxLen = 0;

  while (right < a.length) {
    while (left <= right && sum > k) {
      sum -= a[left];
      left++;
    }
    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    right++;
    if (right < a.length) {
      sum += a[right];
    }
  }
  return maxLen;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);
*/

/*
14) Longest Subarray with sum K | [Postives and Negatives]
Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

Example 1:
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

Example 2:
Input Format: N = 3, k = 1, array[] = {-1, 1, 1}
Result: 3
Explanation: The longest subarray with sum 1 is {-1, 1, 1}. And its length is 3.
*/
/*
function getLongestSubarray(a, k) {
  let n = a.length;
  let prefixSumMap = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i <= n - 1; i++) {
    sum += a[i];
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }
    let rem = sum - k;
    if (prefixSumMap.has(rem)) {
      let len = i - prefixSumMap.get(rem);
      maxLen = Math.max(maxLen, len);
    }
    if (!prefixSumMap.has(sum)) {
      prefixSumMap.set(sum, i);
    }
  }
  return maxLen;
}

let a = [-1, 1, 1];
let k = 1;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);
*/
