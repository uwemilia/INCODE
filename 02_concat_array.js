function concatArray(words_arr)
{
    return words_arr.join(" ") + "."
}

console.log(concatArray(["Hello", "this", "is", "dog"]))  // 'Hello this is dog.'
console.log(concatArray(["All", "I", "want", "for", "christmas", "is", "you"]))  // 'All I want for christmas is you.'
console.log(concatArray([]))  // '.'