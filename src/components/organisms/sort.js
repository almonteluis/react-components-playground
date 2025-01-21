// Given these two arrays:

//

// I would like to have a function that sorts and merges those two arrays into one array. I would like the solution to optimize for memory allocation.

// Assumptions:
// 1. Size of array B is always 2*size of array A.
// 2. Elements of the B array in index that is greater than len(A) (which is 3 in this example) are place holders

// In this example, the result should be [1,2,3,4,5,6];

function sortArray(arr1, arr2) {
  // Get the valid length of arr2 (excluding placeholders)
  const validLength = arr1.length;

  // Create pointers for traversing both arrays
  let p1 = validLength - 1;
  let p2 = validLength - 1;
  let insertPos = 2 * validLength - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (arr1[p1] > arr2[p2]) {
      arr2[insertPos] = arr1[p1];
      p1--;
    } else {
      arr2[insertPos] = arr2[p2];
      p2--;
    }
    insertPos--;
  }

  while (p1 >= 0) {
    arr2[insertPos] = arr[p1];
    p1--;
    insertPos--;
  }

  arr2 = arr2.sort();
  return arr2;
}

let A = [4, 2, 6];
let B = [5, 1, 3, 0, 0, 0];

sortArray(A, B);
