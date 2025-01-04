//getUser function to take two user names and attach them to x/o (default name is x & o)
function getUser(name) {
    const user = {name, team:null}
    const xTaken = false;
    const oTaken = false;
    function assignTeam(chosenTeam) {
         if (!xTaken && !oTaken) {
            if (chosenTeam != "O" && chosenTeam != "X") {
                alert('Please choose a team')
            }
            else {
            user.team = chosenTeam;
            }
         }
         else if (!xTaken && oTaken) {
            user.team = "O"
         }
         else {
            user.team = "X"
         }
    }
    return {assignTeam};
}
//function to start the game and generate grid array
function startGame() {
    // 3x3 grid or 9 length array to logically track the board and the choices made 
    const gridArray = [0,0,0,
                       0,0,0,
                       0,0,0,
    ];

}