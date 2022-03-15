function replaceArray(words_arr)
{
    for(i in words_arr)
    {
        if(words_arr[i][0].includes("h") || words_arr[i][0].includes("H"))
        {
            words_arr[i] = words_arr[i].toUpperCase()
        }
    }
    return words_arr
}

console.log(replaceArray(["banana", "suit", "hammer"]))  // [ 'banana', 'suit', 'HAMMER' ]
console.log(replaceArray(["Hello", "there"]))  // [ 'HELLO', 'there' ]
console.log(replaceArray(["Hey!", "hey..."]))  // [ 'HEY!', 'HEY...' ]