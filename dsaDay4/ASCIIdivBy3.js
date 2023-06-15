// naive approch 
function findSubstrings(S, K) {
    const N = S.length;
    let count = 0;
  
    for (let i = 0; i <= N - K; i++) {
      let sum = 0;
  
      for (let j = i; j < i + K; j++) {
        sum += S.charCodeAt(j);
      }
  
      if (sum % K === 0) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  const S = 'bcgabc';
  const K = 3;
  const result = findSubstrings(S, K);
  console.log(result);
  
 // frequency counter 
//  function findSubstrings(S, K) {
//     const N = S.length;
//     let count = 0;
//     let sum = 0;
//     const freq = new Array(K).fill(0);
//     freq[0] = 1;
  
//     for (let i = 0; i < N; i++) {
//       sum += S.charCodeAt(i);
//       const remainder = ((sum % K) + K) % K;
  
//       count += freq[remainder];
//       freq[remainder]++;
//     }
  
//     return count - freq[0]; // Subtract the count of empty substrings
//   }
  
//   // Example usage:
//   const S = 'bcgabc';
//   const K = 3;
//   const result = findSubstrings(S, K);
//   console.log(result);
  