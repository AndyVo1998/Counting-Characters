function countLetters(str) {
  var myObject = {};
  var brokenWord = str.split('')

  brokenWord.forEach(function (eachLetter) {
    y = 1;
    if (myObject[eachLetter] === y){
      y++
    }
    if (eachLetter !== " ") {
      myObject[eachLetter] = y;
    }
  });
  return myObject;
}






console.log(countLetters("Lighthouse Labs"))