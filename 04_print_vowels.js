<script>

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


document.write(printVowels("hello world"));
// document.write(printVowels("kangaroo"));
// document.write(printVowels("cheeseburger"));


</script>
