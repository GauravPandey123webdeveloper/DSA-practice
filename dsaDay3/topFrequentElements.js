var topKFrequent = function(nums, k) {
    let freq={}
    let res=[]
    for(let i=0; i<nums.length;i++){
        freq[nums[i]]= (freq[nums[i]]||0)+1
    }
    let sortedNums= Object.entries(freq)
    sortedNums.sort((a,b)=>b[1]-a[1])
    for(let i=0;i<k;i++){
       res.push(sortedNums[i][0])
    }
    return res
};
console.log(topKFrequent([1,1,1,4,3,2,2,2],3))
// another best possible solution
/*
var topKFrequent = function(nums, k) {
    let res = [], map = new Map();
    
    nums.forEach(n => map.set(n, map.get(n) + 1 || 1));
    
    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < k; i++) {
        res.push(sortedArray[i][0]);
    }
    
    return res;
};*/