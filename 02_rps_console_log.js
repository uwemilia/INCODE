function rps(first_player, second_player)
{
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    if (first_player === second_player)
    {
        console.log( "draw");
    }

    if (first_player === rock && second_player === scissors)
    {
        console.log("first player wins");
    }
    else if (first_player === rock && second_player === paper)
    {
        console.log("second player wins");
    }
    else if (first_player === scissors && second_player === paper)
    {
        console.log("first_player wins");
    }
    else if (first_player === scissors && second_player == rock)
    {
        console.log("second player wins");
    }
    else if (first_player === paper && second_player === rock)
    {
        console.log("first player wins");
    }
    else if (first_player === paper && second_player === scissors)
    {
        console.log("second player wins");
    }
}

rps("rock", "paper");
rps("rock", "scissors");
rps("paper", "paper");
rps("scissors", "paper");
rps("paper", "scissors");