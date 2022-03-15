function pyramid(number)
{
    function is_odd(num)
    {
        if (num % 2 != 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    if(is_odd(number))
    {
        for(let i = 1; i <= number ; i = i+2)
        {
            let floor = ' '.repeat((number - i)/2);
            let block = '#'.repeat(i);
            console.log(floor + block)
        }
    }
    else
    {
        console.log("podaj liczbe nieparzysta")
    }
}

pyramid(11)