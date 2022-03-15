function printVowels(str)
{
    const vowels_arr = ["a", "e", "i", "o", "u"];

    let new_vowels_arr = [];
    
    for (let i = 0; i < str.length; i++)
    {
        
        if(vowels_arr.includes(str[i]))
        {            
            new_vowels_arr.push(str[i]);
        }
    }
    return new_vowels_arr;
}


console.log(printVowels("hello world"));
console.log(printVowels("kangaroo"));
console.log(printVowels("cheeseburger"));