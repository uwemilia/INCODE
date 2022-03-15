function averageMinMax(arr)
{
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (i in arr)
    {
        sum += arr[i];

        if (arr[i] > max)
        {
            max = arr[i];
        }
        else if (arr[i] < min)
        {
            min = arr[i];
        }
        
    }
    
    let ans = "min: " + min + " max: " + max + " avg: " + sum/arr.length;
    return ans;
}

console.log(averageMinMax([-42, 0, 42]))    // Min: -42 Max: 42 Average: 0
console.log(averageMinMax([30, 20, 100]))  // Min: 20 Max: 100 Average: 50
console.log(averageMinMax([-23, -4, -12]))  // Min: -23 Max: -4 Average: -13