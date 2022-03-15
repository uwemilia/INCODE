function rmCensored(obj)
{
    for(i in obj)
    {
        if(String(i).includes("*") || String(obj[i]).includes("*"))
        {
            delete obj[i];
        }
    }
    return obj;
}
const swearWords = {"s*it": "m*rde", "sweet jesus": "doux jesus", "f***": "", "omg": "w*sh"};
const veggies = {"potato": "starch", "spin*ch": "green", "collard": "green", "tomato": "fr*it"}
console.log(rmCensored(swearWords));
console.log(rmCensored(veggies));