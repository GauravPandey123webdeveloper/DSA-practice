/*Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.*/
function sort012(arr, N)
    {
        let l=0;
        let m=0;
        let h=N-1
        while(m<=h){
            if(arr[m]===0){
                [arr[m],arr[l]]=[arr[l],arr[m]]
                m++
                l++
            }
            else if(arr[m]===1){
                m++
            }
            else
            {
                [arr[h],arr[m]]=[arr[m],arr[h]];
                h--;
            }
        }
        return arr
    }
    console.log(sort012([2,1,0,0,1],5))

