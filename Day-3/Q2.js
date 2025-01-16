function MergeArrays(arr1, arr2) {
  arr3 = [...arr1, ...arr2];
  return arr3;
}

arr1 = [1, 2, 3, 4];
arr2 = [4, 5, 6, 7, 8];
console.log(MergeArrays(arr1, arr2));
