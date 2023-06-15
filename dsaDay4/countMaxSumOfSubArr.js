function MaxSumofSubArr(arr) {
    let maxInt = Math.pow(2, 32)
    let sum = -maxInt - 1
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        // console.log(sum)
        
        sum = sum + arr[i]
        if (sum > maxSum) {
            console.log(maxSum)
            maxSum = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return maxSum;
}
console.log(MaxSumofSubArr([ -2, -3, 4, -1, -2, 1, 5, -3 ]))