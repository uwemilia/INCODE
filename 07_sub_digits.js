function subDigits(number)
{
    if(number < 0)
    {
        return "Argument Error";
    }

    function to_number(str)
    {
        return Number(str);
    }

    let number_arr = Array.from(String(number), to_number);    

    for(let i = 0; i < number_arr.length; i++)
    {
        number = number - number_arr[i];
    }

    return number;
}

console.log(subDigits(451));
console.log(subDigits(1234));
console.log(subDigits(4));
console.log(subDigits(-51));