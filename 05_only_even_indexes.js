function evenIndexes(word)
{
    let ans = [];
    for(i in word)
    {
        if(i % 2 === 0)
        {
            ans.push(word[i])
        }
    }
    return ans;
}

console.log(evenIndexes("lol"))  // [ 'l', 'l' ]
console.log(evenIndexes( "You're weird"))  // [ 'Y', 'u', 'r', ' ', 'e', 'r' ]
console.log( evenIndexes("")) // [ ]