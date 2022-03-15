function removeDouble(arr)
{
    let support_dict = {};
    let index_arr = [];

    for(i = arr.length; i >= 0; i--)
    {
        if(!(arr[i] in support_dict))
        {
            support_dict[arr[i]] = 1;
        }
        else
        {
            support_dict[arr[i]] += 1;
            arr.splice(i, 1)
        }
    }
}

const stuff = ["suit", "clock", "butter", "suit"];
removeDouble(stuff)
console.log(stuff)
// [ 'clock', 'butter', 'suit' ] 
const mixed = ["hello", "hello", 23, -3, 23, "hello"]
removeDouble(mixed)
console.log(mixed)
// [ -3, 23, 'hello' ]  