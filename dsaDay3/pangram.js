const pangram=function(s)
{
    let str=''
  let matchStr="abcdefghijklmnopqrstwxyz"
  for(let i=0;i<matchStr.length;i++){
    if(!s.includes(matchStr[i])){
        str+=matchStr[i]
    }
  }
  console.log(str)
}
pangram("the quick brawn fox jumps")