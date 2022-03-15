function abbrev(str)
{
    return str.slice(0,3) + " " + str.length;
}

console.log(abbrev("i am your father"));
console.log(abbrev("nice"));
console.log(abbrev("Supercalifragilisticexpialidocious"));