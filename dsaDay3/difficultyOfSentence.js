function calculateDifficulty(sentence) {
    if(arguments.length==0) return 0
    const words = sentence.split(' ');
    let difficultWords = 0;
    let easyWords = 0;
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      let consecutiveConsonants = 0;
      let consecutiveVowels = 0;
  
      for (let j = 0; j < word.length; j++) {
        const char = word[j];
        const isVowel = /[aeiou]/.test(char);
  
        if (isVowel) {
        
          consecutiveVowels++;
          
        } else {
          consecutiveConsonants++;
         
        }
      }
      if (consecutiveVowels < consecutiveConsonants) {
        difficultWords++;
        
      }
      if (consecutiveConsonants >= 4) {
        difficultWords++;
        
      }
      if (consecutiveConsonants < 4 && consecutiveVowels >= consecutiveConsonants) {
        easyWords++;
      }
    }
    const difficulty = 5 * difficultWords + 3 * easyWords;
    return difficulty;
  }
  
  // Example usage:
  const sentence = "eaiou, sss";
  const difficulty = calculateDifficulty(sentence);
  console.log(difficulty);
  