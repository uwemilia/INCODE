<script>

function rps(first_player, second_player)
{
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    if (first_player === second_player)
    {
        document.write("draw");
    }

    if (first_player === rock && second_player === scissors)
    {
        document.write("first player wins");
    }
    else if (first_player === rock && second_player === paper)
    {
        document.write("second player wins");
    }
    else if (first_player === scissors && second_player === paper)
    {
        document.write("first_player wins");
    }
    else if (first_player === scissors && second_player == rock)
    {
        document.write("second player wins");
    }
    else if (first_player === paper && second_player === rock)
    {
        document.write("first player wins");
    }
    else if (first_player === paper && second_player === scissors)
    {
        document.write("second player wins");
    }
}


</script>
