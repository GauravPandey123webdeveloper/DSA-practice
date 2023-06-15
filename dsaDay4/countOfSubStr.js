 //naive approach
function countSubstrings(S, K) {
	const N = S.length;
	let count = 0;
  
	for (let i = 0; i < N; i++) {
	  const freq = new Array(26).fill(0);
	  
	  for (let j = i; j < N; j++) {
		freq[S.charCodeAt(j) - 'a'.charCodeAt(0)]++;
  
		if (freq.filter(val => val > 0).length === K) {
		  count++;
		} else if (freq.filter(val => val > 0).length > K) {
		  break;
		}
	  }
	}
  
	return count;
  }
  
  // Example usage:
  const S = 'aa';
  const K = 1;
  const result = countSubstrings(S, K);
  console.log(result);

 // sliding window 
//  function countSubstrings(S, K) {
// 	const N = S.length;
// 	let count = 0;
// 	const freq = new Array(26).fill(0);
// 	let distinctCount = 0;
// 	let left = 0;
	
// 	for (let right = 0; right < N; right++) {
// 	  const charCode = S.charCodeAt(right) - 'a'.charCodeAt(0);
// 	  if (freq[charCode] === 0) {
// 		distinctCount++;
// 	  }
// 	  freq[charCode]++;
	
// 	  while (distinctCount > K) {
// 		const leftCharCode = S.charCodeAt(left) - 'a'.charCodeAt(0);
// 		freq[leftCharCode]--;
// 		if (freq[leftCharCode] === 0) {
// 		  distinctCount--;
// 		}
// 		left++;
// 	  }
	
// 	  count += right - left + 1;
// 	}
	
// 	return count;
//   }
  
//   // Example usage:
//   const S = 'abc';
//   const K = 2;
//   const result = countSubstrings(S, K);
//   console.log(result);
  