var frequencySort = function(s) {
    let str = {};
    for (let i = 0; i < s.length; i++) {
      str[s[i]] = (str[s[i]] || 0) + 1;
    }
    let arrStr = Object.entries(str);
    arrStr.sort((a, b) => b[1] - a[1]);
    let sortedStr = '';
    for (let [char, freq] of arrStr) {
      sortedStr += char.repeat(freq);
    }
    return sortedStr;
  };
  console.log(frequencySort('tree'))
  // another best way
  /*
  var frequencySort = function(s) {
    let map=new Map();
    for(let val of s){
        map.set(val,(map.get(val)||0)+1);
    }
    let arr=[...map];
    arr.sort((a,b)=>b[1]-a[1]);
    let str=arr.map(([c,f]) => c.repeat(f)).join("");
    return str
};*/