function rotateArr(arr, k) {
    const rotation = k % arr.length;
  
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, rotation - 1);
    reverse(arr, rotation, arr.length - 1);
  
    return arr;
  }
  
  function reverse(arr, start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  const result = rotateArr(arr, k);
  console.log(result);
  