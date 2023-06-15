function solution(a) {
    let obj = {};
    for (let i = 0; i < a.length; i++) {
      obj[a[i]] = (obj[a[i]] || 0) + 1;
    }
    let arr = Object.entries(obj);
    for (let i = 0; i < arr.length; i++) {
      let frequency = arr[i][1];
      let isDifferent = true;
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && frequency === arr[j][1]) {
          isDifferent = false;
          break;
        }
      }
      if (isDifferent) {
        return arr[i][0];
      }
    }
  }
  
  console.log(solution([1, 1, 2, 2, 3]));  // Output: 3
  