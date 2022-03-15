function groupFamilies(obj_arr)
{
    
    let ans_arr = {};
    let key;
    
    for(i in obj_arr)
    {
        key = obj_arr[i]["surname"];
        if(!(obj_arr[i]["surname"] in ans_arr))
        {
            ans_arr[key] = [];
        }
        
        ans_arr[key].push(obj_arr[i]["name"]);        
        
    }
    console.log(ans_arr)
}


groupFamilies
(
    [
        {"name": "Barack",   "surname": "Obama"},
        {"name": "Michelle", "surname": "Obama"}
    ]
) // { Obama: [ 'Barack', 'Michelle' ] } 

groupFamilies
(
    [
        {"name": "Barack",   "surname": "Obama"},
        {"name": "Michelle", "surname": "Obama"},
        {"name": "Donald",   "surname": "Trump"}
    ]
)
// { Obama: [ 'Barack', 'Michelle' ], Trump: [ 'Donald' ] }