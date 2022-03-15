function sortWords(str_arr)
{
    let obj = {odd: [], even: []}
    

    for(i in str_arr)
    {
        if(str_arr[i].length % 2 === 0)
        {
            obj["even"].push(str_arr[i]);
        }
        else
        {
            obj["odd"].push(str_arr[i]);
        }
    }

    return obj;
}

console.log(sortWords(["work", "hard", "mommy"]));
console.log(sortWords(["oh!", "ah!", "hi", "my"]));