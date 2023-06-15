var numRescueBoats = function (p, limit) {
    let n = p.length;
    let boats = 0; //answer to be returned


    let left = 0; // 2 pointers
    let right = n - 1;
    p.sort((a, b) => a - b); //ascending
    while (left <= right) {
        if (p[left] + p[right] <= limit) {
            left++;
            right--;
        }
        else
            right--;
        boats++;
    }
    return boats;
};
console.log(numRescueBoats([3,2,2,1],3))