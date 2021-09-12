//Retrieving HTML elements

const currentStatus = document.querySelector('.current');
const restart = document.querySelector('.restart');
const gameCells = document.querySelectorAll('.game-cell');

// Game Letter constants
const symbolX = 'X' ;
const symbolO = 'O';

let playing = true;
let xIsNext = true;
let winner = null

//functions

const handleWin = (letter) => {

    winner = letter;
    playing = false;
    if(winner === 'x'){
        currentStatus.innerHTML = `Player ${symbolX} has won!`;
    }
    else{
        currentStatus.innerHTML = `Player ${symbolO} has won!`;
    }
    


}
const checkGameStatus = () => {
    const topLeft = gameCells[0].classList[1];
  const topMiddle = gameCells[1].classList[1];
  const topRight = gameCells[2].classList[1];
  const middleLeft = gameCells[3].classList[1];
  const middleMiddle = gameCells[4].classList[1];
  const middleRight = gameCells[5].classList[1];
  const bottomLeft = gameCells[6].classList[1];
  const bottomMiddle = gameCells[7].classList[1];
  const bottomRight = gameCells[8].classList[1];


  //Check winner

  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    gameCells[0].classList.add('won');
    gameCells[1].classList.add('won');
    gameCells[2].classList.add('won');
    
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    gameCells[3].classList.add('won');
    gameCells[4].classList.add('won');
    gameCells[5].classList.add('won');
    
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    gameCells[6].classList.add('won');
    gameCells[7].classList.add('won');
    gameCells[8].classList.add('won');
    
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    gameCells[0].classList.add('won');
    gameCells[3].classList.add('won');
    gameCells[6].classList.add('won');
    
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    gameCells[1].classList.add('won');
    gameCells[4].classList.add('won');
    gameCells[7].classList.add('won');
    
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    gameCells[2].classList.add('won');
    gameCells[5].classList.add('won');
    gameCells[8].classList.add('won');
    
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    gameCells[0].classList.add('won');
    gameCells[4].classList.add('won');
    gameCells[8].classList.add('won');

  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    gameCells[2].classList.add('won');
    gameCells[4].classList.add('won');
    gameCells[6].classList.add('won');

  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    playing = false;
    currentStatus.innerHTML = 'Game is tied!';
  } 


};


const handleRestart = () => {
    xIsNext = true;
    winner = null;
    currentStatus.innerHTML = `Turn for Player ${symbolX}`;
    gameCells.forEach((cell) => {
        cell.classList.remove('x');
        cell.classList.remove('o');
        cell.classList.remove('won');
        cell.addEventListener('click' , handleClick , {once : true} );
    })
};

const handleClick = (e) => {

    const currentCell = e.target.classList;

    if (xIsNext)
    {
        currentStatus.innerHTML = `Turn for Player ${symbolO}`;
        currentCell.add('x');
        checkGameStatus();
        xIsNext = !xIsNext;
        console.log('clicked');
    }
    else{
        currentStatus.innerHTML = `Turn for Player ${symbolX}`;
        currentCell.add('o');
        checkGameStatus();
        xIsNext = !xIsNext;
        console.log('clicked');
    }
        
}



//Event Listeners
restart.addEventListener('click' , handleRestart);

gameCells.forEach((cell) =>{
    cell.addEventListener('click' , handleClick , {once : true} ); // checks if it should be clicked once.
})
 