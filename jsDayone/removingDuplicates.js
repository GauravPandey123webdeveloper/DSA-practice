const removeDuplicates = (nums)=> {
    if(nums.length===0) return 0;
   let i=0;
   for(let j=1;j<nums.length;j++){
       if(nums[j]===nums[i]) continue;//helloo

       nums[++i]==nums[j]
    
   }
   console.log(i+1,nums)
};
removeDuplicates([1,1,2])