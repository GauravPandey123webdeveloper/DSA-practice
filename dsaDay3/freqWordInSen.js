function FrequencyOfWord(sen) {
    let wd = {};
    let arrSen = sen.split(' ');
    for (let i in arrSen) {
      let word = arrSen[i];
      wd[word] = (wd[word] || 0) + 1;
    }
    return wd;
  }
  
  const wordFrequencies = FrequencyOfWord("Success is not the key of Happiness , Happiness is the key of success");
  
  for (let word in wordFrequencies) {
    console.log(`${word} :- ${wordFrequencies[word]}`);
  }
  