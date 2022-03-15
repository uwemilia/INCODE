function translate(dict, phrase)
{
    let phrase_arr = phrase.split(" ");
    let answer = [];

    for(i in phrase_arr)
    {
        // console.log(dict[phrase_arr[i]])
        if(JSON.stringify(dict).includes(phrase_arr[i]))
        {
            answer.push(dict[phrase_arr[i]]);
        }
        else
        {
            return "Error: missing value";
        }
    }

    return answer.join(' ');

}

console.log(translate({
    "je": "I",
    "suis": "am",
    "pere": "father",
    "ton": "your"}, "je suis ton pere")) // I am your father

console.log(translate({
    "the": "le",
    "cute": "mignon",
    "your": "ton",
    "dog": "chien",
    "is": "est"}, "the dog is cute")) // 'le chien est mignon'

console.log(translate({
    "the": "le",
    "cute": "mignon",
    "your": "ton",
    "dog": "chien",
    "is": "est"}, "the dog is fluffy")) // 'Error: missing value'