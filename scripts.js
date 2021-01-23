function winnerButton() {

  var x = document.getElementById("myNumber").value;
  var winnerNumber = Math.floor(Math.random() * x);
  var div = document.getElementsByTagName("div")[0];
  
  for (var i = 0; i < x; i++) {
    var button = document.createElement("button");
    button.innerHTML = 'Press me,<br> I am the winner one';
    div.appendChild(button);
    button.value = i;
    if(button.value == winnerNumber) {
      button.addEventListener ("click", function() {
        alert("CORRECT!!! I am the WINNER one!!!");
      });
    } else {
      button.addEventListener ("click", function() {
        alert("WRONG!!! I am the LOSER one!!!");
      });
    }
  }
}

function restartGame() {
  location.reload();
}