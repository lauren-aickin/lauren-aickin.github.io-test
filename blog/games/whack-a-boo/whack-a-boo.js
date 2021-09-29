console.log("Whack-a-Boo!")

//overview of variables
let mole = document.createElement("img")
let emptyTable = document.getElementsByTagName("td")
let missed = document.getElementById("tiles")
let hitMole = false
let gameCount = -1
let totalClicks = document.getElementById("clickCount")
let miss = new Audio("kingboo.mp3");
let hit = new Audio("whack-audio.wav");

// initialise new game
function startGame() {
  hitMole = false
  gameCount = -1
  clickCount = 0
  timeLoop();
  totalClicks.innerHTML = "Hits: 0";
}

// track missed moles
missed.addEventListener("click", function(){ 
  clickCount ++;
  totalClicks.innerHTML = "Click Attempts: " + parseInt(clickCount);
  miss.play();
});

// keep assigning moles and pop up time
function timeLoop(){
  if (!hitMole) {
    assignMoles()
    gameCount ++
    let scoreboardMoles = document.getElementById("moleCount");
    scoreboardMoles.innerHTML = "Boo Appearances: " + parseInt(gameCount + 1);
    setTimeout(timeLoop, Math.random() * 1500);
    return
  }
  return
}

// track moles when hit
mole.addEventListener("click", function(){ 
  hitMole = true;
  hit.play();
  mole.src = "BONK.png";
});

// assign mole image to random cell
function assignMoles(value) {
  let emptyTable = document.getElementsByTagName("td");
  let newMole = Math.floor((Math.random() * 25 + 1))
  emptyTable[newMole].appendChild(mole);
  mole.src = "boo.png";
}