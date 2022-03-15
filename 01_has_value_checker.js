function hasValue(obj, value)
{
    for(i in obj)
    {
        if(obj[i] === value)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}


console.log(hasValue({"hello": "bonjour", "my": "mon"}, "bonjour")) // true
console.log(hasValue({"hello": "bonjour", "my": "mon"}, "hello"))   // false
console.log(hasValue({"hello": "bonjour", "my": "mon"}, "tasty"))   // false
