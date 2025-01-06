const runGame = (function() {
    const buttonBox = document.querySelector('.buttonBox');
    const startGameButton = document.querySelector('.startButton');
    const gameNameBox = document.querySelector('.gameNames');
    const startedGameBox = document.querySelector('.startedButtonBox');
    const playerOneName = document.querySelector('#gameName1');
    const playerTwoName = document.querySelector('#gameName2')
    const htmlGrid = document.querySelector('.TTTGrid')
    const gridSquares = document.querySelectorAll('.gridSquare');
    const resetButton = document.querySelector('.restartButton');
    const winnerModule = document.querySelector('#winnerModule')
    const playAgainButton = document.querySelector('#playAgainButton')
    const newGameButton = document.querySelector('#newGameButton')
    const playerOneScore = document.querySelector('#playerOneScore')
    const playerTwoScore = document.querySelector('#playerTwoScore')
    //object for player one
    const playerOne = {
        name: "",
        sign: "X",
        score: 0,
    }
    //object for player two
    const playerTwo = {
        name:"",
        sign:"O",
        score:0,
    }
    //Listener that is waiting for the start button to be clicked
    startGameButton.addEventListener('click', () => {
        const playerOne = document.querySelector('#player1Name');
        const playerTwo = document.querySelector('#player2Name');
        assignUser(playerOne.value, playerTwo.value);
        startGameDom(playerOne.value, playerTwo.value);
        startRounds()
    })
    //Function to assign users their name and sign after the start button is clicked
    function assignUser(player1Name, player2Name) {
        playerOne.name = player1Name
        playerTwo.name = player2Name
    }
    //Function to clean up the dom and print the board 
    function startGameDom(playerOne, playerTwo) {
        buttonBox.style.display = 'none';
        startedGameBox.style.display = 'flex';
        gameNameBox.style.display = 'flex';
        htmlGrid.style.display = "grid";
        playerOneName.innerText = `Player 1: ${playerOne}`;
        playerTwoName.innerText = `Player 2: ${playerTwo}`;
    }

//Function for when a winner is found and options are provided
function winnerFound() {
    resetButton.style.display = 'none'
    winnerModule.style.display = 'flex';
    playAgainButton.addEventListener('click', () => {
        playAgain()
    })
    newGameButton.addEventListener('click', () => {
        resetBoard()
    })


}
//Function for the reset button which will reset the board its values and return the OG DOM
    function resetBoard() {
        startedGameBox.style.display = 'none';
        gameNameBox.style.display = 'none';
        htmlGrid.style.display = "none";
        buttonBox.style.display = 'flex';
        gridArray.fill(0)
        const squares = Array.from(gridSquares);
        squares.forEach((square) => {
            square.innerText = ""
        })
        playerOne.score = 0;
        playerTwo.score = 0;
        winnerModule.style.display = 'none';

    }
//this button is if they want to play again and maintain score
    function playAgain() {
        gridArray.fill(0)
        const squares = Array.from(gridSquares);
        squares.forEach((square) => {
            square.innerText = ""
        })
        winnerModule.style.display = 'none';
        playerOneScore.style.display = 'block'
        playerOneScore.innerText = `Score: ${playerOne.score}`
        playerTwoScore.style.display = 'block'
        playerTwoScore.innerText = `Score: ${playerTwo.score}`
        startRounds()
    }
    //Event listener for the resetBoard functions
    resetButton.addEventListener('click', resetBoard)
    //This will be a function to start the rounds 
    function startRounds() {
        let roundCount = 1;
        let playerMove = "p1";
        //function to increase round count
        function increaseRound() {
            roundCount += 1;
        }

        //array to keep track of the taken squares
        const squares = Array.from(gridSquares);
        const takenSquares = [];
        squares.forEach(() => takenSquares.push(false))
        squares.forEach((square, index) => {
        
        square.addEventListener('click', (e) => {

            if (!takenSquares[index]) {
            if (playerMove === "p1") {
                e.target.innerText = "X"
                playerMove = "p2"
                increaseRound()
                takenSquares[index] = true;
                gridArray[index] = 1
            }
            else if (playerMove === "p2") {
                e.target.innerText = "O"
                playerMove = "p1"
                increaseRound()
                takenSquares[index] = true;
                gridArray[index] = 2
            }

        }
        checkWin()
    })
        square.addEventListener('mouseenter', (e) => {
            if (!takenSquares[index] && playerMove === "p1") {
                e.target.innerText = "X"}
            else if (!takenSquares[index] && playerMove === "p2") {
                e.target.innerText = "O"
            }

        })
        square.addEventListener('mouseleave', (e) => {
            if (!takenSquares[index]) {
                e.target.innerText = ""}
            })

    })
    //event listener for the reset board button
    return {takenSquares}
};

    //this is the board array that holds 3 rows
    const gridArray = [0,0,0,
                       0,0,0,
                       0,0,0
    ];

    //function just to check whats in each row
        function printGrid() {  
            console.log(gridArray);
     }

    const winningCombos = () => [
        // Rows
        [gridArray[0], gridArray[1], gridArray[2]], 
        [gridArray[3], gridArray[4], gridArray[5]], 
        [gridArray[6], gridArray[7], gridArray[8]], 
        // Columns
        [gridArray[0], gridArray[3], gridArray[6]], 
        [gridArray[1], gridArray[4], gridArray[7]], 
        [gridArray[2], gridArray[5], gridArray[8]], 
        // Diagonals
        [gridArray[0], gridArray[4], gridArray[8]], 
        [gridArray[2], gridArray[4], gridArray[6]]
    ];
    

    function checkWin() {

        if (winningCombos().some(line => line.every(char => char === 1))) {
            alert(`${playerOne.name} has won the game!`)
            playerOne.score++
            winnerFound()
        }
        else if (winningCombos().some(line => line.every(char => char === 2))) {
            alert(`${playerTwo.name} has won the game!`)
            playerTwo.score++
            winnerFound()
        }
        else {
            console.log('No winner yet!')
        }
    }
    return { gridArray, printGrid, checkWin, startRounds, winningCombos};
})
();