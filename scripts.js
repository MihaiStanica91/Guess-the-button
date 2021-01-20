
function correctButton() {
  alert("CORRECT!!! I am the WINNER one!!!");
}

function wrongButton() {
    alert("WRONG!!! I am the LOSER one!!!");
  }

function shuffle(array) {
    var currentIndex = array.length
    var temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}
var arr = [0, 0, 1];

function rightWrong() {
    shuffle(arr);
    for(var i = 0; i < 3; i++) {
      if(arr[i] == 0) {
        var x = document.getElementById("button");
        wrongButton(x);
        break;
      } else {
          var x = document.getElementById("button");
          correctButton(x);
          break;
      }
    }
}
console.log(arr);