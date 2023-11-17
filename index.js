let turn = "X";
let gameOver = false;

// Logic for changing the Turn value i.e X or 0
function changeTurn() {
    return turn==="X" ? ("0") : ("X");
}


//Logic for checking if a player has won
function checkWin() {
    let boxtexts = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " wins the game!";
            gameOver = true;
        }
    })
}


//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener("click", ()=> {
        if(boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
        }
    });
});

//Reset Button functionality

reset.addEventListener("click", ()=> {
    let boxTexts = document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    });
    gameOver = false;
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
});