function rps(first_player, second_player)
{
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    if (first_player === second_player)
    {
        return "draw";
    }

    if (first_player === rock && second_player === scissors)
    {
        return"first player wins";
    }
    else if (first_player === rock && second_player === paper)
    {
        return"second player wins";
    }
    else if (first_player === scissors && second_player === paper)
    {
        return"first_player wins";
    }
    else if (first_player === scissors && second_player == rock)
    {
        return"second player wins";
    }
    else if (first_player === paper && second_player === rock)
    {
        return"first player wins";
    }
    else if (first_player === paper && second_player === scissors)
    {
        return"second player wins";
    }
}

console.log(rps("rock", "paper"));
console.log(rps("rock", "scissors"));
console.log(rps("paper", "paper"));
console.log(rps("scissors", "paper"));
console.log(rps("paper", "scissors"));