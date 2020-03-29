let playerOneMoveOneType = undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeType = undefined;
let playerOneMoveThreeValue = undefined;
let playerTwoMoveOneType = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeType = undefined;
let playerTwoMoveThreeValue = undefined;
let gamePointsP1 = 0;
let gamePointsP2 = 0;

//sets the arguments of this function to the variables above so they can be used globally based on the player check
function setPlayerMoves(
    player,
    moveOneType,
    moveOneValue,
    moveTwoType,
    moveTwoValue,
    moveThreeType,
    moveThreeValue
) {
    //Checking which player's turn is it
    if (player === 'Player One') {
        //resetting?
        playerOneMoveOneType = undefined;
        playerOneMoveOneValue = undefined;
        playerOneMoveTwoType = undefined;
        playerOneMoveTwoValue = undefined;
        playerOneMoveThreeType = undefined;
        playerOneMoveThreeValue = undefined;
        //checking for all moves if the input is of the correct type and assigning the corresponding values to the global variables
        if (
            moveOneType === 'rock' ||
            moveOneType === 'paper' ||
            moveOneType === 'scissors'
        ) {
            playerOneMoveOneType = moveOneType;
        }
        if (
            moveTwoType === 'rock' ||
            moveTwoType === 'paper' ||
            moveTwoType === 'scissors'
        ) {
            playerOneMoveTwoType = moveTwoType;
        }
        if (
            moveThreeType === 'rock' ||
            moveThreeType === 'paper' ||
            moveThreeType === 'scissors'
        ) {
            playerOneMoveThreeType = moveThreeType;
        }
        //doing the same for the values of the moves (have do be between 1 and 99 and their sum must not exceed 99)
        if (
            moveOneValue >= 1 &&
            moveOneValue < 99 &&
            moveOneValue + moveTwoValue + moveThreeValue < 100
        ) {
            playerOneMoveOneValue = moveOneValue;
        }
        if (
            moveTwoValue >= 1 &&
            moveTwoValue < 99 &&
            moveOneValue + moveTwoValue + moveThreeValue < 100
        ) {
            playerOneMoveTwoValue = moveTwoValue;
        }
        if (
            moveThreeValue >= 1 &&
            moveThreeValue < 99 &&
            moveOneValue + moveTwoValue + moveThreeValue < 100
        ) {
            playerOneMoveThreeValue = moveThreeValue;
        }
    }
    //Player 2's turn?
    if (player === 'Player Two') {
        //checking for all moves if the input is of the correct type and assigning the corresponding values to the global variables
        if (
            moveOneType === 'rock' ||
            moveOneType === 'paper' ||
            moveOneType === 'scissors'
        ) {
            playerTwoMoveOneType = moveOneType;
        }
        if (
            moveTwoType === 'rock' ||
            moveTwoType === 'paper' ||
            moveTwoType === 'scissors'
        ) {
            playerTwoMoveTwoType = moveTwoType;
        }
        if (
            moveThreeType === 'rock' ||
            moveThreeType === 'paper' ||
            moveThreeType === 'scissors'
        ) {
            playerTwoMoveThreeType = moveThreeType;
        }
        //doing the same for the values of the moves (have do be between 1 and 99 and their sum must not exceed 99)
        if (
            moveOneValue >= 1 && //can equel to 1 since that's the default value of our input field and if it cannot everything breaks
            moveOneValue < 99 &&
            moveOneValue + moveTwoValue + moveThreeValue < 100
        ) {
            playerTwoMoveOneValue = moveOneValue;
        }
        if (
            moveTwoValue >= 1 &&
            moveTwoValue < 99 &&
            moveOneValue + moveTwoValue + moveThreeValue < 100
        ) {
            playerTwoMoveTwoValue = moveTwoValue;
        }
        if (
            moveThreeValue >= 1 &&
            moveThreeValue < 99 &&
            moveOneValue + moveTwoValue + moveThreeValue < 100
        ) {
            playerTwoMoveThreeValue = moveThreeValue;
        }
    }
    return;
}

//gets the round winner based on the set values of each player's moves
function getRoundWinner(round) {
    //round 1?
    if (round === 1) {
        //returns null if any of the values is missing
        if (
            playerOneMoveOneType === undefined ||
            playerOneMoveOneValue === undefined ||
            playerTwoMoveOneType === undefined ||
            playerTwoMoveOneValue === undefined
        ) {
            return null;
        }
        //check if the types of each player's moves are equel
        if (playerOneMoveOneType === playerTwoMoveOneType) {
            //if it they are only then compares the values of the moves and chooses a winner for the round
            if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                gamePointsP1++;
                return 'Player One';
            } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                gamePointsP2++;
                return 'Player Two';
            } else {
                return 'Tie';
            }
            //if not it enters a whole bunch of other checks to see who has the stronger move
        } else {
            //switching the type of the first player's move
            switch (playerOneMoveOneType) {
                //if it's rock checks its counter (paper) to see if they lost
                case 'rock':
                    if (playerTwoMoveOneType === 'paper') {
                        gamePointsP2++;
                        return 'Player Two';
                        //everything else is a win (scissors)
                    } else {
                        gamePointsP1++;
                        return 'Player One';
                    }
                //etc. for paper and scissors
                case 'paper':
                    if (playerTwoMoveOneType === 'rock') {
                        gamePointsP1++;
                        return 'Player One';
                    } else {
                        gamePointsP2++;
                        return 'Player Two';
                    }
                case 'scissors':
                    if (playerTwoMoveOneType === 'paper') {
                        gamePointsP1++;
                        return 'Player One';
                    } else {
                        gamePointsP2++;
                        return 'Player Two';
                    }
                //impossible to come here since the move types can be only the above three so a bit useless
                default:
                    break;
            }
        }
        //do and repeat for round two and round three
    } else if (round === 2) {
        if (
            playerOneMoveTwoType === undefined ||
            playerOneMoveTwoValue === undefined ||
            playerTwoMoveTwoType === undefined ||
            playerTwoMoveTwoValue === undefined
        ) {
            return null;
        }
        if (playerOneMoveTwoType === playerTwoMoveTwoType) {
            if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                gamePointsP1++;
                return 'Player One';
            } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                gamePointsP2++;
                return 'Player Two';
            } else {
                return 'Tie';
            }
        } else {
            switch (playerOneMoveTwoType) {
                case 'rock':
                    if (playerTwoMoveTwoType === 'paper') {
                        gamePointsP2++;
                        return 'Player Two';
                    } else {
                        gamePointsP1++;
                        return 'Player One';
                    }
                case 'paper':
                    if (playerTwoMoveTwoType === 'rock') {
                        gamePointsP1++;
                        return 'Player One';
                    } else {
                        gamePointsP2++;
                        return 'Player Two';
                    }
                case 'scissors':
                    if (playerTwoMoveTwoType === 'paper') {
                        gamePointsP1++;
                        return 'Player One';
                    } else {
                        gamePointsP2++;
                        return 'Player Two';
                    }
                default:
                    break;
            }
        }
    } else if (round === 3) {
        if (
            playerOneMoveThreeType === undefined ||
            playerOneMoveThreeValue === undefined ||
            playerTwoMoveThreeType === undefined ||
            playerTwoMoveThreeValue === undefined
        ) {
            return null;
        }
        if (playerOneMoveThreeType === playerTwoMoveThreeType) {
            if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                gamePointsP1++;
                return 'Player One';
            } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
                gamePointsP2++;
                return 'Player Two';
            } else {
                return 'Tie';
            }
        } else {
            switch (playerOneMoveThreeType) {
                case 'Rock':
                    if (playerTwoMoveThreeType === 'paper') {
                        gamePointsP2++;
                        return 'Player Two';
                    } else {
                        gamePointsP1++;
                        return 'Player One';
                    }
                case 'paper':
                    if (playerTwoMoveThreeType === 'rock') {
                        gamePointsP1++;
                        return 'Player One';
                    } else {
                        gamePointsP2++;
                        return 'Player Two';
                    }
                case 'scissors':
                    if (playerTwoMoveThreeType === 'paper') {
                        gamePointsP1++;
                        return 'Player One';
                    } else {
                        gamePointsP2++;
                        return 'Player Two';
                    }
                default:
                    break;
            }
        }
    }
    return null;
}

//gets the game winner based on the stored scores of each player
function getGameWinner() {
    if (gamePointsP1 === gamePointsP2) {
        //resetting the values for the game points each player has so it doesn't overlap with the previous rounds since the app doesn't actually reload to reset them automatically
        gamePointsP1 = 0;
        gamePointsP2 = 0;
        return 'Tie';
    } else if (gamePointsP1 > gamePointsP2) {
        //---same---
        gamePointsP1 = 0;
        gamePointsP2 = 0;
        return 'Player One';
    } else if (gamePointsP1 < gamePointsP2) {
        //---same here too---
        gamePointsP1 = 0;
        gamePointsP2 = 0;
        return 'Player Two';
    }
    return null;
}

//randomly sets the values of the second player as if you play against a computer...well...you are?
function setComputerMoves() {
    //declare an array with the three possible moves
    const playerMoves = ['rock', 'paper', 'scissors'];
    //declare a max point variable to keep track of how many points we go left
    let maxPoints = 99;

    //randomly choose for each move between the possible choices
    playerTwoMoveOneType = playerMoves[Math.floor(Math.random() * 3)]; //Math.random() returns a float between 0 and 1 so if multiplied by three and rounded down will result in a random number between 0 and 2 just as we need fo the indexes of the array
    playerTwoMoveTwoType = playerMoves[Math.floor(Math.random() * 3)];
    playerTwoMoveThreeType = playerMoves[Math.floor(Math.random() * 3)];

    //randomazing the values with multiplying by the maxPoints and adding 1 so we can get a random number between 1 and the maximum of points each move can have
    playerTwoMoveOneValue = Math.floor(Math.random() * maxPoints) + 1;
    maxPoints -= playerTwoMoveOneValue; //subtracting the randomized value from above so we dont have values which when added together result in grader than 99 value
    playerTwoMoveTwoValue = Math.floor(Math.random() * maxPoints) + 1;
    maxPoints -= playerTwoMoveTwoValue;
    playerTwoMoveThreeValue = Math.floor(Math.random() * maxPoints) + 1;
    return;
}
